import HeroHeader from "@/components/HeroHeader";
import NavButton from "@/components/NavButton";
import ProcessStepLeft from "@/components/process/ProcessStepLeft";
import ProcessStepRight from "@/components/process/ProcessStepRight";
import Image from "next/image";

const processes = [
  {
    title: "Contact The Invention Group",
    description:
      "Review our web site, give us a call, or request a free invention evaluation. Ask any questions you have. We’re happy to help get the process started.",
    stepNumber: 1,
  },
  {
    title: "Submit Your Idea",
    description:
      "When you feel comfortable with the process, submit your idea to us through our site, by fax or by mail.",
    stepNumber: 2,
  },
  {
    title: "Invention Evaluation",
    description:
      "Once we receive your idea, our experts will evaluate it and provide you with a complete marketability analysis. It will include our findings about the potential for success with your product.",
    stepNumber: 3,
  },
  {
    title: "Contract",
    description:
      "If our team accepts your invention, the next step is to come to terms on a contract for bringing it to market. As the inventor, you will retain all ownership rights to your invention.",
    stepNumber: 4,
  },
  {
    title: "Prepare and Present",
    description:
      "Once we agree to a partnership, we need to spend some time becoming experts in your product and industry. We’ll use this information to present your invention at trade shows our networking partners and investors.",
    stepNumber: 5,
  },
  {
    title: "Buyout Agreement",
    description:
      "After communicating with our partners, we’ll assist you with a buyout contract. The company you decide to work with will work with you to manufacture and distribute the product to your market.",
    stepNumber: 6,
  },
  {
    title: "Peace of Mind",
    description:
      "The Invention Group will make sure that the partnership with the manufacturing company runs smoothly and all royalties are paid on time.",
    stepNumber: 7,
  },
];

const ProcessPage = () => {
  return (
    <div>
      <HeroHeader heading='Our Experts Will Tailor a Plan for Your Success' headingText='While each invention is different, we recommend starting with the
        following steps to begin the process of bringing your invention to
        market.'/>
    
      <h2 className="text-6xl text-center my-8">The Process</h2>
      <ul>
      
        {processes.map(process=>{
          return process.stepNumber % 2 === 1 ?
            <li key={process.stepNumber}><ProcessStepLeft title={process.title} description={process.description} img='/images/meeting-1.jpg'/></li>
           : <li key={process.stepNumber}><ProcessStepRight title={process.title} description={process.description} img='/images/meeting-1.jpg'/></li>
        })}
      </ul>

    <p className="text-center mt-8 text-3xl">When you are ready to begin, submit an invention idea to us!</p>
    <div className="text-center my-40">
        <NavButton text="request invention evaluation" link="/submit-invention"/>
      </div>
    </div>
  );
};
export default ProcessPage;
