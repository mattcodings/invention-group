const ProcessStep = ({ title, description, stepNumber }) => {
  return (
    <div className="flex items-center mt-10">
      <div className="bg-primary rounded-full p-3 text-secondary mx-10 circle-size">
        {stepNumber}
      </div>
      <div>
        <h3 className="bg-primary flex-initial w-64 text-accent">{title}</h3>
        <div>
          <p className="bg-base-300 flex-initial process-item-description text-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProcessStep;
