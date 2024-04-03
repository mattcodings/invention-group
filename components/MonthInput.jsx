const MonthInput = ({ currentMonth }) => {
  return (
    <div>
      <label className="form-control w-full mb-8">
        <div className="label">
          <span className="label-text text-2xl capitalize">{currentMonth}</span>
        </div>
        <input
          type="number"
          className="input input-bordered join-item w-full bg-white"
          placeholder={currentMonth}
          name={currentMonth}
        />
      </label>
    </div>
  );
};
export default MonthInput;
