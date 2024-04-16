import React from "react";
import bag from "../../assets/bag.png";
import lock from "../../assets/lock.png";
import tag from "../../assets/tag.png";
import login from "../../assets/login.png";
import { useMediaQuery } from "../Layouts";
import { H3 } from "../Typography";
import styled from "styled-components";
const SectionDel = styled.section`
background: linear-gradient(177deg, rgb(0, 0, 0) 40%, rgb(26 26 26) 100%);
  color: #fff;
  padding-top: 120px;
  padding-bottom: 40px;
`;
const ContainerDel = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.gridTC ? props.gridTC : "")};
  grid-gap: ${(props) => (props.gridGao ? props.gridGap : "")};
  text-align: center;
`;
const LogosData = [
  {
    src: login,
    title: "Happy Cutomers",
  },
  {
    src: tag,
    title: "22500+ Lines of code",
  },
  {
    src: lock,
    title: "10+  Successful Projects",
  },
  {
    src: bag,
    title: "30+ Developer",
  },
];
const DeliveredSec = () => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <SectionDel>
      <ContainerDel
        gridTC={isResponsive ? "repeat(2, 1fr)" : "repeat(4, 1fr)"}
        gridGap={isResponsive ? "40px" : "180px"}
        className="container"
      >
        {/* {LogosData.map((val, index) => {
          return (
            <>
              <div data-aos="flip-left" key={index} className="m-3">
              <img src={val.src} alt="" style={{ width: "63px" }} />
              <H3 className="pt-3" color="#bfcdd5" size="21px" weight="600">
                  {val.title}
                </H3>
              </div>
            </>
          );
        })} */}
      </ContainerDel>
    </SectionDel>
  );
};

export default DeliveredSec;
