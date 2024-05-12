import { useContext } from "react";
import UserContext from "../utils/userContext";

const Contact = () => {
  // how to use context api in functional based compoents
  const { credits } = useContext(UserContext);
  return (
    <div>
      <h1>this is the contact page</h1>
      <h3 className="font-bold">made with love 🧡 by {credits.name}</h3>
    </div>
  );
};

export default Contact;
