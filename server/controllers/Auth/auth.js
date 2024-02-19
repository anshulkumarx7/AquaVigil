const jwt = require("jsonwebtoken")
const { getClient } = require("../../config/database")
const crypto = require("crypto")
const bcrypt = require("bcryptjs")
const { ObjectId } = require("mongodb")
const UserDb = "User"
const EmployeeDb = "Employee"
const { promisify } = require("util")
require("dotenv").config()
const signToken = (userId) => jwt.sign({ userId }, process.env.JWT_SECRET)

exports.register = async (req, res) => {
  try {
    const { name, email, password, location, phone } = req.body
    req.body.type = "user"
    if (!name || !email || !password || !location || !phone) {
      return res.status(400).json({
        success: false,
        message: "Please enter all the fields",
      })
    }

    req.body.password = await bcrypt.hash(req.body.password, 12)

    const client = getClient()
    const User = client.db().collection(UserDb)
    const exist_user = await User.findOne({ email: email })

    if (exist_user) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please login",
      })
    } else {
      const new_user = await User.insertOne(req.body)
      console.log(new_user)
      req.userId = new_user._id

      return res.status(200).json({
        success: true,
        message: "User registered successfully",
      })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    })
  }
}

exports.employeeRegister = async (req, res) => {
  try {
    const { name, email, location, phone, bossId } = req.body
    req.body.type = "employee"

    if (!name || !email || !location || !phone || !bossId) {
      return res.status(400).json({
        success: false,
        message: "Please enter all the fields",
      })
    }

    const client = getClient()
    const Employee = client.db().collection(EmployeeDb)
    const exist_employee = await Employee.findOne({ email: email })

    if (exist_employee) {
      return res.status(400).json({
        success: false,
        message: "Employee already exists",
      })
    }

    const new_employee = await Employee.insertOne(req.body)

    if (new_employee) {
      return res.status(200).json({
        success: true,
        message: "Employee registered successfully",
      })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    })
  }
}

exports.login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please enter all the fields",
    })
  }

  client = getClient()
  const User = client.db().collection(UserDb)
  const user = await User.findOne({ email: email })

  if (!user) {
    return res.status(400).json({
      success: false,
      message: "User does not exist. Please register",
    })
  }

  const token = signToken(user._id)
  return res.status(200).json({
    success: true,
    message: "User logged in successfully",
    token,
    user_id: user._id,
    type: user.type,
  })
}

exports.protect = async (req, res, next) => {
  const { authorization } = req.headers
  const token = null
  if (authorization && authorization.startsWith("Bearer"))
    token = authorization.split(" ")[1]
  else token = req.cookies.jwt

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "You are not logged in. Please login to continue",
    })
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)

  const client = getClient()
  const User = client.db().collection(UserDb)

  const user = await User.findOne({ _id: ObjectId(decoded.userId) })

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "User does not exist. Please register",
    })
  }

  req.userId = user._id
  next()
}