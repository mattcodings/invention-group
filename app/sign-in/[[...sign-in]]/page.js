import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <SignIn redirectUrl="/" />
      No account? <Link href="/sign-up">Sign Up</Link>
    </div>
  );
};
export default SignInPage;
