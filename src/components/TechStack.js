import Fade from 'react-reveal';

export const TechStack = () => {

    return (
        <main className='tech-container'>
        <div>
            <h2 className='tech-title'>Tech Stack</h2>

        </div>
        <Fade bottom>
        <div className='tech' >
        <section className='frontend'>
        <img class='tech-icon' src='https://i.ibb.co/hK1jVjG/coding.png' alt='frontend'/>
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
        <div className='test'>
        <ul className='tech-content'>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>Heroku</li>
        </ul>
        <img class='tech-icon' src='https://i.ibb.co/cw4zn49/data-collection.png' alt='backend'/>
        </div>
    </section>

    <section className='design'>
    <img class='tech-icon' src='https://i.ibb.co/7YPk7Ct/pencil.png' alt='design'/>
    <h3 className='tech-header-text'>Design</h3>
        <p className='tech-header-sub-text'> Design is powerful and I love the process of concept to completion.</p>
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