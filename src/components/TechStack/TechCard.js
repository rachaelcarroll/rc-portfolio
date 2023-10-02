import React  from 'react';

export const TechCard = ({type, logo, summary, stack}) => {
    return (
        <article className="card">
            <div className="tech-header-container">
              {logo}
              <h3 className="tech-header-text">{type}</h3>
            </div>
            <p className="tech-header-sub-text">
              {" "}
              {summary}{" "}
            </p>
            <ul className="tech-content">
              {stack.map(tech => (
                    <li key={tech}>{tech}</li>
                  )
              )}
            </ul>
          </article>
    )
}
