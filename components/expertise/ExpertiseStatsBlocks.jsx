import { FaHandshake } from "react-icons/fa6";
import { GiGearHammer } from "react-icons/gi";
import { FaAward } from "react-icons/fa6";

const ExpertiseStatsBlocks = () => {
  return (
    <div className="md:flex gap-8 justify-around bg-secondary text-primary py-20 items-start">
      <div>
        <GiGearHammer size={120} className="m-auto" />
        <h5 className="text-6xl text-center mt-4">300+</h5>
        <h5 className="text-3xl text-center my-4">Inventions Backed</h5>
      </div>
      <div>
        <FaHandshake size={120} className="m-auto" />
        <h5 className="text-6xl text-center mt-4">98%</h5>
        <h5 className="text-3xl text-center my-4">Client Satisfaction</h5>
      </div>
      <div>
        <FaAward size={120} className="m-auto" />
        <h5 className="text-6xl text-center mt-4">30+</h5>
        <h5 className="text-3xl text-center my-4">Years Experience</h5>
      </div>
    </div>
  );
};

export default ExpertiseStatsBlocks;
