// src/App.js
import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ResumePage from "./routes/ResumePage";
import PortfolioPage from "./routes/PortfolioPage";
import PortfolioDetailPage from "./routes/PortfolioDetailPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<ResumePage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<PortfolioDetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
