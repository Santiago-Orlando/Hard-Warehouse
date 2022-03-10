import { Routes, Route } from "react-router";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Registro from './components/Registro'
import Home from "./components/Home"

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>

        <Route path='/login' element={<Login />}/>
        <Route path='/registro' element={<Registro />}/>
        <Route path="/" element={<Hero />} />
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={"Productos"} />
        <Route path="/componentes" element={"Componentes"} />
        <Route path="/equipos_armados" element={"Equipos armados"} />
        <Route path="/notebooks" element={"notebooks"} />
        <Route path="/monitores" element={"Monitores"} />
        <Route path="/perifericos" element={"Perifericos"} />
        <Route path="/producto" element={<Product />} />
      </Routes>

      <h1> Proyecto E-Commerce</h1>
    </div>
  )
}

export default App
