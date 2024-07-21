import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import FooterComponent from "./components/FooterComponent";
import About from "./pages/About";
import Sessions from "./pages/Sessions";
import SessionReservation from "./pages/SessionReservation";
import LegalsComponent from "./components/legals/LegalsComponent";
import Login from "./pages/Login";
import AuthGuard from "./_helpers/AuthGuard";
import Logout from "./pages/Logout";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <NavBarComponent />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/session/:id" element={<SessionReservation />} />
          <Route path="/legals" element={<LegalsComponent/>} />
          <Route path="/admin" element={<AuthGuard><div>ADMIN</div></AuthGuard>} /> 
          <Route path="/auth" element={<Login />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/logout" element={<Logout />} />
        </Routes>
      </div>

      <FooterComponent />
    </Router>
  );
};

export default App;
