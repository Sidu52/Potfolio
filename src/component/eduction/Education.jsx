import { motion } from "framer-motion";
import './Education.scss'
import data from '../../content/data';



function Education() {
    const animations = {
        whileInView: {
            x: 0,
            y: 0,
            opacity: 1,
        },
        one: {
            opacity: 0,
            y: "100%",
        }
    };
    return (
        <div style={{ position: "relative" }}>
            <div className='education'></div>
            <div className='empty__container'>
                <div className='smoke__effect'></div>
            </div>
            <div className="education__container">
                <div className="education__sub_container">
                    <h3 className="education_heading">What Did I Do</h3>
                    <div className="education__card_conatainer">
                        {data.map((i, index) => (
                            <motion.div
                                whileInView={animations.whileInView}
                                initial={animations.one}
                                transition={{ delay: index * 0.2 }}
                                className="Education_box_container noselect ">
                                <div className="canvas">
                                    <div className="tracker tr-1"></div>
                                    <div className="tracker tr-2"></div>
                                    <div className="tracker tr-3"></div>
                                    <div className="tracker tr-4"></div>
                                    <div className="tracker tr-5"></div>
                                    <div className="tracker tr-6"></div>
                                    <div className="tracker tr-7"></div>
                                    <div className="tracker tr-8"></div>
                                    <div className="tracker tr-9"></div>
                                    <div className="tracker tr-10"></div>
                                    <div className="tracker tr-11"></div>
                                    <div className="tracker tr-12"></div>
                                    <div className="tracker tr-13"></div>
                                    <div className="tracker tr-14"></div>
                                    <div className="tracker tr-15"></div>
                                    <div className="tracker tr-16"></div>
                                    <div className="tracker tr-17"></div>
                                    <div className="tracker tr-18"></div>
                                    <div className="tracker tr-19"></div>
                                    <div className="tracker tr-20"></div>
                                    <div className="tracker tr-21"></div>
                                    <div className="tracker tr-22"></div>
                                    <div className="tracker tr-23"></div>
                                    <div className="tracker tr-24"></div>
                                    <div className="tracker tr-25"></div>
                                    <div id="card">
                                        <div key={index} className="education__card"

                                        >
                                            <div className="card__content">
                                                <img src={i.img} alt="logo" />
                                                <h3 className="card__heading">{i.course}</h3>
                                                <p className="card__para">{i.institue_name}</p>
                                                <p className="card_date">{i.start}-{i.end}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Education;
