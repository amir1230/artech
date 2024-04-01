import React, { useEffect } from "react";
import Hero from "../components/Common/Hero";
import AboutSer from "../components/AboutComponent/AboutSer";
import CoreValues from "../components/AboutComponent/CoreValues";
import History from "../components/AboutComponent/History";
import AboutTes from "../components/AboutComponent/AboutTes";
import AboutContact from "../components/AboutComponent/AboutContact";
import AboutService from "../components/AboutComponent/AboutService";
import { useNavigate } from "react-router-dom";
const About = () => {
  const history = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);

  return (
    <>
      <Hero
        bg="https://www.capgemini.com/de-de/wp-content/uploads/sites/8/2022/08/GettyImages-1181008199.jpg"
        extra="AR Tech"
        title="About us"
        // desc=" Proudly serving the world's top asset finance and leasing companies with smart software technology for over four decades."
        contact={true}
      />
        <CoreValues />
      <AboutSer />

      {/* <History /> */}
    
      <AboutTes />
      <AboutService />
      <AboutContact />
    </>
  );
};

export default About;
