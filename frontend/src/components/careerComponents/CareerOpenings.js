import React, { useState, useEffect } from "react";
import angular from "../../assets/angular.png";
import magento from "../../assets/magento.png";
import android from "../../assets/android.png";
import { Wrapper, useMediaQuery } from "../Layouts";
import { P, H6 } from "../Typography";
import ModalComp from "../Modals.jsx";
import { Spacer } from "../Spacer.jsx";
import { InputStyle, TextAreaInputStyle } from "../Inputs.jsx";
import styled from "styled-components";
import { toast } from "react-toastify";
import axios from "axios";
const CareerListStyle = styled.li`
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
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`;
const CareerItemListStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding-top: ${(props) => (props.pt ? props.pt : "")};
  padding-left: ${(props) => (props.pl ? props.pl : "")};
  border-top: ${(props) => (props.bt ? props.bt : "")};

  li {
    margin-right: 10px;
    margin-bottom: 0;
    padding: 7px;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    font-weight: bold;
    background-color: transparent;
    border: 2px solid #16a092;
    margin: 5px 10px 5px 0;
    cursor: pointer;
    transition: all ease 0.2s;

    &:hover {
      background-color: #16a092;
      color: white;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;
const CareerCardA = styled.a`
  color: rgb(255, 255, 255);
  list-style-type: none !important;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;
const CareerCardsData = [
  {
    src: angular,
    title: "Blockchain",
    new: "New!",
    feature: "Featured",
    role: "Senior Blockchain Developer",
    city: "Lahore",
    time: "Full Time",
    apply: "Apply now",
  },

  {
    src: android,
    title: "UI/UX",
    new: "New!",
    feature: "Featured",
    role: "UI/UX Designer",
    city: "Lahore",
    time: "Full Time",
    apply: "Apply now",
  },
  {
    src: magento,
    title: "React Js Developer",
    new: "New!",
    feature: "Featured",
    role: "Senior React Developer",
    city: "Lahore",
    time: "Full Time",
    apply: "Apply now",
  },
  {
    src: angular,
    title: "Java Developer",
    new: "New!",
    feature: "Featured",
    role: "Senior Java Developer",
    city: "Lahore",
    time: "Full Time",
    apply: "Apply now",
  },
  {
    src: magento,
    title: "Sales intern",
    new: "New!",
    feature: "Featured",
    role: "Sales intern",
    city: "Lahore",
    time: "Full Time",
    apply: "Apply now",
  },
];
const InputData = [
  {
    name: "name",
    placeholder: "Name",
  },
  {
    name: "email",
    placeholder: "Email",
  },
  {
    name: "job",
    placeholder: "Job Title",
  },
];
const CareerOpenings = () => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const [open, setOpen] = useState(false);
  const [valuesInput, setValuesInput] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleClose = () => setOpen(false);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setValuesInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (
        valuesInput.name &&
        valuesInput.email &&
        valuesInput.role &&
        valuesInput.message
      ) {
        setLoading(true);
        const config = {
          headers: {
            "Content-type": `application/json`,
          },
        };
        const contactData = {
          name: valuesInput.name,
          email: valuesInput.email,
          subject: valuesInput.role,
          message: valuesInput.message,
        };
        const res = await axios.post(
          "http://localhost:8000/contact",
          { contactData },
          config
        );
        if (res.status === 200) {
          setLoading(false);
          toast.success("Mail Sent Sucessfully!", {
            className: "set_notify",
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          setLoading(false);
          toast.error("Invalid Error!", {
            className: "set_notify",
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }
      setValuesInput({
        name: "",
        email: "",
        role: valuesInput.role,
        message: "",
      });
    } catch (e) {
      setLoading(false);
      toast.error("Invalid Error!", {
        className: "set_notify",
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <ModalComp
        heading={"Apply Now"}
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        submitHandler={submitHandler}
        loading={loading}
      >
        <Wrapper m="5px">
          <Spacer height="30px" />
          {InputData.map((val, index) => {
            return (
              <>
                <Spacer height="5px" />
                <InputStyle
                  key={index}
                  data-aos="fade-up"
                  name={val.name}
                  onChange={inputHandler}
                  value={
                    index === 0
                      ? valuesInput.name
                      : index === 1
                      ? valuesInput.email
                      : index === 2
                      ? valuesInput.role
                      : ""
                  }
                  type=""
                  height="50px"
                  placeholder={val.placeholder}
                  required
                />
              </>
            );
          })}
          <Spacer height="5px" />
          <TextAreaInputStyle
            data-aos="fade-up"
            name="message"
            value={valuesInput.message}
            onChange={(e) => {
              setValuesInput((prevState) => ({
                ...prevState,
                message: e.target.value,
              }));
            }}
            id=""
            cols="30"
            rows="10"
            placeholder="Enter your message here..."
            required
          ></TextAreaInputStyle>
        </Wrapper>
      </ModalComp>
      <Wrapper bg="#000">
        <div className="container">
          <div data-aos="fade-down">
            <Wrapper
              pt="5rem"
              color="white"
              className="text-center display-4 fw-bold"
            >
              Current Openings
            </Wrapper>

            <Wrapper color="#16a092" className="text-center pt-3">
              Discover your next career move at isolab, where we are currently
              hiring talented professionals
            </Wrapper>
          </div>
          {/* vacnacy */}

          <Wrapper mt="5rem">
            <div className="row">
              <ul className="col-12">
                {CareerCardsData.map((val, index) => {
                  return (
                    <>
                      <CareerListStyle
                        p={isResponsive ? "20px" : "30px"}
                        mb={isResponsive ? "50px" : "20px"}
                        border="2px solid #16a092"
                        width="100%"
                        borderRadius="5px"
                        className={`job-card new featured align-items-center justify-content-between ${
                          isResponsive ? "d-block" : "d-flex"
                        }`}
                        key={index}
                      >
                        <Wrapper pb={isResponsive && "20px"}>
                          <div className="d-md-flex align-items-center">
                            <Wrapper
                              data-aos="zoom-in"
                              height={isResponsive ? "60px" : "58px"}
                              width={isResponsive ? "60px" : "88px"}
                              mr={!isResponsive && "50px"}
                              m={isResponsive && "-0px 0 10px 0"}
                              className="img-c"
                            >
                              <img
                                src={val.src}
                                height="100%"
                                width="100%"
                                alt=""
                                style={{ objectFit: "contain" }}
                              />
                            </Wrapper>
                            <div>
                              <div className="d-flex align-items-center">
                                <P
                                  size="15px"
                                  color="white"
                                  weight="700"
                                  lHeight="1.4"
                                  mb="7px"
                                >
                                  {val.title}
                                </P>
                                <P
                                  color="white"
                                  weight="700"
                                  lHeight="1.4"
                                  mb="7px"
                                  className="tag-new d-block"
                                  p="7px 10px"
                                  bg="#16a092"
                                  borderRadius="20px"
                                  ml="10px"
                                  tt="uppercase"
                                  size="11px"
                                >
                                  {val.new}
                                </P>
                                <P
                                  color="black"
                                  weight="700"
                                  lHeight="1.4"
                                  mb="7px"
                                  p="7px 10px"
                                  bg="white"
                                  borderRadius="20px"
                                  ml="10px"
                                  tt="uppercase"
                                  size="11px"
                                  className="tag-featured d-block"
                                >
                                  {val.feature}
                                </P>
                              </div>
                              <CareerCardA href="#" data-aos="fade-down-right">
                                <h2>{val.role}</h2>
                              </CareerCardA>
                            </div>
                          </div>
                        </Wrapper>
                        <CareerItemListStyle
                          pt={isResponsive && "20px"}
                          pl={isResponsive ? "0px" : "20px"}
                          bt={isResponsive && "1px solid #939c9b"}
                          data-aos="zoom-out"
                        >
                          <li>{val.city}</li>
                          <li>{val.time}</li>

                          <li
                            onClick={() => {
                              setOpen(true);
                              setValuesInput({
                                name: "",
                                email: "",
                                role: val.role,
                                message: "",
                              });
                            }}
                          >
                            {val.apply}
                          </li>
                        </CareerItemListStyle>
                      </CareerListStyle>
                    </>
                  );
                })}
              </ul>
            </div>
          </Wrapper>
          <div className="weneed text-white text-center fs-4 py-4">
            Join our team! Follow us on LinkedIn for career updates.
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default CareerOpenings;
