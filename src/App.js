import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./components/layout/Layout";

import ResumePage from "./routes/ResumePage";
import PortfolioPage from "./routes/PortfolioPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<ResumePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
