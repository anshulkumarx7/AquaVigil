import { apiConnector } from "../apiConnector"
import { operationAdminEndpoints } from "../api"
import { toast } from "react-hot-toast"
const { GET_ALL_COMPLAINTS_API } = operationAdminEndpoints

export const getAllcomplaints = async () => {
  const toastId = toast.loading("Get all complaints...")
  try {
    const result = await apiConnector("GET", GET_ALL_COMPLAINTS_API)
    console.log("Complaints Response: ", result)

    if (!result?.data?.success) throw new Error("Server Error")
    toast.success("Got all complaints")
    toast.dismiss(toastId)

    return {
      result: result.data.message,
      success: true,
    }
  } catch (error) {
    toast.dismiss(toastId)
    toast.error("Get all complaints api error")
    return {
      result: error.message,
      success: false,
    }
  }
}
