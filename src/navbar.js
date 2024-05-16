
import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="#">HedgeMyFunds</a>
            </div>
            <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#services">SERVICES</a></li>
                    <li><a href="#about">ABOUT US</a></li>
                    <li><a href="#contact">CONTACT US</a></li>
                    <li><a href="#testimonials">TESTIMONIALS</a></li>
                </ul>
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    );
};

export default Navbar;
