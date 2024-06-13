import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FooterComponent: React.FC = () => {
    return (
        <footer className="bg-gray-200 py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                        <div className="flex space-x-4">
                            <Link to="sessions" className="text-gray-600 hover:text-gray-800">
                                Sessions 
                            </Link>
                            <Link to="#" className="text-gray-600 hover:text-gray-800">
                                Mentions légales
                            </Link>
                            <Link to="contact" className="text-gray-600 hover:text-gray-800">
                                Nous contacter
                            </Link>
                        </div>
                    </div>
                    <div className="text-gray-600">
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                <FaFacebook />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                <FaInstagram />
                            </a>
                        </div>
                        <div className="text-sm mt-2">
                            © {new Date().getFullYear()} La Maison Horrifique. Tous droits réservés.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;