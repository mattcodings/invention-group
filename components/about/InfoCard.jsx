import Image from "next/image";
const InfoCard = ({ img, heading, text }) => {
  return (
    <div className="card lg:w-[500px] mb-20 shadow-xl bg-primary p-4">
      <Image
        src={img}
        alt="meeting"
        width={400}
        height={300}
        className="mx-auto"
      />
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl text-neutral">{heading}</h2>
        <p className="text-center text-[1.5em] text-accent">{text}</p>
      </div>
    </div>
  );
};
export default InfoCard;
