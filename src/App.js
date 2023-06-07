import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Navbar } from './Pages/Navbar'
import { Shop } from './Pages/shop/shop'
import { Cart } from './Pages/cart/cart'
import { ShopContextProvider } from './context/shop-context'
function App() {
  return (
    <div className="App">
    <ShopContextProvider>
    <Router>
    <Navbar/>
     <div className="container">
    <Routes>
    <Route path='/' element={<Shop/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    </div>
    </Router>
    </ShopContextProvider>
    </div>
  )
}

export default App