import React from 'react'
import { NavLink } from 'react-router-dom'
import NavItems from '../navbar/NavItems'
import './Footer.scss'
import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()


function Footer() {
    return (
        <div className='footer'>
            <div className="footer-container"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-easing="ease-in-out">
                <div className="footer-column">
                    <h4>Navigation</h4>
                    <ul>
                        {NavItems.map(item => {
                            return (
                                <li className="nav-item" key={item.id}>
                                    <NavLink className={item.cName} to={item.link}>{item.label}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Our pages</h4>
                    <ul>
                        <li><a href="#">gellery</a></li>
                        <li><a href="#">videos</a></li>
                        <li><a href="#"></a>visit</li>
                        <li><a href="#"></a>team</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Importent links</h4>
                    <ul>
                        <li><a href="#">stock excenge</a></li>
                        <li><a href="#">busness hub</a></li>
                        <li><a href=""></a>market analysis</li>
                        <li><a href="#"></a>roadmap</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Reviews</h4>
                    <ul>
                        <li><a href="#">Top</a></li>
                        <li><a href="#">Recent</a></li>
                        <li><a href="#"></a>Customars</li>
                        <li><a href="#"></a>others</li>
                    </ul>
                </div>
            </div>

            <div className="bottom-line">
                <p className='bottom-line-column'>&copy; Copyright reserve-2020</p>
                <p className='bottom-line-column'>designer: <a href="http://www.facebook.com/lx.shahjalal">Shahjalal</a></p>
                <div className="social bottom-line-column">
                    <a href="http://www.facebook.com/lx.shahjalal" className='social-link'>
                        <AiOutlineFacebook size='1.5em' />
                    </a>
                    <a href="http://www.linkedin.com/lx.shahjalal" className='social-link'>
                        <AiOutlineLinkedin size='1.5em' />
                    </a>
                    <a href="http://www.intagram.com/lx.shahjalal" className='social-link'>
                        <AiOutlineInstagram size='1.5em' />
                    </a>
                    <a href="http://github.com/lxshahjalal" className='social-link'>
                        <AiOutlineGithub size='1.5em' />
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Footer
