// src/components/Button/Button.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.css';

const Button = ({ text, onClick, type = 'button', className = '', icon }) => {
    return (
        <button type={type} onClick={onClick} className={`button ${className}`}>
            {icon && <FontAwesomeIcon icon={icon} className="button-icon" />} {text}
        </button>
    );
};

export default Button;