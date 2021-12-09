import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { about } from '../util/aboutMe';

export const Bio = () => {

    return (
        <main id='about' className='about'>
                <Fade bottom duration={1000} delay={300} distance="0px">
                  <h2 className='about-header'>About Me</h2>
                </Fade>
                <section className='headshot-and-bio'>
                    <Fade bottom duration={1000} delay={600} distance="30px">
                    <div className='headshot'>
                        <img alt='rachael headshot' src='https://i.imgur.com/PTHFbBC.png'/>
                    </div>
                    </Fade>
                    <Fade left duration={1000} delay={1000} distance='30px'>
                    <article className='bio'>
                    <div className='bio-details'>
                        <p className='bio-text'>{about.paragraph1}</p>
                        <p className='bio-text'>{about.paragraph2}</p>
                        <p className='bio-text'>{about.paragraph3}</p>
                        <span className='bio-btns'>
                            <a
                            target="_blank"
                            href='https://drive.google.com/file/d/1R7JtGgg4RKQzCGywsf0Lq_EiJcfYbUnk/view?usp=sharing'
                            >
                                <button className='bio-btn'>
                                    resume
                                </button>
                            </a>
                            <Link to='/contact'>
                             <button
                             className='bio-btn'>
                                 contact me
                             </button>
                            </Link>
                        </span>
                    </div>
                    </article>
                    </Fade>
                </section>
        </main>
    )
}
