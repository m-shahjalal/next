import React from 'react'
import './About.scss'
import lady1 from '../../assets/lady1.jpg'
import lady2 from '../../assets/lady2.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

function about() {
    return (
        <div className='about'>
            <div className='about-container'>
                <div className="about-hero">
                    <h1>ABOUT US</h1>
                </div>
                <div className="about-details">
                    <div className="about-slide1">
                        <div className="about-col"
                            data-aos="flip-left"
                            data-aos-delay="200"
                        >
                            <img src={lady1} alt="" />
                        </div>
                        <div className="about-col"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="2500"
                        >
                            <h1>Who we are!</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi optio ullam enim tempore, magnam consequatur dolorum esse alias est, eligendi velit molestiae architecto consectetur ducimus molestias nam suscipit fugiat perspiciatis.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, fugit quaerat? Nobis, quia est expedita error repellat minus ea laudantium.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus alias tenetur deleniti autem est. Doloribus.</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi optio ullam enim tempore, magnam consequatur dolorum esse alias est, eligendi velit molestiae architecto consectetur ducimus molestias nam suscipit fugiat perspiciatis.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, fugit quaerat? Nobis, quia est expedita error repellat minus ea laudantium.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus alias tenetur deleniti autem est. Doloribus.</p>
                        </div>
                    </div>


                    <div className="about-slide2"
                        data-aos='fade-up'
                        data-aos-delay='200'
                        data-aos-duration='2500'
                    >
                        <div className="about-col">
                            <h1>How differect we are</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi optio ullam enim tempore, magnam consequatur dolorum esse alias est, eligendi velit molestiae architecto consectetur ducimus molestias nam suscipit fugiat perspiciatis.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, fugit quaerat? Nobis, quia est expedita error repellat minus ea laudantium.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus alias tenetur deleniti autem est. Doloribus.</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi optio ullam enim tempore, magnam consequatur dolorum esse alias est, eligendi velit molestiae architecto consectetur ducimus molestias nam suscipit fugiat perspiciatis.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, fugit quaerat? Nobis, quia est expedita error repellat minus ea laudantium.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus alias tenetur deleniti autem est. Doloribus.</p>
                        </div>
                        <div className="about-col"
                             data-aos="flip-right"
                             data-aos-delay="50"
                             data-aos-duration="2000"
                             data-aos-easing="ease-in-out-cubic"
                        >
                            <img src={lady2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about
