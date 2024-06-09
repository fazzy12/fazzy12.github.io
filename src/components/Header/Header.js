import React from 'react';
import logo from '../../Assets/devfazzy.png';
import  "./Header.css"

const Header = () => {
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
        </header>
    );
}

export default Header;