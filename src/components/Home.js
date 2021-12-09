import { Bio } from './Bio';
import { TechStack } from './TechStack'
import { useState, useEffect } from 'react';
import { fetchImage } from '../util/apiCalls';
import mountain from '../images/mountain.png';
import nightsky from '../images/nightsky.jpg';

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
            <div className='home-bottom'>
                <img src={ mountain } className='mountain' alt='mountain and sunflower field'/>
            </div>
        </section>
        <Bio />
        <TechStack/>
        </>
    )
}