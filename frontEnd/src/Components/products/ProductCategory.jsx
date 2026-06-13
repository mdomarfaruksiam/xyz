import React from 'react';
import { Link } from 'react-router';

export default function ProductCategory({ onItemClick }) {
    const categories = [
        { name: "Cosmetics & Beauty", path: "/products/cosmetics" },
        { name: "Apparel & Garments", path: "/products/apparel" },
        { name: "Electronics & Gadgets", path: "/products/electronics" },
        { name: "Home & Kitchen Décor", path: "/products/home-decor" },
        { name: "Industrial Raw Materials", path: "/products/industrial" }
    ];

    return (
        <aside className="w-full bg-surface lg:border lg:border-border lg:rounded-xl lg:p-4 lg:shadow-xs">
            {/* Header Typography Label (Hidden on drawer context view maps) */}
            <h2 className="text-sm font-bold uppercase tracking-wider text-muted mb-3 px-1 opacity-85 hidden lg:block">
                Product Categories
            </h2>

            {/* Navigation Directory Tree */}
            <nav aria-label="Product categories navigation panel">
                <ul className="space-y-1">
                    {categories.map((category, index) => (
                        <li key={index}>
                            <Link
                                to={category.path}
                                onClick={onItemClick}
                                className="flex items-center justify-between text-sm font-medium text-text/90 hover:text-primary hover:bg-bg/60 px-3 py-2.5 rounded-lg transition-all duration-150 group cursor-pointer"
                            >
                                <span>{category.name}</span>
                                <span className="text-muted/40 group-hover:text-primary group-hover:translate-x-0.5 transition-transform text-xs">
                                    →
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}