import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { SignOutButton, auth, currentUser } from "@clerk/nextjs";
import Navlink from "./Navlink";
import { findInvention } from "@/utils/actions";
import { IoLogOutOutline } from "react-icons/io5";

const SmallNavMenu = async ({ links }) => {
  const { userId, sessionClaims } = auth();
  const user = await currentUser();

  const grabInvention = async () => {
    if (userId) {
      const [userInvention] = await findInvention(userId);
      return userInvention;
    }
  };
  const submittedInvention = await grabInvention();
  return (
    <div className="dropdown dropdown-left lg:hidden">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 bg-primary border-primary hover:bg-neutral"
      >
        <IoMdMenu className="text-3xl text-white hover:text-primary" />
      </div>
      <ul
        tabIndex={0}
        className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
      >
        {links.map((link) => {
          return (
            <li key={link.title}>
              <Link href={link.path}>{link.title}</Link>
            </li>
          );
        })}
        <li>
          {submittedInvention ? (
            <Link href="/approved-invention" className="px-4 rounded-lg">
              My Invention
            </Link>
          ) : (
            <Link href="/submit-invention" className="px-4 rounded-lg">
              Submit Invention
            </Link>
          )}
        </li>
        <li>
          {sessionClaims?.metadata.role === "admin" ? (
            <Link href="/admin" className="px-4 rounded-lg">
              Admin
            </Link>
          ) : (
            ""
          )}
        </li>
        {userId ? (
          <li className="text-center">
            <div className="flex justify-center">
              <SignOutButton />
              <IoLogOutOutline className="text-2xl" />
            </div>
          </li>
        ) : (
          <li>
            <Navlink title="Sign In" path="/sign-in" />
          </li>
        )}
      </ul>
    </div>
  );
};
export default SmallNavMenu;
