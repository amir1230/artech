import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, useMediaQuery } from "../Layouts";
import { PrimaryBtn } from "../Buttons";
const Hero = (props) => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <>
      <Wrapper
        bg={`linear-gradient(90deg,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(${props.bg})`}
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: " center",
        }}
        className="bg-About-page"
      >
        <Wrapper height="90vh" className="container d-flex align-items-center">
          <div className={`wrapper ${props.extra !== "" ? "pt-5" : "pt-1"}`}>
            <Wrapper
              fontFamily="Arial, sans-serif"
              color="white"
              size="25px"
              ls="3px"
              ml={isResponsive && "8px"}
            >
              {props.extra}
            </Wrapper>
            <Wrapper
              color="white"
              weight="bold"
              ls="3px"
              size="70px"
              ml={isResponsive && "14px"}
              className="hero-heading-about-page"
            >
              {props.title}
            </Wrapper>
            <Wrapper
              data-aos="fade-right"
              width={isResponsive ? "310px" : "650px"}
              lHeight="24px"
              ml={isResponsive && "14px"}
              size={isResponsive && "14px"}
              className={`about-hero fw-bold pb-1 ${
                props.page === "about" && "pt-2"
              }`}
              style={{ color: "#16A092" }}
            >
              {props.desc}
            </Wrapper>
            {props.contact && (
              <Link to="/contact">
                <PrimaryBtn
                  data-aos="zoom-in"
                  bg={isResponsive ? "#16a092" : "transparent"}
                  className="fs-5 rounded text-white mt-4"
                >
                  Get in touch
                </PrimaryBtn>
              </Link>
            )}
          </div>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default Hero;
