import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <section className='nav'>
            <HashLink smooth to='/#about'>
                <p className='aboutBtn'>about</p>
            </HashLink>
            <NavLink to='/projects'>
                <p className='projectsBtn'>projects</p>
            </NavLink>
            <NavLink to='/contact'>
                <p className='contactBtn'>contact</p>
            </NavLink>
        </section>
    )
}