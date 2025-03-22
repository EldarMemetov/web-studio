import React from "react";
import Marquee from "react-fast-marquee";

export default function InfiniteScroll({
  children,
  speed = 50,
  gradient = false,
  direction = "left",
}) {
  return (
    <Marquee speed={speed} gradient={gradient} direction={direction}>
      {children}
    </Marquee>
  );
}
