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
                        <p className='paragraph'>My name is Debashish D. Dev. I have completed my engineering on Computer Science in 2019.

I started my journey with wordpress. I used to read a lots of book. I wanted to be a writer. I had a wordpress blog and always wanted to make the blog more beautifull. Thats how I've jummped into Web Development.

I want to make the internet minimal and easy to use. I am a mern full stack developer. I write poem in JavaScript.</p>
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