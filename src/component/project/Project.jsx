import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper';
import { FaAngleLeft, FaChevronRight } from "react-icons/fa";
import 'swiper/swiper-bundle.min.css';
import data from '../../content/data.json';
import './Project.scss'
const project = () => {
    const imageSwiper = useRef(null);
    const detailSwiper = useRef(null);

    const slides = data.projects;

    const handleNext = () => {
        imageSwiper.current.swiper.slideNext();
        detailSwiper.current.swiper.slideNext();
    };

    const handlePrev = () => {
        imageSwiper.current.swiper.slidePrev();
        detailSwiper.current.swiper.slidePrev();
    };
    return (
        <div id="Project" >
            <div className="project__conatainer w-11/12 m-auto">
                <h3 className="Project__heading text-center" >Experience || Project</h3>

                <div className="project__sub_container flex gap-2 w-4/5 max-md:w-full m-auto max-sm:hidden">
                    <Swiper
                        ref={imageSwiper}
                        modules={[Autoplay]}
                        loop={true}
                        autoplay={true}
                        delay={8000}
                        allowTouchMove={false}
                        className="w-2/4"
                    >
                        {slides.map((slide, index) => (
                            <>
                                <SwiperSlide key={index} className="card__swiper">
                                    <div className="project_image__container">
                                        <img className="w-full h-72" src={slide.imgSrc} alt="" />
                                    </div>
                                </SwiperSlide>
                            </>

                        ))}
                    </Swiper>
                    <div className="project__slider_box flex items-center justify-center relative">
                        <button onClick={handlePrev} className="slider_button px-2 py-1 absolute -left-10  rounded-xl">
                            <FaAngleLeft />
                        </button>
                        <button onClick={handleNext} className="slider_button px-2 py-1 absolute -right-10 rounded-xl">
                            <FaChevronRight />
                        </button>
                    </div>
                    <Swiper
                        ref={detailSwiper}
                        modules={[Autoplay]}
                        loop={true}
                        autoplay={true}
                        delay={8000}
                        allowTouchMove={false}
                        className="w-2/4"
                    >
                        {slides.map((slide, index) => (
                            <>
                                <SwiperSlide key={index} className="card__swiper flex ">
                                    <div className="project_detail__container">
                                        <strong className="heding" >{slide.title}</strong>
                                        <article className="Article">{slide.description}</article>
                                        <div className="button__conatainer">
                                            <a href={slide.url}><button className=" button git__button">Git</button></a>
                                            <a href={slide.Live} target='_blank'><button className=" button live__button bg-red-700">Live Link</button></a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </>
                        ))}
                    </Swiper>
                </div>

                <div className="project__sub_container flex gap-2 w-full m-auto sm:hidden">
                    <Swiper
                        // ref={detailSwiper}
                        modules={[Autoplay]}
                        loop={true}
                        autoplay={true}
                        delay={8000}
                        className="w-full"
                    >
                        {slides.map((slide, index) => (
                            <>
                                <SwiperSlide key={index} className="card__swiper">
                                    <div className="project_image__container">
                                        <img className="w-full h-72" src={slide.imgSrc} alt="" />
                                    </div>
                                    <div className="project_detail__container">
                                        <strong className="heding" >{slide.title}</strong>
                                        <article className="Article">{slide.description}</article>
                                        {/* <article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias beatae unde placeat voluptate? Earum cum necessitatibus recusandae aperiam velit voluptatibus!</article> */}

                                        <div className="button__conatainer">
                                            <a href={slide.url}><button className=" button git__button">Git</button></a>
                                            <a href={slide.Live}><button className=" button live__button">Live Link</button></a>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            </>

                        ))}
                    </Swiper>

                </div>
            </div>
        </div>

    )
}

export default project;



// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper';
// import data from '../../content/data.json';
// // Import Swiper styles
// const slides = data.projects;
// const project = () => {
//     return (
//         <div className=''>
//             <Swiper
//                 // modules={[Autoplay, Pagination]}
//                 loop={true}
//                 autoplay={true}
//                 delay={8000}
//                 spaceBetween={50}
//                 slidesPerView={2}
//                 className=''
//             >
//                 {slides.map(slide =>
//                     <div className=''>
//                         <SwiperSlide>
//                             <img src={slide?.imgSrc} alt="" className='w-96 h-96' />
//                         </SwiperSlide>
//                         <SwiperSlide>
//                             <div className="detail__container">
//                                 <h3 className="heding" >{slide.title}</h3>
//                                 <article className="Article">{slide.description}</article>
//                                 <div className="button__conatainer">
//                                     <a href={slide.url}><button className=" button git__button">Git</button></a>
//                                     <a href={slide.Live}><button className=" button live__button">Live Link</button></a>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     </div>

//                 )}

//             </Swiper>
//         </div>

//     );
// };
// export default project;