import { Bio } from './Bio';
import { TechStack } from './TechStack'
import { useState, useEffect } from 'react';
import { fetchImage } from '../util/apiCalls';
import mountain from '../images/mountain.png';
import nightsky from '../images/nightsky.jpg';
import { tsParticles } from '../config/configParticles';
import Particles from 'react-tsparticles';
import logo from '../images/logo.png';
import Fade from 'react-reveal/Fade'; 

export const Home = () => {
    const [apod, setApod] = useState('');

    useEffect(() => {
        fetchImage()
        .then(data => 
            data.url.includes('youtube') ? setApod(nightsky) : setApod(data.url))
    },[apod])

    return (
        <>
        <section className='home' style={{backgroundImage: `url(${apod})`, backgroundSize: 'cover', backgroundAttachment: 'fixed'}}>
            <Particles params={tsParticles} height='100vh' width='100vw'>
            </Particles>
            <div className='home-bottom'>
                <img src={ mountain } className='mountain' alt='mountain and sunflower field'/>
            </div>
            <Fade left delay={800}>
            <img className='logo' src={logo} alt='rachael logo'></img>
            </Fade>
        </section>
        <Bio />
        <TechStack />
        </>
    )
}