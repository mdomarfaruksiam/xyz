import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import Layout from "./Layouts/Layout";
import { useContext, useState } from "react";
import { authContext } from "./Contexts/authContext";

import Home from "./Pages/HomePage/Home";
import PageNotFound from "./Components/PageNotFound";
import SignIn from "./Components/sign/SignIn";
import Dashboard from "./Pages/DashBoard/Dashboard";
import About from "./Components/about/About";
import SignUp from "./Components/sign/SignUp";


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <authContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <RouterProvider router={createBrowserRouter([
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              index: true,
              element: isLoggedIn ? <Dashboard /> : <Home />
            },
            {
              path: 'signin',
              element: isLoggedIn ? <Navigate to='/' replace /> : <SignIn />
            }, {
              path: 'signup',
              element: isLoggedIn ? <Navigate to='/' replace /> : <SignUp />
            },
            { path: 'about', element: <About /> }
          ],
        },
        { path: "*", element: <PageNotFound /> }
      ])} />
    </authContext.Provider>
  );
}