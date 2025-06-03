import React from "react";
import { assets, FOOTER_CONSTANTS } from "../assets/assets";

const Footer = () => {
    return (
        <footer className="flex items-center justify-between gap-4 px-4 lg:px-44 py-3 flex-wrap">
            {/* Main Logo */}
            <img src={assets.logo} alt="Main Logo" width={32} />


            {/* Copyright */}
            <p className="flex-1 border-l border-gray-100 pl-4 text-sm text-gray-700 max-sm:hidden">
                &copy; {new Date().getFullYear()} @varun_dhaundiyal | All rights reserved.
            </p>

            {/* Social Media or Footer Links */}
            <div className="flex gap-3">
                {FOOTER_CONSTANTS.map((item, index) => (
                    <a
                        href={item.url}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={item.logo} alt={`icon-${index}`} width={32} />
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
