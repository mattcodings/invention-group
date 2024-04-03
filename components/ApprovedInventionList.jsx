import { getAllPendingInventions } from "../utils/actions";
import DenyInvention from "@/components/DenyInvention";
import Link from "next/link";
import MonthlySalesForm from "@/components/MonthlySalesForm";
const ApprovedInventionList = async () => {
  const inventions = await getAllPendingInventions();

  if (inventions.length === 0) {
    return <h2>No inventions submitted</h2>;
  }

  return (
    <div>
      <h2>Approved Invention List</h2>
      <ul>
        {inventions.map((invention) => {
          if (invention.isApproved) {
            return (
              <li key={invention.id}>
                <h3>{invention.nameOfInvention}</h3>
                <h3>{invention.nameOfInventor}</h3>
                <h3>{invention.userId}</h3>
                <p>{invention.description}</p>
                <div className="flex">
                  <Link href={`/admin/${invention.id}`}>
                    <button className="btn">Approve Form</button>
                  </Link>
                  <DenyInvention id={invention.id} />
                </div>
                <MonthlySalesForm inventionId={invention.id} />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
export default ApprovedInventionList;
