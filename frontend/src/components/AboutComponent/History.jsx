import React from "react";
import { Wrapper, useMediaQuery, Row, Col } from "../Layouts";
import { P } from "../Typography";
const History = () => {
  const isResponsive = useMediaQuery({
    query: "(min-width: 640px)",
  });
  return (
    <Wrapper
      bg="linear-gradient(200deg, rgb(0, 0, 0) 40%, rgb(10, 83, 83) 100%)"
      pt="5rem"
      pb="5rem"
    >
      <div className="container ">
        <Row className={isResponsive ? "d-flex flex-row" : ""}>
        <Col md={6} >
            <Wrapper p="1rem" m="0 2px 2px 0" className="flex-grow-1">
              <div className="fs-1 text-white fw-bold" data-aos="fade-right">Our History</div>
              <div className="fs-2  text-white pt-3" data-aos="flip-up">2010-2017</div>
              <div className="text-white pt-3">
                AlphaHive Ai successfully partners with multiple organization, a growing
                provider of local Pakistan IT Support and IT Services to both
                local and overseas businesses.
              </div>
              <div className="fs-2  text-white pt-3" data-aos="flip-up">2018-2023</div>
              <div className="text-white pt-3">
                AlphaHive Ai successfully partners with multiple organization, a growing
                provider of local Pakistan IT Support and IT Services to both
                local and overseas businesses.  successfully partners with
                multiple organization, a growing provider of local Pakistan IT
              </div>
            </Wrapper>
          </Col>
          <Col md={6} data-aos="fade-left">
            <P
              p="1rem"
              m="0 2px 2px 0"
              className="flex-grow-1"
              role="complementary"
            >
              <img
                src="https://s40424.pcdn.co/in/wp-content/uploads/2022/03/What-is-Business-Strategy.jpg.optimal.jpg"
                alt=""
                className="w-100"
              />
            </P>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

export default History;
