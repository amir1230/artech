import React, { useState } from "react";
// import tech from "../../assets/tech.png";
import { Wrapper, SpanWrapper, Row, Col, useMediaQuery } from "../Layouts";
import { H3, H4, P } from "../Typography";
import styled from "styled-components";
import tech from "../../assets/logo.png";
const UL = styled.ul``;
const LI = styled.li`
  float: left;
  width: 50%;
  margin-bottom: 12px;
  a {
    color: #fff;
    text-transform: capitalize;
    letter-spacing: 2px;
  }
  a:hover {
    color: #16a092;
  }
`;
const FooterMenuLI = styled.li`
  display: inline-block;
  margin-left: 20px;
  a {
    font-size: 14px;
    color: #878787;
  }
  &:hover {
    a {
      color: #16a092;
    }
  }
`;
const SocialA = styled.a`
  display: inline-block;
  background: #fff;
  text-align: center;
  border-radius: 100%;
  transition: 0.2s ease-in-out;
  color: #fff;
  font-size: 16px;
  margin-right: 15px;
  width: 40px;
  height: 40px;
`;
const SocialI = styled.i`
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  font-size: 15px;
`;
const SocialLi = styled.li`
  float: inherit !important;
  width: inherit;

  margin: 0 5px;
  &:nth-child(1) a {
    background: #4267b2;
    color: #fff;
  }
  &:nth-child(2) a {
    background: #1da1f2;
    color: #fff;
  }
  &:nth-child(3) a {
    background: #f09433;
    background: -moz-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: -webkit-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    color: #fff;
  }
  &:nth-child(4) a {
    background: #ff0000;
    color: #fff;
  }
  &:nth-child(1):hover a {
    background: #fff;
    color: #4267b2;
  }
  &:nth-child(2):hover a {
    background: #fff;
    color: #1da1f2;
  }
  &:nth-child(3):hover a {
    background: #fff;
    color: #bc1888;
  }
  &:nth-child(4):hover a {
    background: #fff;
    color: #ff0000;
  }
`;
const SubmitBtn = styled.button`
  position: absolute;
  right: 0;
  background: #16a092;
  padding: 13px 20px;
  border: 1px solid #16a092;
  top: 0;
`;
const EmailInput = styled.input`
  color: #ffffff;
  width: 100%;
  padding: 14px 28px;
  background: #2e2e2e;
  border: 1px solid #2e2e2e;

  margin-bottom: 20px;
`;
const H3Extra = styled(H3)`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  margin-top: 40px;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -15px;
    height: 3px;
    width: 50px;
    background: #fff;
  }
`;
const ContactData = [
  // {
  //   title: "Location",
  //   desc: "address will be pasted here...",
  //   icon: "fas fa-map-marker-alt",
  // },
  {
    title: "Contact",
    desc: <span>+92 324-5971343 <br></br> +92 336 8815559</span>,
    icon: "fas fa-phone"
  },
  {
    title: "Email",
    desc: "info@artechsolutions.org",
    icon: "far fa-envelope-open",
  },
];
// const FooterSocialIcons = [
//   "fa-brands fa-facebook-f",
//   "fa-brands fa-twitter",
//   "fa-brands fa-instagram",
//   "fa-brands fa-youtube",
// ];
const LinksData = [
  // "Our Team",
  "About Us",
  // "Our Gallery",
  // "Selection Process",
  // "FAQ",
  // "Sponsorship",
  // "Our Policies",
  // "Our Team",
  "Contact Us",
];
const FooterMenuData = ["Home  ", "Terms", "Privacy", "Policy", "Contact"];
const Footer = () => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 753px)",
  });
  const [email, setEmail] = useState("");
  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted...");
  };
  return (
    <>
      <Wrapper bg="#000000" className="position-relative">
        <Wrapper className="container">
          <Wrapper borderBottom="1px solid #373636" pb="20px" className="pt-5">
            <div className="row pt-1">
              {ContactData.map((val, index) => {
                return (
                  <>
                    <div key={index} className={`col-xl-4 col-md-4 mb-3`}>
                      <Wrapper mt={isResponsive && "1rem"}>
                        <i
                          style={{
                            color: "#fff",
                            fontSize: "30px",
                            float: "left",
                            marginTop: "8px",
                          }}
                          className={val.icon}
                        ></i>
                        <Wrapper pl="15px" className="d-inline-block">
                          <H4
                            color="#fff"
                            size={isResponsive ? "16px" : "20px"}
                            weight="700"
                            mb="2px"
                            ls="3px"
                          >
                            {val.title}
                          </H4>
                          <SpanWrapper
                            color="#dfe4ed"
                            size={isResponsive ? "14px" : "15px"}
                            ls="1px"
                          >
                            {val.desc}
                          </SpanWrapper>
                        </Wrapper>
                      </Wrapper>
                    </div>
                  </>
                );
              })}
            </div>
          </Wrapper>
          <Wrapper
            style={{ zIndex: 2 }}
            className={`footer-content position-relative ${
              !isResponsive && "pt-5"
            } pb-1`}
          >
            <Row>
              <Col xl={4} lg={4} className="mb-2">
                <div className="footer-widget">
                  {!isResponsive && (
                    <>
                      <div className="footer-logo">
                        <a href="/">
                          <img
                            src={tech}
                            className="img-fluid"
                            alt="logo"
                            style={{ maxWidth: "120px" }}
                          />
                        </a>
                      </div>
                    </>
                  )}

                  {/* <div className="footer-text">
                    <P
                      mb="54px"
                      size="14px"
                      color="#ffffff"
                      lHeight="21px"
                      ls="1px"
                    >
                      isolab empowers businesses with custom software solutions,
                      agile teams, blockchain solutions, and E-Commerce
                      websites. Our skilled professionals and cutting-edge tech
                      deliver exceptional results for your success and growth.
                      Let's transform your ideas into reality and embark on a
                      digital transformation journey together.{" "}
                    </P>
                  </div> */}
                  {/* <div className="footer-social-icon">
                    <H3Extra className="position-relative">Follow us</H3Extra>
                    <ul className="d-flex text-start mt-3">
                      {FooterSocialIcons.map((val, index) => {
                        return (
                          <>
                            <SocialLi key={index} data-aos="flip-left">
                              <SocialA href="#" style={{}}>
                                <SocialI className={val}></SocialI>
                              </SocialA>
                            </SocialLi>
                          </>
                        );
                      })}
                    </ul>
                  </div> */}
                </div>
              </Col>
              <Col xl={6} lg={6} md={6} className="mb-3">
                <div>
                  <div>
                    <H3Extra className="position-relative">
                      Useful Links
                    </H3Extra>
                  </div>
                  <UL>
                    {LinksData.map((val, index) => {
                      return (
                        <>
                          <LI key={index}>
                            <a href="#a">{val}</a>
                          </LI>
                        </>
                      );
                    })}
                  </UL>
                </div>
              </Col>
            </Row>
            <Row>
              {/* <Col xl={6} lg={6} md={8} className="mb-2">
                <div> */}
                  {/* <div>
                    <H3Extra className="position-relative">Subscribe</H3Extra>
                  </div> */}
                  {/* <div className="footer-text ">
                    <P
                      mb="14px"
                      size="14px"
                      color="#ffffff"
                      lHeight="21px"
                      ls="1px"
                      className="text-white"
                    >
                      Don’t miss to subscribe to our new feeds, Reach us!
                    </P>
                  </div> */}
                  {/* <div className="subscribe-form position-relative overflow-hidden">
                    <form action="#" data-aos="fade-up">
                      <EmailInput
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        placeholder="Email Address"
                      />
                      <SubmitBtn onClick={SubmitHandler}>
                        <i
                          style={{
                            fontSize: "22px",
                            transform: " rotate(-6deg)",
                          }}
                          className="fab fa-telegram-plane text-white"
                        ></i>
                      </SubmitBtn>
                    </form>
                  </div>
                </div>
              </Col> */}
            </Row>
          </Wrapper>
        </Wrapper>
        <Wrapper bg="#202020" p="25px 0">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 text-center text-lg-left">
                <div className="copyright-text">
                  <P m="0px" size="14px" color="#fff">
                    Copyright &copy; 2024, All Right Reserved{" "}
                    <a style={{ color: "#fff" }} href="#a">
                      AR Tech
                    </a>
                  </P>
                </div>
              </div>
              {/* <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    {FooterMenuData.map((val, index) => {
                      return (
                        <>
                          <FooterMenuLI key={index}>
                            <a href="#">{val}</a>
                          </FooterMenuLI>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default Footer;
