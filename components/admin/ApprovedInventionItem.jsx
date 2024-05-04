import Link from "next/link";
import DenyApprovedInvention from "./DenyApprovedInvention";

const ApprovedInventionItem = ({ invention }) => {
  return (
    <li
      key={invention.id}
      className="border-2 p-2 lg:m-8 border-primary bg-secondary rounded-lg"
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
      <p className="text-2xl mb-2 font-bold">Invention Description:</p>
      <p className="text-2xl mb-8">{invention.description}</p>

      <div className="flex justify-around">
        <Link href={`/admin/${invention.id}`}>
          <button className="btn bg-neutral text-primary border-primary text-2xl hover:bg-primary hover:text-secondary">
            Edit Sales
          </button>
        </Link>
        <DenyApprovedInvention id={invention.id} />
      </div>
    </li>
  );
};
export default ApprovedInventionItem;
