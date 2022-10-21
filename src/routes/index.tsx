import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layouts";
import Home from "../views/home";
import About from "../views/about";
import Skills from "../views/skills";
import Contract from "../views/contract";
import Portfolio from "../views/portfolio";
import Login from "../views/login";

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contract" element={<Contract />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
