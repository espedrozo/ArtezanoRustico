import React from "react";
import pergolado from './images/pergolado.jpg';
import deck from './images/deck.jpg';
import fachada from './images/fachada.jpg';
import {FaInstagram} from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
    return (
        <div className='gallery' id="gallery">
            <div className='container'>
                <h2>Galeria</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='pic'>
                        <img id='pic' src={pergolado} alt='pergolado' />
                    </div>
                    <div className='pic'>
                        <img id='pic' src={deck} alt='deck' />
                    </div>
                    <div className='pic'>
                        <img id='pic' src={fachada} alt='fachada' />
                    </div>
                </div>
                <a href="https://www.instagram.com/artezanorustico/" target='_blank' rel="noopener noreferrer">
                        <button className='button'><FaInstagram id='instagram' /> Explore Mais</button>
                    </a>
            </div>


        </div>
    )
}

export default Gallery;