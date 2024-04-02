const ProcessStep = ({ title, description, stepNumber }) => {
  return (
    <div className="flex items-center mt-10">
      <div className="bg-neutral rounded-full p-3 text-primary mx-10 circle-size border-2 border-primary">
        {stepNumber}
      </div>
      <div>
        <h3 className="bg-primary flex-initial text-neutral text-3xl p-4">{title}</h3>
        <div>
          <p className="bg-secondary text-primary flex-initial process-item-description text-2xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProcessStep;
