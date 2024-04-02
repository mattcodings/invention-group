import HeaderAnimatedWords from "@/components/homepage/HeaderAnimatedWords";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import UserToDo from "@/components/homepage/UserToDo";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <div className="text-white h-[90vh] grid hero-header">
        <div className="py-8 grid items-center">
          <HeaderAnimatedWords />
        </div>
      </div>
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
