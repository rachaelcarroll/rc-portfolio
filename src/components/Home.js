import { Bio } from './Bio';
import Fade from 'react-reveal/Fade';


export const Home = () => {

    return (
        <>
        <section className='home-container'>
            <div className='header'>
            <Fade top>
                <h1 className='name'>rachael carroll</h1>
                <h2 className='occupation'>software developer</h2>
            </Fade>
            </div>
        </section>
        <Bio />
        </>
    )
}