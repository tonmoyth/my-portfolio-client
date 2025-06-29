import React from 'react';
import Hero from './Hero/Hero';
import About from '../About/About';
import Skills from './Skills/Skills';
import Education from './Education/Education';
import ProjectSection from './ProjectSection/ProjectSection';
import Contact from './Contact/Contact';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <ProjectSection></ProjectSection>
            <Contact></Contact>
        </div>
    );
};

export default Home;