import { Link } from 'react-router-dom';
import { about } from '../util/aboutMe';
import Fade from 'react-reveal/Fade';
import headshot from '../images/headshot.jpeg'
import resume from '../util/rachael-carroll.pdf'

export const Bio = () => {
    
    return (
        <main id='about' className='about'>
                <Fade top duration={1000} distance='0px'>
                  <h1 className='about-header'>hello</h1>
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
                    <Fade bottom duration={1000} delay={600} distance='30px'>
                    <div className='headshot'>
                        <img alt='rachael headshot' src={headshot}/>
                        <div className='bio-btns'>
                            <Link
                                to={resume}
                                download="rachael-carroll"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className='bio-btn'>
                                    resume
                                </button>
                            </Link>
                            <Link to='/contact'>
                             <button
                             className='bio-btn'>
                                 contact me
                             </button>
                            </Link>
                        </div>
                    </div>
                    </Fade>
                </section>
        </main>
    )
}
