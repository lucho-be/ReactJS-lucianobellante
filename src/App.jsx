
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import { Routes, Route } from 'react-router'
import Productos from './components/Productos'

function App() {
  return (
  <>
  <NavBar/> 
  <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productos" element={<Productos/>} />
        <Route path='/categorias' element={<h1>Categorias</h1>} />
      </Routes>
  <Footer/>
  </>
  )
}

export default App
