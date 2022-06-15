import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../UI/Footer";
import Navigation from "../UI/Navigation";

const MainLayout = () => {
 return (
  <>
   <Navigation />
   <Outlet />
   <Footer />
  </>
 );
};

export default MainLayout;
