import React from "react";
// import { ReactComponent as Github } from "../assets/img/github.svg";
// import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
// import { Link } from "react-router-dom";
// import github from "../assets/img/github.svg"

const NavbarComponents = () => {
  return (
    <header className="App-header py-4">
      <nav className="container flex w-full justify-between items-center">
        <div className="flex w-fit items-center gap-x-[94px]">
          <a href="https://www.linkedin.com/in/rendy-elang-lesmana-691159262/" target="_blank" rel="noopener noreferrer" className="no-underline text-gray-300 hover:text-white active:text-white">
            My LinkedIn
          </a>
        </div>
        <div>
          <a href="/" className="no-underline text-gray-300 hover:text-white active:text-white">
            {/* <img src={github} alt="Github Logo" /> */}
            Github Repository
          </a>
        </div>
      </nav>
    </header>
    //   <Router>
    //   <Routes>
    //     <Route path="/" element={<Home users={users} />}></Route>
    //     <Route path="/create" element={<Create />}></Route>
    //   </Routes>
    // </Router>
  );
};

export default NavbarComponents;
