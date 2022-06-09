import React from 'react';
import AboutMe from './AboutMe';
import GetInTouch from './GetInTouch';
import Hero from './Hero';
import Myskill from './Myskill';
import Myworks from './Myworks';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Myworks></Myworks>
            <Myskill></Myskill>
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default Home;