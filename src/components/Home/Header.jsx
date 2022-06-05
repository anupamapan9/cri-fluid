import React from 'react';
import Logo from '../../asserts/logo.png'
import Awards from '../../asserts/1.png'
import GetPrize from '../../asserts/2.png'
const Header = () => {
    return (
        <>
            <nav className='nav__logo'>
                <img src={Logo} alt="" />
            </nav>
            <header>
                <div className='award__img'>
                    <img src={Awards} alt="" />
                </div>
                <div>
                    <h3>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
                    <ul>
                        <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                        <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                    </ul>
                    <div className='header__right'>
                        <img src={GetPrize} alt="" />
                        <p>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong> . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                    </div>

                </div>
            </header>

        </>
    );
};

export default Header;