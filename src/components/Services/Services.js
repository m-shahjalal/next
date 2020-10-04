import React from 'react'
import { FcAddDatabase, FcAutomotive, FcChargeBattery, FcClock, FcComboChart, FcDataSheet, FcGlobe, FcLowPriority, FcWorkflow } from 'react-icons/fc'
import './Services.scss'

function Service() {
    return (
        <div className='service'>
            <div className="head">
                <h1>Services</h1>
            </div>
            <div className="lead-text">
            <h1>We are ready to help you!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="service-container">
                <div className="service-item" data-aos="fade-right">
                    <div className="service-card" data-aos="fade-right">
                        <a href="#">
                            <FcAddDatabase size='8em' />
                            <h2>Online Store</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate aperiam fuga veniam architecto quae eaque nemo?</p>
                        </a>
                    </div>

                    <div className="service-card" data-aos="fade-down">
                        <a href="#">
                            <FcAutomotive size='8em' />
                            <h2>Express delevaryy</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate aperiam fuga veniam architecto quae eaque nemo? Lorem, ipsum dolor.</p>
                        </a>
                    </div>

                    <div className="service-card" data-aos="fade-left" data-aos-delay='200'>
                        <a href="#">
                            <FcChargeBattery size='8em' />
                            <h2>Inspirational work</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate aperiam fuga veniam architque nemo?</p>
                        </a>
                    </div>
                </div>

                <div className="service-item"  data-aos="flip-left" data-aos-delay='200'>
                    <div className="service-card">
                        <a href="#">
                            <FcClock size='8em' />
                            <h2>Time Management</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate aperiam fuga veniam architecto Lorem, ipsum dolor.</p>
                        </a>
                    </div>

                    <div className="service-card"  data-aos="fade-up" data-aos-delay='200'>
                        <a href="#">
                            <FcDataSheet size='8em' />
                            <h2>Online Chirts</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate aperiam fuga veniam architecto quae eaque nemo? Lorem, ipsum.</p>
                        </a>
                    </div>

                    <div className="service-card"  data-aos="zoom-in" data-aos-delay='200'>
                        <a href="#">
                            <FcComboChart size='8em' />
                            <h2>Business Grow</h2>
                            <p>Lorem, ipsum dolor sit amet adipisicing elit. Eos voluptate aperiam fuga veniam architecto quae eaque nemo?</p>
                        </a>
                    </div>
                </div>

                <div className="service-item"  data-aos="zoom-in-left" data-aos-delay='200'>
                    <div className="service-card">
                        <a href="#">
                            <FcGlobe size='8em' />
                            <h2>World Class Service</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate aperiam fuga veniam architecto quae eaque nemo?s.</p>
                        </a>
                    </div>

                    <div className="service-card"  data-aos="zoom-in-down" data-aos-delay='200'>
                        <a href="#">
                            <FcLowPriority size='8em' />
                            <h2>Connected Power</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate aperiam fuga veniam architecto quae eaque nemo?</p>
                        </a>
                    </div>
                    <div className="service-card"  data-aos="zoom-in-right" data-aos-delay='200'>
                        <a href="#">
                            <FcWorkflow size='8em' />
                            <h2>Large Community</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate aperiam fuga veniam architecto quae eaque nemo? Lorem ipsum dolor sit amet.</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
