import React from "react";
import { Wrapper, Container, useMediaQuery } from "../Layouts";
import services from "../../assets/services.jpg";
import { H3, P } from "../Typography";
import people from "../../assets/people.svg";
import customerService from "../../assets/customerService.svg";
import support from "../../assets/support.svg";
import quality from "../../assets/quality.svg";
const CardData = [
  {
    src: people,
    name: "People",
    desc: "We understand that our people impact the success of our business, and we hire people who are smart, dedicated for NanoSoft.",
  },
  {
    src: customerService,
    name: "Customer Service",
    desc: "We strive to provide superior customer service and ensure that every client is completely satisfied with our work.",
  },
  {
    src: support,
    name: "Support",
    desc: "Our engineers are trustworthy, dedicated and experienced and will go the extra mile to solve your IT issues.",
  },
  {
    src: quality,
    name: "Quality",
    desc: "We are committed to deliver outstanding, cutting edge IT solutions that add real value that goes beyond what is expected.",
  },
];
const AboutService = () => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <>
      <Wrapper bg="#F7F5FB" pt="5%" pb="5%">
        <Container>
          <Wrapper
            className={`d-flex flex-row align-items-center justify-content-between ${
              isResponsive && "flex-wrap"
            } gap-5`}
          >
            <img
              width={isResponsive ? "100%" : "45%"}
              height={isResponsive ? "100%" : "45%"}
              src={services}
              alt="services"
              style={{ borderRadius: "5px" }}
            />
            <Wrapper>
              <H3 className="mt-3" size="31px" ls="1px" weight="600">
                Why AlphaHive Ai?
              </H3>
              <P color="gray" size="16px" weight="500" className="mt-4">
                AlphaHive Ai has the expertise and resources required to design,
                develop and manage the highly available and highly secure
                technology platform that you need, giving you the time and
                confidence to focus on running your business.
              </P>
              <P color="gray" size="16px" weight="500">
                Here are 4 reasons why you should choose us to build your
                infrastructure, support your people and systems, as well as
                advise you on projects that will reduce your risk, enhance your
                productivity and give you a real competitive edge.
              </P>
            </Wrapper>
          </Wrapper>
          <Wrapper pt={"6%"}>
            <Wrapper
              className={`d-flex flex-row align-items-center justify-content-start ${
                isResponsive && "flex-wrap"
              } gap-4`}
            >
              {CardData.map((val, index) => {
                return (
                  <>
                    <Wrapper
                      key={index}
                      className="d-flex flex-column justify-content-center gap-4"
                    >
                      <img
                        width="50px"
                        height="50px"
                        src={val.src}
                        alt={val.name}
                      />
                      <P ls="0.3px" weight="600" mb="0px">
                        {val.name}
                      </P>
                      <P mb="0px" color="gray" size="15px">
                        {val.desc}
                      </P>
                    </Wrapper>
                  </>
                );
              })}
            </Wrapper>
          </Wrapper>
        </Container>
      </Wrapper>
    </>
  );
};

export default AboutService;
