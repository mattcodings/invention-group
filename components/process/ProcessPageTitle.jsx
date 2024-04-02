import Link from "next/link";

const ProcessPageTitle = () => {
  return (
    <div>
      <h2 className="text-5xl p-28">
        Our Experts Will Tailor a Plan for Your Success
      </h2>
      <p className="text-2xl px-28">
        While each invention is different, we recommend starting with the
        following steps to begin the process of bringing your invention to
        market.
      </p>
      <p className="text-2xl px-28 my-8">
        When you are ready to begin, submit an invention idea to us!
      </p>
      <div className="text-center">
        <Link href="/submit-invention">
          <button type="button" className="btn btn-primary ">
            Request Invention Evaluation
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ProcessPageTitle;
