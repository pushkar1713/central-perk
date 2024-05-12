import { Outlet } from "react-router-dom";
import UserContext from "../utils/userContext";

const About = () => {
  return (
    <div>
      <h1>this is an about page</h1>
      <p>welcome to my restaurant</p>
      {/* this is how you use context api in class based components
       we also have userContext.Provider to change or modify the user context*/}
      <UserContext.Consumer>
        {({ credits }) => (
          <h4 className="font-bold">made with 🧡 by {credits.name}</h4>
        )}
      </UserContext.Consumer>
      <Outlet />
    </div>
  );
};
export default About;
