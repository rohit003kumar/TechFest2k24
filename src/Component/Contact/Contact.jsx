import React from 'react'
import './Contact.css'




const Contact = () => {
  return (
      <section className="contact">
        <div className="content">
            <h2 data-text="Contact Us">Contact Us</h2>
            <h3>We’d Love to Hear From You!</h3>
            <p>Have questions, suggestions, or need assistance? Our team is here to help! Reach out to us using the information below, and we’ll get back to you as soon as possible.</p>
        </div>

        <div className="container">
            <div className="contactInfo">
                <div className="box">
                    <div className="icon"><b></b><i className="fa-solid fa-location-dot"></i></div>
                    <div className="text">
                        <h3>Address</h3>
                        <p>Gandhi Engineering College, <br/> Bhubaneswar, Madanpur, <br/>752054</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"><b></b><i className="fa-solid fa-phone"></i></div>
                    <div className="text">
                        <h3>Phone</h3>
                        <p>+91-000-000-0000</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"><b></b><i className="fa-solid fa-envelope"></i></div>
                    <div className="text">
                        <h3>Email</h3>
                        <p>xyz@gmail.com</p>
                    </div>
                </div>
                <h2 className="text1">Connect with us</h2>
                <ul className="sci">
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
            </div>
            <div className="contactForm">
                <form >
                    <h2>Send Message</h2>
                    <div className="inputBox">
                        <input type="text" name="name" required/>
                        <span>Full Name</span>
                    </div>
                    <div className="inputBox">
                        <input type="email" name="email" required/>
                        <span>Email</span>
                    </div>
                    <div className="inputBox">
                        <input type="tel" name="phone No."/>
                        <span>Phone No.</span>
                    </div>
                    <div className="inputBox">
                        <textarea placeholder="Write here..." name="Query" required></textarea>
                        <span>Your Query</span>
                    </div>

                    <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"/>

                    <div className="inputBox">
                        <input type="submit" value="Send"/>
                    </div>
                </form>
            </div>
        </div>
    </section>
  );
};

export default Contact