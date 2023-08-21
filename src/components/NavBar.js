import React  from 'react';
import { HashLink } from 'react-router-hash-link';
import { NavLink, useLocation } from 'react-router-dom';
import Fade from "react-reveal/Fade";
import logo from "../images/logo.png";

export const NavBar = () => {

    const location = useLocation().pathname

    return (
        <section className='nav'>
            <Fade left delay={800}>
                <img className="logo" src={logo} alt="rachael logo"></img>
            </Fade>
            <div className='nav-links'>
                <NavLink to='/#about' className={`${location === '/#about'} && 'active'`}>
                    <HashLink smooth to='/#about'>
                        <p className='navbtn'>about</p>
                    </HashLink>
                </NavLink>
                <NavLink to='/contact'>
                    <p className={`navbtn : ${location === '/contact'} && 'active'`}>contact</p>
                </NavLink>
            </div> 
        </section>
    )
}