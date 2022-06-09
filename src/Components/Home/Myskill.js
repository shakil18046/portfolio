import React from 'react';
import html from '../../assets/html-5.png'
import css from '../../assets/css.png'
import JavaScript from '../../assets/js.png'
import react from '../../assets/physics.png'
import nodejs from '../../assets/nodejs.png'
// import express from '../../assets'

const Myskill = () => {
    return (
        <div className='myskill'  data-aos="fade-down" data-aos-duration="1000">
            <div className='container'>
                <h2 className='myskill-heading text-center pb-5'>MY SKILL</h2>
                <div className='myskill-grid'>
                    <img alt='' src={html}></img>
                    <img alt='' src={css}></img>
                    <img alt='' src={JavaScript}></img>
                    <img alt='' src={react}></img>
                    <img alt='' src={nodejs}></img>
                    {/* <img alt='' src={express}></img> */}
                </div>
            </div>
        </div>
    );
};

export default Myskill;