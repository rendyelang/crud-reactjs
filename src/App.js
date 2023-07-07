// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import JumbotronComponents from "./components/JumbotronComponents";
import NavbarComponents from "./components/NavbarComponents";
import Home from "./pages/Home";
// import TableComponents from "./components/TableComponents";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import Notfound from "./pages/Notfound";
import FooterComponents from "./components/FooterComponents";
import data from "./data/data";

function App() {
  const [title] = useState("Tugas Akhir Bootcamp Front End Nusaputra");
  return (
    <div className="">
      <NavbarComponents />
      <div className="min-h-screen">
        <JumbotronComponents title={title} />
        <Router>
          <Routes>
            <Route path="/" element={<Home users={data} />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/edit/:id" element={<Edit users={data} />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
            <Route path="*" element={<Notfound />}></Route>
          </Routes>
        </Router>
      </div>
      <FooterComponents />
    </div>
  );
}

export default App;
