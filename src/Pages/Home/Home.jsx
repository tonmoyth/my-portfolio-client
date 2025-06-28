import React from 'react';
import Hero from './Hero/Hero';
import About from '../About/About';
import Skills from './Skills/Skills';
import Education from './Education/Education';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Education></Education>
        </div>
    );
};

export default Home;