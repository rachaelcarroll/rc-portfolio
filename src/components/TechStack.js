import Fade from 'react-reveal';
import { BsBrush, BsCodeSlash, BsTerminal } from 'react-icons/bs';


export const TechStack = () => {

    return (
        <main className='tech-container'>
        <div className='tech-icons'>  
            <BsCodeSlash style={{fontSize: '4rem', margin: '1rem'}}/>
            <BsTerminal style={{fontSize: '4rem', margin: '1rem'}}/>
            <BsBrush style={{fontSize: '4rem', margin: '1rem'}}/>
        </div>
        <Fade bottom>
        <div className='tech'>
            <section className='frontend'>
                <h3 className='tech-header-text'>Frontend</h3>
                <p className='tech-header-sub-text'> I value an intuitive user experience and reliable, captivating features. </p>
                <ul className='tech-content'>
                    <li>React</li>
                    <li>HTML/SCSS</li>
                    <li>Javascript</li>
                    <li>Cypress</li>
                    <li>Bootstrap</li>
                </ul>
            </section>

            <section className='backend'>
                <h3 className='tech-header-text'>Backend</h3>
                <p className='tech-header-sub-text'> I'm intrigued by connecting relationships and data modeling on the backend. </p>
                <ul className='tech-content'>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                    <li>Heroku</li>
                </ul>
            </section>

            <section className='design'>
                <h3 className='tech-header-text'>Design</h3>
                <p className='tech-header-sub-text'> Design is powerful and I love the entire concept to completion process.</p>
                <ul className='tech-content'>
                    <li>Figma</li>
                    <li>Miro</li>
                    <li>Adobe Creative Suite</li>
                </ul>
            </section>
    </div>
    </Fade>
    </main>
    )
}