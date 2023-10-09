
import './shop.css';
import { AiFillEye, AiFillHeart } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

export default function Shop({ shopGo, Filter, FilterAll, addCart }) {
    const [showDetail, setShowDetail] = useState(false);
    const [detailsData, setDetailsData] = useState([])
    //showdetails function
    const detailsPage = (product) => {
        const Data = ([{ product }])
        const productDetails = Data[0]['product'];
        setDetailsData(productDetails)
        setShowDetail(true)
    }
    //closedetails function
    const closeDetails = () => {
        setShowDetail(false)
    }
    return (
        <>
            {
                showDetail ?
                    <>
                        <div className="product-details">
                            <button className='close-btn' onClick={closeDetails}><AiOutlineClose /></button>
                            <div className="container">
                                <div className="img-box">
                                    <img src={detailsData.img} alt="img" />
                                </div>
                                <div className="info">
                                    <h4># {detailsData.cat}</h4>
                                    <h2>{detailsData.Name}</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolor necessitatibus aliquid minima, assumenda ratione?</p>
                                    <h3>${detailsData.Price}</h3>
                                    <button onClick={() => addCart(detailsData)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </>
                    : null
            }
            <div className='shop'>
                <h2># Shop</h2>
                <p>Home / Shop</p>
                <div className="container">
                    <div className="left-box">
                        <div className="category">
                            <div className="header">
                                <h2>All Category</h2>
                            </div>
                            <div className="box">
                                <ul>
                                    <li onClick={() => FilterAll()}># All Products</li>
                                    <li onClick={() => Filter('tv')}># tv</li>
                                    <li onClick={() => Filter('laptop')}># laptop</li>
                                    <li onClick={() => Filter('phone')}># phone</li>
                                    <li onClick={() => Filter('speaker')}># speaker</li>
                                    <li onClick={() => Filter('headphone')}># headphone</li>
                                    <li onClick={() => Filter('electronic')}># electronics</li>
                                </ul>
                            </div>
                        </div>
                        <div className="banner">
                            <div className="img-box">
                                <img src="./image/shop_left.avif" alt="shop" />
                            </div>
                        </div>
                    </div>
                    <div className="right-box">
                        <div className="banner">
                            <div className="img-box">
                                <img src="./image/shop_top.webp" alt="shop" />
                            </div>
                        </div>
                        <div className="product-box">
                            <h2>Shop Product</h2>
                            <div className="product-container">
                                {
                                    !shopGo ? <p>shop is null</p> :
                                        shopGo.map((element) => {
                                            return <>
                                                <div className="box">
                                                    <div className="img-box">
                                                        <img src={element.img} alt='img'></img>
                                                        <div className="icon">
                                                            <li onClick={() => detailsPage(element)}><AiFillEye /></li>
                                                            <li> <AiFillHeart /></li>
                                                        </div>
                                                    </div>
                                                    <div className="details">
                                                        <h3>{element.Name}</h3>
                                                        <p>${element.Price}</p>
                                                        <button onClick={() => addCart(element)}>Add to Cart</button>
                                                    </div>
                                                </div>
                                            </>
                                        })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
