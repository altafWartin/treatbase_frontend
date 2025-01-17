import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNavigation from "./components/Sidebar/Sidebar";
import { Header } from "./components/Header/Header";
import Tutorial from "./pages/Tutorial/Tutorial";
import Home from "./pages/Home/Home";


// Dummy components for each route
function Patient() {
  return <Home />;
}
function Language() {
  return <div>Language Page</div>;
}

function Settings() {
  return <div>Settings Page</div>;
}
function Logout() {
  return <div>Logout Page</div>;
}

function App() {
  return (
    <Router>
      <Header />
      <div className="">
        <SideNavigation />
        <div className=" p-4">
          <Routes>
            <Route path="/patient" element={<Patient />} />
            <Route path="/language" element={<Language />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/" element={<Patient />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
