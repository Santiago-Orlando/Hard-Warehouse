import axios from "axios";

export const userLoginService = async ({ email, password }) => {
  const user = await axios({
    method: "POST",
    data: { email, password },
    withCredentials: true,
    url: "http://localhost:3001/users/login",
  });

  return user;
};

export const userRegisterService = async ({ fullName, email, password, admin }) => {
  const user = await axios({
    method: "POST",
    data: { fullName, email, password, admin },
    withCredentials: true,
    url: "http://localhost:3001/users/register",
  });

  return user;
};

export const userLogoutService = async () => {
  const log = await axios({
    method: "POST",
    withCredentials: true,
    url: "http://localhost:3001/users/logout",
  })
  
  return log
};

export const persistUserService = async () => {
  const user = await axios({
    method: "GET",
    withCredentials: true,
    url: "http://localhost:3001/users/me",
  });

  return user;
};
