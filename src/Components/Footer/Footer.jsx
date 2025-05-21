import React from 'react'
// import 'Components/Footer/Footer.css';
import "./Footer.css";

import logo from '../../../public/assets/main_logo.png';
import user_icon from '../../../public/assets/user_icon.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
           <img src={logo}  alt='' style={{ width: "100px", height: "auto" }} />
            <p>I'm MERN Stack Developer as a Fresher</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">© 2024 Hima Bindu Gorre. All rights Reversed.. </div>
        <div className="footer-bottom-right">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
