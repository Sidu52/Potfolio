import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { motion } from 'framer-motion';
import logo from '../../Image/Logo/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiX } from 'react-icons/hi';

const navData = ['Home', 'About', 'Skill', 'Project', 'Contact'];

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {

            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollPosition >= 0 && scrollPosition < 30) {
                setActiveLink('');
            }
            else if (scrollPosition >= 40 && scrollPosition < 444) {
                setActiveLink('Home');
            } else if (scrollPosition >= 444 && scrollPosition < 1022) {
                setActiveLink('About');
            } else if (scrollPosition >= 1022 && scrollPosition < 2007.199951171875) {
                setActiveLink('Skill');
            } else if (scrollPosition >= 2007 && scrollPosition < 4012) {
                setActiveLink('Project');
            } else {
                setActiveLink('Contact');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLinkClick = (item) => {
        setToggle(false);
        // Implement any additional logic for handling link clicks
    };

    return (
        <div className="navbar"
            style={{ backgroundColor: window.pageYOffset < 50 ? "transparent" : " var(--bacground)" }}
        >
            <div className="navbar__logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="navbar__menuicon">
                {toggle ? (
                    <HiX onClick={() => setToggle(false)} />
                ) : (
                    <GiHamburgerMenu onClick={() => setToggle(true)} />
                )}
            </div>
            {toggle && (
                <div className="navbar__container">
                    <div className="navbar__menulist">
                        {navData.map((item) => (
                            <motion.div
                                className="menu__link"
                                key={item}
                                whileHover={{ opacity: 0.7 }} // Fade animation on hover
                            >
                                <a
                                    href={`#${item}`}
                                    onClick={() => setToggle(false)}
                                    className={`navbar__itemlink ${activeLink === item ? 'active' : ''}`}
                                >
                                    {item}
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
            <div className="navbar__links">
                {navData.map((item, index) => (
                    <div className="navbar__link" key={index}>
                        <motion.div
                            className="navbar__hover left"
                            whileHover={{ opacity: 0.7 }} // Fade animation on hover
                        />
                        <a
                            href={`#${item}`}
                            className={`navbar__itemlink ${activeLink === item ? 'active' : ''}`}
                            onClick={() => handleLinkClick(item)}
                        >
                            {item}
                        </a>
                        <motion.div
                            className="navbar__hover right"
                            whileHover={{ opacity: 0.7 }} // Fade animation on hover
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
