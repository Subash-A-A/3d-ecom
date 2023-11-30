import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Home3D from "./Home3D";
import { Loader } from "@react-three/drei";
import NavButton from "./NavButton";

const Home = () => {
  return (
    <section class="canvas">
      <div id="entry-screen"></div>
      <NavButton
        link={"/search"}
        fromColor={"#171717"}
        toColor={"#ffffff"}
        iconClass={"search-icon"}
      />
      <Canvas camera={{ fov: 10, position: [0, 0, 7.5] }}>
        <Suspense fallback={null}>
          <Home3D />
        </Suspense>
      </Canvas>
      <Loader />
    </section>
  );
};

export default Home;
