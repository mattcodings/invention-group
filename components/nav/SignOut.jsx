"use client";
import { useClerk } from "@clerk/nextjs";
import { IoLogOutOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
const SignOut = () => {
  const router = useRouter();
  const { signOut } = useClerk();
  const handleSignOut = async () => {
    await signOut();
    router.push("/");
    router.refresh();
  };
  return (
    <>
      <button
        onClick={handleSignOut}
        className="flex items-center bg-secondary text-primary rounded-lg p-2 font-bold"
        title="Sign Out"
      >
        <IoLogOutOutline className="text-2xl" />
      </button>
    </>
  );
};
export default SignOut;
