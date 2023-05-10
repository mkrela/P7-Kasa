import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Footer from "../layout/Footer";
import Main from "../layout/Main";
import Navbar from "../components/Navbar";
import ApartmentPage from "../pages/ApartmentPage";
import About from "../pages/About";
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

export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPageNotFound />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/flat",
        element: <ApartmentPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
