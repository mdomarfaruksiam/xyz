import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { FaRegImages } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

export default function Search({ searchOpen, setSearchOpen }) {
    const [query, setQuery] = useState("");

    const handleClear = () => {
        setQuery("");
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (!query.trim()) return;
        console.log("Executing B2B search for:", query);

        // Auto-collapse mobile search drawer panels upon successful query fire
        if (setSearchOpen) setSearchOpen(false);
    };

    return (
        <form
            onSubmit={handleSearch}
            className="relative w-full flex items-center bg-bg rounded-lg border border-border focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-200 shadow-sm"
        >
            {/* Input Field - Background set to transparent to absorb the parent token smoothly */}
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, suppliers, or categories..."
                className="bg-transparent text-text text-sm placeholder-muted pl-4 pr-20 py-2.5 w-full focus:outline-none"
            />

            {/* Actions Container (Clear & Image Search) - Uses var(--color-muted) layout elements */}
            <div className="absolute right-14 flex items-center gap-1 text-muted">
                {/* Clear Input Button (Reveals contextually when characters exist) */}
                {query && (
                    <button
                        type="button"
                        onClick={handleClear}
                        className="p-1 rounded-full hover:bg-surface hover:text-text transition-colors"
                        title="Clear search"
                    >
                        <RxCross2 className="w-3.5 h-3.5" />
                    </button>
                )}

                {/* Image Search / Visual Sourcing Upload Trigger */}
                <button
                    type="button"
                    className="p-3 rounded-md hover:bg-surface hover:text-primary transition-colors"
                    title="Search by image"
                >
                    <FaRegImages className="w-4 h-4" />
                </button>
            </div>

            {/* Primary Search Button - Scaled down to match Tailwind v4 inheritance seamlessly */}
            <button
                type="submit"
                className="bg-primary hover:bg-accent text-bg px-5 py-2.5 rounded-r-lg font-medium transition-colors duration-150 flex items-center justify-center self-stretch border-l border-border"
                aria-label="Submit Search Query"
            >
                <IoSearch className="w-5 h-5" />
            </button>
        </form>
    );
}