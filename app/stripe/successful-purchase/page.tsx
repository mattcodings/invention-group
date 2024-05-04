import { findInvention, payForInvention } from "@/utils/actions";
import { auth, currentUser } from "@clerk/nextjs";
import ReturnToInventionButton from "@/components/user/ReturnToInventionButton";
import Link from "next/link";

const SuccessfulPurchase = async () => {
  const { userId } = auth();
  const user = await currentUser();
  const grabInvention = async () => {
    if (userId) {
      const userInvention = await findInvention(userId);
      return userInvention;
    }
  };
  const invention = await grabInvention();

  const id = invention?.[0].id;
  payForInvention(id);
  return (
    <div className="min-h-screen flex gap-8 justify-center items-center">
      <p className="text-3xl">Successful Purchase!</p>
      <ReturnToInventionButton />
    </div>
  );
};
export default SuccessfulPurchase;
