"use client";
import { useRouter } from "next/navigation";
const ReturnToInventionButton = () => {
  const router = useRouter();
  const handleButtonClick = (event) => {
    event.preventDefault();
    router.push("/approved-invention");
    router.refresh();
  };
  return (
    <form onSubmit={handleButtonClick}>
      <button className="btn bg-primary text-neutral text-2xl">
        Back to My Invention
      </button>
    </form>
  );
};
export default ReturnToInventionButton;
