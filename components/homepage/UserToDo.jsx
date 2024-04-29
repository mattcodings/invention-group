import Link from "next/link";
import { FaWpforms } from "react-icons/fa";
import { FaChartSimple, FaUserPlus } from "react-icons/fa6";
const UserToDo = () => {
  return (
    <div className="bg-secondary py-20">
      <h3 className="text-5xl text-center my-10 font-bold text-primary">
        How Can I Get Started?
      </h3>
      <div className="flex w-[70%] mx-auto justify-evenly flex-wrap">
        <Link href="/sign-in">
          <div className="card w-96 bg-base-100 shadow-xl p-8 mb-8">
            <FaUserPlus className="text-8xl mx-auto" />
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl">Create an Account</h2>
              <p>
                You will need an account so we can contact you upon approval
              </p>
            </div>
          </div>
        </Link>
        <Link href="/submit-invention">
          <div className="card w-96 bg-base-100 shadow-xl p-8 mb-8">
            <FaWpforms className="text-8xl mx-auto" />
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl">Submit Invention</h2>
              <p>Fill out a form to submit your idea for review</p>
            </div>
          </div>
        </Link>
        <Link href="/approved-invention">
          <div className="card w-96 bg-base-100 shadow-xl p-8 mb-8">
            <FaChartSimple className="text-8xl mx-auto" />
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl">Track Your Invention</h2>
              <p>Watch as your invention becomes successful</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default UserToDo;
