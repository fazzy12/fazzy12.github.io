import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faHashnode } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-social-icons'>
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
            <p>Made with React</p>
        </footer>
    );
}

export default Footer;
