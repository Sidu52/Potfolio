import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import data from '../../content/data.json';
import './Project.scss'

const slides = data.projects;
const project = () => {
    return (
        <div id="Project" className="project__conatainer">
            <h3 className="heading">Experience || Project</h3>
            <div className="project__sub_container">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={true}
                    delay={8000}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="card__swiper">
                            <div className="image__container">
                                <img src={slide.imgSrc} alt="" />

                            </div>
                            <div className="detail__container">
                                <h3 className="heding" >{slide.title}</h3>
                                <article className="Article">{slide.description}</article>

                                <div className="button__conatainer">
                                    <a href={slide.url}><button className=" button git__button">Git</button></a>
                                    <a href={slide.Live}><button className=" button live__button">Live Link</button></a>

                                </div>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>


    )

}

export default project;