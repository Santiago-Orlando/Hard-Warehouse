import { Routes, Route } from "react-router"
import { useEffect } from "react"
import Product from "./components/Product"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Registro from "./components/Registro"
import Home from "./components/Home"
import AllProducts from "./components/AllProducts";
import  ShoppingCart  from "./components/ShoppingCart"
import { persistUser } from "./store/user";
import { useDispatch } from "react-redux";
import Admin from "./components/Admin"
import Checkout from "./components/Checkout"
import Footer from "./components/Footer"


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<AllProducts/>} />
        <Route path="/productos/:category" element={<AllProducts/>} />
        <Route path="/perifericos" element={"Perifericos"} />
        <Route path="/producto/:id" element={<Product />} />
        <Route path="/carrito" element={<ShoppingCart />} />
        <Route path="/carrito/checkout" element={<Checkout />} />

        <Route path="/search" element={<AllProducts/>} />

        
        <Route path="/admin/administrador" element={<Admin />} />

      </Routes>
      <Footer />

      
    </div>
  )
}

export default App
