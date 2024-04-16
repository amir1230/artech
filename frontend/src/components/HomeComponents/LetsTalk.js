import React from "react";
import { Wrapper } from "../Layouts";
import { PrimaryBtn } from "../Buttons";

const LetsTalk = () => {
  return (
    <Wrapper bg="#000">
      <Wrapper pt="5rem" pb="5rem" className="container">
        <Wrapper
          color="#fff"
          weight="bold"
          ls="3px"
          className="text-center fs-1"
          size="32px"
        >
          Want to higher a dedicated developer?
        </Wrapper>
        <div className="d-flex justify-content-center " data-aos="zoom-in">
          <PrimaryBtn 
            className="text-white py-2 px-4 rounded btn"
            style={{ fontWeight: "600" }}
          >
            Let's Talk
          </PrimaryBtn>
        </div>
      </Wrapper>
    </Wrapper>
  );
};

export default LetsTalk;
