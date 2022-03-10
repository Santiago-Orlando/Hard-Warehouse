import React, {useContext} from "react";
import useInput from "../hooks/useInput";
import axios from "axios";
import { useNavigate } from "react-router";


const Login = () => {
  const navigate = useNavigate();
  const email = useInput();
  const password = useInput();

  /* const user = useContext(UserContext) */
 
  const handleSubmit = (event) => {
    event.preventDefault();
  /*   axios
      .post("./api/login", { email: email.value, password: password.value })
      .then((res) => res.data)
      .then((newUser) => {
        user.setUser(newUser)
        console.log(user.user)
        alert("Logeo Exitoso");
        navigate("/");
       
      }); */
  };

  return (
    <div className="loginContainer">
      <h2>Iniciar sesión</h2>
      <form className="logForm" onSubmit={handleSubmit}>
        <input className="logInputs" {...email} type="text" placeholder="Igresá tu email" />
        <input className="logInputs" {...password} type="password" placeholder="Ingresá tu contraseña" />
        <button className="logBtn" type="submit">LOGIN</button>
        <div></div>
        <button className="logBtnGoogle">Google LOGIN</button>
        <button className="logBtnGit">GitHub LOGIN</button>
      </form>
    </div>
  );
};

export default Login;