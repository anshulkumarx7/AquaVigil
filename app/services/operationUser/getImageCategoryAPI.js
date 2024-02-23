import { apiConnector } from "../apiConnector"
import { userEndpoints } from "../api"

const { PREDICT_CATEGORY_API } = userEndpoints

export const getCategory = async (data) => {
  try {
    const result = await apiConnector("POST", PREDICT_CATEGORY_API, {url: data})

    console.log("Image Category Response: ", result)
    if (result?.data?.statusText !== "OK") throw new Error("Server Error")

    return {
      result: result.data.predictions,
      success: true,
    }
  } catch (error) {
    return {
      result: error.message,
      success: false,
    }
  }
}
