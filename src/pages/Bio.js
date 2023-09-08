import React  from 'react';
import { about } from '../util/aboutMe';
import Fade from 'react-reveal/Fade';
import { Emoji } from '../components/Emoji';

export const Bio = () => {
    
    return (
        <section id="about" name="about" className="about">
                <div className="about-header">
                <Fade top duration={1000} distance="0px">
                  <h1 className="about-text">hi there</h1>
                </Fade>
                <Fade right duration={1000} distance="0px">
                    <Emoji symbol="👋" label="waving hand"/>
                </Fade>
                </div>
                <section className="bio">
                    <Fade left duration={1000} delay={1000} distance="30px">
                    <article>
                    <div className="bio-details">
                        {about.map(paragraph => {
                            return (
                                <>
                                <p className="bio-text">{paragraph}</p>
                                <br></br> 
                                </>
                            )}
                        )}
                        <p className="bio-text">Oh, and the space background you're seeing is actually being pulled from a <span><a className="bio-link" href="https://data.nasa.gov/Space-Science/Astronomy-Picture-of-the-Day-API/ez2w-t8ua">NASA API</a></span>, so come on back tomorrow to see a different view!</p>
                    </div>
                    </article>
                    </Fade>
                </section>
                <button className="resume">
                download resume
                </button>
        </section>
    )
}
