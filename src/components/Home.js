import { Bio } from "./Bio";
import { TechStack } from "./TechStack";
import { useState, useEffect } from "react";
import { fetchImage } from "../util/apiCalls";
import { tsParticles } from "../config/configParticles";
import Particles from "react-tsparticles";
import mountain from "../images/mountain.png";
import nightsky from "../images/nightsky.jpg";

export const Home = () => {
  const [apod, setApod] = useState("");

  useEffect(() => {
    fetchImage().then((data) =>
      data.url.includes("youtube") ? setApod(nightsky) : setApod(data.url)
    );
  }, [apod]);

  return (
    <>
      <section
        className="home"
        style={{
          backgroundImage: `url(${apod})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed"
        }}
      >
        <Particles
          params={tsParticles}
          height="100vh"
          width="100vw"
          zIndex="2"
        ></Particles>
        <div className="home-bottom">
          <img
            src={mountain}
            className="mountain"
            alt="mountain and sunflower field"
          />
        </div>
      </section>
      <Bio />
      <TechStack />
    </>
  );
};
