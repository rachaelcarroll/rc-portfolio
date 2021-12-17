import { HashLink } from 'react-router-hash-link';
import { NavLink, useLocation } from 'react-router-dom';

export const NavBar = () => {

    const location = useLocation().pathname

    return (
        <section className='nav'>
            <div className='nav-links'>
                <NavLink to='/#about' className={`${location === '/#about'} && 'active'`}>
                    <HashLink smooth to='/#about'>
                        <p className='navbtn'>about</p>
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