import Link from "next/link";

const NavigationButton = ({ text, link }) => {
  return (
    <Link href={link}>
      <button className="btn-primary text-3xl p-8 border rounded-2xl bg-primary capitalize">
        {text}
      </button>
    </Link>
  );
};
export default NavigationButton;
