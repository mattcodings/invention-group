import Processes from "@/components/Processes";
import ProcessPageTitle from "@/components/ProcessPageTitle";

const ProcessPage = () => {
  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-6xl text-center my-8">The Process</h2>
      <div className="grid grid-cols-2 justify-center justify-items-center items-center">
        <ProcessPageTitle />
        <Processes />
      </div>
    </div>
  );
};
export default ProcessPage;
