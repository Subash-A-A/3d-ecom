import React, { useEffect, useRef } from "react";
import { Earth } from "./Earth";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import gsap from "gsap";

const EarthContainer = ({ input }) => {
  const earth = useRef();
  const speed = 0.125;

  useFrame((state, delta) => {
    earth.current.rotation.y += speed * delta;
  });

  const spin = () => {
    gsap.to(earth.current.rotation, {
      y: earth.current.rotation.y + Math.PI / 2,
      duration: 2,
      ease: "expo.out",
    });
  };

  useEffect(() => {
    spin();
  }, [input]);

  return (
    <group ref={earth}>
      <Float floatingRange={[-0.1, 0.1]} rotationIntensity={0.5} speed={0.5}>
        <Earth />
      </Float>
    </group>
  );
};

export default EarthContainer;
