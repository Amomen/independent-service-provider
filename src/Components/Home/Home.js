import React from "react";
import AboutSection from "./AboutSection/AboutSection";
import Service from "./Services/Service";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <main>
      <Slider />
      <AboutSection />
      <Service/>
    </main>
  );
};

export default Home;
