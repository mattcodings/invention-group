const MonthInput = ({ currentMonth, monthSales }) => {
  return (
    <div>
      <label className="form-control w-full mb-8">
        <div className="label">
          <span className="label-text text-2xl capitalize text-white">
            {currentMonth}
          </span>
        </div>
        <input
          type="number"
          className="input input-bordered join-item w-full bg-white text-black"
          placeholder={currentMonth}
          name={currentMonth}
          defaultValue={monthSales}
        />
      </label>
    </div>
  );
};
export default MonthInput;
