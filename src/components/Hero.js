import React from 'react';
import {FaWhatsapp} from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero' id='hero'>
            <div className='content'>
                <p>Ligue para nós</p>
                <p>(47) 9 9229-7047</p>
                <p>A Madeira Moldada</p>
                <p>Pelo seu Sonho</p>
                <a href='https://wa.me/5547992297047' target='_blank' rel="noopener noreferrer">
                <button href='/' className='button'><FaWhatsapp id='whatsapp' />WhatsApp</button>
                </a>
            </div>

        </div>
    )
}

export default Hero;