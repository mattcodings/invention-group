import Link from "next/link";
import ApproveInvention from "../../../components/ApproveInvention";
import { getInvention } from "../../../utils/actions";

const SingleInventionPage = async ({ params }) => {
  const invention = await getInvention(params.id);
  return (
    <div>
      <Link href="/admin" className="btn btn-accent">
        Back to inventions
      </Link>
      <ApproveInvention invention={invention} />
    </div>
  );
};
export default SingleInventionPage;
