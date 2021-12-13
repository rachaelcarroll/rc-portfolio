import { useState } from 'react';
import github from '../images/github.png';
import web from '../images/web.png';

export const Project = ({ project }) => {

    return (
        <article className='project-card'>
            <div class='project-card-inner'>
                <img
                className='project-card-front'
                alt='project preview'
                src={project.image}
                />
                <div className='project-card-back'>
                    <h3>{project.name}</h3>
                    <p className='project-text'>{project.summary}</p>
                    <p className='project-text'>{project.tech}</p>
                    {/* <p className='project-text'>{project.accomplishments}</p> */}
                    <div className='project-links'>
                        <a href={project.repoLink}><img alt='github logo' src={github}/></a>
                        {project.deployedLink !== '' && (
                        <a href={project.deployedLink}><img alt={`${project.name} website icon`} src={web}/></a>
                        )}
                    </div>
                </div>
            </div>
        </article>
    )
}

