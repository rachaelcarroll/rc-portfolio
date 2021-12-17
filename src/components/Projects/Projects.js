import { ProjectCard } from './ProjectCard';
import { projectData } from './projectData';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

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
        <Fade top>
            <h1 className='project-page-header'>A curated collection of projects that I'm personally proud of, or have helped shape me as a developer.</h1>
        </Fade>
        <Slide bottom duration={1000} delay={300} distance="0px">
            <section className='project-board'>
                {projects}
            </section>
        </Slide>
        </>
    )
}

