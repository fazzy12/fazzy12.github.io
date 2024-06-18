// src/components/Projects/Projects.js
import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.css';

import img1 from '../../Assets/img-1.webp';
import img2 from '../../Assets/img-2.webp';
import img3 from '../../Assets/img-3.webp';
import img4 from '../../Assets/img-4.webp';
import img5 from '../../Assets/img-5.webp';
import img6 from '../../Assets/img-6.webp';
import img7 from '../../Assets/img-7.webp';
import img8 from '../../Assets/img-8.webp';

const ProjectSection = () => {
    return (
        <section className="projects-section">
            <h3 className="subheader-title">My Projects</h3>
            <div className="projects-container">
                <ProjectItem
                    projectTitle="Project 1"
                    image={img1}
                    projectDescription="Web designer and Webflow expert, I help you solve your
                    online visibility challenges and generate more sales by designing custom
                    websites, art direction dedicated to your brand, and bespoke digital strategies."
                    githubLink="https://github.com/user/project1"
                    techStack="React, Node.js, CSS3"
                />
                <ProjectItem
                    projectTitle="Project 2"
                    image={img2}
                    projectDescription="Description of project 2"
                    githubLink="https://github.com/user/project2"
                    techStack="JavaScript, HTML5, Sass"
                />
                <ProjectItem
                    projectTitle="Project 3"
                    image={img3}
                    projectDescription="Description of project 3"
                    githubLink="https://github.com/user/project3"
                    techStack="Python, Django, PostgreSQL"
                />
                <ProjectItem
                    projectTitle="Project 4"
                    image={img4}
                    projectDescription="Description of project 4"
                    githubLink="https://github.com/user/project4"
                    techStack="Java, Spring, MySQL"
                />
                <ProjectItem
                    projectTitle="Project 5"
                    image={img5}
                    projectDescription="Description of project 5"
                    githubLink="https://github.com/user/project5"
                    techStack="C++, OpenGL, GLFW"
                />
                <ProjectItem
                    projectTitle="Project 6"
                    image={img6}
                    projectDescription="Description of project 6"
                    githubLink="https://github.com/user/project6"
                    techStack="Swift, iOS, CoreData"
                />
                <ProjectItem
                    projectTitle="Project 7"
                    image={img7}
                    projectDescription="Description of project 7"
                    githubLink="https://github.com/user/project7"
                    techStack="Kotlin, Android, Retrofit"
                />
                <ProjectItem
                    projectTitle="Project 8"
                    image={img8}
                    projectDescription="Description of project 8"
                    githubLink="https://github.com/user/project8"
                    techStack="Ruby, Rails, SQLite"
                />
            </div>
        </section>
    );
};

export default ProjectSection;
