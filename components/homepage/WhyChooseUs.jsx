import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaArrowsRotate } from "react-icons/fa6";
const WhyChooseUs = () => {
  return (
    <div className="flex justify-evenly w-[90%] mx-auto my-20 text-primary">
      <div className="w-1/4 text-center">
        <FaPeopleGroup className="text-8xl mx-auto" />
        <h6 className="text-3xl font-bold">Our Connections</h6>
        <p className="text-2xl">
          We find interested parties to fund your project.
        </p>
      </div>
      <div className="w-1/4 text-center">
        <FaArrowsRotate className="text-8xl mx-auto" />
        <h6 className="text-3xl font-bold">Develop and Distribute</h6>
        <p className="text-2xl">
          We find companies to develop and distribute your invention.
        </p>
      </div>
      <div className="w-1/4 text-center">
        <RiMoneyDollarCircleLine className="text-8xl mx-auto" />
        <h6 className="text-3xl font-bold">High Return</h6>
        <p className="text-2xl">
          We give you a generous royalty fee for all of your sales.
        </p>
      </div>
    </div>
  );
};
export default WhyChooseUs;
