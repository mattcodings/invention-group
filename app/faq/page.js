import AllQuestions from "@/components/faq/AllQuestions";
import HeroHeader from "@/components/HeroHeader";

const FAQPage = () => {
  return (
    <div>
      <HeroHeader
        heading="Frequently Asked Questions"
        headingText="If you have any questions, please feel free to email us at theinventiongroup@gmail.com"
      />
      <AllQuestions />
    </div>
  );
};
export default FAQPage;
