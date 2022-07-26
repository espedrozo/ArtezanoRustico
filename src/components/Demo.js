import React from "react";
import './Demo.css';

const Demo = () => {
    return (
        <div className='demo' id="demo">
            <div className='container'>
                <div className='col-1'>
                    <p>More than 100 Financial Planners,</p>
                    <p>One Philosophy</p>
                    <p>Every single one of our financial advisors receives rigorous training.</p>
                    <button className='button'>Contact us</button>
                </div>
                <div className='col-2'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/DMue1HUG4IY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            </div>

        </div>
    )
}

export default Demo;