import React, { useEffect } from "react";
import AboutContact from "../components/AboutComponent/AboutContact";
import ContactUs from "../components/Common/ContactUs";
import { Wrapper } from "../components/Layouts";
import { H1, P } from "../components/Typography";
import ServicesSec from "../components/Common/ServicesSec";
import lunch from "../assets/lunch.png";
import { useNavigate } from "react-router-dom";
const ContactData = [
  {
    title: "FAQS",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. consectetur adipisicing elit. Lorem ipsum dolor, sit amet  sit amet",
    src: lunch,
    help: "Help center",
  },
  {
    title: "FAQS",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. consectetur adipisicing elit. Lorem ipsum dolor, sit amet  sit amet",
    src: lunch,
    help: "Help center",
  },
  {
    title: "FAQS",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. consectetur adipisicing elit. Lorem ipsum dolor, sit amet  sit amet",
    src: lunch,
    help: "Help center",
  },
];
const LetsTalkPage = () => {
  const history = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);
  return (
    <>
      <Wrapper bg="black">
        <Wrapper
          className="container"
          pt="10rem"
          mb=""
          data-aos="fade-down"
        >
          <Wrapper
            width="100%"
            className="d-flex flex-column flex-wrap justify-content-center"
          >
            <H1
              size="60px"
              ls="3px"
              className="text-center text-white fw-bold pt-2"
            >
              Contact Us
            </H1>
            <div className="what d-flex justify-content-center">
              <P
                size="20px"
                color="white"
                lHeight="31px"
                className=" w-50 text-center"
              >
                Interested in our IT services or need advice? Then please get in
                touch and we’ll be glad to help.
              </P>
            </div>
          </Wrapper>
        </Wrapper>
        <ServicesSec data={ContactData} heading={false} page="contact" />
        <AboutContact />
        <ContactUs />
      </Wrapper>
    </>
  );
};

export default LetsTalkPage;
