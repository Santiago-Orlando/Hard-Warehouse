import axios from "axios";

export const userLoginService = async ({ email, password }) => {
  const user = await axios({
    method: "POST",
    data: { email, password  },
    withCredentials: true,
    url: "http://localhost:3001/users/login",
  });

  return user;

  //return axios.post("/users/login", {email, password})
  //  .then(res => res.data)
};

export const userLogoutService = () => {
  return axios.post("/api/user/logout").then((res) => res.data);
};

// export const persistUserService = () => {
//   return axios.post("/api/user/logout")
//   .then(res => res.data)
// }

/* const user = await axios ({
    method: 'POST',
    data: {email: email.value, password: password.value},
    withCredentials: true,
    url: 'http://localhost:3001/users/login'
  }) */
