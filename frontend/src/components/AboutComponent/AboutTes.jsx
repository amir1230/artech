import React from "react";
import { Wrapper, useMediaQuery } from "../Layouts";
import styled from "styled-components";
import { H1 } from "../Typography";
const TestimonialStyle = styled.section`
  background: transparent;
  padding-top: 5rem;
  padding-bottom: 5rem;
  .row {
    .tabs {
      all: unset;
      margin-right: 50px;
      display: flex;
      flex-direction: column;

      li {
        all: unset;
        display: block;
        position: relative;
        &.active {
          &::before {
            position: absolute;
            content: "";
            width: 50px;
            height: 50px;
            background-color: var(--primary-color);
            border-radius: 50%;
          }
        }
        &.active {
          &::after {
            position: absolute;
            content: "";
            width: 30px;
            height: 30px;
            background-color: var(--primary-color);
            border-radius: 50%;
          }
        }
        &:nth-child(1) {
          align-self: flex-end;
          &::before {
            left: 64%;
            bottom: -50px;
          }
          &::after {
            left: 97%;
            bottom: -81px;
          }
          figure {
            img {
              margin-left: auto;
            }
          }
        }
        &:nth-child(2) {
          align-self: flex-start;
          &::before {
            right: -65px;
            top: 50%;
          }
          &::after {
            bottom: 101px;
            border-radius: 50%;
            right: -120px;
          }
          figure {
            img {
              margin-right: auto;
              max-width: 300px;
              width: 100%;
              margin-top: -50px;
            }
          }
        }
        &:nth-child(3) {
          align-self: flex-end;
          &::before {
            right: -10px;
            top: -66%;
          }
          &::after {
            top: -130px;
            border-radius: 50%;
            right: -46px;
          }
          figure {
            img {
              margin-left: auto;
              margin-top: -50px;
            }
          }
          &:focus {
            border: 10px solid var(--primary-color);
          }
        }
        figure {
          position: relative;
          img {
            display: block;
          }
          &::after {
            content: "";
            position: absolute;
            top: 0;

            width: 100%;
            height: 100%;
            border: 4px solid var(--primary-color);
            border-radius: 50%;
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
            -webkit-transition: 0.3s;
            -o-transition: 0.3s;
            transition: 0.3s;
          }
          &:hover {
            &::after {
              -webkit-transform: scale(1.1);
              -ms-transform: scale(1.1);
              transform: scale(1.1);
            }
          }
        }
      }
      &.carousel-indicators {
        li.active {
          figure {
            &::after {
              -webkit-transform: scale(1.1);
              -ms-transform: scale(1.1);
              transform: scale(1.1);
            }
          }
        }
      }
    }
    .carousel {
      > h3 {
        font-size: 20px;
        line-height: 1.45;
        color: rgba(0, 0, 0, 0.5);
        font-weight: 600;
        margin-bottom: 0;
      }
      h1 {
        letter-spacing: 3px;
        line-height: 1.225;

        font-weight: 700;
        margin-bottom: 0;
      }
      .carousel-indicators {
        all: unset;
        padding-top: 43px;
        display: flex;
        list-style: none;
        li {
          background: #000;
          background-clip: padding-box;
          height: 2px;
        }
      }
      .carousel-inner {
        .carousel-item {
          .quote-wrapper {
            margin-top: 32px;
            p {
              font-size: 18px;
              line-height: 1.72222;
              font-weight: 500;
              color: rgba(0, 0, 0, 0.7);
            }
            h3 {
              color: #000;
              font-weight: 700;
              margin-top: 37px;
              font-size: 20px;
              line-height: 1.45;
              text-transform: uppercase;
            }
          }
        }
      }
    }
  }
`;
const PointsLI = styled.li`
  color: rgba(240, 248, 255, 0.604);
  font-size: ${(props) => (props.size ? props.size : "20px")};
  line-height: ${(props) => (props.lHeight ? props.lHeight : "3rem")};
  text-transform: capitalize;
`;
const PointsLIData = [
  "Collaborative work environment fostering creativity and innovation",
  "Emphasis on delivering high-quality software solutions.",
  "Commitment to adhering to industry standards and best practices.",
  "Encouragement of professional growth and continuous learning.",
  "Strong focus on user-centered design and intuitive interfaces.",
  " Cultivation of a supportive and respectful work culture.",
  "Dedication to meeting project deadlines and delivering on time.",
  " Adherence to accessibility standards to ensure inclusivity.",
  " Proactive problem-solving approach to address challenges efficiently.",
];
const TestimonialData = [
  "https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-01-179x179.png",
  "https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-02-306x306.png",
  "https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-03-179x179.png",
];
const AboutTes = () => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 1200px)",
  });
  const isResponsiveMobile = useMediaQuery({
    query: "(max-width: 753px)",
  });
  return (
    <>
      <Wrapper bg="#000">
        {/* <TestimonialStyle>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-none d-lg-block" data-aos="fade-right">
                <ol
                  className="carousel-indicators tabs"
                  style={{ marginRight: isResponsive && "25px" }}
                >
                  {TestimonialData.map((val, index) => {
                    return (
                      <>
                        <li
                          key={index}
                          data-target="#carouselExampleIndicators"
                          data-slide-to="0"
                          className={index === 0 && "active"}
                        >
                          <figure>
                            <img src={val} className="img-fluid" alt="" />
                          </figure>
                        </li>
                      </>
                    );
                  })}
                </ol>
              </div>
              <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <div
                  id="carouselExampleIndicators"
                  data-interval="false"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  {" "}
                  <div data-aos="fade-down">
                    <H1
                      size={isResponsiveMobile && "26px !important"}
                      className="text-white text-capitalize fs-1"
                    >
                      Whats Going At ARtech ?{" "}
                    </H1>
                  </div>
                  <div className="points">
                    <ul
                      style={{
                        paddingTop: isResponsiveMobile ? "1rem" : "3rem",
                      }}
                    >
                      {PointsLIData.map((val, index) => {
                        return (
                          <>
                            <PointsLI
                              size={isResponsiveMobile && "16px"}
                              lHeight={isResponsiveMobile && "2rem"}
                              key={index}
                            >
                              {val}
                            </PointsLI>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TestimonialStyle> */}
      </Wrapper>
    </>
  );
};

export default AboutTes;
