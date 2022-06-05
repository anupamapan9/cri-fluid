import React from 'react';
import './Footer.css'
import { BsFacebook } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';
import { FaPhoneAlt } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer>
            <div className='social__link'>
                <FaPhoneAlt className='footer__icon phone' />
                <a href="tel:18002001234">Toll Free 1800 200 1234</a>
            </div>
            <div className='social__link'>
                <BsFacebook className='footer__icon' />
                <a href="https://www.facebook.com/cripumps"> www.facebook.com/cripumps</a>
            </div>
            <div className='social__link'>
                <TbWorld className='footer__icon' />
                <a href="https://www.crigroups.com">www.crigroups.com</a>
            </div>

        </footer>
    );
};

export default Footer;