import { getAllPendingInventions } from "../../utils/actions";
import DenyInvention from "@/components/admin/DenyInvention";
import Link from "next/link";
const PendingInventionList = async () => {
  const inventions = await getAllPendingInventions();
  const anyPendingInventions = inventions.some(
    (invention) => !invention.isApproved
  );
  return (
    <div>
      <h2 className="text-3xl text-center mb-8 font-bold text-neutral">
        Pending Invention List
      </h2>
      <ul>
        {inventions.map((invention) => {
          if (!invention.isApproved) {
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
                <div className="flex justify-evenly">
                  <Link
                    href={`/admin/${invention.id}`}
                    className="btn bg-neutral text-primary border-primary text-2xl hover:bg-primary hover:text-secondary"
                  >
                    Review Invention
                  </Link>
                  <DenyInvention id={invention.id} />
                </div>
              </li>
            );
          }
        })}
      </ul>
      {!anyPendingInventions && (
        <p className="text-2xl text-white">
          There are currently no pending inventions
        </p>
      )}
    </div>
  );
};
export default PendingInventionList;
