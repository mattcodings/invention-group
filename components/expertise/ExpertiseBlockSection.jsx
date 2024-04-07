import React from "react";
import ExpertiseBlock from "./ExpertiseBlock";

const expertiseBlocks = [
  {
    title: "Success",
    description:
      "The Invention group has backed hundreds of new inventions. We have staked our reputation on those new ideas and we’ll do the same for you.",
  },
  {
    title: "Experienced Staff",
    description:
      "Our staff includes researchers, designers, writers, attorneys, engineers, marketing and promotion folks, video producers, drafters, industrial designers and manufacturers. We have only one goal – to make you successful. We only get paid when you get paid.",
  },
  {
    title: "Tailored Plans",
    description:
      "The reason we employ such a variety of talent is to make sure we can create a tailored plan for your invention to go to market. Every invention we support serves a different market and incorporates its own unique aspects. We can’t and we won’t put you through the same process as the last inventor.",
  },
  {
    title: "Market Analysis",
    description:
      "Our experts will provide you with a complete marketability analysis that outlines potential pitfalls, costs to develop, market interest and next steps. You will have all of the tools you need to bring your product to market and we’ll help you get it done.",
  },
];

const ExpertiseBlockSection = () => {
  return (
    <ul className="lg:grid lg:grid-cols-2 lg:justify-items-center lg:auto-rows-fr">
      {expertiseBlocks.map(({ title, description }) => {
        return (
          <li
            key={title}
            className="lg:w-[500px] xl:w-[600px] bg-secondary mt-8"
          >
            <ExpertiseBlock title={title} description={description} />
          </li>
        );
      })}
    </ul>
  );
};

export default ExpertiseBlockSection;
