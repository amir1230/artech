import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./ParticlesBg.css";

const ParticlesBg = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "triangle",
          },
          opacity: {
            value: 0.2,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: 4,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              minimumValue: 0.1,
              sync: false,
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            outModes: "out",
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              links: {
                opacity: 0.3,
              },
            },
            bubble: {
              distance: 400,
              size: 10,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 1,
            },
          },
        },
        smooth: true,
        detectRetina: true,
        background: {
          color: "transparent",
        },
      }}
    />
  );
};

export default ParticlesBg;
