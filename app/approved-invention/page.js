import { auth } from "@clerk/nextjs";
import { findInvention } from "../../utils/actions";
import PendingInventionApproval from "../../components/PendingInventionApproval";
import ApprovedInventionData from "../../components/ApprovedInventionData";
import SalesBarChart from "../../components/SalesBarChart";

const ApprovedInventionPage = async () => {
  const { userId } = auth();
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
  return (
    <div>
      <ApprovedInventionData invention={invention} />
      <SalesBarChart />
    </div>
  );
};
export default ApprovedInventionPage;
