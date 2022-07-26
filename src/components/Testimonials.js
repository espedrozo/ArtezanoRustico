import React from 'react';
import user1 from './images/user1.jpeg';
import user2 from './images/user2.jpeg';
import user3 from './images/user3.jpeg';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Testimonials</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Pellentesque blandit sapien a nibh lobortis vestibulum. 
                            Quisque auctor, velit quis suscipit pellentesque.</p>
                        <p><span>John</span></p>
                        <p>Director of ..</p>
                    </div>
                    <div className='card'>
                        <img src={user2} alt='user1' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Pellentesque blandit sapien a nibh lobortis vestibulum. 
                            Quisque auctor, velit quis suscipit pellentesque.</p>
                        <p><span>Kate</span></p>
                        <p>Director of ..</p>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Pellentesque blandit sapien a nibh lobortis vestibulum. 
                            Quisque auctor, velit quis suscipit pellentesque.</p>
                        <p><span>Paul</span></p>
                        <p>Manager ..</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;