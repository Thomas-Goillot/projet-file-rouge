import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const FooterComponent: React.FC = () => {
    return (
        <footer className="bg-gray-200 py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                Sessions 
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                Mentions légales
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                Nous contacter
                            </a>
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