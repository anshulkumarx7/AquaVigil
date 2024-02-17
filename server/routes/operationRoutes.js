const express = require("express")
const router = express.Router()

const { createComplaint } = require("../controllers/Complaints/createComplaint")
const {
  getAllComplaintsById,
  getAllComplaintsByLocation,
} = require("../controllers/Complaints/getAllComplaint")
const { protect } = require("../controllers/Auth/auth")

router.post("/createComplaint", protect, createComplaint)
router.get("/getAllComplaintsById", protect, getAllComplaintsById)
router.get("/getAllComplaintsByLocation", protect, getAllComplaintsByLocation)

module.exports = router
