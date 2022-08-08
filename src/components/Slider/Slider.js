import React from "react";
import './Slider.css';
//import BtnSlider from './BtnSlider';
import dataSlider from './dataSlider';

export default function Slider() {
    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div className="slide">
                        <img
                        src={`/Imgs/img${index + 1}.jpg`}
                        />
                    </div>
                )
            })}
        </div>
    )
}