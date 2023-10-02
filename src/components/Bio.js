import React, { Fragment }  from 'react';
import { Link } from 'react-router-dom';
import { about } from '../util/aboutMe';
import Fade from 'react-reveal/Fade';
import { Slide } from 'react-reveal';
import resume from '../util/rachael-carroll.pdf'

export const Bio = () => {
    
    return (
        <section className="about">
                <section className="bio">
                    <Fade left duration={1000} delay={1000} distance="30px">
                    <article>
                    <div className="bio-details">
                        {about.map(paragraph => {
                            return (
                                <Fragment key={paragraph}>
                                    <p className="bio-text">{paragraph}</p>
                                    <br></br> 
                                </Fragment >
                            )}
                        )}
                    </div>
                    </article>
                    </Fade>
                </section>
                <section className="bio-btns">
                    <Slide left duration={800} distance="30px">
                        <Link to="/projects">
                            <button className='resume'>
                                projects
                            </button> 
                        </Link>
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
                    </Slide>
                </section>
        </section>
    )
}
