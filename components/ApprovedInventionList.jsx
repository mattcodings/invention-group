import { getAllPendingInventions } from "../utils/actions";
import DenyInvention from "@/components/DenyInvention";
import Link from "next/link";
const PendingInventionList = async () => {
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
                <Link href={`/admin/${invention.id}`}>Approve Form</Link>
                <DenyInvention id={invention.id} />
                {invention.isApproved ? (
                  <span>approved</span>
                ) : (
                  <span>not approved</span>
                )}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
export default PendingInventionList;
