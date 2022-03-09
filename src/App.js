import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'


import './App.css';


function App() {
  return (
    <div >
      <Navbar />
      <Routes>
      <Route path='/' element={'HOME'} />
        <Route path='/productos' element={'Productos'} />
        <Route path='/componentes' element={'Componentes'} />
        <Route path='/equipos_armados' element={'Equipos armados'} />
        <Route path='/notebooks' element={'notebooks'} />
        <Route path='/monitores' element={'Monitores'} />
        <Route path='/perifericos' element={'Perifericos'} />

      </Routes>

      <h1> Proyecto E-Commerce</h1>
    </div>
  );
}

export default App;
