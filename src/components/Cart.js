import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai';

export default function Cart({ cart, setCart }) {
    //increase qty
    const incrqty = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((element) => {
            return element.id === product.id ? { ...exist, qty: exist.qty + 1 } : element;
        }))
    }
    //decrease qty
    const decrqty = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((element) => {
            return element.id === product.id ? { ...exist, qty: exist.qty - 1 } : element;
        }))
    }
    //remove product
    const removeProduct = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        if (exist.qty > 0) {
            setCart(cart.filter((element) => {
                return element.id !== product.id;
            }))
        }
    }
    //Total function
    const total = cart.reduce((price, item) => price + item.qty * item.Price, 0)
    return (
        <>
            <div className="cart">
                <h3>#Cart</h3>
                {
                    cart.length === 0 &&
                    <>
                        <div className="empty-cart">
                            <h2>Your Shopping cart is empty</h2>
                            <Link to={'/Shop'} ><button>Shop Now</button></Link>
                        </div>
                    </>
                }
                <div className="container">
                    {
                        cart.map((element) => {
                            return (
                                <>
                                    <div className="box">
                                        <div className="img-box">
                                            <img src={element.img} alt="img" />
                                        </div>
                                        <div className="details">
                                            <div className="info">
                                                <h4>{element.cat}</h4>
                                                <h3>{element.Name}</h3>
                                                <p>Price :${element.Price}</p>
                                                <p>Total :${element.Price * element.qty}</p>
                                            </div>
                                            <div className="quantity">
                                                <button onClick={() => incrqty(element)}>+</button>
                                                <input type="number" value={element.qty} />
                                                <button onClick={() => decrqty(element)}>-</button>
                                            </div>
                                            <div className="icon">
                                                <li onClick={() => removeProduct(element)}><AiOutlineClose /></li>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="bottom">
                    {
                        cart.length > 0 &&
                        <>
                            <div className="Total">
                                <h4>Sub Total :${total}</h4>
                            </div>
                            <button>checkout</button>
                        </>
                    }

                </div>
            </div>
        </>
    )
}
