"use client";
import { createSales, updateSales } from "@/utils/actions";
import MonthInput from "@/components/admin/MonthInput";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { IoCheckmarkCircle } from "react-icons/io5";

const MonthlySalesForm = ({ inventionId, newSales }) => {
  const [salesUpdated, setSalesUpdated] = useState(false);
  const handleButtonClick = () => {
    setSalesUpdated(true);
  };
  const id = inventionId;
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
    <form
      action={updateSales}
      className="w-[70%] mx-auto border-8 lg:p-8 md:p-6 sm:p-4 rounded-lg border-neutral bg-primary text-white"
    >
      <h2 className="lg:text-5xl text-center mb-20">
        Enter the sales for this invention
      </h2>
      <input hidden type="text" name="salesId" defaultValue={id} />

      <ul className="flex flex-wrap justify-around">
        {months.map((month) => {
          return (
            <li key={month}>
              <MonthInput currentMonth={month} monthSales={newSales[month]} />
            </li>
          );
        })}
      </ul>

      <div className="text-center">
        <button
          type="submit"
          className="btn bg-primary font-bold text-neutral text-2xl border-secondary border-4 join-item capitalize mb-4"
          onClick={handleButtonClick}
        >
          Update Sales
        </button>
        {salesUpdated ? (
          <div>
            <IoCheckmarkCircle className="mx-auto text-5xl text-green-500" />
            <p className="text-2xl text-green-500">Sales Updated</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </form>
  );
};
export default MonthlySalesForm;
