import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import background from '../../Image/Review/background.jpg'
import { toast } from 'react-toastify';
import './Review.scss';
import signature from '../../Image/Review/Signature.png';
import { BiLogoYoutube, BiLogoInstagram } from 'react-icons/bi';

import { db } from "../../firebase";
import { collection, doc, onSnapshot, setDoc } from 'firebase/firestore';

export default function Review() {
    const [toggle, setToggle] = useState(false);
    const [form, setForm] = useState({ name: "", description: "", review: "" });
    const [review, setReview] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "review"), (snapShot) => {
            const review = snapShot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
            setReview(review);
        });

        return () => unsub(); // Unsubscribe from the snapshot listener on component unmount
    }, []);

    const handletoggle = (() => {
        setToggle(!toggle);
    });

    async function handleReview(e) {
        e.preventDefault();
        if (review.length >= 5) {
            setForm({ name: "", description: "", review: "", url: "" });
            toast.error('Review limit Reach!');
            return;
        }

        setReview([{ name: form.name, description: form.description, review: form.review, url: "" }]);

        const docRef = doc(collection(db, "review"));

        await setDoc(docRef, {
            name: form.name,
            description: form.description,
            review: form.review,
            url: form.url,
            createdOn: new Date()
        });
        toast.success('Review add successfully!');
        setForm({ name: "", description: "", review: "", url: "" });
        setToggle(false);
    }

    return (
        <div className='review__container'>

            <div className="review__sub_conrainer">
                <h3 className='review_heading'>What People Think About Me</h3>
                <div className="review__card_container">
                    <div className="review__form">
                        <button className="review__form_button" onClick={handletoggle}>
                            {toggle ? "Hide Form" : "Show Form"}
                        </button>
                        <form style={{ display: toggle ? "flex" : "none" }} onSubmit={handleReview}>
                            <input
                                type="text"
                                placeholder='name'
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder='description'
                                value={form.description}
                                onChange={(e) => setForm({ ...form, description: e.target.value })}
                            />
                            <input type="text"
                                placeholder='Enter-Image-Url'
                                value={form.url}
                                onChange={(e) => setForm({ ...form, url: e.target.value })}
                            />
                            <textarea
                                name="review"
                                placeholder='review'
                                value={form.review}
                                onChange={(e) => setForm({ ...form, review: e.target.value })}
                            ></textarea>
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        loop={true}
                        autoplay={true}
                        delay={5000}
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next'
                        }}
                    >
                        {review.map((card, index) => (
                            <SwiperSlide key={index} className="review__card">
                                <div className="review__card_profile">
                                    <div className="review__profile_detail">
                                        <img src={card.url} alt="user_profile" />
                                        <div>
                                            <h3>{card.name}</h3>
                                            <p>{card.description}</p>
                                        </div>
                                    </div>
                                    <div className="review__social_icons">
                                        <a href="https://www.youtube.com/@Sidhualston/featured" target='_blank' className=' social youtube'><BiLogoYoutube /></a>
                                        <a href="https://www.instagram.com/sidhu_alston/" target='_blank' className=' social instagram'><BiLogoInstagram /></a>
                                    </div>
                                </div>
                                <div className="review__card_article">
                                    <article>{card.review}</article>
                                </div>
                                <div className="review__card_signature">
                                    <img src={signature} alt="signature" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="about__img relative"
                style={{
                    backgroundImage: `url(${background})`,
                }}
            >
                <div className='absolute w-full h-full bg-black opacity-25 top-0'></div>

            </div>
        </div>
    );
}
