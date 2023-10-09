import React from 'react'
import './Navbar.css'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

import { MdLocalShipping } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiLogIn } from 'react-icons/fi'
import { CiLogout, CiUser } from 'react-icons/ci'






export default function Navbar({ search, setSearch, searchProduct }) {
    const { loginWithRedirect, logout, user, isAuthenticated, } = useAuth0();

    return (
        <>
            <div className="header">
                <div className="top-header">
                    <div className="icon">
                        <MdLocalShipping />
                    </div>
                    <div className="info">
                        <p>Free Shipping When Shopping Upto $1000</p>
                    </div>
                </div>
                <div className="mid-header">
                    <div className="logo">
                        <img src="./image/logo.webp" alt="logo" />
                    </div>
                    <div className="search-box">
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='search' />
                        <button onClick={searchProduct} ><AiOutlineSearch /></button>
                    </div>

                    {
                        isAuthenticated ?
                            //Show logout if user is authentic i.e login
                            <div className="user">
                                <div className="icon">
                                    <CiLogout />
                                </div>
                                <div className="btn">
                                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LogOut</button>
                                </div>
                            </div>
                            :
                            //Show login if user is not login or not authentic  
                            <div className="user">
                                <div className="icon">
                                    <FiLogIn />
                                </div>
                                <div className="btn">
                                    <button onClick={() => loginWithRedirect()}>LogIn</button>
                                </div>
                            </div>
                    }
                </div>
                <div className="last-header">
                    <div className="user-profile">
                        {
                            isAuthenticated ?
                                <>
                                    <div className="icon">
                                        <CiUser />
                                    </div>
                                    <div className="info">
                                        <h2>{user.name = 'Ronaldo'}</h2>
                                        <p>{user.email}</p>
                                    </div>

                                </> :
                                <>
                                    <div className="icon">
                                        <CiUser />
                                    </div>
                                    <div className="info">
                                        <p className='p-login'>Please LogIn</p>
                                    </div>
                                </>
                        }
                    </div>
                    <div className="nav">
                        <nav>
                            <ul>
                                <li> <Link to='/' className='link'>Home</Link> </li>
                                <li> <Link to='/shop' className='link'>Shop</Link> </li>
                                <li> <Link to='/cart' className='link'>Cart</Link> </li>
                                <li> <Link to='/contact' className='link'>Contact</Link> </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="offer">
                        <p>Flat 10% over all iPhone</p>
                    </div>
                </div>
            </div>
        </>
    )
}
