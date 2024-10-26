import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import { Session } from "./components/Session";
//import "./assets/css/App.css";
import RegisterBootCamp from "./components/bootcamp/RegisterBootCamp";
import Navbar from "./components/landing/Navbar";
import Info from "./components/landing/info";
import Cards from "./components/landing/Cards"

export default function App() {
    return (
       
       
        <Router>
             <Navbar/>
             <Info />
             <Cards />
            <Routes>
                <Route path="/" element={<Session  />} />
                <Route path="/registro" element={<RegisterBootCamp  />} />
            </Routes>
        </Router>
        
        
    );
}
