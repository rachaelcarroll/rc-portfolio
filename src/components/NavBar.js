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
        </section>
    )
}