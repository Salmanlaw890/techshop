import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import Contact from './Contact'

export default function Rout({ shopGo, Filter, FilterAll, addCart, cart, setCart }) {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home addCart={addCart} />} />
                <Route path='/shop' element={<Shop addCart={addCart} shopGo={shopGo} Filter={Filter} FilterAll={FilterAll} />} />
                <Route path='/cart' element={<Cart setCart={setCart} cart={cart} />} ></Route>
                <Route path='/contact' element={<Contact />} ></Route>
            </Routes>
        </>
    )
}
