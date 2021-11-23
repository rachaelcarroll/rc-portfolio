import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

export const Bio = () => {

    return (
        <section className='about' id='about'>
            <Fade left>
                <div className='headshot'>this will be my photo!</div>
            </Fade>
            <div className='bio-and-resume'>
                <p className='bio'>this will be where my bio goes, yay!</p>
                <a href='https://drive.google.com/file/d/1R7JtGgg4RKQzCGywsf0Lq_EiJcfYbUnk/view?usp=sharing'> 
                    <button className='resume'>resume</button>
                </a>
                <Link to='/contact'>
                    <button>contact me</button>
                </Link>
            </div>
        </section>
    )
}
