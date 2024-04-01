import styled from "styled-components";
const Spacer = styled.div`
  height: ${(props) => (props.height ? props.height : "")};
  width: ${(props) => (props.width ? props.width : "")};
`;
export { Spacer };
