import { HashLink } from 'react-router-hash-link';
import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const NavBar = () => {

    const [navBar, setNavBar] = useState(false);
    const location = useLocation().pathname
    
    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })

    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 35) {
          setNavBar(true)
        } else {
          setNavBar(false)
        }
      }

    return (
        <section className={navBar ? 'nav-active' : 'nav'}>
            <HashLink smooth to='/#about'>
                <p className={`navbtn : ${location === '/#about'} && 'active'`}>about</p>
            </HashLink>
            <NavLink to='/projects' className={`${location === '/projects'} && 'active'`}>
                <p className='navbtn'>projects</p>
            </NavLink>
            <NavLink to='/contact'>
                <p className={`navbtn : ${location === '/contact'} && 'active'`}>contact</p>
            </NavLink>
        </section>
    )
}