import React from 'react';
import {FaWhatsapp} from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero' id='hero'>
            <div className='content'>
                <p>A Madeira Moldada</p>
                <p>Pelo seu Sonho</p>
                <a id='hero-a-tag' href='https://wa.me/5547992297047' target='_blank' rel="noopener noreferrer">
                <button href='/' className='button'><FaWhatsapp id='whatsapp' />Fale conosco</button>
                </a>
            </div>

        </div>
    )
}

export default Hero;