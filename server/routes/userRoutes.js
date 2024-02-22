const express = require("express")
const router = express.Router()

const { createComplaint } = require("../controllers/Complaints/createComplaint")
const {
  getAllComplaintsById,
  getAllComplaintsByLocation,
  getAllComplaints
} = require("../controllers/Complaints/getAllComplaint")
const { protect } = require("../controllers/Auth/auth")
const { imageUpload } = require("../controllers/fileUpload")

router.post("/createComplaint", protect, createComplaint)
router.get("/getAllComplaintsById", protect, getAllComplaintsById)
router.get("/getAllComplaintsByLocation", protect, getAllComplaintsByLocation)
router.get("/getAllComplaints", protect, getAllComplaints)
router.post("/imageUpload", imageUpload)

module.exports = router
