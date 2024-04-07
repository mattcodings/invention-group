import { findInvention, findSales } from "@/utils/actions";
import { auth } from "@clerk/nextjs";
// import { currentUser } from "@clerk/nextjs";
import SalesBarChart from "./SalesBarChart";

const ApprovedInventionData = async ({ invention }) => {
  // const { userId } = auth();
  // const user = await currentUser();

  const { id, nameOfInvention } = invention;
  const newSales = await findSales(id);
  console.log(newSales);
  return (
    <div className="text-neutral">
      <h2 className="text-5xl capitalize mb-8 text-center font-bold">
        {nameOfInvention}
      </h2>

      <SalesBarChart newSales={newSales} />
    </div>
  );
};
export default ApprovedInventionData;
