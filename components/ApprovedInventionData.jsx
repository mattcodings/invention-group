import { findInvention } from "@/utils/actions";
import { auth } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import SalesBarChart from "./SalesBarChart";

const ApprovedInventionData = async ({ invention }) => {
  const { userId } = auth();
  const user = await currentUser();

  const { nameOfInventor, nameOfInvention, description, isApproved } =
    invention;
  return (
    <div className="text-neutral">
      <h2 className="text-5xl capitalize mb-8 text-center font-bold">
        {nameOfInvention}
      </h2>
      <div className="card w-96 shadow-xl bg-primary mx-auto mb-8 border-8 border-secondary">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl text-neutral">Total Profit</h2>
          <p className="text-center text-3xl text-accent">$10,000</p>
        </div>
      </div>
      <SalesBarChart />
    </div>
  );
};
export default ApprovedInventionData;
