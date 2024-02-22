import { apiConnector } from "../apiConnector"
import { operationUserEndpoints } from "../api"
import { toast } from "react-hot-toast"

const { GET_ALL_COMPLAINTS_API, GET_ALL_COMPLAINTS_BY_ID_API } =
  operationUserEndpoints

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

// export const getAllComplaintsById = async (token) => {
//   try {
//     const response = await apiConnector(
//       "GET",
//       GET_ALL_COMPLAINTS_BY_ID_API,
//       null,
//       {
//         authorization: "Bearer " + token,
//       }
//     )

//     console.log("Get all complaints by id response: ", response)

//     if (!response?.data?.success)
//       throw new Error("Get all complaints by id error")
//   } catch (error) {
//     return {
//       result: error.message,
//       success: false,
//     }
//   }
// }
