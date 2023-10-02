import React  from 'react';
import { ProjectCard } from '../components/Projects/ProjectCard';
import { projectData } from '../util/projectData';
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
            <h1 className='project-page-header'>A curated collection of personal projects to showcase my progression as a developer.</h1>
        </Fade>
        <Slide bottom duration={1500} delay={200} distance='0px'>
            <section className='project-board'>
                {projects}
            </section>
        </Slide>
        </>
    )
}

