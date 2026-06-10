import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import Layout from "./Layouts/Layout";
import { useContext, useState } from "react";
import { authContext } from "./Contexts/authContext";

import Home from "./Pages/HomePage/Home";
import SolutionsHub from "./Components/SolutionHub";


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <authContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <RouterProvider router={createBrowserRouter([
        {
          path: "/",
          element: <Layout />,
          children: [
            { index: true, element: <Home /> },
            { path: 'solutions', element: <SolutionsHub /> },
          ],
        },
      ])} />
    </authContext.Provider>
  );
}