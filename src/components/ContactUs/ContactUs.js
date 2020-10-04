import React from 'react'
import './ContactUs.scss'
import display from '../../assets/contactDisplay.jpg'

function ContactUs() {
    
    return (
        <div className='contact'>
            <div className="contact-container">
                <div className="contact-cover">
                    <h1>Contact us</h1>
                </div>
                <div className="contact-head" data-aos="flip-down" data-aos-delay="500">
                    <h1>Any inquiry or suggestions!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem accusamus labore quae velit deleniti? Impedit, odio. Deserunt, tempore iure.</p>
                </div>
                <div className="contact-flex-container">
                    <div className="contact-flex" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="2000">
                        <div className="items item-one" data-aos="flip-down" data-aos-delay="500" data-aos-duration="2000">
                            <img src={display} alt="Contact Display sample image" />
                        </div>
                        <div className="items item-two" data-aos="flip-right" data-aos-delay="500" data-aos-duration="2000">
                            <form action="/" method="POST" className='contact-form'>
                                <input type="text" className="pName" id="pName" name="pName" placeholder="Type Your Full Name" />
                                <input type="email" className="email" id="email" name="email" placeholder="Type Your Valid Email" />
                                <textarea type="text" className="message" id="message" name="message" placeholder="Type Your Words here..." />
                                <button className="btn" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
