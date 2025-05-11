import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const [user, setUser] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
