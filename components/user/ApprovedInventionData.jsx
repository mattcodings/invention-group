import { findInvention, findSales } from "@/utils/actions";
import { auth } from "@clerk/nextjs";
import GetStripe from "./GetStripe";
import SalesBarChart from "./SalesBarChart";

const ApprovedInventionData = async ({ invention }) => {
  const { id, nameOfInvention } = invention;
  const newSales = await findSales(id);
  console.log(invention.paidFor);
  return (
    <div className="text-neutral bg-primary">
      <h2 className="text-5xl capitalize my-8 p-8 text-center font-bold">
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
