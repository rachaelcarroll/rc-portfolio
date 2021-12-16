import Fade from 'react-reveal';
import { BsBrush, BsCodeSlash, BsTerminal } from 'react-icons/bs';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const TechStack = () => {

    return (
        <main className='tech-container'>
        <Fade bottom>
            <div className='tech-icons'>  
            <Popup trigger={<button> 
                <BsCodeSlash style={{fontSize: '4rem', margin: '1rem'}}/>
            </button>} position="bottom center" on={['hover', 'focus']}>
                <div className='tech-specs'>
                    <h3> - Front End - </h3> 
                    <p>React / JavaScript / TypeScript / HTML5 / SCSS / Cypress </p>
                </div>
            </Popup>
            {/* <Popup trigger={<button> 
                <BsTerminal style={{fontSize: '4rem', margin: '1rem'}}/>
            </button>} position="bottom center" on={['hover', 'focus']}>
                <div className='tech-specs'>
                    <h3> - Back End - </h3> 
                    <p>Node.js / Express / PostgreSQL</p>
                </div>
            </Popup> */}
            <Popup trigger={<button> 
                <BsBrush style={{fontSize: '4rem', margin: '1rem'}}/>
            </button>} position="bottom center" on={['hover', 'focus']}>
                <div className='tech-specs'>
                    <h3> - Design Tools - </h3> 
                    <p>Figma / Sketch / Miro / Adobe</p>
                </div>
            </Popup>        
            </div>
        </Fade>
        {/* <Fade bottom>
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
    </Fade> */}
    </main>
    )
}