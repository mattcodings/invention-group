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
    <h1 className="text-4xl lg:text-7xl tracking-wider drop-shadow-lg font-serif font-bold lg:mb-20">
      Together We{" "}
      <span className=" slide-animation text-neutral">
        {words[currentIndex]}
      </span>
    </h1>
  );
};
export default HeaderAnimatedWords;
