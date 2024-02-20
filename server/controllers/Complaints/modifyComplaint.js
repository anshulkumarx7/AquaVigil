const database = "Complaints"
const { getClient } = require("../../config/database")
const { ObjectId } = require("mongodb")
exports.modifyComplaint = async (req, res) => {
  try {
    const { complaintId, status, employeeId } = req.body
    if (!complaintId || !status) {
      return res.status(400).json({
        success: false,
        message: "Complaint Id and status is required",
      })
    }
    const client = getClient()
    const complaints = client.db().collection(database)
    const result = await complaints.updateOne(
      { _id: ObjectId(complaintId) },
      { $set: { status: status } },
      { $set: { employeeId: ObjectId(employeeId) } }
    )
    res.status(200).json({
      success: true,
      message: "Complaint updated successfully",
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    })
  }
}
