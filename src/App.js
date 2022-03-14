import { Routes, Route } from "react-router";
import { useEffect } from "react";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Registro from './components/Registro'
import Home from "./components/Home"
import AllProducts from "./components/AllProducts";
import  ShoppingCart  from "./components/ShoppingCart"
import { persistUser } from "./store/user";
import { useDispatch } from "react-redux";

import "./App.css";

function App() {


  /* const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(persistUser())
    
  }, [])
 */

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/registro' element={<Registro />}/>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<AllProducts/>} />
        <Route path="/productos/:category" element={<AllProducts/>} />
        <Route path="/equipos_armados" element={"Equipos armados"} />
        <Route path="/notebooks" element={"notebooks"} />
        <Route path="/monitores" element={"Monitores"} />
        <Route path="/perifericos" element={"Perifericos"} />
        <Route path="/producto/:id" element={<Product />} />
        <Route path="/carrito" element={<ShoppingCart />} />

      </Routes>

      <h1></h1>
    </div>
  )
}

export default App
