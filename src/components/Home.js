import { Bio } from './Bio';
import { Footer } from './Footer';

export const Home = () => {

    return (
        <>
        <section className='home-container'>
            <div className='header'>
                <h1 className='name'>rachael carroll</h1>
                <h2 className='occupation'>software developer</h2>
            </div>
        </section>
        <Bio />
        <Footer />
        </>
    )
}