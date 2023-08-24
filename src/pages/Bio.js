import React  from 'react';
import { about } from '../util/aboutMe';
import Fade from 'react-reveal/Fade';
import { Emoji } from '../components/Emoji';
import headshot from '../images/headshot.jpeg'

export const Bio = () => {
    
    return (
        <main id='about' name='about' className='about'>
                <Fade top duration={1000} distance='0px'>
                <div className='about-header'>
                  <h1 className='about-text'>hi there</h1>
                </div>
                </Fade>
                <Fade right duration={1000} distance='0px'>
                    <Emoji symbol="👋" label="waving hand"/>
                </Fade>
                <section className='headshot-and-bio'>
                    <Fade left duration={1000} delay={1000} distance='30px'>
                    <article className='bio'>
                    <div className='bio-details'>
                        <p className='bio-text'>{about.paragraph1}</p>
                        <p className='bio-text'>{about.paragraph2}</p>
                        <p className='bio-text'>{about.paragraph3}</p>
                        <p className='bio-text'>{about.paragraph4}</p>
                    </div>
                    </article>
                    </Fade>
                </section>
        </main>
    )
}
