import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

interface NavBarProps {
  isLoggedIn: boolean;
}

const NavBarComponent: React.FC<NavBarProps> = ({
  isLoggedIn,
}) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="bg-gray-900 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8 rounded-full"
                src="/images/logo.webp"
                alt="Logo"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {!isLoggedIn ? (
                  <>
                    <Link
                      to="/"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </Link>
                    <Link
                      to="/sessions"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Nos Sessions
                    </Link>
                    <Link
                      to="/about"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      A propos
                    </Link>
                    <Link
                      to="/contact"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Contact
                    </Link>
                    <Link
                      to="/auth/login"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Connexion
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/admin"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </Link>
                    <Link
                      to="/admin/manage-sessions"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Gestion des sessions
                    </Link>
                    <Link
                      to="/admin/manage-reservations"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Gestion des créneaux des utilisateurs
                    </Link>
                    <Link
                      to="/admin/manage-users"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Gestion des comptes employé
                    </Link>
                    <Link
                      to="/admin/contacts"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Gestion des contacts
                    </Link>
                    <Link
                      to="/auth/logout"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Déconnexion
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
