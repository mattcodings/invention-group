import { auth } from "@clerk/nextjs";
import { findInvention } from "../../utils/actions";
import PendingInventionApproval from "../../components/PendingInventionApproval";
import ApprovedInventionData from "../../components/ApprovedInventionData";
import SalesBarChart from "../../components/SalesBarChart";
import { currentUser } from "@clerk/nextjs";

const ApprovedInventionPage = async () => {
  const { userId } = auth();
  const user = await currentUser();
  const grabInvention = async () => {
    if (userId) {
      const [userInvention] = await findInvention(userId);
      return userInvention;
    }
  };
  const invention = await grabInvention();

  if (!invention.isApproved) {
    return <PendingInventionApproval invention={invention} />;
  }
  const lastSignInDate = new Date(user.lastSignInAt).toLocaleString();
  const accountCreatedDate = new Date(user.createdAt).toLocaleString();
  return (
    <div className="w-[80%] mx-auto">
      <h2 className="text-6xl text-center my-20">My Invention</h2>
      <div className="flex mb-20 justify-evenly bg-primary py-20 items-center">
        <div className="bg-primary p-6">
          <h2 className="card-title text-3xl text-neutral">My Info</h2>
          <ul>
            <li className=" text-accent text-2xl py-6">
              <p className="text-2xl">ID:</p> <p>{userId}</p>
            </li>
            <li className=" text-accent text-2xl py-6">
              <p className="text-2xl">Account Created:</p> {accountCreatedDate}
            </li>
            <li className=" text-accent text-2xl py-6">
              <p className="text-2xl">Last Login:</p> {lastSignInDate}
            </li>

            <li className=" text-accent text-2xl py-6">
              <p className="text-2xl">Name of Inventor:</p>
              {invention.nameOfInventor}
            </li>
            <li className=" text-accent text-2xl py-6">
              <p className="text-2xl">Inventor Email:</p>
              {user.emailAddresses[0].emailAddress}
            </li>
          </ul>
        </div>

        <ApprovedInventionData invention={invention} />
      </div>
    </div>
  );
};
export default ApprovedInventionPage;
