import React from 'react';
import "./Hero.css"
import man from "../../assets/man.png"
const Hero = () => {
    return (
        <div className='hero-area'>
            <div className='container'>
            <div className='hero-grid'>
                <div className='hero-content-wrapper' data-aos="fade-right" data-aos-duration="2000">
                    <h2 className='content'>Hi, i am</h2>
                    <h1 className='hero-heading'>Md Shakil Hossain</h1>
                    <h2 className='hero-subheading'>Frontend Web Developer</h2>
                    <p className='paragraph'>Frontend Developer based in Bangladesh with a deep passion for building rich, engaging user experiences that make people's lives better.</p>
                    <button className='hero-btn resume'>Contact me</button>
                </div>
                <div className='hero-images-wrapper' data-aos="fade-left" data-aos-duration="2000">
                    <img alt='' src={man}></img>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Hero;