import React from 'react';
import './SubHeader.css';

const SubHeader = ({ title, color }) => {
    const colorVariable = `--color-${color}`;
    const style = {
        color: `var(${colorVariable})`
    };

    return (
        <h2 className="subheader-title" style={style}>{title}</h2>
    );
};

export default SubHeader;
