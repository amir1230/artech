import React, { useState } from "react";
import building from "../../assets/building.png";
import { Wrapper, useMediaQuery } from "../Layouts";
import { H1, P } from "../Typography";
import styled from "styled-components";
import { PrimaryBtn } from "../Buttons";
import axios from "axios";
import { toast } from "react-toastify";
const ContactSection = styled.section`
  display: grid;
  place-items: center;
  background: linear-gradient(177deg, rgb(0, 0, 0) 40%, rgb(46 46 46) 100%);
`;
const ContactFormStyle = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-gap: 6rem;
`;

const InputStyle = styled.input`
  width: 100%;
  padding: 17px;
  border: none;
  outline: none;
  background: #191919;
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 0.7rem;
  border-radius: 10px;
`;
const TextAreaStyle = styled.textarea`
  width: 100%;
  padding: 17px;
  border: none;
  outline: none;
  background: #191919;
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 0.7rem;
  border-radius: 10px;
  resize: none;
  height: 200px;
`;
const ContactUs = () => {
  const isResponsiveHighest = useMediaQuery({
    query: "(max-width: 1570px)",
  });
  const isResponsiveNormal = useMediaQuery({
    query: "(max-width: 1090px)",
  });
  const isResponsiveLow = useMediaQuery({
    query: "(max-width: 1000px)",
  });
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const inputHandle = (e) => {
    const { name, value } = e.target;
    setContactData((prevStates) => ({
      ...prevStates,
      [name]: value,
    }));
  };
  const SubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (
        contactData.name &&
        contactData.email &&
        contactData.subject &&
        contactData.message
      ) {
        setLoading(true);
        const config = {
          headers: {
            "Content-type": `application/json`,
          },
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
      setContactData({
        name: "",
        email: "",
        subject: "",
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
      <ContactSection bg="#000">
        <ContactFormStyle
          p={isResponsiveHighest ? "0px 3%" : "0px 15%"}
          transition={
            (isResponsiveHighest && ".2s") || (isResponsiveNormal && "0.3s")
          }
          className="container  justify-content-center"
          style={{
            // gridGap: isResponsiveNormal ? "2rem" : "2rem",
            // gridTemplateColumns: isResponsiveLow ? "1fr" : " repeat(2, 2fr)",
          }}
        >
          <Wrapper style={{ order: isResponsiveLow && 2 }}>
            {/* <H1
              weight="bold"
              ls="2px"
              size={"32px"}
              color="aliceblue"
              mb="20px"
            >
              Contact <span>Us</span>
            </H1> */}
            <P
              mb="2.2rem"
              ls="0.5px"
              lHeight="24px"
              // style={{ width: "90%" }}
              size={isResponsiveNormal ? "12px" : "16px"}
              color="#16a092"
            >
              
              {/* email: info@artech.com */}
            </P>
            <form className="position-relative mt-2" action="">
              <InputStyle
                type="text"
                name="name"
                value={contactData.name}
                onChange={inputHandle}
                placeholder="Your Name"
                required
              />
              <InputStyle
                type="text"
                name="email"
                onChange={inputHandle}
                value={contactData.email}
                placeholder="Your Email"
                required
              />
              <InputStyle
                type="text"
                name="subject"
                onChange={inputHandle}
                value={contactData.subject}
                placeholder="write a subject"
                required
              />
              <TextAreaStyle
                name="message"
                id=""
                cols="30"
                rows="10"
                onChange={inputHandle}
                value={contactData.message}
                placeholder="Your message"
                required
              ></TextAreaStyle>
              <PrimaryBtn
                // data-aos="zoom-in"
                hoverBg="transparent"
                hoverTransform="scale(1.1)"
                bg={loading ? "transparent" : "transparent"}
                weight="700"
                className={`btn btn-simision text-white ps-5 pe-5 mb-3 mt-2 `}
                style={{ border: "1px solid #fff" }}
                onClick={SubmitHandler}
              >
                {loading ? "..." : "Submit"}
              </PrimaryBtn>
            </form>
          </Wrapper>
          {/* <Wrapper>
            <img
              data-aos="fade-up-left"
              style={{
                maxWidth: "100%",
                borderRadius: "10px",
                marginBottom: isResponsiveLow && "30px",
              }}
              className={isResponsiveLow && "text-center"}
              width={isResponsiveLow ? "100%" : "720px"}
              height="auto"
              src={building}
              alt=""
            />
          </Wrapper> */}
        </ContactFormStyle>
      </ContactSection>
    </>
  );
};

export default ContactUs;
