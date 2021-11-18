import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <section className='nav'>
            <HashLink smooth to='/#about'>
                <button className='aboutBtn'>about</button>
            </HashLink>
            <NavLink to='/projects'>
                <button className='projectsBtn'>projects</button>
            </NavLink>
            <NavLink to='/contact'>
                <button className='contactBtn'>contact</button>
            </NavLink>
        </section>
    )
}