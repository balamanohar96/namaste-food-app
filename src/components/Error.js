import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h2>Oops!......</h2>
      <h2>
        Error {error.status}: Page {error.statusText}
      </h2>
    </div>
  );
};

export default Error;
