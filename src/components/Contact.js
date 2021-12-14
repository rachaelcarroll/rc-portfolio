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
                <a href ='mailto:rachaelcarroll.m@gmail.com'
                style={{margin: '4rem', color: 'white'}}>rachaelcarroll.m@gmail.com</a>  
            </Flip>
        </section>
    )
}