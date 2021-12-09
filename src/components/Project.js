import github from '../images/github.png';
import web from '../images/web.png';

export const Project = ({ project }) => {

    return (
        <article className='project-card'>
            <img
            className='project-preview'
            alt='project preview'
            src={project.image}
            />
            <div className='project-details'>
                <h3>{project.name}</h3>
                <p className='project-text'>{project.summary}</p>
                <p className='project-text'>{project.tech}</p>
                {/* <p className='project-text'>{project.accomplishments}</p> */}
                <div>
                    <a href={project.repoLink}><img alt='github logo' src={github}/></a>
                    {project.deployedLink !== '' && (
                    <a href={project.deployedLink}><img alt={`${project.name} website icon`} src={web}/></a>
                    )}
                </div>
            </div>
        </article>
    )
}

