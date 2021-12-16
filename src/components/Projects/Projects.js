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
        <Slide bottom duration={1000} delay={300} distance="0px">
            <section className='project-board'>
                {projects}
            </section>
        </Slide>
        </>
    )
}

