"use client";

import { useEffect, useState } from "react";

const HeaderAnimatedWords = () => {
  const wordsArray = ["Learn", "Invent", "Succeed"];
  const [currentWord, setCurrentWord] = useState(wordsArray[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(wordsArray[currentIndex]);
      setCurrentIndex(currentIndex + 1);
      if (currentIndex >= wordsArray.length - 1) {
        setCurrentIndex(0);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [currentIndex]);
  console.log(currentIndex, currentWord);
  return (
    <div className="w-2/3 p-8 text-primary">
      <div className="w-[90%] mx-auto">
        <h1 className="text-7xl tracking-wider">
          Together We{" "}
          <span className="font-bold slide-animation">{currentWord}</span>
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
