import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard = ({ project }) => {

    return (
        <article className='project-card'>
            <div class='project-card-inner'>
                <img
                className='project-card-front'
                alt='project preview'
                src={project.image}
                />
                <div className='project-card-back'>
                    <div className='project-links' style={{borderBottom: '1px solid white'}}>
                        <a href={project.repoLink}><FaGithub style={{color: 'white', fontSize: '2.5rem'}}/></a>                     
                        <h3>{project.name}</h3>
                        {project.deployedLink !== '' && (
                        <a href={project.deployedLink}><FaExternalLinkAlt style={{color: 'white', fontSize: '2rem'}} /></a>
                        )}
                    </div>
                    <p className='summary-text'>{project.summary}</p>
                    <p>ACCOMPLISHMENTS: <span className='project-text'>{project.accomplishments}</span></p>
                    <p className='project-text'>{project.tech}</p>
                </div>
            </div>
        </article>
    )
}

