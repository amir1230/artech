import React from "react";
import user from "../../assets/user.png";
import circle from "../../assets/circle.png";
import media from "../../assets/media.png";
import { Wrapper, Card, Row, Col } from "../Layouts";
const CardData = [
  {
    heading: `Passion for Superiority`,
    button: `View Services`,
    src: media,
    desc: `We are driven by a passion for excellence. We set high standards
    for ourselves and continually strive to surpass them. Our commitment to 
    excellence is reflected in the exceptional quality of our software solutions,
     the professionalism of our team, and the satisfaction of our clients.`,
  },
  {
    heading: `Client-Centric Approach`,
    button: `View Services`,
    src: user,
    desc: ` Our clients are at the center of everything we do. We understand that 
    every business is unique, and we take the time to listen and understand our 
    clients' specific needs, goals, and challenges. By collaborating closely with 
    our clients, we develop tailored software solutions that align with their vision
     and objectives.`,
  },
 
  {
    heading: `Quality Assurance    `,
    button: `View Services`,
    src: circle,
    desc: `Quality is ingrained in our DNA. We follow rigorous testing and quality 
    assurance processes to ensure the software we deliver is of the highest standard.
     Our meticulous approach to quality control guarantees robust, secure, and scalable
      solutions that can withstand the demands of today's dynamic business environment.`,
  },

  
];
const AboutSer = () => {
  return (
    <>
      {/* <Wrapper bg="#000">
        <div className="container pt-5">
          <div className="d-flex justify-content-center">
            <div className="mm" data-aos="fade-down">
              <Wrapper
                color="#fff"
                tt="capitalize"
                weight="bold"
                ls="2px"
                className="fs-1 text-center about-heading"
              >
                innovation meets excellence in <br /> software solutions
              </Wrapper>
              <Wrapper
                color="#ffffff"
                size="20px"
                className="text-center p-about pt-4"
              >
                We are a leading software development company dedicated to
                delivering cutting-edge technology and empowering businesses
                with scalable and
                <br /> reliable software solutions.
              </Wrapper>
            </div>
          </div>
        </div>
      </Wrapper> */}
      <Wrapper width="100%" bg="#000" className="d-grid">
        {/* <Wrapper pt="1rem" className="container row-ser">
          <Row className=" pt-5">
            {CardData.map((val, index) => {
              return (
                <>
                  <Col
                    md={4}
                    className="text-center mb-2 mt-2"
                    key={index}
                    data-aos="flip-left"
                  >
                    <Card>
                      <h2 className="text-white">{val.heading}</h2>
                      <div className="icon-wrapper">
                        <img src={val.src} alt="" style={{ width: "63px" }} />
                      </div>
                      <p className="pt-4 text-white"  style={{
                  textJustify: "distribute-all-lines",
                  hyphens: "auto",
                  textAlign: "justify",
                }}>{val.desc}</p>
                      <div className="fs-4 text-white">{val.button}</div>
                    </Card>
                  </Col>
                </>
              );
            })}
          </Row>
        </Wrapper> */}
      </Wrapper>
    </>
  );
};

export default AboutSer;
