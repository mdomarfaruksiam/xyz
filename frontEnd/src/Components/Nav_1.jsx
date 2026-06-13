import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import Search from './Search';

export default function Nav_1() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Pricing", path: "/pricing" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" }
    ];

    // Safely handles backdrop component state closures
    const handleOutsideClickClose = () => {
        if (menuOpen) setMenuOpen(false);
        if (searchOpen) setSearchOpen(false);
    };

    return (
        <header
            onClick={handleOutsideClickClose}
            className="w-full bg-surface border-b border-border sticky top-0 z-50 backdrop-blur-md"
        >
            {/* Main Navigation Track Container */}
            <nav
                className="container mx-auto flex justify-between items-center px-4 py-3.5"
                onClick={(e) => e.stopPropagation()} // Prevents navbar layout clicks from auto-closing itself
            >
                {/* Brand Logo - Interlinked into theme variables */}
                <Link to="/" className="flex items-center gap-2 group">
                    <span className="text-xl font-extrabold tracking-tight text-primary transition-colors group-hover:text-accent">
                        XYZ<span className="text-text font-semibold ml-1">B2B</span>
                    </span>
                </Link>

                {/* Center: Main Navigation Links (Desktop) */}
                <ul className="hidden lg:flex items-center gap-8 font-medium text-secondary text-sm xl:text-base">
                    {links.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`transition-colors duration-200 hover:text-primary relative py-1 block ${isActive ? "text-primary font-bold" : "text-text/90"
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Right Actions Block */}
                <div className="flex items-center gap-3">

                    {/* Embedded Search Box (Desktop) */}
                    <div className="hidden md:block w-64 xl:w-80">
                        <Search />
                    </div>

                    {/* Mobile Search Icon Activation Trigger */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setSearchOpen(!searchOpen);
                            if (menuOpen) setMenuOpen(false);
                        }}
                        aria-label="Toggle Search Grid"
                        className="p-2 text-text hover:text-primary hover:bg-bg rounded-lg md:hidden transition-colors"
                    >
                        <IoSearch className="w-5 h-5" />
                    </button>

                    {/* Authentication Action Directives (Desktop Layout) */}
                    <div className="hidden lg:flex items-center gap-3 text-sm font-semibold">
                        <Link
                            to="/signin"
                            className="text-text hover:text-primary px-4 py-2 transition-colors"
                        >
                            Sign In
                        </Link>
                        <Link
                            to="/signup"
                            className="bg-primary hover:bg-accent text-bg px-4 py-2 rounded-lg shadow-sm transition-all transform active:scale-95"
                        >
                            Get Started
                        </Link>
                    </div>



                    {/* Hamburger Menu Toggle Icon Button (Mobile/Tablet viewports) */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setMenuOpen(!menuOpen);
                            if (searchOpen) setSearchOpen(false);
                        }}
                        aria-label="Toggle Navigation Drawer"
                        className="lg:hidden p-2 text-text hover:bg-bg rounded-lg transition-colors"
                    >
                        {menuOpen ? <RiCloseLine className="w-6 h-6" /> : <RiMenu3Fill className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu Drawer Section */}
            <div
                onClick={(e) => e.stopPropagation()}
                className={`lg:hidden fixed inset-x-0 top-[57px] bg-surface border-b border-border shadow-xl transition-all duration-300 transform origin-top ${menuOpen
                    ? "opacity-100 scale-y-100 visible"
                    : "opacity-0 scale-y-95 pointer-events-none invisible"
                    }`}
            >
                <div className="p-4 space-y-4">
                    <ul className="space-y-1 font-medium text-text">
                        {links.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <li key={link.path}>
                                    <Link
                                        onClick={() => setMenuOpen(false)}
                                        to={link.path}
                                        className={`block p-2.5 rounded-lg hover:bg-bg transition-colors ${isActive ? "bg-bg text-primary font-bold" : "text-text"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Mobile Dynamic Auth Trigger Block */}
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
                        <Link
                            onClick={() => setMenuOpen(false)}
                            to="/signin"
                            className="w-full text-center font-semibold text-text bg-bg hover:bg-border py-2.5 rounded-lg text-sm border border-border transition-colors"
                        >
                            Sign In
                        </Link>
                        <Link
                            onClick={() => setMenuOpen(false)}
                            to="/signup"
                            className="w-full text-center font-semibold text-bg bg-primary hover:bg-accent py-2.5 rounded-lg text-sm shadow-sm transition-colors"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>

            {/* Expandable Fluid Mobile Search Panel Dropdown Wrapper */}
            <div
                onClick={(e) => e.stopPropagation()}
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-surface ${searchOpen ? 'max-h-16 border-b border-border p-3' : 'max-h-0'
                    }`}
            >
                <Search searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
            </div>
        </header>
    );
}