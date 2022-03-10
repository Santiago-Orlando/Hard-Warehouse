import React from "react";
import useInput from "../hooks/useInput";
import axios from "axios";
import { useNavigate } from "react-router";

const Registro = () => {
  const navigate = useNavigate();
  const nombre = useInput();
  const apellido = useInput();
  const email = useInput();
  const password = useInput();

  const handleSubmit = (event) => {
    event.preventDefault();
    /* axios
      .post("./api/register", { nombre:nombre.value, apellido: apellido.value, email: email.value, password: password.value })
      .then((res) => res.data)
      .then((newUser) => {
        alert("Registro exitoso");
        navigate("/login");
        console.log(newUser);
      }); */
  };

  return (
    <div className="loginContainer">
      <h2>Registrarme</h2>
      <form className="logForm" onSubmit={handleSubmit}>
        <input
          className="logInputs"
          {...nombre}
          type="text"
          placeholder="Ingresá tu nombre"
        />
        <input
          className="logInputs"
          {...apellido}
          type="text"
          placeholder="Ingresá tu apellido"
        />
        <input
          className="logInputs"
          {...email}
          type="text"
          placeholder="Ingresá un email"
        />
        <input
          className="logInputs"
          {...password}
          type="password"
          placeholder="Definí una contraseña"
        />
        <button className="logBtn" type="submit">
          REGISTRARME
        </button>
      </form>
    </div>
  );
};

export default Registro;
