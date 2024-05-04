"use client";
import { denyInvention } from "@/utils/actions";
import { useRouter } from "next/navigation";
const DenyApprovedInvention = ({ id }) => {
  const router = useRouter();
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("id", id);
    try {
      await denyInvention(formData);
      router.push("/admin");
      router.refresh();
    } catch (error) {
      console.error("Failed to deny invention:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="btn bg-gray border-accent text-primary text-2xl hover:bg-red-500"
      >
        Deny
      </button>
    </form>
  );
};
export default DenyApprovedInvention;
