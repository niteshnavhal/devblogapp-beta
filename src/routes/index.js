import React from "react";
//Import Your Components
import Home from "../components/Home/index.js";
import AboutMe from "../components/Aboutme/index.js";
import Blogpost from "../components/layout/blog-post/index.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/blog-post" element={<Blogpost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
