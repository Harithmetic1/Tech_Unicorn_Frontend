import React from 'react'

// Image imports
import phoneLogo from '../../Assets/images/Phone.svg'
import navLogo from '../../Assets/images/navLogo.png'
import heart from '../../Assets/images/Heart.svg'
import cart from '../../Assets/images/cart.svg'
import profile from '../../Assets/images/profile.svg'

// Style import
import './navbar.scss'

export const Navbar: React.FC = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar-top'>
                <div className='nav-contact'>
                    <img src={phoneLogo} alt="phone svg" />
                    <a href="tel: +022 319 821 967">+022 319 821 967</a>
                </div>
                <div className="nav-logo">
                    <img src={navLogo} alt="navbar logo" />
                </div>
                <div className="social-links">
                    <div className="link">
                        <a href="#">
                            Fb
                        </a>
                    </div>
                    <div className="link">
                        <a href="#">
                            Tw
                        </a>
                    </div>
                    <div className="link">
                        <a href="#">
                            Lg
                        </a>
                    </div>
                    <div className="link">
                        <a href="#">
                            Yt
                        </a>
                    </div>
                </div>
            </div>
            <div className="navbar-bottom">
                <div className="nav-links">
                    <ul>
                        <li className='active'><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div className="nav-help-btns">
                    <div className="heart">
                        <img src={heart} alt="Heart" />
                    </div>
                    <div className="cart-logo">
                        <img src={cart} alt="cart" />
                    </div>
                    <div className="profile">
                        <img src={profile} alt="profile" />
                    </div>
                </div>
            </div>
        </div>
    );
}