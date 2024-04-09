import { auth } from "@clerk/nextjs";
import { findInvention } from "../../utils/actions";
import PendingInventionApproval from "../../components/user/PendingInventionApproval";
import ApprovedInventionData from "../../components/user/ApprovedInventionData";
import SalesBarChart from "../../components/user/SalesBarChart";
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

  if (!invention?.isApproved) {
    return <PendingInventionApproval invention={invention} />;
  }
  const lastSignInDate = new Date(user.lastSignInAt).toLocaleString();
  const accountCreatedDate = new Date(user.createdAt).toLocaleString();
  return (
    <div className="w-[80%] mx-auto">
      <h2 className="text-6xl text-center my-20">My Invention</h2>
      <div className="">
        <div className="p-6">
          <ul className="flex justify-between text-center flex-wrap">
            {/* <li className="text-2xl py-6">
              <p className="text-2xl">ID:</p> <p>{userId}</p>
            </li> */}
            <li className="text-2xl py-6 border-4 border-t-0 p-4 w-1/4 min-w-52 break-words">
              <p className="text-2xl">Account Created:</p>{" "}
              <p>{accountCreatedDate}</p>
            </li>
            <li className="text-2xl py-6 border-4 border-t-0 p-4 w-1/4 min-w-52 break-words">
              <p className="text-2xl">Last Login:</p> <p>{lastSignInDate}</p>
            </li>

            <li className="text-2xl py-6 border-4 border-t-0 p-8 w-1/4 min-w-52 break-words">
              <p className="text-2xl">Name of Inventor:</p>
              <p>{invention.nameOfInventor}</p>
            </li>
            <li className="text-2xl py-6 border-4 border-t-0 p-8 w-1/4 min-w-52 break-words">
              <p className="text-2xl">Inventor Email:</p>
              <p>{user.emailAddresses[0].emailAddress}</p>
            </li>
          </ul>
        </div>

        <ApprovedInventionData invention={invention} />
      </div>
    </div>
  );
};
export default ApprovedInventionPage;
