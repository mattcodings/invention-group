"use client";
import { useRouter } from "next/navigation";
import { createInvention } from "@/utils/actions";
const InventionForm = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      await createInvention(formData);
      router.push("/approved-invention");
    } catch (error) {
      console.error("Failed to submit invention:", error);
      router.push("/error");
    }
  };
  return (
    <div className="mb-8">
      <h2 className="capitalize text-4xl text-center bg-primary text-secondary mt-8 p-6">
        submit your invention for review
      </h2>
      <p className="lg:w-1/2 w-5/6 text-left text-2xl mx-auto my-16">
        Submit your invention idea below. You will only be charged upon approval
        of the invention, where we will begin the next steps. Approvals/Denials
        will be made within 48 hours of initial submission. If you have any
        questions, please call us at (123)123-1234, or email us at
        inventiongroup@gmail.com
      </p>
      <form onSubmit={handleSubmit} className="md:w-1/2 lg:w-2/5 mx-auto">
        <div className="border-primary border-solid border-8 p-8 rounded-3xl">
          <label className="form-control w-full mb-8">
            <div className="label">
              <span className="label-text text-2xl">Full Name</span>
            </div>
            <input
              type="text"
              className="input input-bordered join-item w-full bg-white"
              placeholder="Your First and Last Name"
              name="nameOfInventor"
              required
            />
          </label>
          <label className="form-control w-full mb-8">
            <div className="label">
              <span className="label-text text-2xl">Invention Name</span>
            </div>
            <input
              type="text"
              className="input input-bordered join-item w-full bg-white"
              placeholder="Name of Your Invention"
              name="nameOfInvention"
              required
            />
          </label>
          <label className="form-control w-full mb-8">
            <div className="label">
              <span className="label-text text-2xl">
                Detailed Description of Invention
              </span>
            </div>
            <textarea
              className="border-2 rounded-lg join-item w-full"
              placeholder="A description of your invention"
              name="description"
              required
              rows={8}
              cols={70}
            />
          </label>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary join-item capitalize "
            >
              submit invention
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default InventionForm;
