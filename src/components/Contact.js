import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div
      className="w-1/2 mx-auto px-4 py-4 shadow-md mt-20"
    >
      <div>
        <label className="font-semibold">Name : </label>
        <h2 className="inline-block font-semibold text-lg">
          Bala Manohar Yeminedi
        </h2>
      </div>
      <div>
        <label className="font-semibold">Email : </label>
        <h2 className="inline-block font-semibold text-lg">
          balamanohar.yeminedi@gmail.com
        </h2>
      </div>
      <div>
        <label className="font-semibold">Linkedin Profile: </label>
        <h2 className="inline-block font-semibold  mt-2">
          <Link
            className="border px-2 py-1 bg-lime-500 text-white rounded-md"
            target="_blank"
            to="https://www.linkedin.com/in/bala-manohar-yeminedi-09aa98160/"
          >
            linkedin
          </Link>
        </h2>
      </div>
      <div>
        <label className="font-semibold">GitHub Profile: </label>
        <h2 className="inline-block font-semibold  mt-4">
          <Link
            className="border px-2 py-1 bg-lime-500 text-white rounded-md"
            target="_blank"
            to="https://github.com/balamanohar96"
          >
            GitHub
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Contact;
