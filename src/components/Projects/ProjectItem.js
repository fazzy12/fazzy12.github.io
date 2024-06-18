// src/components/Projects/ProjectItem.js
import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

const ProjectItem = ({ projectTitle, image, projectDescription, githubLink, techStack }) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect();
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const getRandomColor = () => {
        const colors = ['#007bff', '#28a745', '#17a2b8', '#ffc107', '#dc3545'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div className="project" ref={ref} style={{ backgroundImage: isInView ? `url(${image})` : 'none' }}>
            <div className="project-overlay">
                <h3 className='project-title'>{projectTitle}</h3>
                <p className='project-description'>{projectDescription}</p>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    View code &rarr;
                </a>
                <div className="tech-stack">
                    {techStack.split(', ').map((tech, index) => (
                        <span key={index} className="tech-keyword" style={{ backgroundColor: getRandomColor() }}>
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
