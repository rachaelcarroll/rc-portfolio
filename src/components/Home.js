import { Bio } from './Bio';
import { TechStack } from './TechStack'
import { useState, useEffect } from 'react';
import mountain from '../images/mountain.png'

export const Home = () => {
    const [apod, setApod] = useState('');

    useEffect(() => {
        fetchImage()
        .then(data => setApod(data.url))
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
        <section className='home' style={{backgroundImage: `url(${apod})`, backgroundSize: 'cover', backgroundAttachment: 'fixed'}}>
            <div className='home-bottom'>
                <img src={ mountain } className='mountain' alt='mountain and sunflower field'/>
            </div>
        </section>
        <Bio />
        <TechStack/>
        </>
    )
}