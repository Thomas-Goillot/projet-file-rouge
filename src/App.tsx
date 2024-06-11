import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";

// Importer vos composants ici
import Home from "./pages/Home";
import About from "./pages/About";
import FooterComponent from "./components/FooterComponent";

const App = () => {
  return (
    <Router>
      <div>
        <NavBarComponent />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <FooterComponent />

    </Router>
  );
};

export default App;
