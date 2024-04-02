import ExpertiseBlockSection from "@/components/ExpertiseBlockSection";
import Link from "next/link";
import { FaHandshake } from "react-icons/fa6";
import { GiGearHammer } from "react-icons/gi";
import { FaAward } from "react-icons/fa6";

const ExpertisePage = () => {
  return (
    <div className="w-[80%] mx-auto">
      <h2 className="text-4xl text-center mt-8 mb-4">
        Use Our 30 Years of Experience to Drive Your Success
      </h2>
      <ExpertiseBlockSection />

      <div className="my-8">
        <h3 className="text-6xl">Our Promise</h3>
        <p className="text-3xl">
          We are not another invention marketing company. We do not accept every
          invention idea. Our rigorous evaluation process weeds out the ideas
          that have little potential for success. We focus on those inventions
          that have the most potential.
        </p>
      </div>

      <div className="flex justify-around bg-primary text-secondary py-4 items-start">
        <div>
          <GiGearHammer size={120} className="m-auto" />
          <h5 className="text-6xl text-center mt-4">300+</h5>
          <h5 className="text-3xl text-center mt-4">Inventions Backed</h5>
        </div>
        <div>
          <FaHandshake size={120} className="m-auto" />
          <h5 className="text-6xl text-center mt-4">98%</h5>
          <h5 className="text-3xl text-center mt-4">Client Satisfaction</h5>
        </div>
        <div>
          <FaAward size={120} className="m-auto" />
          <h5 className="text-6xl text-center mt-4">30+</h5>
          <h5 className="text-3xl text-center mt-4">Years Experience</h5>
        </div>
      </div>
      <p className="text-center mt-8 text-3xl">
        If you are ready to begin, click here to request your free invention
        evaluation.
      </p>
      <div className="text-center mt-8">
        <Link href="/submit-invention">
          <button type="button" className="btn btn-primary">
            Request Invention Evaluation
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ExpertisePage;
