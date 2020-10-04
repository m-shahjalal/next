import React from 'react'
import './Slide.scss'
import { Slides } from './SlideContent'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Button from '../Button/Button'

AOS.init()

function Slide() {
    return (
        <div className='slide'>
            {Slides.map((slide, index) => {
                return (
                    <div className={slide.theme} key={index}>
                        <div className={slide.reverse + ' flexbox'}
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out-cubic">
                            <div className='img-container'>
                                <img src={slide.src} alt={slide.lead} />
                            </div>
                            <div className='description'>
                                <h2>{slide.lead}</h2>
                                <p>{slide.text}</p>
                                <div className="right">
                                    <Button className='button' value='Click for details' style='outlinePrimary' />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Slide

