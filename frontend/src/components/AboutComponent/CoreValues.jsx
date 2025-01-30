import React from "react";
import { Wrapper, Container, useMediaQuery } from "../Layouts";
import { P, H1 } from "../Typography";
import humble from "../../assets/humble.png.webp";
import tribal from "../../assets/tribal.png.webp";
import ceo from "../../assets/rizwan.png";
import pm from "../../assets/pm.png";
import lean from "../../assets/lean.png.webp";
import kaizen from "../../assets/kaizen.png.webp";

const CardsData = [
  {
    src: ceo,
    name: "Muhammad Rizwan",
    desc: "CEO",
  },
  {
    src: pm,
    name: "Aamir Sohail",
    desc: "Project Manager",
  },
  // {
  //   src: tenx,
  //   name: "10x",
  //   desc: "We value goal-orientedness over busy-ness.",
  // },
  // {
  //   src: lean,
  //   name: "Lean",
  //   desc: "Make a plan, try it out early, fail and improve.",
  // },
  // {
  //   src: kaizen,
  //   name: "Kaizen",
  //   desc: "We embrace change and adapt as our mission and team need it.",
  // },
];
const CoreValues = () => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 753px)",
  });
  return (
    <Wrapper
      width="100%"
      pt="5%"
      pb="5%"
      style={{ minHeight: "100vh" }}
      bg="#F7F5FB"
    >
      <Wrapper className="text-center">
        {/* <H1 weight="600" ls="1px">
          Meet The Team
        </H1> */}
      </Wrapper>
      <Wrapper pl={"4%"} pt="5%">
        <Container>
          {/* <Wrapper
            height="100%"
            className={`d-flex flex-column justify-content-center gap-3 flex wrap`}
          >
            <Wrapper className="d-flex flex-row align-items-center gap-3 flex-wrap">
              {CardsData.map((val, index) => {
                return index < 3 ? (
                  <>
                    <Wrapper
                      key={index}
                      className="align-items-center justify-content-center gap-2"
                      width={isResponsive ? "95%" : "45%"}
                      // height="250px"
                      bg="white"
                      p="20px"
                      borderRadius="10px"
                      style={{ boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)" }}
                    >
                      <img
                         width="100%"
                        // height="150px"
                        src={val.src}
                        alt={val.name}
                      />
                      <Wrapper className="d-flex flex-column justify-content-center flex-wrap">
                        <P weight="600">{val.name}</P>
                        <P mb="0px" size="16px" color="gray">
                          {val.desc}
                        </P>
                      </Wrapper>
                    </Wrapper>
                  </>
                ) : (
                  <>
                    <Wrapper
                      key={index}
                      className="d-flex flex-row align-items-center justify-content-center"
                      width={isResponsive ? "95%" : "47%"}
                      height="250px"
                      p={"20px"}
                      bg="white"
                      borderRadius="10px"
                      style={{ boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)" }}
                    >
                      <img
                        width="150px"
                        height="150px"
                        src={val.src}
                        alt={val.name}
                      />
                      <Wrapper className="d-flex flex-column justify-content-center">
                        <P weight="600">{val.name}</P>
                        <P mb="0px" size="16px" color="gray">
                          {val.desc}
                        </P>
                      </Wrapper>
                    </Wrapper>
                  </>
                );
              })}
            </Wrapper>
          </Wrapper> */}
        </Container>
      </Wrapper>
    </Wrapper>
  );
};

export default CoreValues;
