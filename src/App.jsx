import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainter from './components/ItemListContainter'

function App() {
  return (
  <>
  <NavBar/> 
  <ItemListContainter string="Soy el ItemListContainter"/> 
  </>
  )
}

export default App
