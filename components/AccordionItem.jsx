const AccordionItem = ({ title, description, color }) => {
  return (
    <div className="collapse collapse-arrow mt-3 bg-primary text-accent">
      <input
        type="radio"
        name="my-accordion-2"
        // className={selected ? "checked" : "unchecked"}
      />
      <div className="collapse-title text-2xl">{title}</div>
      <div className="collapse-content">
        <p className="accordion-content bg-primary rounded-btn p-2">
          {description}
        </p>
      </div>
    </div>
  );
};
export default AccordionItem;
