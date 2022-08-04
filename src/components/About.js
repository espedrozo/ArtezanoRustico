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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Phasellus lacinia nisl id mi lobortis gravid eu a arcu. 
                        Etiam tincidunt at nulla non blandit. 
                        Nullam id ante nec quam gravida ultricies id sit amet diam. 
                        Vivamus blandit libero et lacus fringilla lobortis ut sed odio. 
                        Nullam lacus mauris, dictum eget mattis in, blandit nec diam. 
                        Sed viverra libero ullamcorper, rutrum sapien sit amet, mattis eros. 
                        Sed non convallis nisl. Etiam tempus est eget diam eleifend, eu finibus diam placerat. 
                        Nullam tincidunt lacus et arcu aliquet, quis suscipit urna rhoncus. 
                        Etiam ullamcorper arcu eget diam pretium, iaculis laoreet purus viverra. 
                        Etiam sagittis vitae nunc pretium imperdiet.
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