import { Project } from './Project';
import { projectData } from './projectData';

export const Projects = () => {

    const projects = projectData.map(project => {
        return (
            <Project 
            key={project.id}
            project={project}
            />
        )
    })

    return (
        <section>
            {projects}
        </section>
    )
}

