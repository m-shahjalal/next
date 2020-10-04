import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Hero.scss'
import { AiFillCheckCircle, AiFillClockCircle, AiFillDingtalkCircle } from 'react-icons/ai'
import Button from '../Button/Button'

AOS.init();

function Hero() {
    const joinClickHandler = () => {
        const href = window.location.href = '/login'
        window.open(href)
    }
    return (
        <div>
            <div className="hero">
                <h1>We care You along with souls</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ullam sequi ut consectetur sit expedita nobis pariatur veniam Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ullam sequi</p>
                <div className="join-button">
                    <a href="/login"><Button onClick={joinClickHandler} style='join' value='JOIN TODAY' /></a>
                    <a href="/login"><Button style='join-outline' value='LON IN' /></a>
                </div>
            </div>
            <div className="feature" >
                <h1>Every company sould have those skills</h1>
                <div className="feature-item">
                    <div className="feature-item-card"
                        data-aos="flip-left"
                        data-aos-delay="100"
                        data-aos-easing="ease-in">
                        <AiFillCheckCircle size="75px" />
                        <h3>AUTHENTIC</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ea ratione facere?</p>
                        <ul>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                        </ul>
                    </div>
                    <div className="feature-item-card"
                        data-aos="fade"
                        data-aos-delay="100"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out-cubic">
                        <AiFillClockCircle size="75px" />
                        <h3>EFFICIENT</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ea ratione facere?</p>
                        <ul>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                        </ul>
                    </div>
                    <div className="feature-item-card"
                        data-aos="flip-right"
                        data-aos-delay="50"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out-cubic">
                        <AiFillDingtalkCircle size="75px" />
                        <h3>RELIABLE</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ea ratione facere?</p>
                        <ul>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                        </ul>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Hero
