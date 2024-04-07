import Link from "next/link";
import ApproveInvention from "../../../components/admin/ApproveInvention";
import { findSales, getInvention } from "../../../utils/actions";
import MonthlySalesForm from "@/components/admin/MonthlySalesForm";

const SingleInventionPage = async ({ params }) => {
  const invention = await getInvention(params.id);
  const newSales = await findSales(params.id);
  console.log(newSales);
  return (
    <div>
      <Link href="/admin" className="btn btn-accent">
        Back to inventions
      </Link>
      {invention.isApproved ? (
        <MonthlySalesForm inventionId={invention.id} newSales={newSales} />
      ) : (
        <ApproveInvention invention={invention} />
      )}
    </div>
  );
};
export default SingleInventionPage;
