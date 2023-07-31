import React from 'react'
import Navbar from '../component/navbar/Navbar'
// import Homebody from '../component/Home/Homebody'
import About from '../component/about/About'
import Skill from '../component/skill/Skill'
import Education from '../component/eduction/Education'
import Project from '../component/project/project'
import Timeline from "../component/timeline/TimeLineBox";
import Review from '../component/review/Review'
import Contact from '../component/contact/Contact'
function Home() {
    return (
        <div>
            <Navbar />
            <Homebody />
            <About />
            <Skill />
            <Education />
            <Project />
            <Timeline />
            <Review />
            <Contact />
        </div>
    )
}

export default Home
