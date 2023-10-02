import React, { useState, useEffect }  from 'react';
import { Bio } from "../components/Bio";
import { TechStack } from "../components/TechStack/TechStack";
import { Mountain } from "../components/Mountain";
import { tsParticles } from "../config/configParticles";
import Particles from "react-tsparticles";
import { BsInfoCircle } from "react-icons/bs";
import nightsky from "../images/nightsky.jpg";

const iconStyle = { fontSize: "2.5rem", margin: "2rem", color: "lightgrey" };

export const Home = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [apod, setApod] = useState("");

  useEffect(() => {
    fetchImage().then((data) =>
      data.url.includes("youtube") ? setApod(nightsky) : setApod(data.url)
    );
  }, [apod]);

  const fetchImage = () => {
    return fetch('https://api.nasa.gov/planetary/apod?api_key=1tfzjlOIYDaAuOUBR2Tw5LRAvteh2KPbVeqGpMQ2')
    .then(response => {
      if(!response.ok) {
        throw Error('Error fetching APOD')
      }
      return response.json()
    })
  }

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleClick = () => {
     setIsHovering(true);

     setTimeout(() => {
       setIsHovering(false);
     }, 3000); 
  };

  return (
    <>
      <main 
          style={{
            backgroundImage: `url(${apod})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed"
      }}>
      <section className="home">
        <Particles
          params={tsParticles}
          height="100vh"
          width="100vw"
          zIndex="2"
        ></Particles>
        <div className="info">
          <div className="icon"
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
          <BsInfoCircle style={iconStyle}/>
          </div>
          {isHovering && 
          <div className="hover-text">
          <p>This space background is being pulled from the Astronomy Photo of the Day NASA API. It changes daily, so come on back tomorrow to see a different view!</p>
           </div>}
        </div>
        <Mountain />
          <Bio />
          <TechStack />
      </section>
      </main>
    </>
  );
};
