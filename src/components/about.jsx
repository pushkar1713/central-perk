import { Outlet } from "react-router-dom";
import UserContext from "../utils/userContext";
import portfolio from "../assets/portfolio.png";
import parallax from "../assets/parallax.png";
import restaurant from "../assets/restaurant.png";
import tictactoe from "../assets/tictactoe.png";
import todo from "../assets/todo.png";
import batua from "../assets/batua.png";

("use client");

import { Card } from "flowbite-react";

const About = () => {
  return (
    <div className=" flex justify-evenly flex-wrap">
      {/* <h1>this is an about page</h1>
      <p>welcome to my restaurant</p> */}
      {/* this is how you use context api in class based components
       we also have userContext.Provider to change or modify the user context*/}
      {/* <UserContext.Consumer>
        {({ credits }) => (
          <h4 className="font-bold">made with 🧡 by {credits.name}</h4>
        )}
      </UserContext.Consumer> */}
      <div className="p-2">
        <Card
          className="max-w-sm border-black border-2"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={parallax}
        >
          <h5 className="text-2xl font-bold tracking-tight text-black">
            PARALLAX WEBSITE USING HTML AND CSS
          </h5>
        </Card>
      </div>
      <div className="p-2">
        <Card
          className="max-w-sm border-black border-2"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={portfolio}
        >
          <h5 className="text-2xl font-bold tracking-tight text-black">
            PORTFOLIO WEBSITE USING HTML AND TAILWIND CSS
          </h5>
        </Card>
      </div>
      <div className="p-2">
        <Card
          className="max-w-sm border-black border-2"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={tictactoe}
        >
          <h5 className="text-2xl font-bold tracking-tight text-black">
            TIC-TAC-TOE USING HTML, CSS AND JAVASCRIPT
          </h5>
        </Card>
      </div>
      <div className="p-2">
        <Card
          className="max-w-sm border-black border-2"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={restaurant}
        >
          <h5 className="text-2xl font-bold tracking-tight text-black">
            FOOD ORDERING WEBSITE USING REACT JS
          </h5>
        </Card>
      </div>
      <div className="p-2">
        <Card
          className="max-w-sm border-black border-2"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={todo}
        >
          <h5 className="text-2xl font-bold tracking-tight text-black">
            FULLSTACK TODO APP USING REACT AND NODE JS
          </h5>
        </Card>
      </div>
      <div className="p-2">
        <Card
          className="max-w-sm border-black border-2"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={batua}
        >
          <h5 className="text-2xl font-bold tracking-tight text-black">
            PAYTM LIKE WALLET USING REACT AND NODE JS
          </h5>
        </Card>
      </div>
    </div>
  );
};
export default About;
