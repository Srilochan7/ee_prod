import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./comp/components/navbar";
import Hero from "./comp/components/hero";
import What from "./comp/pages/what";
import Footer from "./comp/components/footer";
import Scroll from "./comp/pages/scroll";
import Mission from "./comp/pages/mission";
import Resources from "./comp/pages/resources";
import About from "./comp/pages/about";
import Home from "./comp/pages/home";
import MentorProfile from "./comp/pages/mentor_profile";

function App() {
  return (
    <div>
      
      <Routes>
        <Route
          path="/"
          element={
            <>

              <Hero />
              <Scroll />
              <What />
              <Mission />
              <About />
              <Resources />
              <Footer />
            </>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/mentor-profile" element={<MentorProfile/>} />
      </Routes>
    </div>
  );
}

export default App;
