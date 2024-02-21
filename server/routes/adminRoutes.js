const express = require("express")
const router = express.Router()

const { protect } = require("../controllers/Auth/auth")
const { getAllEmployees } = require("../controllers/Admin/getAllEmployees")

router.get("/getAllEmployees", protect, getAllEmployees)

module.exports = router
