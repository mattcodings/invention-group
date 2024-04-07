import { getAllPendingInventions } from "../../utils/actions";
import DenyInvention from "@/components/admin/DenyInvention";
import Link from "next/link";
import MonthlySalesForm from "@/components/admin/MonthlySalesForm";
const ApprovedInventionList = async () => {
  const inventions = await getAllPendingInventions();
  console.log(inventions);
  if (inventions.length === 0) {
    return <h2 className="text-white p-8 text-3xl">No inventions submitted</h2>;
  }

  return (
    <div>
      <h2 className="text-3xl text-center mb-8 font-bold text-neutral">
        Approved Invention List
      </h2>
      <ul>
        {inventions.map((invention) => {
          if (invention.isApproved) {
            return (
              <li
                key={invention.id}
                className="border-8 p-8 m-8 border-primary bg-secondary rounded-lg"
              >
                <h3 className="capitalize text-2xl my-8">
                  <span className="font-bold">Invention Name: </span>
                  {invention.nameOfInvention}
                </h3>
                <h3 className="capitalize text-2xl my-8">
                  <span className="font-bold">Inventor: </span>
                  {invention.nameOfInventor}
                </h3>
                <h3 className="text-2xl my-8">
                  <span className="font-bold">UserID:</span> {invention.userId}
                </h3>
                <p className="text-2xl mb-2 font-bold">
                  Invention Description:
                </p>
                <p className="text-2xl mb-8">{invention.description}</p>

                <div className="flex">
                  <Link href={`/admin/${invention.id}`}>
                    <button className="btn bg-neutral text-primary border-primary text-2xl hover:bg-primary hover:text-secondary">
                      Edit Sales
                    </button>
                  </Link>
                  <DenyInvention id={invention.id} />
                </div>
                {/* <MonthlySalesForm inventionId={invention.id} /> */}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
export default ApprovedInventionList;
