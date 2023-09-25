import React  from 'react';
import { Bio } from "./Bio";
import { TechStack } from "./TechStack";
import { Mountain } from "../components/Mountain";
import { tsParticles } from "../config/configParticles";
import Particles from "react-tsparticles";
import { Suspense } from 'react';

export const Home = () => {
  return (
    <>
      <section className="home">
        <Particles
          params={tsParticles}
          height="100vh"
          width="100vw"
          zIndex="2"
        ></Particles>
        <Mountain />
        <Suspense>
          <Bio />
          <TechStack />
        </Suspense>
      </section>
    </>
  );
};
