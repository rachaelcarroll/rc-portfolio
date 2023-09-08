import React  from 'react';
import Fade from "react-reveal";
import { techData } from "../util/techData";
import { TechCard } from "../components/TechCard";

export const TechStack = () => {
  return (
    <section className="tech-container">
      <Fade bottom>
        <section className="fe-be">
          {techData.map(data => 
          (
            <TechCard 
              key={data.type}
              type={data.type} 
              logo={data.logo} 
              summary={data.summary}
              stack={data.stack}
            />
          )
          )}
        </section>
      </Fade>
    </section>
  );
};
