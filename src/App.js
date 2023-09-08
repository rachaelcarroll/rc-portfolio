import React  from 'react';
import { Home } from './pages/Home';
import { NavBar } from './components/NavBar';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import { useState, useEffect } from "react";
import nightsky from "./images/nightsky.jpg";

const App = () => {
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

  return (
    <>
    <NavBar />
      <main 
          style={{
            backgroundImage: `url(${apod})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed"
      }}>
        <Home />
      </main>
    <Contact />
    <Footer />
    </>
  );
}

export default App;
