// src/components/AboutMe/AboutMe.js
import React from 'react';
import SubHeader from '../SubHeader/SubHeader';
import DevIcon from "devicon-react-svg";
import './Aboutme.css';

import img1 from '../../Assets/img-1.jpg';
import img2 from '../../Assets/img-2.jpg';
import img3 from '../../Assets/img-3.jpg';

const Aboutme = () => {
    const techs = [
        { icon: 'python', name: 'Python' },
        { icon: 'javascript', name: 'JavaScript' },
        { icon: 'react', name: 'React' },
        { icon: 'nodejs', name: 'Node.js' },
        { icon: 'css3', name: 'CSS3' },
        { icon: 'html5', name: 'HTML5' },
        { icon: 'sass', name: 'Sass' },
        { icon: 'bootstrap', name: 'Bootstrap' },
        { icon: 'git', name: 'Git' },
        { icon: 'linux', name: 'Linux' },
        { icon: 'docker', name: 'Docker' },
        { icon: 'aws', name: 'AWS' },
        { icon: 'mysql', name: 'MySQL' },
        { icon: 'mongodb', name: 'MongoDB' },
        { icon: 'postgresql', name: 'PostgreSQL' },
        { icon: 'redis', name: 'Redis' },
        { icon: 'nginx', name: 'Nginx' },
        { icon: 'webpack', name: 'Webpack' },
        { icon: 'jest', name: 'Jest' },
        { icon: 'firebase', name: 'Firebase' },


    ];

    return (
        <div className='about-me-container'>
            <SubHeader title="about myself" />
            <div className='about-me-text-image-container'>
                <div className='about-me-text-section'>
                    <p>
                        I am a Software Engineer with experience in developing scalable and
                        high-performing web applications. My goal is to write maintainable,
                        clean, and understandable code during the development process. I am
                        proficient in various programming languages and frameworks and have
                        a strong passion for learning new technologies.
                    </p>
                    <div className="tech-icons">
                        {techs.map((tech, index) => (
                            <div key={index} className="tech-icon">
                                <DevIcon icon={tech.icon} />
                                <p>{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='about-me-image-section'>
                    <img src={img1} alt='About Me 1' className='about-me-image' />
                    <img src={img2} alt='About Me 2' className='about-me-image' />
                    <img src={img3} alt='About Me 3' className='about-me-image' />
                </div>
            </div>
        </div>
    );
};

export default Aboutme;
