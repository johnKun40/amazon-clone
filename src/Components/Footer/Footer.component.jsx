import React from 'react';
import './Footer.style.css';
import { Link } from "react-router-dom";

function FooterComponent() {
  return (
    <div className='footer'>
            <div className='footer-container'>
              <div className='footer-detail'>
                <h2>Get toKnow Us</h2>
                <ul>
                  <li>Careers</li>
                  <li>Blog</li>
                  <li>About Amazon</li>
                  <li>Investor Relations</li>
                  <li>Amazon Devices</li>
                  <li>Amazon Science</li>
                </ul>
              </div>

              <div className='footer-detail'>
                <h2>Make Money with Us</h2>
                <ul>
                  <li>Sell Products on Amazon</li>
                  <li> Sell on Amazon Business</li>
                  <li>Sell apps on Amazon</li>
                  <li>Become an Affiliate</li>
                  <li>Advertise Your Products</li>
                  <li>Self-publish with Us</li>
                  <li>Host an amazon Hub</li>
                  <li>&gt; See More Make Money with us</li>
                </ul>
              </div>

              <div className='footer-detail'>
                <h2>Amazon Payment Products</h2>
                <ul>
                  <li>Amazon Business Card</li>
                  <li>Shop with Points</li>
                  <li>Reload Your Balance</li>
                  <li>Amazon Currency Converter</li>
                </ul>
              </div>

              <div className='footer-detail'>
                <h2>Let Us Help You</h2>
                <ul>
                  <li>Amazon and COVID-19</li>
                  <li>Your Account</li>
                  <li>Your Orders</li>
                  <li>Shipping Rates & Policies</li>
                  <li>Returns & Replacements</li>
                  <li>Manage Your Content and Devices</li>
                  <li>Amazon Assistant</li>
                  <li>Help</li>
                </ul>
              </div>
            </div>

            <hr/>

            <div className='footer-detail'>
                <Link to={'/'}>
              <img className='footer__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='amazon-logo' />
              </Link>
                
                <button className='footer__btn'>English</button>
                <button className='footer__btn'>$ USD - Us Dollar</button>
                <button className='footer__btn'>United States</button>
            </div>

            <div className='footer__copyright'>

              <ul className='copyright-list'>
                <li>Conditions of use</li>
                <li>Privacy Notice</li>
                <li>Internet Based Ads</li>
              </ul>

              <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>

          </div>
  );
}

export default FooterComponent;
