import { createContext } from "react";

const UserContext = createContext({
  credits: {
    name: "Pushkar Aggarwal",
    email: "pushkar1713@gmail.com",
  },
});

export default UserContext;
