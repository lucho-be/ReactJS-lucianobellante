
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import { Routes, Route } from 'react-router'
import Productos from './components/Productos'
import ProductoDetalle from './components/ProductoDetalle'

function App() {
  return (
  <>
  <NavBar/> 
  <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productos" element={<Productos/>} />
        <Route path='/categorias' element={<ProductoDetalle/>} />
      </Routes>
  <Footer/>
  </>
  )
}

export default App
