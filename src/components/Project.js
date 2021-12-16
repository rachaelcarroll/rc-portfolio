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
                    <div className='project-links' style={{borderBottom: '1px solid white'}}>
                        <a href={project.repoLink}><img alt='github logo' src={github}/></a>                     
                        <h3>{project.name}</h3>
                        {project.deployedLink !== '' && (
                        <a href={project.deployedLink}><img alt={`${project.name} website icon`} src={web}/></a>
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

