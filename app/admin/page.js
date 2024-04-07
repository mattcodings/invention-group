import PendingInventionList from "@/components/admin/PendingInventionList";
import ApprovedInventionList from "@/components/admin/ApprovedInventionList";
import { auth, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
const AdminPage = async () => {
  const { sessionClaims } = auth();
  if (sessionClaims?.metadata.role !== "admin") {
    redirect("/");
  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-2xl "
          aria-label="Pending Invention List"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content border-base-300 rounded-box p-6 bg-primary"
        >
          <PendingInventionList />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-2xl"
          aria-label="Approved Invention List"
        />
        <div
          role="tabpanel"
          className="tab-content bg-primary border-base-300 rounded-box p-6"
        >
          <ApprovedInventionList />
        </div>
      </div>
    </div>
  );
};
export default AdminPage;
