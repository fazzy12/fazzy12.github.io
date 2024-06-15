import React from 'react';
import logo from '../../Assets/devfazzy.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faGithub, faHashnode } from '@fortawesome/free-brands-svg-icons';
import Button from '../Button/Button';
import  "./Header.css"

const Header = () => {

    const handleClick = () => {
        alert('Button clicked!');
    };
    return (
            <header className='header'>
                <nav className='nav-container'>
                    <img src={logo} alt='devfazzy logo' className='logo' />
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
            </nav>
            <div className='hero'>
                <h1 className='hero-text-small'>Hi <span>👋</span> my name is <strong>Ifeanyi Kalu</strong></h1>
                <h1 className='hero-text'>Software Engineer</h1>
                <div className="social-icons">
                    <a href="https://github.com/fazzy12" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/ifeanyi-kalu" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://x.com/Devfazzy" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://fazzy.hashnode.dev/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faHashnode} />
                    </a>
                </div>
                <div className='button-container'>
                    <Button text="Contact Me" onClick={handleClick} className="primary" icon={faEnvelope} />
                    <Button text="Download CV" onClick={handleClick} className="secondary" icon={faCloudArrowDown}/>
                </div>
                {/* <p className='hero-description'>My goal is to write maintainable, clean, and understandable code during development process.</p> */}
            </div>
        </header>
    );
}

export default Header;