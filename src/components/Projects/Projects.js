import { ProjectCard } from './ProjectCard';
import { projectData } from './projectData';
import Slide from 'react-reveal/Slide';

export const Projects = () => {

    const projects = projectData.map(project => {
        return (
            <ProjectCard
            key={project.id}
            project={project}
            />
        )
    })

    return (
        <>
        <h1 style={{margin: '4rem 0rem 0rem 0rem'}}>A curated collection of projects that I'm personally proud of, or have helped shape me as a developer.</h1>
        <Slide bottom duration={1000} delay={300} distance="0px">
            <section className='project-board'>
                {projects}
            </section>
        </Slide>
        </>
    )
}

