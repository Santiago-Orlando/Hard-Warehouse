import { Routes, Route } from "react-router"
import Product from "./components/Product"
import Navbar from "./components/Navbar"
import Home from "./components/Home"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
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
