import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import FooterComponent from "./components/FooterComponent";
import About from "./pages/About";
import Sessions from "./pages/Sessions";
import SessionReservation from "./pages/SessionReservation";

const App = () => {
  return (
    <Router>
      <div>
        <NavBarComponent />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/session/:id" element={<SessionReservation />} />
        </Routes>
      </div>

      <FooterComponent />
    </Router>
  );
};

export default App;
