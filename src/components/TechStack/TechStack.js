import React  from 'react';
import { Fade, Slide } from "react-reveal";
import { techData } from "../../util/techData";
import { TechCard } from "./TechCard";

export const TechStack = () => {
  return (
    <section className="tech-container">
      <Fade bottom>
          {techData.map(data => 
          (
            <Slide right key={data.type} style={{zIndex: "3"}}>
              <TechCard 
                key={data.type}
                type={data.type} 
                logo={data.logo} 
                summary={data.summary}
                stack={data.stack}
              />
            </Slide>
          )
          )}
      </Fade>
    </section>
  );
};
