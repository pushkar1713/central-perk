import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/footer";
import Body from "./components/body";
import About from "./components/about";
import Error from "./components/error";
import Contact from "./components/contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/ProfileClass";
// named import
// import { Title } from "./components/header"; // not need only here to explain

// default import
import Header from "./components/header";
import "./index.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// create browser router is a function which we import from react router dom and it helps us in creating routes

/*
  - Header
      - logo
      - nav items (right side)
      - cart
  - body
      - Search bar
      - restaurants list
        - image
        - rating
        - name
        - some tags
  - tags
      - link
      - copyright
  */

const AppLayout = () => {
  return (
    <div className="m-0 p-0 bg-[url('./assets/background.jpg')] min-h-screen">
      <Header />
      <Outlet /> {/* all the childern will go into the outlet */}
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about", // parentPath/{path} => localhost:1244/about
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />, // parentPath/{path} => localhost:1244/about/profile
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
