import { useState } from 'react'
import Navbar from './components/Navbar'
import ProductContainer from './components/ProductContainer'
import Product from './components/Product'
// import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <ProductContainer />
      <Product />
    </>
  )
}

export default App
