// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
// import JumbotronComponents from "./components/JumbotronComponents";
import NavbarComponents from "./components/NavbarComponents";
import Home from "./pages/Home";
// import TableComponents from "./components/TableComponents";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";
import FooterComponents from "./components/FooterComponents";
import data from "./data/data";

function App() {
  const [title] = useState("Tugas Akhir Bootcamp Front End Nusaputra");
  return (
    <div className="">
      <NavbarComponents />
      <main className="min-h-screen">
        {/* <JumbotronComponents title={title} /> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home users={data} title={title} />}></Route>
            <Route path="/create" element={<Create title={title} />}></Route>
            <Route path="/edit/:id" element={<Edit users={data} title={title} />}></Route>
            <Route path="*" element={<Notfound />}></Route>
          </Routes>
        </Router>
      </main>
      <FooterComponents />
    </div>
  );
}

export default App;
