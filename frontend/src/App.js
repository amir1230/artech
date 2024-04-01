import React, { useEffect } from "react";
import Home from "../src/pages/Home";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import CareerPage from "./pages/CareerPage";
import LetsTalkPage from "./pages/LetsTalkPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Wrapper, useMediaQuery } from "./components/Layouts";
import Aos from "aos";
import { ToastContainer } from "react-toastify";
import { PopupWidget } from "react-calendly";
import styled from "styled-components";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
const ResponsiveOverflow = styled(Wrapper)`
  * {
    overflow: ${(props) => (props.overflow ? props.overflow : "")};
  }
  overflow: ${(props) => (props.overflow ? props.overflow : "")};
`;
const App = () => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <ToastContainer
        className="set_notify"
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <ResponsiveOverflow overflow={isResponsive && "hidden !important"}>
        <Wrapper
          style={{
            position: "fixed",
            bottom: "5%",
            right: "2.5%",
            zIndex: 10,
          }}
        >
          <Wrapper>
            <a
              href="https://api.whatsapp.com/send?phone=+923245971343&text=Amir!"
              class="whatsapp-button"
              target="_blank"
              rel="noreferrer"
              style={{ bottom: "15px" }}
            >
              <img
                src="https://i.ibb.co/VgSspjY/whatsapp-button.png"
                alt="whatsapp"
              />
            </a>

          </Wrapper>
          <Wrapper className="mt-5">
            <PopupWidget
              url="https://calendly.com/info-ywa_/30min"
              rootElement={document.getElementById("root")}
              text="Click here to schedule!"
              textColor="#ffffff"
              color="#16a092"
            />
          </Wrapper>
        </Wrapper>

        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Service" element={<ServicesPage />} />
            {/* <Route path="/Career" element={<CareerPage />} /> */}
            <Route path="/contact" element={<LetsTalkPage />} />
          </Routes>

          <Footer />
        </Router>
      </ResponsiveOverflow>
    </>
  );
};

export default App;
