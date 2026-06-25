import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import { useState } from "react";
import { authContext } from "./Contexts/authContext";

import Home from "./Pages/HomePage/Home";
import PageNotFound from "./Components/PageNotFound";
import SignIn from "./Components/sign/SignIn";
import Dashboard from "./Pages/DashBoard/Dashboard";
import About from "./Components/about/About";
import SignUp from "./Components/sign/SignUp";
import Products from "./Pages/HomePage/Products";
import Pricing from "./Components/pricing/Pricing";
import Contact from "./Components/contact/Contact";
import PublicLayout from "./Layouts/PublicLayout";
import ProtectedLayout from "./Layouts/ProtectedLayout";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <authContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <RouterProvider router={createBrowserRouter([
        {
          path: "/",
          element: isLoggedIn ? <ProtectedLayout /> : <PublicLayout />,
          children: [
            {
              index: true,
              element: isLoggedIn ? <Dashboard /> : <Home />
            },
            {
              path: 'signin',
              element: isLoggedIn ? <Navigate to='/' replace /> : <SignIn />
            },
            {
              path: 'signup',
              element: isLoggedIn ? <Navigate to='/' replace /> : <SignUp />
            },
            {
              path: 'products',
              element: isLoggedIn ? <Navigate to='/' replace /> : <Products />
            },
            {
              path: 'about',
              element: <About />
            },
            {
              path: 'pricing',
              element: <Pricing />
            },
            {
              path: 'contact',
              element: <Contact />
            },
          ],
        },
        { path: "*", element: <PageNotFound /> }
      ])} />
    </authContext.Provider>
  );
}