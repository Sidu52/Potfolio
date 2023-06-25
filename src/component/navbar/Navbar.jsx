import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';
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
            if (scrollPosition >= 0 && scrollPosition < 444) {
                setActiveLink("Home")
            }
            else if (scrollPosition >= 444 && scrollPosition < 1022) {
                setActiveLink("About")
            }
            else if (scrollPosition >= 1022 && scrollPosition < 2007.199951171875) {
                setActiveLink("Skill")
            }
            else if (scrollPosition >= 2007 && scrollPosition < 4012) {
                setActiveLink("Project")
            } else {
                setActiveLink("Contact")
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="navbar">
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
                            <div className="menu__link" key={item}>
                                <div className="navbar__hover left" />
                                <a
                                    href={`#${item}`}
                                    className={`navbar__itemlink ${activeLink === item ? 'active' : ''
                                        }`}>
                                    {item}
                                </a>
                                <div className="navbar__hover right" />
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div className="navbar__links">
                {navData.map((item, index) => (
                    <div className="navbar__link" key={index}>
                        <div className="navbar__hover left" />
                        <a
                            href={`#${item}`}
                            className={`navbar__itemlink ${activeLink === item ? 'active' : ''
                                }`}
                            onClick={() => handleLinkClick(item)}
                        >
                            {item}
                        </a>
                        <div className="navbar__hover right" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
