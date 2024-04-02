import PendingInventionList from "@/components/PendingInventionList";
import ApprovedInventionList from "@/components/ApprovedInventionList";
import { Protect, auth, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
const AdminPage = async () => {
  const user = await currentUser();
  const { sessionClaims } = auth();
  if (sessionClaims?.metadata.role !== "admin") {
    redirect("/");
  }
  return (
    <div className="flex">
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Pending Invention List"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <PendingInventionList />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Approved Invention List"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <ApprovedInventionList />
        </div>
      </div>
    </div>
  );
};
export default AdminPage;
