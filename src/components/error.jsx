import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return <h1>Something broke</h1>;
};

export default Error;
