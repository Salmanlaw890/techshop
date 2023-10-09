import React from 'react'
import './footer.css';
import { FaPiggyBank, FaShippingFast, FaHeadphones, FaWallet } from 'react-icons/fa';

export default function footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="left-box">
                        {/* New Box  */}
                        <div className="box">
                            <div className="icon-box">
                                <FaPiggyBank />
                            </div>
                            <div className="details">
                                <h3>Great Savings</h3>
                                <p>Lorem ipsum dolor sit ahmad.</p>
                            </div>
                        </div>
                        {/* New Box  */}
                        <div className="box">
                            <div className="icon-box">
                                <FaShippingFast />
                            </div>
                            <div className="details">
                                <h3>Free Delivery</h3>
                                <p>Lorem ipsum dolor sit ahmad.</p>
                            </div>
                        </div>
                        {/* New Box  */}
                        <div className="box">
                            <div className="icon-box">
                                <FaHeadphones />
                            </div>
                            <div className="details">
                                <h3>24 / 7 Available</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        {/* New Box  */}
                        <div className="box">
                            <div className="icon-box">
                                <FaWallet />
                            </div>
                            <div className="details">
                                <h3>Money Back</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="right-box">
                        <div className="header">
                            <img src="./image/logo.webp" alt="logo" />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint inventore animi provident quam alias quidem totam.</p>
                        </div>
                        <div className="button">
                            <div className="box">
                                <h3>Your Account</h3>
                                <ul>
                                    <li>About Us</li>
                                    <li>Account</li>
                                    <li>Payment</li>
                                    <li>Sales</li>
                                </ul>
                            </div>
                            <div className="box">
                                <h3>Product</h3>
                                <ul>
                                    <li>Delivery</li>
                                    <li>Track Order </li>
                                    <li>New Product</li>
                                    <li>Old Product</li>
                                </ul>
                            </div>
                            <div className="box">
                                <h3>Contact</h3>
                                <ul>
                                    <li>KPK SWABI KSK</li>
                                    <li>+92 313 1313131</li>
                                    <li>dummyaccount@gmail.com</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
