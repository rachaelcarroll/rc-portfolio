import { HashLink } from 'react-router-hash-link';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../images/logo.png';

export const NavBar = () => {

    const [navBar, setNavBar] = useState(false);
    const location = useLocation().pathname
    
    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })

    const changeBackground = () => {
        if (window.scrollY >= 35) {
          setNavBar(true)
        } else {
          setNavBar(false)
        }
      }

    return (
        <section className={navBar ? 'nav-active' : 'nav'}>
            <Link to='/'>
                <div className='nav-header'>
                    <img src={logo}></img>
                </div> 
            </Link>
                <div className='nav-links'>
                    <NavLink to='/#about'>
                    <HashLink smooth to='/#about'>
                        <p className={`navbtn : ${location === '/#about'} && 'active'`}>about</p>
                    </HashLink>
                    </NavLink>
                    <NavLink to='/projects' className={`${location === '/projects'} && 'active'`}>
                        <p className='navbtn'>portfolio</p>
                    </NavLink>
                    <NavLink to='/contact'>
                        <p className={`navbtn : ${location === '/contact'} && 'active'`}>contact</p>
                    </NavLink>
                </div> 
        </section>
    )
}