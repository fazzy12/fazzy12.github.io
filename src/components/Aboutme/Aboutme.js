// src/components/AboutMe/AboutMe.js
import React from 'react';
import './Aboutme.css';

import img1 from '../../Assets/img-1.jpg'
import img2 from '../../Assets/img-2.jpg'
import img3 from '../../Assets/img-3.jpg'



const Aboutme = () => {
    return (
        <div className='about-me-container'>
            <h2 className='about-me-header'>About Myself</h2>
            <div className='about-me-text-image-container'>
                <div className='about-me-text-section'>
                    <p>
                        I am a Software Engineer with experience in developing scalable and
                        high-performing web applications. My goal is to write maintainable,
                        clean, and understandable code during the development process. I am
                        proficient in various programming languages and frameworks and have
                        a strong passion for learning new technologies.
                    </p>
                </div>
                <div className='about-me-image-section'>
                    <img src={img1} alt='About Me 1' className='about-me-image' />
                    <img src={img2} alt='About Me 2' className='about-me-image' />
                    <img src={img3} alt='About Me 2' className='about-me-image' />
                </div>
            </div>
        </div>
    );
};

export default Aboutme;
