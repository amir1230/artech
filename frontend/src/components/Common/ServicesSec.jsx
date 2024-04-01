import React from "react";

import { Wrapper, useMediaQuery, Card } from "../Layouts";
import { H2, H3, P } from "../Typography";
import styled from "styled-components";
const SectionStyle = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
  background: #000;
  padding: ${(props) => (props.p ? props.p : "")};
`;

const ServicesSec = (props) => {
  const isResponsive = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isResponsiveMore = useMediaQuery({
    query: "(min-width: 992px)",
  });
  return (
    <>
      <SectionStyle p={isResponsive && "0 2rem"}>
        <Wrapper pt="5rem" className="container">
          {props.page === "home" && (
            <>
              <Wrapper
                data-aos="fade-down"
                width="100%"
                className="d-flex flex-column flex-wrap justify-content-center pb-5"
              >
                <H2
                  size="45px"
                  ls="3vpx"
                  weight="600"
                  // color="#16a092"
                  className="text-center text-white fs-1 "
                >
                  {" "}
                  What we do ?
                </H2>
                <div className="what d-flex justify-content-center mt-2">
                  <P
                    size="18px"
                    color="#bfcdd5"
                    className=" w-75 text-center"
                    lHeight="26px"
                  >
                    We collaborate closely with clients, combining industry best
                    practices and advanced technologies to deliver exceptional,
                    scalable, and cost-effective results.
                  </P>
                </div>
              </Wrapper>
            </>
          )}
          <Wrapper className="d-flex flex-wrap">
            {props.data.map((val, index) => {
              return (
                <>
                  <Wrapper
                    key={index}
                    data-aos={
                      index === 0
                        ? "fade-down-right"
                        : index === 1
                        ? "fade-down"
                        : index === 2
                        ? "fade-down-left"
                        : index === 3
                        ? "fade-up-right"
                        : index === 4
                        ? "fade-up"
                        : index === 5
                        ? "fade-up-left"
                        : ""
                    }
                    maxW={
                      (isResponsiveMore && "0 0 33.33%") ||
                      (isResponsive && "50%")
                    }
                    flex={
                      (isResponsiveMore && " 33.33%") ||
                      (isResponsive && "0 50%")
                    }
                    width={!isResponsive && !isResponsiveMore && "100%"}
                    p="0 1em 1em 1em"
                    className="text-center"
                  >
                    <Card>
                      {props.page === "contact" ? (
                        <>
                          <H2
                            size="24px"
                            weight="600"
                            color="white"
                            margin="1rem 0"
                            ls="3px"
                            className="text-white"
                          >
                            {val.title}
                          </H2>
                          <P
                            style={{
                              textJustify: "distribute-all-lines",
                              hyphens: "auto",
                              textAlign: "justify",
                            }}
                            className="mt-4 text-center"
                            color="#bfcdd5"
                            weight="600"
                            size="14px"
                            lHeight="1.6"
                            ls="0.03em"
                          >
                            {val.desc}
                          </P>
                          <div className="icon-wrapper pt-2 pb-2">
                            <img
                              src={val.src}
                              alt=""
                              style={{ width: "63px" }}
                            />
                          </div>

                          <H3
                            className="text-white mt-3"
                            weight="bold"
                            size="24px"
                            lHeight="1.6"
                            ls="0.03em"
                          >
                            {val.help}
                          </H3>
                        </>
                      ) : (
                        <>
                          <div className="icon-wrapper">
                            <img
                              src={val.src}
                              alt=""
                              style={{ width: "63px" }}
                            />
                          </div>
                          <H3
                            size="26px"
                            weight="600"
                            color="white"
                            margin="1rem 0"
                            lHeight="34px"
                            className="text-white pt-3"
                          >
                            {val.title}
                          </H3>
                          <P
                            className="text-center"
                            style={{
                              textJustify: "distribute-all-lines",
                              hyphens: "auto",
                              textAlign: "justify",
                            }}
                            color="#bfcdd5"
                            size="16px"
                            lHeight="24px"
                            ls="1px"
                          >
                            {val.desc}
                          </P>
                        </>
                      )}
                    </Card>
                  </Wrapper>
                </>
              );
            })}
          </Wrapper>
        </Wrapper>
      </SectionStyle>
    </>
  );
};

export default ServicesSec;
