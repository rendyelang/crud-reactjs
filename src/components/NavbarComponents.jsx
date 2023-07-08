import React from "react";

const NavbarComponents = () => {
  return (
    <header className="App-header py-4 fixed w-full z-50">
      <nav className="container flex w-full justify-between items-center">
        <div className="flex w-fit items-center gap-x-[94px]">
          <a href="https://www.linkedin.com/in/rendy-elang-lesmana-691159262/" target="_blank" rel="noopener noreferrer" className="no-underline text-gray-300 hover:text-white active:text-white">
            My LinkedIn
          </a>
        </div>
        <div>
          <a href="https://github.com/rendyelang/crud-reactjs" target="_blank" rel="noopener noreferrer" className="no-underline text-gray-300 hover:text-white active:text-white">
            Github Repository
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavbarComponents;
