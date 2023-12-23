import React from 'react'
import './about.scss'
import bg_main from '../../Image/home/about-removebg.png'
import profile from '../../Image/Profile/Profile.jpg'
import Typewriter from "typewriter-effect";

function About() {
    return (
        <div id='About' className='about__container'>
            <div className="about__sub_container">
                <div className="about__img relative"
                    style={{
                        backgroundImage: `url(${bg_main})`,
                    }}
                >
                    <div className='about_left_shadow absolute h-full w-11/12 bg-black opacity-25 top-0 max-md:w-full'></div>
                    <div className='about_left_box absolute z-10 w-5/6 h-full'>
                        <h3 className=' text-xl mb-2'>Interested in my services?</h3>
                        <button className='about_left_button rounded-md px-4 py-2 border-none'>Contact me..</button>
                    </div>
                    {/* <img src={profile} alt="profile" /> */}
                </div>

                <div className="about__text_container ">
                    <h3 className='about__heading'>About Me</h3>
                    <div className='about__pargraph' style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <h2 >Hyy I'm</h2>
                        <h2 style={{ color: "var(--heading--secondary-color)" }}>
                            <Typewriter
                                options={{
                                    strings: ["A Developer", "A Designer", "Content Creator", "Video Editor"],
                                    autoStart: true,
                                    loop: true,
                                    cursor: "",
                                    wrapperClassName: "typewriterpara",
                                }}
                            />
                        </h2>

                    </div>
                    <div className='about-info relative'>
                        <h1 className='aboout_background absolute -left-16 text-9xl font-extrabold w-full text-center max-md:top-1/2 max-md:left-1/2 max-md:transform max-md:-translate-x-1/2 max-md:-translate-y-1/2' style={{ color: "var( color: var( --heading-primary-color))", opacity: "0.2" }}>About</h1>

                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <ul >
                            <li className="about-information flex items-center gap-2"><strong>Name:</strong> <span>Siddhant Sharma</span></li>
                            <li className="about-information flex items-center gap-2"><strong>Date of birth:</strong> <span>June 01, 2001</span></li>
                            <li className="about-information flex items-center gap-2"><strong>Address:</strong> <span>Gwalior, Madhya Pradesh 474006 INDIA</span></li>
                            <li className="about-information flex items-center gap-2"><strong>Zip code:</strong> <span>474006</span></li>
                            <li className="about-information flex items-center gap-2"><strong>Email:</strong> <span>siddhantsharma9926@gmail.com</span></li>
                            <li className="about-information flex items-center gap-2"><strong>Phone: </strong> <span>+91-8085984844</span></li>
                        </ul>
                    </div>
                    {/* 
                    <article className='about__pargraph'>As a Full Stack Web Developer, I builded a foundation in programming and development concepts. I
                        am constantly seeking to expand my knowledge and skills in web development. I have experience in
                        developing dynamic, user-friendly websites using HTML, CSS, JavaScript, and React. I am also
                        proficient in server-side programming languages such as Node.js, and have experience working with
                        databases such as MongoDB. I am committed to delivering high-quality code that meets business
                        requirements. I am eager to utilize my skills and experience to contribute to a dynamic team in the
                        field of web development.</article>
                    <a href="https://drive.google.com/file/d/1DYuvjGcWqEXskIKF7c14rc8AQiyRy96-/view?usp=drive_link"><button className='about__button'>Download Resume</button></a> */}

                </div>
            </div >
        </div >
    )
}
export default About;
