import React, { useRef } from 'react';
import { animate, motion, AnimatePresence } from 'framer-motion';
import Bulb from '../../Image/skills/idea_light.png'
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
        <div id='Skill'>
            <div className='skill__container'>
                <h3 className='skill_heading hidden max-md:block'>Skills</h3>
                <div className="skill__sub_container">
                    <div className='skill_left_box absolute top-0 left-0'>
                        <img src={Bulb} alt="lightimg" className='rotate-180' />
                        {/* <div className=' bg-purple-500 bg-opacity-50  w-96 h-96 rou absolute top-0' ></div> */}
                    </div>
                    <div>

                    </div>
                    <div className='skill_right_box'>
                        <h3 className='skill_heading max-md:hidden'>Skills</h3>
                        <div
                            className="flex items-center flex-wrap "
                        >
                            <h1 className='sm:hidden aboout_background absolute text-9xl font-extrabold w-full text-center :top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ color: "var( color: var( --heading-primary-color))", opacity: "0.2" }}>skills</h1>
                            <AnimatePresence>
                                {skill.map((item, index) => (
                                    <motion.div {...animations.skillicons} key={index} className='skills_box flex items-center gap-4 w-2/4'>
                                        <img className='w-20 h-20' src={item.icon} alt="icons" />
                                        <div>
                                            <p className='skill_info_text_heading text-lg font-semibold'>{item.name}</p>
                                            <span className='skill_info_text_paragrap'>
                                                <motion.span
                                                    ref={(ref) => (animationRefs.current[index] = ref)}
                                                    whileInView={() => animationExperienceCount(index, item.experience)}
                                                ></motion.span> %
                                            </span>
                                        </div>

                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}
