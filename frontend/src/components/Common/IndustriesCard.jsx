import React from "react";
import { Wrapper, Row, Col, useMediaQuery } from "../Layouts";
import { H6, P } from "../Typography";

import styled from "styled-components";
const ColIndus = styled.div`
  padding: 1em;
  margin: 8px;
  background: transparent;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  color: #fff;
  text-align: center;
  border: var(--primary-color) 2px solid;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
const IndustriesCard = (props) => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <Wrapper bg="#000">
      <Wrapper className="container">
        <Wrapper className="feature pb-5 ">
          <Wrapper pt="5rem" className="grid">
            <Row>
              {props.data.map((val, index) => {
                return (
                  <>
                    <Col
                      key={index}
                      md={
                        isResponsive ? 12 : Math.floor(props.data.length / 12)
                      }
                      data-aos="flip-left"
                    >
                      <ColIndus>
                        <img
                          src={val.src}
                          alt=""
                          width={props.page === "career" ? "25%" : "30%"}
                        />
                        <H6
                          size={props.page === "career" && "21px"}
                          className="mt-3"
                          weight="600"
                        >
                          {val.title}
                        </H6>
                        {props.page === "career" && (
                          <>
                            <P size="14px">
                              {val.desc}
                              
                            </P>
                          </>
                        )}
                      </ColIndus>
                    </Col>
                  </>
                );
              })}
            </Row>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default IndustriesCard;
