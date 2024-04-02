import AccordionItem from "./AccordionItem";

const accordionInfo = [
  {
    title: "Negotiating a License",
    description:
      "It is crucial to seek legal advice during this process to ensure that the agreement adequately protects the inventor's intellectual property rights and interests. Successful negotiation of a license agreement can lead to a mutually beneficial partnership that allows for the commercialization and monetization of the invention.",
  },
  {
    title: "Market Research",
    description:
      "Conducting market research is crucial for making an invention successful. It involves gathering data on consumer needs, preferences, and competitors to determine the market demand and potential for the invention. This information helps in refining the invention, identifying target markets, and developing effective marketing strategies to ensure its success in the marketplace.",
  },
  {
    title: "Presenting your Invention",
    description:
      "Presenting an invention to shareholders involves preparing a compelling pitch that outlines the innovation's benefits, market potential, and financial projections. It is essential to communicate the value proposition clearly and address any potential concerns or questions shareholders may have. A well-executed presentation can help secure funding and support for bringing the invention to market.",
  },
  {
    title: "Obtaining a Patent",
    description:
      "Obtaining a patent for an invention involves filing a detailed application with the relevant patent office, disclosing the invention's unique features and how it operates. The application goes through examination to assess its novelty and non-obviousness. Once granted, the patent provides the inventor with exclusive rights to prevent others from making, using, or selling the invention for a specific period.",
  },
  {
    title: "Drawings and Computer Renderings",
    description:
      "The process of drawing and computer rendering an invention begins with hand sketches or digital drafts to visualize the concept's form, function, and design elements. These initial sketches are refined through software tools like CAD (Computer-Aided Design) to create detailed 2D and 3D renderings that showcase the invention from multiple angles, aiding in prototype development and production planning.",
  },
  {
    title: "Complete Development",
    description:
      "Completing the development of an invention involves refining the design, conducting prototyping and testing to ensure functionality and efficiency. Feedback from testing is used to make necessary adjustments before finalizing the product for production. This iterative process may also involve securing necessary approvals, certifications, and partnerships for successful commercialization.",
  },
  {
    title: "Marketing your Product",
    description:
      "Marketing a completed invention involves creating a marketing strategy that highlights the invention's unique value proposition and target audience. Channels such as social media, press releases, trade shows, and partnerships are used to generate awareness and interest. Key messaging and branding are essential to communicate the invention's benefits effectively and drive sales.",
  },
];
const Accordion = () => {
  const colors = [
    "blue-100",
    "blue-200",
    "blue-300",
    "blue-400",
    "blue-500",
    "blue-600",
    "blue-700",
  ];
  return (
    <div className="w-[500px]">
      {accordionInfo.map((item, index) => {
        return (
          <div key={item.title}>
            <AccordionItem
              title={item.title}
              description={item.description}
              color={colors[index]}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Accordion;
