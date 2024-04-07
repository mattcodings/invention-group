const SingleQuestion = ({ question, answer }) => {
  return (
    <div className="border-primary px-4 py-8 w-[70%] mx-auto text-primary my-8 rounded-lg">
      <h5 className="text-3xl pb-2 mb-2 border-b-2 border-primary">
        {question}
      </h5>
      <p className="text-2xl">{answer}</p>
    </div>
  );
};
export default SingleQuestion;
