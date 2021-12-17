import Fade from 'react-reveal';
import { BsBrush, BsCodeSlash, BsTerminal } from 'react-icons/bs';
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { RiOrganizationChart } from "react-icons/ri";


export const TechStack = () => {

    return (
        <section className='tech-container'>
        {/* <Fade bottom>
            <div className='tech-icons'>  
            <Popup trigger={<button> 
                <BsCodeSlash style={{fontSize: '4rem', margin: '1rem'}}/>
            </button>} position="bottom center" on={['hover', 'focus']}>
                <div className='tech-specs'>
                    <h3> - Front End - </h3> 
                    <p>React / JavaScript / TypeScript / HTML5 / SCSS / Cypress </p>
                </div>
            </Popup>
            <Popup trigger={<button> 
                <BsTerminal style={{fontSize: '4rem', margin: '1rem'}}/>
            </button>} position="bottom center" on={['hover', 'focus']}>
                <div className='tech-specs'>
                    <h3> - Back End - </h3> 
                    <p>Node.js / Express / PostgreSQL</p>
                </div>
            </Popup>
            <Popup trigger={<button> 
                <BsBrush style={{fontSize: '4rem', margin: '1rem'}}/>
            </button>} position="bottom center" on={['hover', 'focus']}>
                <div className='tech-specs'>
                    <h3> - Design Tools - </h3> 
                    <p>Figma / Sketch / Miro / Adobe</p>
                </div>
            </Popup>        
            </div>
        </Fade> */}
        <Fade bottom>
            <section className='fe-be'>
                <article className='frontend'>
                    <div className='tech-header-container'>
                        <BsCodeSlash style={{fontSize: '2rem', margin: '1rem', color: 'grey'}}/>
                        <h3 className='tech-header-text'>Frontend</h3>
                    </div>
                    <p className='tech-header-sub-text'> I value an intuitive user experience and reliable, captivating features. </p>
                    <ul className='tech-content'>
                        <li>React</li>
                        <li>Javascript</li>
                        <li>HTML / SCSS</li>
                        <li>Cypress</li>
                        <li>GraphQL / ApolloClient</li>
                    </ul>
                </article>
                <article className='backend'>
                    <div className='tech-header-container'>
                        <BsTerminal style={{fontSize: '2rem', margin: '1rem', color: 'grey'}}/>
                        <h3 className='tech-header-text'>Backend</h3>
                    </div>
                    <p className='tech-header-sub-text'> I'm intrigued by connecting relationships and data modeling on the backend. </p>
                    <ul className='tech-content'>
                        <li>Express</li>
                        <li>PostgreSQL</li>
                        <li>RESTful APIs</li>
                        <li>Heroku</li>
                    </ul>
                </article>
            </section>
            <section className='design-workflow'>

                <article className='design'>
                    <div className='tech-header-container'>
                        <BsBrush style={{fontSize: '2rem', margin: '1rem', color: 'grey'}}/>
                        <h3 className='tech-header-text'>Design</h3>
                    </div>
                    <p className='tech-header-sub-text'> Design is a powerful tool and I love the creative process.</p>
                    <ul className='tech-content'>
                        <li>Figma</li>
                        <li>Miro</li>
                        <li>Sketch</li>
                        <li>Canva</li>
                        <li>Adobe Creative Suite</li>
                    </ul>
                </article>
                <article className='work-flow'>
                    <div className='tech-header-container'>
                        <RiOrganizationChart style={{fontSize: '2rem', margin: '1rem', color: 'grey'}}/>
                        <h3 className='tech-header-text'>Systems and Workflow</h3>
                    </div>
                    <p className='tech-header-sub-text'> I believe systems and processes are one of the most important aspects of development.</p>
                    <ul className='tech-content'>
                        <li>Git / Github</li>
                        <li>Github Projects</li>
                        <li>Trello</li>
                        <li>OOP</li>
                        <li>Agile</li>
                    </ul>
                </article>
            </section>
    </Fade>
    </section>
    )
}