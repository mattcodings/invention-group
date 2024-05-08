import Accordion from "@/components/about/Accordion";
import Image from "next/image";
import NavigationButton from "@/components/NavigationButton";
import HeroHeader from "@/components/HeroHeader";
import InfoCard from "@/components/about/InfoCard";

const AboutPage = () => {
  return (
    <div>
      <div className="mb-32">
        <HeroHeader
          heading="We Make Sure Your New Invention is Successful"
          headingText="The Invention Group has helped hundreds of individuals bring their
            inventions to market. Our role doesn’t end once the product
            evaluation is done. We’ll help you with any and all of the following
            aspects of your project."
        />
      </div>
      <h3 className="text-5xl text-center my-20 font-bold text-primary capitalize">
        how we can help you
      </h3>
      <div className="lg:flex justify-around mx-auto items-center mb-32 w-[80%] about-page text-primary">
        <div>
          <Image
            src="/images/about-image.jpg"
            alt="meeting"
            width={600}
            height={600}
            className="mb-20"
          />
        </div>
        <Accordion />
      </div>
      <div className="bg-secondary py-20 mb-20">
        <div className="lg:flex w-[85%] mx-auto justify-around">
          <InfoCard
            img="/images/map-of-usa.jpg"
            heading="Largest in the Country"
            text="The Invention Group is the largest inventor support company in the
          United States. We have been assisting individuals with their invention
          ideas for over 30 years."
          />
          <InfoCard
            img="/images/industry-connections.jpg"
            heading="Industry Connections"
            text="We maintain the largest network of sales offices in the country.
                We’ll use those connections to drive sales through the roof."
          />
        </div>
      </div>
      <p className="text-center w-[70%] mx-auto text-3xl mb-20">
        Our staff of over 100 researchers, designers, writers and customer
        service representatives will treat you like a business partner, not a
        customer.
      </p>

      <div className="text-center mb-40">
        <NavigationButton
          text="Request Free Invention Evaluation"
          link="/submit-invention"
        />
      </div>
    </div>
  );
};
export default AboutPage;
