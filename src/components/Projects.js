import { projectData } from '../util/projectData';
import { Project } from './Project';

export const Projects = () => {

    const projects = projectData.map(project => {
        return (
            <Project 
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

