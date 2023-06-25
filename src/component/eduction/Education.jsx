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
            <div className='empty__container'><div className='smoke__effect'></div></div>
            <div className="education__container">
                <div className="education__sub_container">
                    <h3 className="education_heading">What Did I Do</h3>
                    <div className='education__card_conatainer'>
                        {data.map((i, index) => (
                            <motion.div key={index} className="education__card"
                                whileInView={animations.whileInView}
                                initial={animations.one}
                                transition={{ delay: index * 0.2 }}>
                                <div className="card__content">
                                    <img src={i.img} alt="logo" />
                                    <h3 className="card_name">{i.course}</h3>
                                    <p className="card__para">{i.institue_name}</p>
                                    <p className="card_date">{i.start}-{i.end}</p>
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
