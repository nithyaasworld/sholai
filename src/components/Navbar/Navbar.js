import React from 'react';
import Logo from '../Logo/Logo';
import navBarStyles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={navBarStyles.flexContainer}>
            <Logo />
            <ul className={navBarStyles.flexContainer}>
                <li>Home</li>
                <li>Sholai School</li>
                <li>Articles</li>
                <li>Join Us</li>
                <li>Sunbird Natural Products</li>
                <li>Media Gallery</li>
                <li>Contact Us</li>
            </ul>
        </div>
    );
};

export default Navbar;

