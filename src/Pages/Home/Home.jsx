import React from 'react';
import Hero from './Hero/Hero';
import About from '../About/About';
import Skills from './Skills/Skills';
import Education from './Education/Education';
import ProjectSection from './ProjectSection/ProjectSection';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <ProjectSection></ProjectSection>
        </div>
    );
};

export default Home;