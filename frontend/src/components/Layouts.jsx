import { Container, Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
const Wrapper = styled.div`
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "'Gilroy-Light', sans-serif"};
  font-style: normal;
  position: ${(props) => (props.position ? props.position : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  height: ${(props) => (props.height ? props.height : "")};
  width: ${(props) => (props.width ? props.width : "")};
  text-transform: ${(props) => (props.tt ? props.tt : "")};
  font-weight: ${(props) => (props.weight ? props.weight : "")};
  line-height: ${(props) => (props.lHeight ? props.lHeight : "")};
  font-size: ${(props) => (props.size ? props.size : "")};
  color: ${(props) => (props.color ? props.color : "")};
  padding: ${(props) => (props.p ? props.p : "")};
  padding-left: ${(props) => (props.pl ? props.pl : "")};
  padding-right: ${(props) => (props.pr ? props.pr : "")};
  padding-top: ${(props) => (props.pt ? props.pt : "")};
  padding-bottom: ${(props) => (props.pb ? props.pb : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  margin: ${(props) => (props.m ? props.m : "")};
  text-decoration: ${(props) => (props.td ? props.td : "")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "")};
  transition: ${(props) => (props.transition ? props.transition : "")};
  transform: ${(props) => (props.transform ? props.transform : "")};
  flex: ${(props) => (props.flex ? props.flex : "")};
  max-width: ${(props) => (props.maxW ? props.maxW : "")};
  min-width: ${(props) => (props.minW ? props.minW : "")};
  border: ${(props) => (props.border ? props.border : "")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
`;
const SpanWrapper = styled.span`
  font-style: normal;
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "'Gilroy-Light', sans-serif"};
  font-family: ${(props) => (props.fontFamily ? props.fontFamily : "")};
  position: ${(props) => (props.position ? props.position : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  height: ${(props) => (props.height ? props.height : "")};
  width: ${(props) => (props.width ? props.width : "")};
  text-transform: ${(props) => (props.tt ? props.tt : "")};
  font-weight: ${(props) => (props.weight ? props.weight : "")};
  line-height: ${(props) => (props.lHeight ? props.lHeight : "")};
  font-size: ${(props) => (props.size ? props.size : "")};
  color: ${(props) => (props.color ? props.color : "")};
  padding: ${(props) => (props.p ? props.p : "")};
  padding-left: ${(props) => (props.pl ? props.pl : "")};
  padding-right: ${(props) => (props.pr ? props.pr : "")};
  padding-top: ${(props) => (props.pt ? props.pt : "")};
  padding-bottom: ${(props) => (props.pb ? props.pb : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  margin: ${(props) => (props.m ? props.m : "")};
  text-decoration: ${(props) => (props.td ? props.td : "")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "")};
  transition: ${(props) => (props.transition ? props.transition : "")};
  transform: ${(props) => (props.transform ? props.transform : "")};
  flex: ${(props) => (props.flex ? props.flex : "")};
  max-width: ${(props) => (props.maxW ? props.maxW : "")};
  min-width: ${(props) => (props.minW ? props.minW : "")};
  border: ${(props) => (props.border ? props.border : "")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
`;
const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 2em 1.5em;
  background: transparent;
  border: 3px solid #16a092;
  background-size: 100% 200%;
  background-position: 0 2.5%;
  border-radius: 5px;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: #16a092;
    background-position: 0 100%;
    h3 {
      color: #ffffff;
    }
    p {
      color: #f0f0f0;
    }
    .icon-wrapper {
      background-color: #ffffff;
      color: #16a092;
    }
  }
  .icon-wrapper {
    position: relative;
    margin: auto;
    font-size: 30px;
    height: 2.5em;
    width: 2.5em;
    color: #ffffff;
    border-radius: 50%;
    display: grid;
    place-items: center;
    transition: 0.5s;
  }
`;
export { useMediaQuery, Container, Row, Col, Wrapper, SpanWrapper, Card };
