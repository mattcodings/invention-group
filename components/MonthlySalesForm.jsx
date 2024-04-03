import { createSales } from "@/utils/actions";
import MonthInput from "@/components/MonthInput";

const MonthlySalesForm = ({ id }) => {
  const inventionId = id;
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  return (
    <form action={createSales}>
      <h2>Enter the sales for this invention</h2>
      <input type="text" name="salesId" value={inventionId} />
      {months.map((month) => {
        return (
          <li key={month}>
            <MonthInput currentMonth={month} />
          </li>
        );
      })}
      <div className="text-center">
        <button type="submit" className="btn btn-primary join-item capitalize">
          Update Sales
        </button>
      </div>
    </form>
  );
};
export default MonthlySalesForm;
