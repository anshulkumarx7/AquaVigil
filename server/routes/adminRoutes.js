const express = require("express")
const router = express.Router()

const { protect } = require("../controllers/Auth/auth")
const { getAllEmployees } = require("../controllers/Admin/getAllEmployees")
const { getAllComplaints } = require("../controllers/Complaints/getAllComplaint")

router.get("/getAllEmployees", protect, getAllEmployees)
router.get("/getAllComplaints", protect, getAllComplaints)

module.exports = router
