import React from "react";
import HomePage from "../pages/HomePage.jsx";
import Footer from "../layouts/Footer";
import Navbar from "../components/Navbar";
import Main from "../layouts/Main";
import ApartmentPage from "../pages/ApartmentPage.jsx";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { ErrorPageNotFound } from "../pages/ErrorPageNotFound";
import About from "../pages/About.jsx";

const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

const Layout404 = () => {
  return (
    <>
      <Navbar />
      <ErrorPageNotFound />
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <Layout404 />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/apartment",
        element: <ApartmentPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <h1>CONTACT</h1>,
      },
    ],
  },
]);
