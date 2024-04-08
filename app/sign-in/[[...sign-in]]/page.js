import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <SignIn redirectUrl="/" />
    </div>
  );
};
export default SignInPage;
