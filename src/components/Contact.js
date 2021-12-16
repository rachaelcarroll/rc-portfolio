import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';

export const Contact = () => {

    return (
        <section className='contact'>
            <Zoom right duration={1400} delay={100} distance='4rem'>
            <h2>Let’s start a conversation.</h2>
            <h2>Who knows, it could lead to the next great idea.</h2>
            </Zoom>

            <Flip left cascade delay={1500}>
                <p>Find me on<span> <a href ='https://www.linkedin.com/in/rachaelcarroll/' target='_blank' rel='noreferrer'>LinkedIn</a> </span>
                or via email at <span><a href ='mailto:rachaelcarroll.m@gmail.com'>rachaelcarroll.m@gmail.com.</a></span> </p> 
            </Flip>
        </section>
    )
}