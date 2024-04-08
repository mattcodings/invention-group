"use client";

import { useEffect, useState } from "react";

const HeaderAnimatedWords = () => {
  const words = ["Learn", "Invent", "Succeed"];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <h1 className="text-4xl lg:text-6xl tracking-wider">
      Together We{" "}
      <span className="font-bold slide-animation">{words[currentIndex]}</span>
    </h1>
  );
};
export default HeaderAnimatedWords;
