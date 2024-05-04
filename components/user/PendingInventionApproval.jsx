import { currentUser } from "@clerk/nextjs";

// This component will show after an invention has been submitted

const PendingInventionApproval = async ({ invention }) => {
  const user = await currentUser();
  return (
    <div>
      <p className="text-3xl min-h-screen flex justify-center items-center">
        Thank you for your submission! We will respond to you within 48 hours.
      </p>
    </div>
  );
};
export default PendingInventionApproval;
