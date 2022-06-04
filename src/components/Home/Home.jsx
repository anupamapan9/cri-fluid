import React from 'react';
import Logo from '../../asserts/logo.png'
import './Home.css'
const Home = () => {
    return (
        <section className='main_section'>
            <nav className='header__logo'>
                <img src={Logo} alt="" />
            </nav>
        </section>
    );
};

export default Home;