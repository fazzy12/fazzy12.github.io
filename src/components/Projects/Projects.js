import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.css';


import img1 from '../../Assets/img-1.jpg'
import img2 from '../../Assets/img-2.jpg'
import img3 from '../../Assets/img-3.jpg'
import img4 from '../../Assets/img-4.jpg'
import img5 from '../../Assets/img-5.jpg'
import img6 from '../../Assets/img-6.jpg'
import img7 from '../../Assets/img-7.jpg'
import img8 from '../../Assets/img-8.jpg'

const ProjectSection = () => {
    return (
        <section className="projects-section">
            <h3 className="subheader-title">My Projects</h3>
            <div className="projects-container">
                <ProjectItem
                    projectTitle="Project 1"
                    image={img1}
                    projectDescription="Webesigner and Webflow expert, I help you solve your
                    online visibility challenges and generate more sales by designing custom
                    websites, art direction dedicated to your brand and bespoke digital strategies."
                    githubLink="https://github.com/user/project1"
                    techStack="Tech1, Tech2, Tech3"
                />
                <ProjectItem
                    projectTitle="Project 2"
                    image={img2}
                    projectDescription="Description of project 2"
                    githubLink="https://github.com/user/project2"
                    techStack="Tech1, Tech2, Tech3"
                />
                <ProjectItem
                    projectTitle="Project 3"
                    image={img3}
                    projectDescription="Description of project 3"
                    githubLink="https://github.com/user/project3"
                    techStack="Tech1, Tech2, Tech3"
                />
                <ProjectItem
                    projectTitle="Project 4"
                    image={img4}
                    projectDescription="Description of project 4"
                    githubLink="https://github.com/user/project4"
                    techStack="Tech1, Tech2, Tech3"
                />
                <ProjectItem
                    projectTitle="Project 5"
                    image={img5}
                    projectDescription="Description of project 5"
                    githubLink="https://github.com/user/project5"
                    techStack="Tech1, Tech2, Tech3"
                />
                <ProjectItem
                    projectTitle="Project 6"
                    image={img6}
                    projectDescription="Description of project 6"
                    githubLink="https://github.com/user/project6"
                    techStack="Tech1, Tech2, Tech3"
                />
                <ProjectItem
                    projectTitle="Project 7"
                    image={img7}
                    projectDescription="Description of project 7"
                    githubLink="https://github.com/user/project7"
                    techStack="Tech1, Tech2, Tech3"
                />
                <ProjectItem
                    projectTitle="Project 8"
                    image={img8}
                    projectDescription="Description of project 8"
                    githubLink="https://github.com/user/project8"
                    techStack="Tech1, Tech2, Tech3"
                />
            </div>
        </section>
    );
};

export default ProjectSection;
