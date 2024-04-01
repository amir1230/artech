// import React, { useEffect } from "react";
// import CareerOpenings from "../components/careerComponents/CareerOpenings";
// import Hero from "../components/Common/Hero";
// import { Wrapper } from "../components/Layouts";
// import IndustriesCard from "../components/Common/IndustriesCard";
// import health from "../assets/health.png";
// import riding from "../assets/riding.png";
// import lunch from "../assets/lunch.png";
// import emoji from "../assets/emoji.png";
// import flexibility from "../assets/flexibility.png";
// import { useNavigate } from "react-router-dom";
// const IndustriesCareerData = [
//   {
//     src: health,
//     title: "Health care",
//     desc: "Comprehensive healthcare coverage, prioritizing your well-being.",
//   },

//   {
//     src: flexibility,
//     title: "Flexibility",
//     desc: "Embrace work-life balance with flexible schedules and remote options",
//   },
//   {
//     src: lunch,
//     title: "Lunch",
//     desc: "Complimentary catered lunches for a nourishing workday",
//   },

//   {
//     src: emoji,
//     title: "Fun",
//     desc: "Vibrant work environment with team activities, and fostering fun",
//   },

//   {
//     src: riding,
//     title: "Life style",
//     desc: "Achieve work-life balance with supportive and flexible culture",
//   },
// ];
// const CareerPage = () => {
//   const history = useNavigate();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [history]);
//   return (
//     <>
//       <Hero
//         bg="https://www.key.com/content/dam/kco/images/businesses-institutions/industry-expertise/advisor_homepage_cropped.jpg"
//         title="Career At tech"
//         extra=""
//         desc="Discover endless possibilities for growth and learning in the ever-evolving world of software development at isolab."
//         contact={false}
//         page="about"
//       />
//       <Wrapper bg="#000">
//         <div className="container py-5" data-aos="fade-down">
//           <div className="text-center text-white fs-1 text-capitalize fw-bold pt-5">
//             Lets explore our capabilities together
//           </div>
//           <Wrapper color="#16a092" className="text-center pt-3">
//             Quality is at the core of everything we do, ensuring robust and
//             reliable software solutions.
//           </Wrapper>
//         </div>
//         <Wrapper
//           bg="linear-gradient(90deg,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(https://www.rrc.ca/explore/wp-content/uploads/sites/1/sites/98/2022/09/Business-Interest.jpg)"
//           style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
//           width="100%"
//           height="35vh"
//           className="img-career"
//         ></Wrapper>
//       </Wrapper>

//       <CareerOpenings />
//       <IndustriesCard data={IndustriesCareerData} page={"career"} />
//       {/* <CareerBenefits /> */}
//     </>
//   );
// };

// export default CareerPage;
