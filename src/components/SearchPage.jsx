import React, { Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls } from "@react-three/drei";
import EarthContainer from "./EarthContainer";
import gsap from "gsap";
import NavButton from "./NavButton";

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    gsap.fromTo(
      "#entry-screen",
      { backgroundColor: "#000000", scale: 1 },
      { backgroundColor: "#ffffff", scale: 0, duration: 1, ease: "expo.out" }
    );
  }, []);

  return (
    <section className="canvas">
      <input
        type="text"
        id="search-bar"
        className="search"
        placeholder="Search for a product..."
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <NavButton
        link={"/"}
        fromColor={"#ffffff"}
        toColor={"#171717"}
        iconClass={"home-icon"}
      />
      <div id="entry-screen"></div>
      <Canvas camera={{ fov: 10, position: [0, 0, -20] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={2} />
          <directionalLight intensity={5} position={[2, 2, 2]} />
          <color attach={"background"} args={["#000000"]}></color>
          <EarthContainer input={searchText} />
          <OrbitControls />
        </Suspense>
      </Canvas>
      <Loader />
    </section>
  );
};

export default SearchPage;
