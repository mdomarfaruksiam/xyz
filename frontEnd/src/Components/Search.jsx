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
        // Implement your search/filter redirect logic here
    };

    return (
        <form
            onSubmit={handleSearch}
            className="relative w-full flex items-center bg-white rounded-lg border border-neutral-300 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-200 shadow-sm"
        >
            {/* Input Field */}
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, suppliers, or categories..."
                className="bg-transparent text-text text-sm placeholder-neutral-400 pl-4 pr-10 py-2.5 w-full focus:outline-none"
            />

            {/* Actions Container (Clear & Image Search) */}
            <div className="flex items-center gap-1.5 px-2 text-neutral-400">
                {/* Clear Input Button (Only displays when text is present) */}
                {query && (
                    <button
                        type="button"
                        onClick={handleClear}
                        className="p-1 rounded-full hover:bg-neutral-100 hover:text-neutral-600 transition-colors"
                        title="Clear search"
                    >
                        <RxCross2 className="w-4 h-4" />
                    </button>
                )}

                {/* Image Search / Industrial Visual Search Button */}
                <button
                    type="button"
                    className="p-1.5 rounded-md hover:bg-neutral-100 hover:text-primary transition-colors"
                    title="Search by image"
                >
                    <FaRegImages className="w-4 h-4" />
                </button>
            </div>

            {/* Primary Search Submission Button */}
            <button
                type="submit"
                className="bg-primary hover:bg-accent text-surface px-5 py-2.5 rounded-r-[7px] font-medium transition-colors duration-150 flex items-center justify-center self-stretch self-center border-l border-neutral-200"
                aria-label="Submit Search"
            >
                <IoSearch className="w-5 h-5" />
            </button>
        </form>
    );
}