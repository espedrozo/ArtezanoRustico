import React from "react";
import john from './images/john-doe.png';
import './About.css';

const About = () => {
    return (
        <div className='about' id="about">
            <div className='container'>
                <img src={john} alt='john' />
                <div className='col-2'>
                    <h2>Artezano Rústico</h2>
                    <span className='line'></span>
                    <p>
                        A seis anos atrás 
                    </p>

                    <p>Sed congue pulvinar blandit. Cras et mi ut eros porttitor sagittis. 
                        Aliquam consequat, diam ut luctus lacinia, sapien arcu aliquam nulla, a aliquet purus mauris eu ex.
                    </p>

                </div>
            </div>

        </div>
    )
}

export default About;