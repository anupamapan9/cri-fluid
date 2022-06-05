import React from 'react';
import './Products.css'
import Product from '../../asserts/3.png'
const Products = () => {
    return (
        <section>
            <p className='product__line'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
            <div className='product__image'>
                <img src={Product} alt="" />
            </div>
            <div className='product__link'>
                <p>
                    <a href="#"> Valves</a>  - <a href="#">Pumps</a>  - <a href="#">Pipes</a>  - <a href="#">IoT Drives & Controllers</a>  - <a href="">Wires & Cables</a>  - <a href="#">Solar Systems </a> - <a href="#">Motors</a>
                </p>
            </div>
            <div className='divider'></div>
            <div className='bottom__heading'>
                <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
                <p className='services__link'>
                    <a href="#">CHEMICALS & PROCESS</a>
                    |  <a href="#">POWER</a>  | <a href="">WATER & WASTE WATER</a> | <a href="">OILS & GAS</a> | <a href="">PHARMA</a> | <a href="#"> SUGARS & DISTILLERIES</a> | <a href="#"> PAPER & PULP</a> | <a href="">MARINE & DEFENCE</a> | <a href="#">METAL & MINING</a> | <a href="#">FOOD & BEVERAGE</a>  | <a href="#">PETROCHEMICAL & REFINERIES</a>  |<a href="#"> SOLAR | BUILDING</a> | <a href="#">HVAC FIRE FIGHTING</a>  | <a href="#">AGRICULTURE & RESIDENTIAL</a>
                </p>
            </div>
        </section>
    );
};

export default Products;