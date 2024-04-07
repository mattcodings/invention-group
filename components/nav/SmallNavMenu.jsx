import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
const SmallNavMenu = ({ links }) => {
  return (
    <div className="dropdown dropdown-left md:hidden">
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
      </ul>
    </div>
  );
};
export default SmallNavMenu;
