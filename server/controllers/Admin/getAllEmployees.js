const { getClient } = require("../../config/database")
const EmployeeDb = "Employee"

exports.getAllEmployees = async (req, res) => {
  try {
    const client = getClient()
    const Employee = client.db().collection(EmployeeDb)
    const bossId = req.userId
    const result = await Employee.find({ bossId: bossId }).toArray()

    res.status(200).json({
      success: true,
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    })
  }
}
