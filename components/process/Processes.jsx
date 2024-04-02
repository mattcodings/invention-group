import ProcessStep from "./ProcessStep";

const processes = [
  {
    title: "Contact The Invention Group",
    description:
      "Review our web site, give us a call, or request a free invention evaluation. Ask any questions you have. We’re happy to help get the process started.",
    stepNumber: "1",
  },
  {
    title: "Submit Your Idea",
    description:
      "When you feel comfortable with the process, submit your idea to us through our site, by fax or by mail.",
    stepNumber: "2",
  },
  {
    title: "Invention Evaluation",
    description:
      "Once we receive your idea, our experts will evaluate it and provide you with a complete marketability analysis. It will include our findings about the potential for success with your product.",
    stepNumber: "3",
  },
  {
    title: "Contract",
    description:
      "If our team accepts your invention, the next step is to come to terms on a contract for bringing it to market. As the inventor, you will retain all ownership rights to your invention.",
    stepNumber: "4",
  },
  {
    title: "Prepare and Present",
    description:
      "Once we agree to a partnership, we need to spend some time becoming experts in your product and industry. We’ll use this information to present your invention at trade shows our networking partners and investors.",
    stepNumber: "5",
  },
  {
    title: "Buyout Agreement",
    description:
      "After communicating with our partners, we’ll assist you with a buyout contract. The company you decide to work with will work with you to manufacture and distribute the product to your market.",
    stepNumber: "6",
  },
  {
    title: "Peace of Mind",
    description:
      "The Invention Group will make sure that the partnership with the manufacturing company runs smoothly and all royalties are paid on time.",
    stepNumber: "7",
  },
];
const Processes = () => {
  return (
    <ul>
      {processes.map((process) => {
        return (
          <li key={process.description}>
            <ProcessStep
              title={process.title}
              description={process.description}
              stepNumber={process.stepNumber}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default Processes;
