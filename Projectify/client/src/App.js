import "./styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Project from "./components/pages/Project";
import Form from "./components/pages/Form";
import Upload from "./components/pages/Upload";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import Signup from "./components/pages/SignUp";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import Services from "./components/pages/Services";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <div className="App">
      {/* Main header section */}
      <div className="main-header-container">
        <Navbar />
        {/* Routes for main content */}
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/form" element={<Form />} />
          <Route path="/upload" element={<Upload/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route exact path="/" element={isLoggedIn == "true" ? <Dashboard /> : <Login />} />

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
