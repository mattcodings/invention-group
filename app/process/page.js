import HeroHeader from "@/components/HeroHeader";
import NavigationButton from "@/components/NavigationButton";
import Processes from "@/components/process/Processes";

const ProcessPage = () => {
  return (
    <div>
      <HeroHeader
        heading="Our Experts Will Tailor a Plan for Your Success"
        headingText="While each invention is different, we recommend starting with the
        following steps to begin the process of bringing your invention to
        market."
      />

      <h2 className="text-6xl text-center my-20 capitalize">
        The Process From start to finish
      </h2>

      <div className="w-[90%] mx-auto">
        <Processes />
      </div>
      <p className="text-center mt-8 text-3xl">
        When you are ready to begin, submit an invention idea to us!
      </p>
      <div className="text-center my-20">
        <NavigationButton
          text="request invention evaluation"
          link="/submit-invention"
        />
      </div>
    </div>
  );
};
export default ProcessPage;
