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
    <div className="w-2/3 p-8 text-primary">
      <div className="w-[90%] mx-auto">
        <h1 className="text-7xl tracking-wider">
          Together We{" "}
          <span className="font-bold slide-animation">
            {words[currentIndex]}
          </span>
        </h1>
        <div className="my-20">
          <h5 className="text-5xl mb-8 tracking-wider leading-[60px]">
            We Help Get Your New Idea Off the Ground
          </h5>
          <p className="text-left text-3xl tracking-wide leading-10">
            If you have a new invention idea, our team can help you make sure
            that you are very successful when it comes time to sell your new
            product. We have been consulting with inventors for over 30 years
            and we can make sure you are successful, too.
          </p>
        </div>
      </div>
    </div>
  );
};
export default HeaderAnimatedWords;
