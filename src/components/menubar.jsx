import { useState } from "react";
import { assets } from "../assets/assets.js";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Menubar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { openSignIn, openSignUp } = useClerk();
    const { user } = useUser();

    const openSignup = () => {
        setMenuOpen(false);
        openSignUp({});
    };

    const openSignin = () => {
        setMenuOpen(false);
        openSignIn({});
    };

    return (
        <nav className="bg-white px-8 py-4 flex justify-between items-center relative border-none shadow-none">

        {/* Logo and site name */}
            <Link className="flex items-center space-x-2" to="/">
                <img
                    src={assets.logo}
                    alt="logo"
                    className="w-8 h-8 object-contain cursor-pointer"
                />
                <span className="text-2xl font-semibold text-indigo-700 cursor-pointer">
          remove.<span className="text-gray-400">bg</span>
        </span>
            </Link>

            {/* Desktop view: auth buttons or user info */}
            <div className="hidden md:flex items-center space-x-4">
                <SignedOut>
                    <button
                        className="text-slate-700 hover:text-blue-500 font-medium"
                        onClick={openSignin}
                    >
                        Login
                    </button>
                    <button
                        className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-4 py-2 rounded-full transition-all"
                        onClick={openSignup}
                    >
                        Sign up
                    </button>
                </SignedOut>

                <SignedIn>
                    <div className="flex items-center gap-3">
                        <p className="text-sm text-gray-700 hidden sm:block">
                            Hi, {user?.firstName}
                        </p>
                        <button className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer">
                            <img src={assets.credits} alt="credits" className="w-6 h-6" />
                            <p className="text-sm font-medium text-gray-600">Credits: 0</p>
                        </button>
                        <UserButton />
                    </div>
                </SignedIn>
            </div>

            {/* Hamburger icon */}
            <div className="flex md:hidden items-center gap-2">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    className="focus:outline-none"
                >
                    {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center md:hidden py-4 space-y-4 z-10">
                    <SignedOut>
                        <button
                            className="text-slate-700 hover:text-blue-500 font-medium"
                            onClick={openSignin}
                        >
                            Login
                        </button>
                        <button
                            className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-6 py-2 rounded-full transition-all"
                            onClick={openSignup}
                        >
                            Sign up
                        </button>
                    </SignedOut>

                    <SignedIn>
                        <div className="flex flex-col items-center gap-2">
                            <p className="text-sm text-gray-700">Hi, {user?.firstName}</p>
                            <button className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer">
                                <img src={assets.credits} alt="credits" className="w-6 h-6" />
                                <p className="text-sm font-medium text-gray-600">Credits: 0</p>
                            </button>
                            <UserButton />
                        </div>
                    </SignedIn>
                </div>
            )}
        </nav>
    );
};

export default Menubar;
