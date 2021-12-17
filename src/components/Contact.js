// import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';

export const Contact = () => {

    return (
        <section className='contact'>
            <Flip left cascade>
            <h2>Let’s start a conversation.<br></br>Who knows, it could lead to the next great idea.</h2>
            </Flip>

            <Flip left cascade delay={800}>
                <p className='contact-text'>Find me on<span> <a href ='https://www.linkedin.com/in/rachaelcarroll/' target='_blank' rel='noreferrer'>LinkedIn</a> </span>
                or via email at <span><a href ='mailto:rachaelcarroll.m@gmail.com'>rachaelcarroll.m@gmail.com.</a></span> </p> 
            </Flip>
        </section>
    )
}