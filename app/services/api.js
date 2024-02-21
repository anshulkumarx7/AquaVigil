const BASE_URL = "http://localhost:4000/api/v1/user"
const AUTH_URL = "http://localhost:4000/api/v1/auth"

export const authEndpoints = {
  LOGIN_API: AUTH_URL + "/login",
  REGISTER_API: AUTH_URL + "/register",
}
export const userEndpoints = {
  IMAGE_UPLOAD_API: BASE_URL + "/imageUpload",
}
