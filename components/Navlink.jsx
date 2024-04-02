import Link from "next/link";

const Navlink = ({ title, path }) => {
  return (
    <div>
      <Link href={path}>{title}</Link>
    </div>
  );
};
export default Navlink;
