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
                    <h1 className='hero-heading'>Md Shakil <span className='name'>Hossain</span></h1>
                    <h2 className='hero-subheading' id='hero-main-subheading'>Frontend Developer</h2>
                    <p className='paragraph pt-2 pb-2firebase login'>Frontend Developer based in Bangladesh with a deep passion for building rich, engaging user experiences that make people's lives better.</p>
                    
             
                    <a href="https://www.linkedin.com/in/md-shakil-hossain-12b538211/" target="_blank" className='hero-btn resume'>Hire me</a>
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