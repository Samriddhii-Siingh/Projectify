import "./styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/pages/Home";
import Project from "./components/pages/Project";
import Form from "./components/pages/Form";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";

import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import Services from "./components/pages/Services";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";

import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <div className="main-header-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/form" element={<Form />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

      <div className="main-body-container"></div>

      <div className="main-footer-container">
        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
        
        <Footer />
      </div>
    </div>
  );
}
