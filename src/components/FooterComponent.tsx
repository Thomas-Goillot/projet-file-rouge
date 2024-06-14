import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-gray-400">
          <div className="flex space-x-4">
            <div className="flex space-x-4">
              <Link to="/sessions" className="hover:text-white">
                Sessions
              </Link>
              <Link to="/legals" className="hover:text-white">
                Mentions légales
              </Link>
              <Link to="/contact" className="hover:text-white">
                Nous contacter
              </Link>
            </div>
          </div>
          <div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white">
                <FaInstagram />
              </a>
            </div>
            <div className="text-sm mt-2">
              © {new Date().getFullYear()} La Maison Horrifique. Tous droits
              réservés.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
