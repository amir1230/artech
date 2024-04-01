import styled from "styled-components";
const InputStyle = styled.input`
@font-face {
    font-family: "Gilroy-Black.eot";
    src: url("../fonts/Gilroy-Black.ttf") format("truetype");
  }
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "'Gilroy-Black', sans-serif"};
  width: 100%;
  height: ${(props) => (props.height ? props.height : "50px")};
  padding: 17px;
  border: none;
  outline: none;
  background: #191919;
  color: #fff;
  font-size: 16px;
  margin-bottom: 0.7rem;
  border-radius: 15px;
`;
const TextAreaInputStyle = styled.textarea`
  @font-face {
    font-family: "Gilroy-Black.eot";
    src: url("../fonts/Gilroy-Black.ttf") format("truetype");
  }
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "'Gilroy-Black', sans-serif"};
  width: 100%;
  padding: 17px;
  border: none;
  outline: none;
  background: #191919;
  color: #fff;
  font-size: 16px;
  margin-bottom: 0.7rem;
  border-radius: 10px;
  resize: none;
  height: 200px;
`;
export { InputStyle, TextAreaInputStyle };