import React from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { RiHome5Line, RiHome5Fill, RiShoppingBag4Line, RiShoppingBag4Fill, RiPriceTag3Line, RiPriceTag3Fill, RiInformationLine, RiInformationFill, RiContactsLine, RiContactsFill } from "react-icons/ri";
import Footer_1 from '../Components/Footer_1';
import Nav_1 from '../Components/Nav_1';

export default function PublicLayout() {
    // Calling the hook to get dynamic access to runtime browser routing URLs
    const location = useLocation();

    // Augmented menu maps featuring semantic dual-state design system icons
    const links = [
        { name: "Home", path: "/", IconOutline: RiHome5Line, IconSolid: RiHome5Fill },
        { name: "Products", path: "/products", IconOutline: RiShoppingBag4Line, IconSolid: RiShoppingBag4Fill },
        { name: "/pricing", path: "/pricing", IconOutline: RiPriceTag3Line, IconSolid: RiPriceTag3Fill },
        { name: "About", path: "/about", IconOutline: RiInformationLine, IconSolid: RiInformationFill },
        { name: "Contact", path: "/contact", IconOutline: RiContactsLine, IconSolid: RiContactsFill }
    ];

    return (
        <div className="min-h-dvh flex flex-col justify-between bg-bg text-text relative">
            {/* Master Header Desktop Global Workspace Navigation Deck */}
            <Nav_1 />

            {/* Main Application Page Frame Body Injector view route target slot */}
            <div className="flex-1 w-full">
                <Outlet />
            </div>

            {/* Core Global Footer Block Structure */}
            <Footer_1 />

            {/* Mobile Bottom Navigation Bar - Only displays on viewports below 1024px (lg) */}
            <nav className="sticky bottom-0 left-0 right-0 z-40 lg:hidden bg-surface/95 backdrop-blur-md border-t border-border shadow-2xl safe-bottom pb-2 pt-2">
                <ul className="flex items-center justify-around max-w-md mx-auto px-4">
                    {links.map((link) => {
                        // Secure active structural routing check criteria validation loop
                        const isActive = location.pathname === link.path;
                        const Icon = isActive ? link.IconSolid : link.IconOutline;

                        return (
                            <li key={link.path} className="flex-1">
                                <Link
                                    to={link.path}
                                    className={`flex flex-col items-center justify-center gap-1 py-1 text-center transition-all duration-200 cursor-pointer ${isActive
                                        ? "text-primary font-bold scale-105"
                                        : "text-muted hover:text-text"
                                        }`}
                                >
                                    {/* Icon Render Component Target Node */}
                                    <Icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-muted"}`} />

                                    {/* Compact Navigation Label */}
                                    <span className="text-[10px] tracking-wide font-medium">
                                        {link.name}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}