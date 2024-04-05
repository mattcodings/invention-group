import { approveInvention, denyInvention } from "@/utils/actions";
import DenyInvention from "./DenyInvention";

const ApproveInvention = async ({ invention }) => {
  const {
    id,
    isApproved,
    description,
    creationDate,
    imagePath,
    nameOfInvention,
    nameOfInventor,
    userId,
  } = invention;
  const newId = async () => {
    return await invention.id;
  };
  const inventionId = await newId();
  console.log(inventionId);

  return (
    <div className="w-[500px] mx-auto">
      <h2 className="text-3xl">{nameOfInvention}</h2>
      <h3 className="text-2xl">By {nameOfInventor}</h3>
      <p>userID: {userId}</p>
      <p>{description}</p>
      <div className="flex justify-around">
        <form action={approveInvention}>
          <input type="hidden" name="id" defaultValue={inventionId} />
          <button
            type="submit"
            id="isApproved"
            name="isApproved"
            className="btn bg-accent border-primary"
          >
            Approve Invention
          </button>
        </form>
        <DenyInvention id={invention?.id} />
      </div>
    </div>
  );
};
export default ApproveInvention;
