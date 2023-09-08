import React  from 'react';

export const TechCard = ({type, logo, summary, stack}) => {
    return (
        <article className={type}>
            <div className="tech-header-container">
              {/* <{logo}
                style={{ fontSize: "2rem", margin: "1rem", color: "lightgrey" }}
              /> */}
              <h3 className="tech-header-text">{type}</h3>
            </div>
            <p className="tech-header-sub-text">
              {" "}
              {summary}{" "}
            </p>
            <ul className="tech-content">
              {stack.map(tech => {
                  (
                    <li>{tech}</li>
                  )
              }
              )}
            </ul>
          </article>
    )
}
