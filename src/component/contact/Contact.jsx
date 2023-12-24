import React, { useState } from 'react';
import { BsFillTelephoneForwardFill } from 'react-icons/bs'
import { BiLogoLinkedin, BiLogoYoutube, BiLogoInstagram, BiLogoWhatsapp, } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import './Contact.scss'
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", companyName: "", message: "" })
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const userID = import.meta.env.VITE_USER_ID;


    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.name === '') {
            setNameError('Please fill out this field!');
        }
        else {
            setNameError('');
        }

        if (form.email === '') {
            setEmailError('Please fill out this field!');
        }
        else {
            setEmailError('');
        }

        // Prepare the email parameters
        const templateParams = {
            from_name: form.name,
            from_email: form.email,
            company_name: form.companyName,
            message: form.message
        };

        // Send the email using EmailJS
        emailjs.send(serviceID, templateID, templateParams, userID)
            .then(() => {
                toast.success('Message sent successfully!');
                // You can display a success message or perform any other actions here
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
                toast.error('Failed to send message.');
                // You can display an error message or perform any other actions here
            });
        setForm({ name: "", email: "", companyName: "", message: "" })
    };

    const handleReset = () => {
        setForm({ name: "", email: "", companyName: "", message: "" })
        setNameError('');
        setEmailError('');
    };

    return (
        <div id='Contact' className="contact__container">
            <div className="contact__sub_container">
                <div className="contact_form_container">
                    <h4>Connect With Me, I Here.</h4>
                    <h2 className="form-headline">Send us a message</h2>
                    <form id="submit-form" onSubmit={handleSubmit}>
                        <p>
                            <input
                                id="name"
                                className="form-input"
                                type="text"
                                placeholder="Your Name*"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                            />
                            <small className="name-error">{nameError}</small>
                        </p>
                        <p>
                            <input
                                id="email"
                                className="form-input"
                                type="email"
                                placeholder="Your Email*"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                            />
                            <small className="name-error">{emailError}</small>
                        </p>
                        <p className="full-width">
                            <input
                                id="company-name"
                                className="form-input"
                                type="text"
                                placeholder="Company Name*"
                                value={form.companyName}
                                onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                            />
                            <small></small>
                        </p>
                        <p className="full-width">
                            <textarea
                                minLength="20"
                                id="message"
                                cols="30"
                                rows="7"
                                placeholder="Your Message*"
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                required
                            ></textarea>
                            <small></small>
                        </p>
                        <p className="full-width">
                            <input
                                type="checkbox"
                                id="checkbox"
                                name="checkbox"
                                defaultChecked
                            />{' '}
                            Yes, I fill All field.
                        </p>
                        <p className="full-width">
                            <button type="submit" className="submit-btn px-4 py-1 font-medium">Submit</button>
                            <button className='reset-btn px-4 py-1 font-medium' type="button" onClick={handleReset}>
                                Reset
                            </button>
                        </p>
                    </form>
                </div>

                <div className="contacts contact-wrapper">
                    <ul>
                        <li>
                            As a Full Stack Web Developer, I builded a foundation in programming and development concepts. I create{' '}
                            <span className="highlight-text-grey">30 +</span> more project in FrontEnd, BackEnd and FullStack
                        </li>
                        <span className="hightlight-contact-info">
                            <li className="contact__info email-info">
                                <MdEmail />{' '}
                                <a href="mailto:siddhantsharma9926@gmail.com" >siddhantsharma9926@gmail.com</a>

                            </li>
                            <li className="contact__info">
                                {/* <i className="fa fa-phone" aria-hidden="true"></i> */}
                                <BsFillTelephoneForwardFill />
                                {' '}
                                <a className="highlight-text">+91 8085984844</a>
                            </li>
                        </span>
                    </ul>
                    <div className="contact__social_icon">
                        <div className="card">
                            <a href="https://www.linkedin.com/in/siddhantsharma9" className="socialContainer linkedin">
                                <BiLogoLinkedin />
                            </a>

                            <a href="https://www.youtube.com/@Sidhualston/featured" className="socialContainer youtube">
                                <BiLogoYoutube />
                            </a>

                            <a href="https://www.instagram.com/sidhu_alston/" className="socialContainer instagram">
                                <BiLogoInstagram />
                            </a>

                            <a href="https://wa.me/8085984844" className="socialContainer whatsapp">
                                <BiLogoWhatsapp />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Contact;

