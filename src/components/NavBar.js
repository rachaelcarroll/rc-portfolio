import React from 'react';
import { Link } from 'react-router-dom';
import Fade from "react-reveal/Fade";
import logo from "../images/logo.png";

export const NavBar = () => {

    return (
        <section className='nav'>
            <Fade top delay={800}>
                <Link to="/">
                    <img className="logo" src={logo} alt="rachael logo"></img>
                </Link>
            </Fade>
        </section>
    )
}