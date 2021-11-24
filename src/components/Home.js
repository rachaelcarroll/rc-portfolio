import { Bio } from './Bio';
import { TechStack } from './TechStack'
import Fade from 'react-reveal/Fade';
import { useState, useEffect } from 'react';
import mountain from '../images/mountain.png'

export const Home = () => {
    const [apod, setApod] = useState('');

    useEffect(() => {
        fetchImage()
        .then(data => setApod(data.url))
        console.log("???", apod)
    },[apod])

    const fetchImage = () => {
        return fetch('https://api.nasa.gov/planetary/apod?api_key=1tfzjlOIYDaAuOUBR2Tw5LRAvteh2KPbVeqGpMQ2')
        .then(response => {
          if(!response.ok) {
            throw Error('Error fetching APOD')
          }
          return response.json()
        })
    }

    return (
        <>
        <section className='home'style={{background: `url(${apod}) no-repeat`, backgroundSize: 'cover'}}>
            {/* <div className='header'>
            <Fade top>
                <h1 className='name'>rachael carroll</h1>
                <h2 className='occupation'>software developer</h2>
            </Fade>
            </div> */}
            <div className='home-bottom'>
                <img src={ mountain } className='mountain' alt='mountain and sunflower field'/>
            </div>
        </section>
        <Bio />
        <TechStack/>
        </>
    )
}