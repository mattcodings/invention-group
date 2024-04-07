import { SignIn, UserProfile, auth, currentUser } from "@clerk/nextjs";
import InventionForm from "@/components/user/InventionForm";
import Link from "next/link";
import { findInvention } from "@/utils/actions";
import { redirect } from "next/navigation";

const SubmitInventionPage = async () => {
  const { userId } = auth();
  const grabInvention = async () => {
    if (userId) {
      const [userInvention] = await findInvention(userId);
      return userInvention;
    }
  };
  const submittedInvention = await grabInvention();
  if (submittedInvention) {
    redirect("/approved-invention");
  }
  if (userId) {
    return <InventionForm />;
  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <SignIn redirectUrl="/" />
      No account? <Link href="/sign-up">Sign Up</Link>
    </div>
  );
};
export default SubmitInventionPage;
