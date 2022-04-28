import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Routess = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/:category/search/:keyword" element={<Catalog />}></Route>
        <Route path="/:category/:id" element={<Detail />}></Route>
        <Route path="/:category" element={<Catalog />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routess;
