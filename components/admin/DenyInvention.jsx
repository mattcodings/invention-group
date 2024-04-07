import { denyInvention } from "@/utils/actions";

const DenyInvention = ({ id }) => {
  return (
    <form action={denyInvention}>
      {/* We do this input because it is passed into the form data in our server action */}
      <input type="hidden" name="id" value={id} />
      <button className="btn bg-gray border-accent text-primary text-2xl hover:bg-red-500">
        Deny
      </button>
    </form>
  );
};
export default DenyInvention;
