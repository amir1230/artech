import React from "react";
import { useMediaQuery, Wrapper } from "../Layouts";
import { Typewriter } from "react-simple-typewriter";
import ParticlesBg from "./ParticlesBg/ParticlesBg";
const HeroSection = () => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 517px)",
  });

  return (
    <>
      <ParticlesBg />
      <Wrapper>
        <Wrapper height="90vh" className="container d-flex align-items-center">
          <Wrapper className="pt-5">
            <Wrapper
              fontFamily="Arial, sans-serif"
              className="mb-0 mt-0"
              color="white"
              ls="3px"
              size={isResponsive ? "15px" : "18px"}
              pl={isResponsive && "1rem"}
            >
              We Develop
            </Wrapper>
            <Wrapper
              color="white"
              weight="700"
              size={isResponsive ? "30px" : "51px"}
              pl={isResponsive && "1rem"}
              transition={isResponsive && "0.6s ease-in-out"}
            >
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "Agile teams",
                  "Blockchain Applications",
                  "E-Commerce Applications",
                  "Custom FullStack Software Solutions",
                ]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={1}
                delaySpeed={1500}
              />
            </Wrapper>
            <Wrapper
              ml={isResponsive && "1rem"}
              className="services-hero"
              //  fontFamily={"'Gilroy-Bold', sans-serif"}
              weight="600"
              color="#16A092"
              size="18px"
              lHeight="27px"
            >
              {/* <div data-aos="fade-up-right">
                Blockchain&nbsp; &nbsp;|&nbsp;&nbsp;Artificial
                intilligence&nbsp;&nbsp;|&nbsp;&nbsp;Data
                Science&nbsp;&nbsp;|&nbsp;&nbsp;Ecommerce&nbsp;&nbsp;|&nbsp;&nbsp;DevOps
              </div> */}
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default HeroSection;
