const HeroHeader = ({ heading, headingText, dynamicHeader }) => {
  return (
    <div className="p-8 grid items-center h-[90vh] hero-header ">
      <div>{dynamicHeader}</div>
      <div className="w-7/8 lg:w-4/5">
        <div className="w-[80%] mx-auto border-8 p-8 bg-primary text-white opacity-75">
          <h1 className="text-4xl tracking-wider md:text-6xl">{heading}</h1>
          <div className=" my-10 md:my-20">
            <p className="text-left md:text-3xl tracking-wide leading-10">
              {headingText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroHeader;
