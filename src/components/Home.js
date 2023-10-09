import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import HomeProducts from './home_products';
import { useState, useEffect } from 'react';

import { AiFillEye, AiFillHeart, } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiLogoFacebookCircle, BiLogoTwitter, BiLogoInstagramAlt, BiLogoYoutube } from 'react-icons/bi';


export default function Home({ addCart }) {
    const [trendingProduct, setTrendingProduct] = useState(HomeProducts);
    const [newProduct, setNewProduct] = useState([]);
    const [featureProduct, setFeaturedProduct] = useState([]);
    const [topProduct, setTopProduct] = useState([]);
    //filter trending products
    const filterCate = (x) => {
        const filterProduct = HomeProducts.filter((element) => {
            return element.type === x;
        })
        setTrendingProduct(filterProduct)
    };
    //all trending products
    const allProducts = () => {
        setTrendingProduct(HomeProducts);
    };
    //product type
    useEffect(() => {
        productCategory();
    }, []);
    const productCategory = () => {
        //new category
        const newCategory = HomeProducts.filter((x) => {
            return x.type === 'new'
        })
        setNewProduct(newCategory);

        //feature category
        const featureCategory = HomeProducts.filter((x) => {
            return x.type === 'featured';
        })
        setFeaturedProduct(featureCategory);

        //top category
        const topCategory = HomeProducts.filter((x) => {
            return x.type === 'top'
        })
        setTopProduct(topCategory);
    };
    return (
        <>
            <div className="home">
                <div className="top-banner">
                    <div className="content">
                        <h3>Sliver Aluminum</h3>
                        <h2>Apple Watch</h2>
                        <p>30% of at your first order</p>
                        <Link to='/shop' className='link'>Shop Now</Link>
                    </div>
                </div>
                <div className="trending">
                    <div className="container">
                        <div className="left-box">
                            <div className="header">
                                <div className="heading">
                                    <h2 onClick={allProducts}>Trending Products</h2>
                                </div>
                                <div className="cate">
                                    <h3 onClick={() => filterCate("new")} >New</h3>
                                    <h3 onClick={() => filterCate("featured")} >Featured</h3>
                                    <h3 onClick={() => filterCate("top")} >Top Selling</h3>
                                </div>
                            </div>
                            <div className="products">
                                <div className="container">
                                    {
                                        trendingProduct.map((element) => {
                                            return (
                                                <>
                                                    <div className="box">
                                                        <div className="img-box">
                                                            <img src={element.img} alt='img'></img>
                                                            <div className="icon">
                                                                <div className="icon-box">
                                                                    <AiFillEye />
                                                                </div>
                                                                <div className="icon-box">
                                                                    <AiFillHeart />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="info">
                                                            <h3>{element.Name}</h3>
                                                            <p>${element.Price}</p>
                                                            <button onClick={() => addCart(element)} className="btn">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                <button>Show More...</button>
                            </div>
                        </div>
                        <div className="right-box">
                            <div className="container">
                                <div className="testimonial">
                                    <div className="head">
                                        <h3>Our Testimonial</h3>
                                    </div>
                                    <div className="details">
                                        <div className="img-box">
                                            <img src='./image/T1.avif' alt='testimonial' />
                                        </div>
                                        <div className="info">
                                            <h3>Stephan Robot</h3>
                                            <h4>Web Designer</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus recusandae nesciunt ullam, est exercitationem ipsum.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="news-letter">
                                    <div className="head">
                                        <h3>NewsLetter</h3>
                                    </div>
                                    <div className="form">
                                        <p>Join Our Mailing List</p>
                                        <input type='email' placeholder='email' />
                                        <button>Subscribe</button>
                                        <div className="icon-box">
                                            <div className="icon">
                                                <BiLogoFacebookCircle />
                                            </div>
                                            <div className="icon">
                                                <BiLogoTwitter />
                                            </div>
                                            <div className="icon">
                                                <BiLogoInstagramAlt />
                                            </div>
                                            <div className="icon">
                                                <BiLogoYoutube />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner">
                    <div className="container">
                        <div className="left-box">
                            <div className="box">
                                <img src='./image/Multi-Banner-1.avif' alt='banner'></img>
                            </div>
                            <div className="box">
                                <img src='./image/Multi-Banner-2.avif' alt='banner'></img>
                            </div>
                        </div>
                        <div className="right-box">
                            <div className="top">
                                <img src='./image/Multi-Banner-3.webp' alt='banner'></img>
                                <img src='./image/Multi-Banner-4.avif' alt='banner'></img>
                            </div>
                            <div className="bottom">
                                <img src='./image/Multi-Banner-5.webp' alt='banner'></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-type">
                    <div className="container">
                        {/* new category */}
                        <div className="box">
                            <div className="header">
                                <h2>New Product</h2>
                            </div>
                            {
                                newProduct.map((element) => {
                                    return <>
                                        <div className="product-box">
                                            <div className="img-box">
                                                <img src={element.img} alt='img'></img>
                                            </div>
                                            <div className="details">
                                                <h3>{element.Name}</h3>
                                                <p>{element.Price}</p>
                                                <div className="icon">
                                                    <button><AiFillEye /></button>
                                                    <button><AiFillHeart /></button>
                                                    <button onClick={() => addCart(element)}><AiOutlineShoppingCart /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                })
                            }
                        </div>

                        {/* featured category */}
                        <div className="box">
                            <div className="header">
                                <h2>Featured Product</h2>
                            </div>
                            {
                                featureProduct.map((element) => {
                                    return <>
                                        <div className="product-box">
                                            <div className="img-box">
                                                <img src={element.img} alt='img'></img>
                                            </div>
                                            <div className="details">
                                                <h3>{element.Name}</h3>
                                                <p>{element.Price}</p>
                                                <div className="icon">
                                                    <button><AiFillEye /></button>
                                                    <button><AiFillHeart /></button>
                                                    <button onClick={() => addCart(element)}><AiOutlineShoppingCart /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                })
                            }
                        </div>

                        {/* top category */}
                        <div className="box">
                            <div className="header">
                                <h2>Top Product</h2>
                            </div>
                            {
                                topProduct.map((element) => {
                                    return <>
                                        <div className="product-box">
                                            <div className="img-box">
                                                <img src={element.img} alt='img'></img>
                                            </div>
                                            <div className="details">
                                                <h3>{element.Name}</h3>
                                                <p>${element.Price}</p>
                                                <div className="icon">
                                                    <button><AiFillEye /></button>
                                                    <button><AiFillHeart /></button>
                                                    <button onClick={() => addCart(element)}><AiOutlineShoppingCart /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
