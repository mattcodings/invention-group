import { findInvention, findSales } from "@/utils/actions";
import { auth } from "@clerk/nextjs";
import GetStripe from "./GetStripe";
import SalesBarChart from "./SalesBarChart";

const ApprovedInventionData = async ({ invention }) => {
  const { id, nameOfInvention } = invention;
  const newSales = await findSales(id);
  console.log(invention.paidFor);
  return (
    <div className="text-neutral bg-primary lg:w-2/3 md:w-3/4 mx-auto">
      <h2 className="text-5xl capitalize mt-8 mb-2 p-8 text-center font-bold">
        {nameOfInvention}
      </h2>
      {invention.paidFor ? (
        <SalesBarChart newSales={newSales} />
      ) : (
        <GetStripe />
      )}
    </div>
  );
};
export default ApprovedInventionData;
