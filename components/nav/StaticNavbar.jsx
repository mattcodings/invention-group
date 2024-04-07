"use client";
import { usePathname } from "next/navigation";

const StaticNavbar = ({ links }) => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <li key={link.path} className={pathname === link.path ? "active" : ""}>
          <a
            href={link.path}
            className="hover:bg-neutral hover:text-primary p-2 rounded-lg font-semibold"
          >
            {link.title}
          </a>
        </li>
      ))}
    </>
  );
};
export default StaticNavbar;
