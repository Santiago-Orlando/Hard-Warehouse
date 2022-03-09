import axios from "axios"

export const userLoginService = (val) => {
    return axios.post("/api/user/login", { email: val.email, password: val.password })
    .then(res => res.data)
  }

  export const userLogoutService = () => {
    return axios.post("/api/user/logout")
    .then(res => res.data)
  }

  // export const persistUserService = () => {
  //   return axios.post("/api/user/logout")
  //   .then(res => res.data)
  // }