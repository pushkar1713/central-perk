import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>this is an about page</h1>
      <p>welcome to my restaurant</p>
      <Outlet />
    </div>
  );
};
export default About;
