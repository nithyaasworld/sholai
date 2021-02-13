import React from 'react';
import logoStyles from './Logo.module.css';

const Logo = () => {
    return (
        <div className={logoStyles.flexContainer}>
            <img src={process.env.PUBLIC_URL + "/logo.jpg"} alt="Sholai School Logo"/>
            <div className={logoStyles.logoText}>
                <h1><span className={logoStyles.headerTextBlue}>Sholai</span> <span className={logoStyles.headerTextGreen}>CLOAAT</span></h1>
                <h2>A very different education</h2>
            </div>
        </div>
    );
};

export default Logo;