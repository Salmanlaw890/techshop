import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import { BrowserRouter } from 'react-router-dom'
import Rout from './components/rout'
import homeProducts from './components/home_products'
import { useState } from 'react'



export default function App() {
  const [shop, setShop] = useState(homeProducts);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  // Filter functions
  const Filter = (x) => {
    const FilterCategory = homeProducts.filter((product) => {
      return product.cat === x;
    })
    setShop(FilterCategory)
  };
  //filter all
  const FilterAll = () => {
    setShop(homeProducts)
  };
  //search function
  const searchProduct = () => {
    if (search === "") {
      alert("Please Write Something !")
      setShop(homeProducts)
    } else {
      const filterSearch = homeProducts.filter((x) => {
        return x.cat === search
      })
      setShop(filterSearch);
    }
  }
  //cart Function
  const addCart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    })
    if (exist) {
      alert("product is already added to the cart")
    } else {
      setCart([...cart, { ...product, qty: 1 }])
      alert('added to cart')
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar search={search} setSearch={setSearch} searchProduct={searchProduct} />
        <Rout shopGo={shop} Filter={Filter} FilterAll={FilterAll} addCart={addCart} setCart={setCart} cart={cart} />
        <Footer />
      </BrowserRouter>

    </>
  )
}
