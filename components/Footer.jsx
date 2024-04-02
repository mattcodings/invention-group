import Image from "next/image";
import Navlink from "./Navlink";
const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Expertise", path: "/expertise" },
  { title: "Process", path: "/process" },
  { title: "FAQ", path: "/faq" },
];
const img = "/images/logo.jpg";
const Footer = () => {
  return (
    <div className="bg-primary">
      <Image src={img} width={100} height={100} alt="logo" />
      <ul className="flex text-2xl justify-evenly p-8">
        {links.map((link) => {
          const { img, title, path } = link;
          return (
            <li key={title}>
              <Navlink img={img} title={title} path={path} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Footer;
