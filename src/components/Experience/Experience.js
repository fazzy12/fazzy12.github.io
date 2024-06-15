// src/components/Experience/Experience.js
import React from 'react';
import SubHeader from '../SubHeader/SubHeader';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: 'Company A',
            role: 'Software Engineer',
            duration: 'Jan 2021 - Present',
            description: 'Developed scalable web applications using React and Node.js, leading a team of 5 engineers.'
        },
        {
            company: 'Company B',
            role: 'Frontend Developer',
            duration: 'Jun 2019 - Dec 2020',
            description: 'Designed and implemented UI components for various projects, improving user experience and accessibility.'
        },
        {
            company: 'Company C',
            role: 'Intern',
            duration: 'Jan 2018 - May 2019',
            description: 'Assisted in the development of internal tools and scripts, gaining hands-on experience with Python and Bash.'
        }
    ];

    return (
        <div className="experience-container">
            <SubHeader title="Work Experience" color="black" />
            {experiences.map((experience, index) => (
                <div key={index} className="experience-item">
                    <h3 className="experience-role">{experience.role}</h3>
                    <h4 className="experience-company">{experience.company}</h4>
                    <p className="experience-duration">{experience.duration}</p>
                    <p className="experience-description">{experience.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Experience;
