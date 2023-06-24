import React from "react";
import Navbar from "components/Navbar";
import Home from "views/Home";
import Search from "views/Search";
import { Route, Routes } from "react-router-dom";
import Collection from "views/Collection";

const Content = () => {
  return (
    <main className="flex-auto overflow-auto">
      <Navbar />
      <div className="px-8 py-5">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/library" element={<Collection />} />
        </Routes>
      </div>
    </main>
  );
};

export default Content;
