import SingleQuestion from "./SingleQuestion";
const questions = [
  {
    id: 1,
    question: "What do you do?",
    answer:
      "The Invention Group provides inventors with a marketability analysis to determine whether or not their invention is ready for market. We also assist with matching up inventors with companies who will manufacture and license their product. We make sure that new ideas are successful.",
    button: {
      text: "More about our services",
      href: "/process",
    },
  },
  {
    id: 2,
    question: "How do I know you won’t steal my invention?",
    answer:
      "Let us assure you, our intent is to support you, not steal your idea. Whether you decide to work with us or another support group, do not submit any ideas until you’ve signed a Confidentiality Agreement. Find our Confidentiality Agreement here. We encourage you to check our status with the Better Business Bureau, Wisconsin Inventors Council and the National Inventor Fraud Center.",
    button: {
      text: "More about our process",
      href: "/process",
    },
  },
  {
    id: 3,
    question: "What is an invention license?",
    answer:
      "An invention license allows someone to buy the rights to manufacture and sell your invention for a profit. Once a license is signed, the inventor receives a percentage of the total sales from the manufacturer in the form of a monthly check. The license allows you (the inventor) to make money by giving a manufacturer the right to produce and sell your product.",
    button: {
      text: "Free Evaluation",
      href: "/submit-invention",
    },
  },
  {
    id: 4,
    question: "Do I need to patent my invention before I contact you?",
    answer:
      "No. We will assist you with obtaining a patent. You do not need to have a patent prior to contacting us.",
  },
  {
    id: 5,
    question: "What do I do next?",
    answer:
      "The next step is to formally submit your invention idea to us through our web site, by fax or by mail. We’ll evaluate the idea and provide you with a marketability analysis. If our experts feel that your idea has potential for success, we’ll assist you with the next step.",
  },
  {
    id: 6,
    question: "What does this cost?",
    answer:
      "We charge a $150 fee to evaluate your product. We’ll return the fee if we don’t feel your product has potential for success. If we feel your idea has potential for success, we take 20% of the total profit. You take 80%.",
  },
];
const AllQuestions = () => {
  return (
    <ul>
      {questions.map((questionItem) => {
        const { question, answer } = questionItem;
        return (
          <li key={question.id}>
            <SingleQuestion question={question} answer={answer} />
          </li>
        );
      })}
    </ul>
  );
};
export default AllQuestions;
