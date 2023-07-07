import React from 'react'
import './about.scss'
import profile2 from '../../Image/Profile/Profile2.png'
import Typewriter from "typewriter-effect";

function About() {
    return (
        <div id='About' className='about__container'>
            <h3 className='about__heading'>About Me</h3>
            <div className="about__sub_container">
                <div className="about__img">
                    <img src={profile2} alt="profile" />
                </div>
                <div className="about__text_container">
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <h2 >Hyy I'm</h2>
                        <h2 style={{ color: "var(--secondary-color)" }}>
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

                    <article className='about__pargraph'>As a Full Stack Web Developer, I builded a foundation in programming and development concepts. I
                        am constantly seeking to expand my knowledge and skills in web development. I have experience in
                        developing dynamic, user-friendly websites using HTML, CSS, JavaScript, and React. I am also
                        proficient in server-side programming languages such as Node.js, and have experience working with
                        databases such as MongoDB. I am committed to delivering high-quality code that meets business
                        requirements. I am eager to utilize my skills and experience to contribute to a dynamic team in the
                        field of web development.</article>
                    <a href="https://drive.google.com/file/d/1tnYkzcIXLc3KUBNYLNUfUt3IKsRp0qpa/view?usp=sharing"><button className='about__button'>Download Resume</button></a>

                </div>
            </div >
        </div >
    )
}
export default About;
