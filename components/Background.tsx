"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

export function Background() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 120,
        particles: {
          number: {
            value: 1000,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: ["#ffffff"]
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 1
          },
          size: {
            value: 3,
            random: {
              enable: true,
              minimumValue: 1
            }
          },
          move: {
            size: true,
            enable: true,
            speed: 0.25,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out"
            },
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            },
            trail: {
              enable: true,
              length: 5,
              fillColor: "#222"
            },
            warp: true
          }
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            push: {
              quantity: 4
            }
          }
        },
        detectRetina: true,
        absorbers: {
          orbits: true,
          destroy: true,
          opacity: 1,
          color: "#000",
          size: {
            value: 5,
            limit: 10,
            random: false,
            density: 50
          },
          position: {
            x: 50,
            y: 50
          }
        },
        background: {
          color: "#222"
        }
      }}
      className="fixed inset-0 -z-10"
    />
  );
}