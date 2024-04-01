import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import hovered_logo from "../../assets/hovered_logo.png";
import { useMediaQuery, Wrapper } from "../Layouts";
import { HeaderBtn } from "../Buttons";
import styled from "styled-components";

const HeaderStyle = styled.div`
  * {
    overflow: hidden;
  }
  font-family: Tinos, serif;
  overflow: hidden;
  width: 100%;
  padding: 0 1.5rem;
  transition: 0.3s ease all;
  padding: ${(props) => (props.p ? props.p : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  a {
    color: ${(props) => (props.color ? props.color + " !important" : "white")};
    transition: 0.5s ease !important;
  }
`;

const HeaderContentStyle = styled.div`
  overflow: hidden;
  color: #fff;
  margin: 0 auto;
  max-width: 1920px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 100;
  margin-top: 0.1rem;
`;
const HeaderContentNavStyle = styled.div`
  top: 0;
  right: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(rgba(105, 102, 102, 0.153), 0.9);
  transform: ${(props) => (props.transform ? props.transform : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  height: ${(props) => (props.height ? props.height : "")};
  width: ${(props) => (props.width ? props.width : "")};
  position: ${(props) => (props.position ? props.position : "")};
  color: ${(props) => (props.color ? props.color : "")};
  transition: ${(props) => (props.transition ? props.transition : "")};
`;
const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};

  .navbar-scrolled {
    background-color: rgb(255, 255, 255);
    transition: 0.5s ease;
  }
  .navbar-a {
    font-size: 16px;
    color: rgb(255, 255, 255);
    text-decoration: none;
    padding: 0.75rem 1.25rem;
    font-weight: bold;
    transition: 0.3s ease all;
    border-radius: 12px;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      
    }
  }
`;

const LogoImage = styled.img`
  width: ${(props) => (props.isResponsive ? "6.15rem" : "6rem")};
`;

function Header() {
  const isResponsive = useMediaQuery({
    query: "(min-width: 517px)",
  });
  const breakPoint = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const LI = styled.li`
    &:not(:last-child) {
      margin-bottom: ${breakPoint ? "0px" : "32px"};
      margin-right: ${breakPoint && "16px"};
    }
  `;
  const [menuOpen, setMenuOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [hover, setHover] = useState(false);

  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // scroll color change
  const changeColor = () => {
    if (window.scrollY >= 56) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  /////
  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };

 
  return (
    <HeaderStyle
      onPointerEnter={() => {
        setHover(true);
      }}
      onPointerLeave={() => {
        setHover(false);
      }}
      p={breakPoint ? "0 3rem" : "0 1.5rem"}
      bg={(color || hover) && "#7d7d7d"}
      color={(color || hover) && "black"}
      transition={color || hover ? "0.5s ease" : "0.3s ease transform;"}
      className="fixed-top"
    >
      <Wrapper className="container pt-2 mt-1">
        <HeaderContentStyle>
          <Link to="/">
            <LogoImage className="tech" src={logo} alt="" isResponsive={isResponsive} />
          </Link>

          <HeaderContentNavStyle
            transform={
              breakPoint
                ? "none"
                : menuOpen && size.width < 768
                ? "translate(100%)"
                : "translate(0)"
            }
            width={breakPoint ? "auto" : "100%"}
            height={breakPoint ? "auto" : "100vh"}
            position={breakPoint ? "static" : "fixed"}
            color={(menuOpen && size.width) < 768 && "black"}
            bg={breakPoint ? "transparent" : "rgba(105, 102, 102, 0.9)"}
            className={`${
              breakPoint
                ? "d-flex flex-row"
                : "d-flex flex-column justify-content-center align-items-center"
            }`}
          >
            <UL
              mb={breakPoint ? "0px" : "32px"}
              mr={breakPoint && "calc(0.5rem + 16px)"}
              className={`${
                breakPoint
                  ? "d-flex flex-row align-items-center"
                  : "d-flex flex-column"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              <LI>
                <Link
                  to="/"
                  className={
                    color
                      ? "navbar-a text-uppercase  navbar-a-scrolled  "
                      : "navbar-a text-uppercase "
                  }
                >
                  Home
                </Link>
              </LI>
              <LI>
                <Link
                  to="/about"
                  className={
                    color
                      ? "navbar-a text-uppercase navbar-a-scrolled "
                      : "navbar-a text-uppercase "
                  }
                >
                  About
                </Link>
              </LI>
              <LI>
                <Link
                  to="/service"
                  className={
                    color
                      ? "navbar-a  text-uppercase navbar-a-scrolled "
                      : "navbar-a text-uppercase "
                  }
                >
                  Services
                </Link>
              </LI>
              {/* <LI>
                <Link
                  to="/career"
                  className={
                    color
                      ? "navbar-a  text-uppercase navbar-a-scrolled "
                      : "navbar-a text-uppercase "
                  }
                >
                  {" "}
                  Career
                </Link>
              </LI> */}

              <Link to="/contact">
                <HeaderBtn scrollBtn={color || hover ? true : false}>
                  Let's Talk
                </HeaderBtn>
              </Link>
            </UL>
          </HeaderContentNavStyle>
          <Wrapper
            className={breakPoint ? "d-none" : "d-flex align-items-center"}
            size="2rem"
            transition="0.3s ease all"
            style={{ position: "relative", cursor: "pointer" }}
          >
            {!menuOpen ? (
              <BiMenuAltRight
                style={{ color: hover || (color && "black") }}
                onClick={menuToggleHandler}
              />
            ) : (
              <AiOutlineClose onClick={menuToggleHandler} />
            )}
          </Wrapper>
        </HeaderContentStyle>
      </Wrapper>
    </HeaderStyle>
  );
}

export default Header;
