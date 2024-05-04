import { auth, currentUser } from "@clerk/nextjs";
import Navlink from "./Navlink";
import { findInvention } from "@/utils/actions";

import Link from "next/link";
import SmallNavMenu from "@/components/nav/SmallNavMenu";
import Image from "next/image";
import StaticNavbar from "@/components/nav/StaticNavbar";
import SignOut from "@/components/nav/SignOut";

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Expertise", path: "/expertise" },
  { title: "Process", path: "/process" },
  { title: "FAQ", path: "/faq" },
];
const Navbar = async () => {
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
    <div className="flex bg-primary justify-between h-32 items-center lg:text-2xl">
      <div>
        <Link href="/">
          <Image
            src="/images/theinventiongrouplogo.png"
            alt="meeting"
            width={75}
            height={100}
            className="ml-8"
          />
        </Link>
      </div>
      <div className="bg-primary flex justify-end">
        <div className="flex items-center">
          <SmallNavMenu links={links} />
        </div>
        <ul className="hidden justify-end gap-x-4 text-white items-center px-4 lg:flex">
          <StaticNavbar links={links} />
          <li>
            {submittedInvention ? (
              <Link
                href="/approved-invention"
                className="hover:bg-secondary hover:text-primary p-2 rounded-lg font-semibold"
              >
                My Invention
              </Link>
            ) : (
              <Link
                href="/submit-invention"
                className="hover:bg-secondary hover:text-primary p-2 rounded-lg font-semibold"
              >
                Submit Invention
              </Link>
            )}
          </li>
          <li>
            {sessionClaims?.metadata.role === "admin" ? (
              <Link
                href="/admin"
                className="hover:bg-secondary hover:text-primary p-2 rounded-lg font-semibold"
              >
                Admin
              </Link>
            ) : (
              ""
            )}
          </li>
          {userId ? (
            <li className="text-center">
              <div className="flex justify-center">
                <SignOut />
              </div>
              {/* <p>{user.emailAddresses[0].emailAddress}</p> */}
            </li>
          ) : (
            <li className="hover:bg-secondary hover:text-primary p-2 rounded-lg font-semibold">
              <Navlink title="Sign In" path="/sign-in" />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
