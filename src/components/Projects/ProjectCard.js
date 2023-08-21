import React  from 'react';
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard = ({ project }) => {

    return (
        <article className='project-card'>
            <div className='project-card-inner'>
                <img
                className='project-card-front'
                alt='project preview'
                src={project.image}
                />
                <div className='project-card-back'>
                    <div className='project-header'>
                        <h3>{project.name}</h3>
                    </div>
                        <p className='summary-text'>{project.summary}</p>
                        <p><em>HIGHLIGHTS:</em> <span>{project.accomplishments}</span></p>
                        <p className='project-text'>{project.tech}</p>
                    <div className='project-links'>
                        <a href={project.repoLink}><FaGithub style={{color: 'white', fontSize: '2.5rem'}}/></a>                     
                        {project.deployedLink !== '' && (
                        <a href={project.deployedLink}><FaExternalLinkAlt style={{color: 'white', fontSize: '2rem'}} /></a>
                        )}
                    </div>
                </div>
            </div>
        </article>
    )
}

