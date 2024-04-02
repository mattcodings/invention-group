import { SignOutButton, UserButton, auth, currentUser } from "@clerk/nextjs";
import Navlink from "./Navlink";
import { findInvention } from "@/utils/actions";
import { IoLogOutOutline } from "react-icons/io5";

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
    <ul className="flex justify-around bg-primary text-white items-center">
      {links.map((link) => {
        return (
          <li key={link.title}>
            <Navlink title={link.title} path={link.path} />
          </li>
        );
      })}
      <li>
        {submittedInvention ? (
          <Navlink title="My Invention" path="/approved-invention" />
        ) : (
          <Navlink title="Submit Invention" path="/submit-invention" />
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
  );
};
export default Navbar;
