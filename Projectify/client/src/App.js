import "./styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Project from "./components/pages/Project";
import Form from "./components/pages/Form";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import Signup from "./components/pages/SignUp";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import Services from "./components/pages/Services";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import { Route, Routes } from "react-router-dom";

import UserDetails from './components/pages/userDetails';

export default function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <div className="App">
      {/* Main header section */}
      <div className="main-header-container">
        <Navbar />
        {/* Routes for main content */}
        <Routes>
          
          <Route path="/home" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/form" element={<Form />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={isLoggedIn == "true" ? <UserDetails /> : <Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/userDetails" element={<UserDetails />} />
        </Routes>
      </div>

      {/* Main body section */}
      <div className="main-body-container"></div>

      {/* Main footer section */}
      <div className="main-footer-container">
        {/* Routes for footer content */}
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
