import "./styles.css";
import Navbar from "./components/Navbar";

import Home from "./components/pages/Home";
import Project from "./components/pages/Project";
import Form from "./components/pages/Form";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";

import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/form" element={<Form />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
