import React from 'react';
import './Projects.css';

const ProjectItem = ({ projectTitle, image, projectDescription, githubLink, techStack }) => {
    return (
        <div className="project" style={{ backgroundImage: `url(${image})` }}>
            <div className="project-overlay">
                <h3 className="project-title">{projectTitle}</h3>
                <p className="project-description">{projectDescription}</p>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link"> &lt;View code/&gt;</a>
                <p className="project-tech">{techStack}</p>
            </div>
        </div>
    );
};

export default ProjectItem;
