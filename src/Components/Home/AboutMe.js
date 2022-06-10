import React from 'react';
import manTwo from '../../assets/Group 1000003744.png'
import "./Aboutme.css"
const AboutMe = () => {
    return (
        <div className='about-me'>
            <div className='container'>
                <div className='about-grid'>
                    <div className='about-image-wrapper dekstop' data-aos="fade-right" data-aos-duration="2000">
                        <img alt='' src={manTwo}></img>
                    </div>
                    <div className='about-content-wrapper' data-aos="fade-left" data-aos-duration="2000">
                        <h3 className='about-heading'>About me</h3>
                        <p className='paragraph'>My name is Md shakil Hossain. I am studying computer science engineering(CSE). I started my journey with wordpress. And then i learned React,nodejs,express.js. i did some project i focused on functionality and then i focused on responsive. I think functionality gives life to a website And responsive makes it beautiful.</p>
                    </div>
                    <div className='about-image-wrapper mobile'>
                        <img alt='' src={manTwo}></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;