import React, { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text, Environment, Float } from "@react-three/drei";
import { ManA } from "./ManA";
import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { lerp, clamp } from "../utils";
import gsap from "gsap";

const Home3D = () => {
  const font = "DMSerifDisplay-Regular.ttf";
  const motion = 0.0125;

  const { pointer } = useThree();
  const man = useRef();
  const text = useRef();
  const backText = useRef();

  useFrame((state, delta) => {
    man.current.position.x = lerp(
      man.current.position.x,
      -pointer.x * motion,
      delta
    );

    man.current.position.y = lerp(
      man.current.position.y,
      -pointer.y * motion,
      delta
    );

    man.current.position.x = clamp(man.current.position.x, -motion, motion);
    man.current.position.y = clamp(man.current.position.y, -motion, motion);
  });

  useEffect(() => {
    gsap.fromTo(
      "#entry-screen",
      { scale: 1 },
      { scale: 0, duration: 1, ease: "expo.out" }
    );
  }, []);

  return (
    <>
      <color attach={"background"} args={["#000000"]}></color>
      <ambientLight intensity={1} color={"#ffffff"} />
      <directionalLight
        intensity={1}
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize={1024}
      />
      <group>
        <Float rotationIntensity={0.2} floatingRange={[-0.1, 0.1]} speed={0.5}>
          <Text
            position={[0, 0, -5.5]}
            rotation={[0, 0, Math.PI / 30]}
            font={`/fonts/${font}`}
            fontSize={1.75}
            fillOpacity={0}
            strokeWidth={0.0064}
            strokeOpacity={0.4}
            strokeColor={"#ffffff"}
            letterSpacing={0.1}
            ref={backText}
          >
            STYLE
          </Text>
        </Float>
        <Float
          rotationIntensity={0.1}
          floatingRange={[-0.05, 0.05]}
          speed={0.6}
        >
          <Text
            position={[0, 0, -5]}
            rotation={[0, 0, 0]}
            font={`/fonts/${font}`}
            fontSize={1}
            ref={text}
            color={"#ffffff"}
          >
            FASHION
          </Text>
        </Float>
      </group>
      <group ref={man} rotation={[0, 0, 0]}>
        <group position={[0, -4.8, 0]} rotation={[0, -Math.PI / 3.6, 0]}>
          <ManA />
        </group>
      </group>
      <Environment files={"/maps/studio2.hdr"} background near={1} far={1000} />
      <EffectComposer>
        <Vignette eskil={false} offset={0.1} darkness={0.5} />
      </EffectComposer>
    </>
  );
};

export default Home3D;
