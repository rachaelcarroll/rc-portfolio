import { HashLink } from 'react-router-hash-link';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';

export const NavBar = () => {

    const location = useLocation().pathname


    return (
        <section className='nav'>
            <Link to='/'>
                <div className='nav-header'>
                    <img src={logo} alt='rachael carroll logo'></img>
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