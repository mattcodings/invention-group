import Accordion from "@/components/Accordion";
import Image from "next/image";
import NavButton from "@/components/NavButton";

const AboutPage = () => {
  return (
    <div>
      <div className="mb-20 bg-secondary p-8">
        <div className="w-[70%] mx-auto">
          <h2 className="text-6xl text-center my-8">About</h2>
          <h3 className="text-4xl mb-8">
            We Make Sure Your New Invention is Successful
          </h3>
          <p className="text-3xl">
            The Invention Group has helped hundreds of individuals bring their
            inventions to market. Our role doesn’t end once the product
            evaluation is done. We’ll help you with any and all of the following
            aspects of your project:
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex justify-around mx-auto items-center mb-20 w-[80%] about-page text-primary">
          <div>
            <Image
              src="/images/about-image.jpg"
              alt="meeting"
              width={500}
              height={500}
              className="mb-20"
            />
          </div>
          <Accordion />
        </div>
        <div className="bg-secondary py-20 mb-40">
          <div className="flex w-[80%] mx-auto justify-around">
            <div className="card w-[500px] shadow-xl bg-primary p-4">
              <Image
                src="/images/presentation-1.jpg"
                alt="meeting"
                width={500}
                height={400}
              />
              <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl text-neutral">
                  Largest in the Country
                </h2>
                <p className="text-center text-[1.5em] text-accent">
                  The Invention Group is the largest inventor support company in
                  the United States. We have been assisting individuals with
                  their invention ideas for over 30 years.
                </p>
              </div>
            </div>
            <div className="card w-[500px] shadow-xl bg-primary p-4">
              <Image
                src="/images/presentation-1.jpg"
                alt="meeting"
                width={500}
                height={400}
              />
              <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl text-neutral">
                  Industry Connections
                </h2>
                <p className="text-center text-[1.5em] text-accent">
                  We maintain the largest network of sales offices in the
                  country. We’ll use those connections to drive sales through
                  the roof.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center w-[70%] mx-auto text-3xl mb-20">
          Our staff of over 100 researchers, designers, writers and customer
          service representatives will treat you like a business partner, not a
          customer.
        </p>

        <div className="text-center mb-40">
          <NavButton text="Request Free Invention Evaluation" link="/about" />
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
