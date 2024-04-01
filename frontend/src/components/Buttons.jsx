import styled from "styled-components";
const HeaderBtn = styled.button`
  color: ${(props) => (props.scrollBtn ? "#16a092" : "white")};
  border: ${(props) =>
    props.scrollBtn ? "2px solid #16a092" : "2px solid white"};
  font-weight: bold;
  background: transparent;
  font-size: 16px;
  padding: 9px 25px;
  text-transform: uppercase;
  border-radius: 10px;
  transition: 0.6s ease-in-out;

  &:hover {
    background: ${(props) => (props.scrollBtn ? "#16a092" : "white")};
    color: ${(props) => (props.scrollBtn ? "white" : "black")};
    font-weight: bold;
  }
`;
const PrimaryBtn = styled.button`
  background: ${(props) => (props.bg ? props.bg : "transparent")};
  margin-top: 25px;
  transition: 0.4s ease-in-out;
  border: 2px solid #16a092;
  font-size: 16px;
  width: ${(props) => (props.width ? props.width : "")};
  padding: ${(props) => (props.p ? props.p : "")};
  padding-left: ${(props) => (props.pl ? props.pl : "")};
  padding-right: ${(props) => (props.pr ? props.pr : "")};
  padding-top: ${(props) => (props.pt ? props.pt : "")};
  padding-bottom: ${(props) => (props.pb ? props.pb : "")};
  &:hover {
    background: ${(props) => (props.hoverBg ? props.hoverBg : " #16a092")};
    transition: ${(props) =>
      props.hoverTransition ? props.hoverTransition : ""};
    transform: ${(props) => (props.hoverTransform ? props.hoverTransform : "")};
    color: white;
    ${"" /* font-weight: bold; */}
  }
`;
export { HeaderBtn, PrimaryBtn };
