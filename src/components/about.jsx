import { Outlet } from "react-router-dom";
import UserContext from "../utils/userContext";
import portfolio from "../assets/portfolio.png";
import parallax from "../assets/parallax.png";
import restaurant from "../assets/restaurant.png";
import tictactoe from "../assets/tictactoe.png";
import todo from "../assets/todo.png";
import batua from "../assets/batua.png";
import ProfileCard from "./ProfileCard";

const About = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Parallax Website",
      content:
        "Parallax website featuring my favourite media, made using html and css",
      imageUrl: parallax,
      Link: "https://media-pushkar.web.app/",
    },
    {
      id: 2,
      title: "Personal Portfolio",
      content:
        "This is a personal portfolio website make using html and tailwind css",
      imageUrl: portfolio,
      Link: "https://portfolio-pushkar.web.app/",
    },
    {
      id: 3,
      title: "Tic-Tac-Toe",
      content:
        "This is a simple tic-tac-toe game made using html, css and javascript",
      imageUrl: tictactoe,
      Link: "https://pushkar1713.github.io/tic-tac-toe/",
    },
    {
      id: 4,
      title: "Food Ordering App",
      content:
        "Created a swiggy like application using react.js and tailwind css",
      imageUrl: restaurant,
      Link: "https://central-perk-react.web.app/",
    },
    {
      id: 5,
      title: "Todo List",
      content: "Full stack todo application made using react and node.js",
      imageUrl: todo,
      Link: "https://github.com/pushkar1713/todo-fullstack",
    },
    {
      id: 6,
      title: "Digital Wallet",
      content: "Paytm like wallet made using react and node.js",
      imageUrl: batua,
      Link: "https://week8-paytm-1.onrender.com/",
    },
  ];

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

      <div>
        <ProfileCard />
      </div>

      <div className="flex items-center justify-center">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg p-4 border-[#00361b] border-2"
              >
                <img
                  src={post.imageUrl}
                  alt="Placeholder Image"
                  className="w-full h-48 rounded-md object-cover border-[#00361b] border-2"
                />
                <div className="px-1 py-4">
                  <div className="font-bold text-xl mb-2">{post.title}</div>
                  <p className="text-gray-700 text-base">{post.content}</p>
                </div>
                <div className="px-1 py-4">
                  <a href={post.Link} className="text-blue-500 hover:underline">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="p-2">
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
      </div> */}
    </div>
  );
};
export default About;
