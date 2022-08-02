import React from "react";
import {FaWhatsapp} from 'react-icons/fa';
import './Demo.css';

const Demo = () => {
    return (
        <div className='demo' id="demo">
            <div className='container'>
                <div className='col-1'>
                    <p>Diversos projetos realizados,</p>
                    <p>Um Objetivo</p>
                    <p>ver em cada cliente um sorriso no rosto e o brilho no olhar.</p>
                    <a id='demo-a-tag' href='https://wa.me/5547992297047' target='_blank' rel="noopener noreferrer">
                        <button className='button raise'><FaWhatsapp id='whatsapp' />Solicite seu Orçamento</button>
                    </a>
                </div>
                <div className='col-2'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/DMue1HUG4IY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

            </div>

        </div>
    )
}

export default Demo;