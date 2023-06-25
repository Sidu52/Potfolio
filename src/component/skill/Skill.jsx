import React, { useRef } from 'react';
import { animate, motion, AnimatePresence } from 'framer-motion';
import { skill } from '../../content/index';
import './Skill.scss';

const animations = {
    skillicons: {
        initial: {
            y: "100%",
            opacity: 0,
            transition: { duration: 1, ease: "easeOut" }, // Updated transition property
        },
        whileInView: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeIn" }, // Updated transition property
        },
    },
}

export default function Skill() {
    const animationRefs = useRef([]);

    const animationExperienceCount = (index, num) => {
        animate(0, num, {
            duration: 1,
            onUpdate: (v) => (animationRefs.current[index].textContent = v.toFixed()),
        });
    };

    return (
        <div id='Skill' style={{ background: "white" }}>
            <div className='skill__container'>
                <div className="skill__sub_container">
                    <h3>Skills</h3>
                    <div className='skill__icons'>
                        <AnimatePresence>
                            {skill.map((item, index) => (
                                <motion.div {...animations.skillicons} key={index} >
                                    <h3>{item.name}</h3>
                                    <img src={item.icon} alt="icons" />
                                    <span>
                                        <motion.span
                                            ref={(ref) => (animationRefs.current[index] = ref)}
                                            whileInView={() => animationExperienceCount(index, item.experience)}
                                        ></motion.span> %
                                    </span>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>

    );
}
