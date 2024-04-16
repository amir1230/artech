import React, { useEffect } from "react";
import Testimonial from "../components/Common/Testimonial";
import ServicesSec from "../components/Common/ServicesSec";
import Hero from "../components/Common/Hero";
import services_bg from "../assets/services-bg.jpg"
import Details from "../components/Common/Details";
import blockchain from "../assets/blockchain.png";
import ai from "../assets/ai.png";
import datasci from "../assets/datasci.png";
import devops from "../assets/devops.png";
import iot from "../assets/iot.png";
import ecommerce from "../assets/ecommerce.png";
import { useNavigate } from "react-router-dom";
const ServiceCardsData = [
  {
    src: blockchain,
    title: "Digital Marketing",
    desc: "Empower your digital marketing efforts with innovative strategies: Elevate brand visibility, engagement, and conversions for unparalleled success.",
  },
  {
    src: ai,
    title: "Artificial Intelligence & Data Science",
    desc: "Utilize advanced artificial intelligence algorithms and machine learning models to extract valuable insights.",
  },
  {
    src: devops,
    title: "DevOps",
    desc: "Streamline software development and deployment processes, ensuring efficient collaboration, accelerated delivery, and superior outcomes.",
  },
  {
    src: datasci,
    title: "Data Science",
    desc: "Extract meaningful insights from data using advanced analytics techniques, driving informed decision-making and business growth.",
  },
  {
    src: ecommerce,
    title: "Ecommerce",
    desc: "Build engaging user-friendly online stores for seamless digital shopping experiences and accelerated business growth.",
  },
  {
    src: iot,
    title: "App Development",
    desc: "Connect and control devices seamlessly, enabling smarter operations and unlocking new possibilities for automation.",
  },
];
const ServicesPage = () => {
  const history = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);
  return (
    <>
      <Hero
         bg={services_bg}
        extra=""
        title="Services"
        // desc="Experience seamless efficiency and optimized workflows with our innovative software services, designed to propel your business forward."
        contact={false}
      />
      <Details
        title="Custom Software Development Services"
        page="services"
        btnName="Let' talk"
      />
      <ServicesSec data={ServiceCardsData} heading={false} />
      <Testimonial />
    </>
  );
};

export default ServicesPage;
