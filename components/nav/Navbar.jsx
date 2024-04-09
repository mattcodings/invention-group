import { SignOutButton, UserButton, auth, currentUser } from "@clerk/nextjs";
import Navlink from "./Navlink";
import { findInvention } from "@/utils/actions";
import { IoLogOutOutline } from "react-icons/io5";
import Link from "next/link";
import SmallNavMenu from "@/components/nav/SmallNavMenu";
import Image from "next/image";

import StaticNavbar from "@/components/nav/StaticNavbar";

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Expertise", path: "/expertise" },
  { title: "Process", path: "/process" },
  { title: "FAQ", path: "/faq" },
];
const Navbar = async () => {
  const { userId } = auth();
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
        <ul className="hidden justify-end gap-x-8 text-white items-center px-8 md:flex">
          <StaticNavbar links={links} />
          <li>
            {submittedInvention ? (
              <Link
                href="/approved-invention"
                className="hover:bg-neutral hover:text-primary p-2 rounded-lg font-semibold"
              >
                My Invention
              </Link>
            ) : (
              <Link
                href="/submit-invention"
                className="hover:bg-neutral hover:text-primary p-2 rounded-lg font-semibold"
              >
                Submit Invention
              </Link>
            )}
          </li>
          {userId ? (
            <li className="text-center">
              <p>{user.emailAddresses[0].emailAddress}</p>
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
    </div>
  );
};
export default Navbar;
