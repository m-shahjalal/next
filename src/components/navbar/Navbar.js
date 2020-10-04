import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BiBarChartAlt2 } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import NavItems from './NavItems'
import './Navbar.scss'

function Navbar() {
    const [menu, setMenu] = useState(true)
    const closeMenu = () => {
        setMenu(true)
    }

    return (
        <div className='nav'>
            <nav className="nav-container">
                <div className="logo-container" onClick={closeMenu}>
                    <NavLink to='/'>
                        <BiBarChartAlt2 /> <span className='next'>NEXT</span>
                    </NavLink>
                </div>

                <ul className={menu ? 'hide navbar' : 'show'}>
                    {NavItems.map(item => {
                        return (
                            <li className="nav-item" key={item.id} onClick={closeMenu}>
                                <NavLink className={item.cName} to={item.link}>{item.label}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <div className="hamberbug" onClick={() => setMenu(!menu)}>
                {
                    window.innerWidth <= 900 && (
                        menu ? <FaBars /> : <FaTimes />
                    )
                }
            </div>
        </div>
    )
}

export default Navbar
