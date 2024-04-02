import { findInvention } from "@/utils/actions";
import { auth } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";

const ApprovedInventionData = async ({ invention }) => {
  const { userId } = auth();
  const user = await currentUser();

  const { nameOfInventor, nameOfInvention, description, isApproved } =
    invention;
  return (
    <div>
      <div>
        <p>UserID: {userId}</p>
        <p>
          {user?.firstName} {user.lastName}
        </p>
        <p>{user.emailAddresses[0].emailAddress}</p>
      </div>
      <h2 className="text-4xl">{nameOfInvention}</h2>
      <p>{description}</p>
      {isApproved ? "Approved!" : "Pending Approval"}
    </div>
  );
};
export default ApprovedInventionData;
