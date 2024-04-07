import ExpertiseBlockSection from "@/components/expertise/ExpertiseBlockSection";
import ExpertiseStatsBlocks from "@/components/expertise/ExpertiseStatsBlocks";
import HeroHeader from "@/components/HeroHeader";
import NavigationButton from "@/components/NavigationButton";
import Link from "next/link";

const ExpertisePage = () => {
  return (
    <div>
      <HeroHeader
        heading="Our Promise"
        headingText="We are not another invention marketing company. We do not accept every
          invention idea. Our rigorous evaluation process weeds out the ideas
          that have little potential for success. We focus on those inventions
          that have the most potential."
      />
      <div className="w-[90%] mx-auto">
        <h2 className="text-5xl text-center my-20">
          Use Our 30 Years of Experience to Drive Your Success
        </h2>
        <ExpertiseBlockSection />
      </div>
      <div className="mt-40">
        <ExpertiseStatsBlocks />
      </div>
      <p className="text-center mt-8 text-3xl">
        If you are ready to begin, click here to request your free invention
        evaluation.
      </p>
      <div className="text-center my-40">
        <NavigationButton
          text="request invention evaluation"
          link="/submit-invention"
        />
      </div>
    </div>
  );
};
export default ExpertisePage;
