import HeaderAnimatedWords from "@/components/homepage/HeaderAnimatedWords";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import UserToDo from "@/components/homepage/UserToDo";
import Image from "next/image";
import HeroHeader from "@/components/HeroHeader";

const Home = () => {
  return (
    <div>
      <HeroHeader
        heading="We Help Get Your New Idea Off the Ground"
        headingText="If you have a new invention idea, our team can help you make sure that you are very successful when it comes time to sell your new product. We have been consulting with inventors for over 30 years and we can make sure you are successful, too."
        dynamicHeader={<HeaderAnimatedWords />}
      />

      <h3 className="text-5xl text-center my-20 font-bold text-primary">
        Why Choose Us?
      </h3>
      <WhyChooseUs />
      <UserToDo />
      <h3 className="text-5xl text-center my-20 text-primary">
        Let's Get Started!
      </h3>
      <div className="text-center my-20">
        <button className=" btn-primary text-3xl p-8 border rounded-2xl bg-primary">
          Create an Account
        </button>
      </div>
    </div>
  );
};
export default Home;
