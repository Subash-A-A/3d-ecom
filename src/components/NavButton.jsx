import React, { useState } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const NavButton = ({ link, fromColor, toColor, iconClass }) => {
  const navigate = useNavigate();
  const [canClick, setCanClick] = useState(true);
  const tl = gsap.timeline();

  const transition = () => {
    if (!canClick) return;
    setCanClick(false);
    tl.fromTo(
      "#entry-screen",
      { scale: 0, backgroundColor: fromColor },
      { scale: 1, backgroundColor: toColor, duration: 1, ease: "expo.out" }
    ).then(() => {
      setCanClick(true);
      navigate(link);
    });
  };

  return (
    <div id="search" className={iconClass} onClick={() => transition()}></div>
  );
};

export default NavButton;
