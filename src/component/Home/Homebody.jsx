import React, { useState, useEffect } from 'react'
import './Hhome.scss'
import profile1 from '../../Image/Profile/Profile1.jpg'
import { BsFillEmojiSmileFill } from 'react-icons/bs'
import { CiDesktopMouse2 } from 'react-icons/ci'
import { animate, motion } from "framer-motion";
import { BiLogoLinkedin, BiLogoGithub, BiLogoYoutube, BiLogoInstagram } from 'react-icons/bi';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Homebody() {
    const [toggle, setToggle] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            setShowButton(scrollPosition >= 600);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handletoggle = (() => {
        setToggle(!toggle);
    })
    const animations = {
        h3: {
            initial: {
                x: "-100%",
                opacity: 0,
                transition: { duration: 1, ease: "easeOut" }, // Updated transition property
            },
            whileInView: {
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, ease: "easeIn" }, // Updated transition property
            },
        },
        article: {
            initial: {
                y: 0,
                opacity: 0,
                scale: 0.5, // Initial scale
                transition: { duration: 1, ease: "easeOut" }, // Updated transition property
            },
            whileInView: {
                y: 0,
                opacity: 1,
                scale: 1, // Final scale
                transition: { duration: 0.3, ease: "easeIn" }, // Updated transition property
            },
        },
        button: {
            initial: {
                y: "+100%",
                opacity: 0,
                transition: { duration: 1, ease: "easeOut" }, // Updated transition property
            },
            whileInView: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, ease: "easeIn" }, // Updated transition property
            },
        },
    };


    return (
        <div id='Home' className='home__container'>
            <div className='circle__container'>
                <div className="background__circle"></div>
            </div>
            <a href="#Home"><div className={`return__top  ${showButton ? 'show' : ''}`}>
                <CiDesktopMouse2 />
            </div></a>


            <div className="left__container">
                <span>
                    <motion.h3 {...animations.h3}>
                        Hi. I'm
                        <span className="text">
                            <span className="actual-text">&nbsp;Siddhant&nbsp;</span>
                            <span className="hover-text" aria-hidden="true">&nbsp;Siddhant&nbsp;</span>
                        </span>
                    </motion.h3>

                    <motion.article {...animations.article} className='home__paragraph'>
                        As a Full Stack Web Developer, I builded a foundation in programming and development concepts. I
                        am constantly seeking to expand my knowledge and skills in web development.
                    </motion.article>
                </span>

                <motion.span  {...animations.button} style={{ display: "flex", alignItems: "center", marginTop: "var(--large-margin)" }}>
                    <a href="mailto:siddhantsharma9926@gmail.com">
                        <button className='hire__button'>Hire me
                            <div className="star star-1">
                                <BsFillEmojiSmileFill />
                            </div>
                            <div className="star star-2">
                                <BsFillEmojiSmileFill />

                            </div>
                            <div className="star star-3">
                                <BsFillEmojiSmileFill />

                            </div>
                            <div className="star star-4">
                                <BsFillEmojiSmileFill />

                            </div>
                            <div className="star star-5">
                                <BsFillEmojiSmileFill />

                            </div>
                            <div className="star star-6">
                                <BsFillEmojiSmileFill />

                            </div>
                        </button>
                    </a>

                    <a href="https://drive.google.com/file/d/1ly7hjCxvlH_S6oEQi35nQ6JEIJVf3Cxc/view?usp=sharing">
                        <div className='resume__button'>
                            <div className="button__text">Get CV</div>
                        </div>
                    </a>

                </motion.span>
            </div>
            <div className="right__container">
                <img src={profile1} alt="Profile" />
            </div>
            <div className="social__container">
                <div className='i' onClick={handletoggle}>{!toggle ? < GrFormPrevious /> : < GrFormNext />} </div>

                <div className="social__icons" style={{ display: toggle ? "flex " : "none" }}>
                    <a href="https://www.linkedin.com/in/siddhantsharma9
" target='_blank' className='social linkedin' ><BiLogoLinkedin /></a>
                    <a href="https://github.com/Sidu52?tab=repositories
" target='_blank' className=' social github'><BiLogoGithub /></a>
                    <a href="https://www.youtube.com/@Sidhualston/featured" target='_blank' className=' social youtube'><BiLogoYoutube /></a>
                    <a href="https://www.instagram.com/sidhu_alston/" target='_blank' className=' social instagram'><BiLogoInstagram /></a>
                </div >
            </div >

            <ToastContainer position="top-right" autoClose={3000} />
        </div >
    )
}
