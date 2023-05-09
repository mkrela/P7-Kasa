import React from "react";
import HomePage from "../pages/HomePage.jsx";
import Footer from "../layouts/Footer";
import Navbar from "../components/Navbar";
import Main from "../layouts/Main";
import ApartmentPage from "../pages/ApartmentPage.jsx";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { ErrorPageNotFound } from "../pages/ErrorPageNotFound";

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
        element: <h1>A PROPOSSSSSSS</h1>,
      },
      {
        path: "/contact",
        element: <h1>CONTACT</h1>,
      },
    ],
  },
]);
