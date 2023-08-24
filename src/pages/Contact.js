import React  from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import resume from '../util/rachael-carroll.pdf'

export const Contact = () => {

    return (
        <section className='contact'>
            <Fade top>
            <h2>Let’s start a conversation.</h2>
            </Fade>

            <Flip left cascade delay={500}>
                <p className='contact-text'>Find me on<span> <a href ='https://www.linkedin.com/in/rachaelcarroll/' target='_blank' rel='noreferrer'>LinkedIn</a> </span>
                or via email at <span><a href ='mailto:rachaelcarroll.m@gmail.com'>rachaelcarroll.m@gmail.com.</a></span> </p> 
            </Flip>

            <Link
                to={resume}
                download="rachael-carroll"
                target="_blank"
                rel="noreferrer"
            >
                <button className='resume'>
                    download resume
                </button>
            </Link>
        </section>
    )
}