const HeroHeader = ({ heading, headingText, dynamicHeader }) => {
  return (
    <div className="p-8 grid items-center h-[90vh] hero-header ">
      
      <div className="">
        <div className="w-[70%] mx-auto border-8 px-8 py-8 bg-primary text-white opacity-75 rounded-[20px]">
        <div className=' mb-4'>{dynamicHeader}</div>
          <h1 className="text-3xl tracking-wider md:text-[2.75em] text-center border-b-2 border-neutral pb-4">{heading}</h1>
          <div className=" my-10 md:mt-8 md:mb-20">
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
