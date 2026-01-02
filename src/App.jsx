
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import { Routes, Route } from 'react-router'
import Productos from './components/Productos'
import ProductoDetalle from './components/ProductoDetalle'
import CartProvider from "./components/CartPage";
import { CartPage } from "./components/CartPage";

function App() {
  return (
  <>
   <CartProvider>
  <NavBar/>
  <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productos" element={<Productos/>} />
        <Route path="/categorias"/>
        <Route path="/producto/:id" element={<ProductoDetalle/>} />
        <Route path="/carrito" element={<CartPage/>} />
      </Routes>
      </CartProvider>
  <Footer/>
  </>
  ) 
} 

export default App
