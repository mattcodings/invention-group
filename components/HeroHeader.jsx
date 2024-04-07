const HeroHeader = ({ heading, subheading, headingText }) => {
  return (
    <div className="p-8 grid items-center h-[90vh] hero-header text-primary">
      <div className="w-7/8 lg:w-2/3">
        <div className="w-[90%] mx-auto">
          <h1 className="text-5xl tracking-wider md:text-7xl">{heading}</h1>
          <div className="my-20">
            <h5 className="text-5xl mb-8 tracking-wider leading-[60px]">
              {subheading}
            </h5>
            <p className="text-left text-3xl tracking-wide leading-10">
              {headingText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroHeader;
