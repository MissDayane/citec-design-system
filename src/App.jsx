import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DSHeader from "./design-system/layout/DSHeader.jsx";

// Pages
import HomePage from "./pages/Home.jsx";
import FoundationPage from "./pages/Foundation.jsx";
import TokensPage from "./pages/Tokens.jsx";
import ComponentsPage from "./pages/Components.jsx";
import GuidelinesPage from "./pages/Guidelines.jsx";

export default function App() {
  return (
    <Router>
      {/* Header Fixo em TODAS as rotas */}
      <DSHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/foundation" element={<FoundationPage />} />
        <Route path="/tokens" element={<TokensPage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/guidelines" element={<GuidelinesPage />} />
      </Routes>
    </Router>
  );
}
