import { denyInvention } from "@/utils/actions";

const DenyInvention = ({ id }) => {
  return (
    <form action={denyInvention}>
      {/* We do this input because it is passed into the form data in our server action */}
      <input type="hidden" name="id" value={id} />
      <button className="btn bg-primary border-accent text-accent">
        Deny Invention
      </button>
    </form>
  );
};
export default DenyInvention;
