import React from 'react'

import './footer.scss';

import footerLogo from '../../Assets/images/footerLogo.svg'
import locationOn from '../../Assets/images/location_on.svg'
import email from '../../Assets/images/email.svg';
import call from '../../Assets/images/call.svg';

interface FooterProps {

}

export const Footer: React.FC<FooterProps> = ({ }) => {
    return (
        <>
            <div className="footer-container">
                <div className="footer">
                    <div className="rhs">
                        <div className="logo">
                            <img src={footerLogo} alt="logo" />
                        </div>
                        <p>
                            OurStudio is a digital agency UI / UX Design and Website Development located in Ohio, United States of America
                        </p>
                        <p className='copy'>
                            Copyright Tanah Air Studio
                        </p>
                    </div>
                    <div className="lhs">
                        <div className="social-media-links">
                            <h2>
                                Our Social Media
                            </h2>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>Youtube</li>
                            </ul>
                        </div>
                        <div className="contact">
                            <h2>
                                Contact
                            </h2>
                            <ul>
                                <li><img src={locationOn} alt="location on" /><span>8819 Ohio St. South Gate,California 90280</span></li>
                                <li><img src={email} alt="location on" /><span>ourstudio@hello.com</span></li>
                                <li><img src={call} alt="location on" /><span>ourstudio@hello.com</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}