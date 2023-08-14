import Fade from "react-reveal";
import { BsBrush, BsCodeSlash, BsTerminal } from "react-icons/bs";
import { RiOrganizationChart } from "react-icons/ri";

export const TechStack = () => {
  return (
    <section className="tech-container">
      <Fade bottom>
        <section className="fe-be">
          <article className="frontend">
            <div className="tech-header-container">
              <BsCodeSlash
                style={{ fontSize: "2rem", margin: "1rem", color: "grey" }}
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
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML / SCSS</li>
            </ul>
          </article>
          <article className="backend">
            <div className="tech-header-container">
              <BsTerminal
                style={{ fontSize: "2rem", margin: "1rem", color: "grey" }}
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
                style={{ fontSize: "2rem", margin: "1rem", color: "grey" }}
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
                style={{ fontSize: "2rem", margin: "1rem", color: "grey" }}
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
