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
    <div>
      <div className="min-h-screen">
        <h2 className="text-center text-5xl my-20">Inventions</h2>
        <div className="flex justify-center items-center">
          <div role="tablist" className="tabs tabs-lifted">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab text-2xl "
              aria-label="Pending"
              defaultChecked
            />
            <div
              role="tabpanel"
              className="tab-content rounded-box p-2 bg-primary w-[700px]"
            >
              <PendingInventionList />
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab text-2xl"
              aria-label="Approved"
            />
            <div
              role="tabpanel"
              className="tab-content bg-primary rounded-box p-2 w-[700px]"
            >
              <ApprovedInventionList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminPage;
