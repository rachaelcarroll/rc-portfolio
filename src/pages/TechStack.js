import React  from 'react';
import Fade from "react-reveal";
import { BsBrush, BsCodeSlash, BsTerminal } from "react-icons/bs";
import { RiOrganizationChart } from "react-icons/ri";
import { techData } from "../util/techData";
import { TechCard } from "../components/TechCard";

export const TechStack = () => {
  return (
    <section className="tech-container">
      <Fade bottom>
        <section className="fe-be">
          {/* {techData.map(data => 
          (
            <TechCard 
              type={data.type} 
              logo={data.logo} 
              summary={data.summary}
              stack={data.stack}
            />
          )
          )} */}
          <article className="frontend">
            <div className="tech-header-container">
              <BsCodeSlash
                style={{ fontSize: "2rem", margin: "1rem", color: "lightgrey" }}
              />
              <h3 className="tech-header-text">Frontend</h3>
            </div>
            <p className="tech-header-sub-text">
              {" "}
              I value an intuitive user experience and reliable, captivating
              features.{" "}
            </p>
            <ul className="tech-content">
              <li>React</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>HTML / CSS</li>
            </ul>
          </article> 
          <article className="backend">
            <div className="tech-header-container">
              <BsTerminal
                style={{ fontSize: "2rem", margin: "1rem", color: "lightgrey" }}
              />
              <h3 className="tech-header-text">Backend</h3>
            </div>
            <p className="tech-header-sub-text">
              {" "}
              I'm intrigued by connecting relationships and data modeling on the
              backend.{" "}
            </p>
            <ul className="tech-content">
              <li>Node</li>
              <li>PostgreSQL</li>
              <li>RESTful APIs</li>
              <li>Ruby / Rails</li>
              <li>C# / .NET</li>
            </ul>
          </article>
        </section>
        <section className="design-workflow">
          <article className="work-flow">
            <div className="tech-header-container">
              <RiOrganizationChart
                style={{ fontSize: "2rem", margin: "1rem", color: "lightgrey" }}
              />
              <h3 className="tech-header-text">Systems and Workflow</h3>
            </div>
            <p className="tech-header-sub-text">
              {" "}
              I believe systems and processes are one of the most important
              aspects of development.
            </p>
            <ul className="tech-content">
              <li>Git / Github</li>
              <li>Jira</li>
              <li>Agile Workflow</li>
              <li>AWS</li>
            </ul>
          </article>
          <article className="design">
            <div className="tech-header-container">
              <BsBrush
                style={{ fontSize: "2rem", margin: "1rem", color: "lightgrey" }}
              />
              <h3 className="tech-header-text">Design</h3>
            </div>
            <p className="tech-header-sub-text">
              {" "}
              Design is a powerful tool and I love the creative process.
            </p>
            <ul className="tech-content">
              <li>Figma</li>
              <li>Miro</li>
              <li>Canva</li>
              <li>Adobe Creative Suite</li>
            </ul>
          </article>
        </section>
      </Fade>
    </section>
  );
};
