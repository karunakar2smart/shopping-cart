import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout";
import LandingPage from "../components/Views/LandingPage";
import Product from "../components/Views/Product";

const Router = () => {
 return (
  <Routes>
   <Route path="/" element={<MainLayout />}>
    <Route index element={<LandingPage />} />
    <Route path="/product/:productId" element={<Product />} />
   </Route>
  </Routes>
 );
};

export default Router;
