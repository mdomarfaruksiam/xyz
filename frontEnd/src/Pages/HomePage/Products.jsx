import React, { useState } from 'react';
import { BiCategory } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

import Banner from '../../Components/home/Banner';
import ProductCard from '../../Components/products/ProductCard';
import ProductCategory from '../../Components/products/ProductCategory';

export default function Products() {
    const productItems = Array.from({ length: 7 });
    // State management hook to control mobile drawer panel visibility
    const [categoryOpen, setCategoryOpen] = useState(false);

    return (
        <main className="container mx-auto px-4 py-6 space-y-8 bg-bg text-text relative">
            {/* Promotional Banner Segment */}
            <Banner />

            {/* Products Interactive Inventory Track */}
            <section className="space-y-6">
                <div className="sticky top-0 lg:top-17 z-20 bg-bg pt-4">
                    <div className="flex justify-between items-center px-2">
                        <h1 className="font-extrabold text-2xl md:text-4xl text-text tracking-tight">
                            Our Products
                        </h1>

                        {/* Interactive Mobile Filter Trigger Toggle Button */}
                        <button
                            type="button"
                            onClick={() => setCategoryOpen(true)}
                            className="p-1.5 border rounded-md border-border text-secondary lg:hidden block hover:bg-surface transition-colors cursor-pointer"
                            aria-label="Open Product Categories Menu"
                        >
                            <BiCategory className="w-5 h-5" />
                        </button>
                    </div>
                    <hr className="mt-4 border-border" />
                </div>

                {/* Dashboard Core Layout Frame Matrix */}
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">

                    {/* Desktop Persistent View (Unchanged structural layout configuration rules) */}
                    <div className="lg:sticky lg:top-36 hidden lg:block">
                        <ProductCategory />
                    </div>

                    {/* Mobile Dynamic Drawer Sliding Panel Sheet Overlay Wrapper */}
                    {categoryOpen && (
                        <div className="fixed inset-0 z-50 lg:hidden flex">
                            {/* Backdrop Mask Blur Sheet overlay blur effect layer */}
                            <div
                                className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
                                onClick={() => setCategoryOpen(false)}
                            />

                            {/* Drawer Shell Chassis Block Container */}
                            <div className="relative w-full max-w-xs bg-surface h-full p-5 flex flex-col space-y-4 shadow-xl border-r border-border animate-in slide-in-from-left duration-200">
                                <div className="flex items-center justify-between border-b border-border pb-3">
                                    <span className="font-bold text-text">Filters Matrix</span>
                                    <button
                                        onClick={() => setCategoryOpen(false)}
                                        className="p-1 rounded-full hover:bg-bg border border-border text-muted transition-colors cursor-pointer"
                                    >
                                        <RxCross2 className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Component reuse payload node */}
                                <ProductCategory onItemClick={() => setCategoryOpen(false)} />
                            </div>
                        </div>
                    )}

                    {/* Right Stream: Dynamic Product Cards Stack */}
                    <div className="flex flex-col gap-4 w-full min-w-0">
                        {productItems.map((_, index) => (
                            <ProductCard key={index} />
                        ))}
                    </div>

                </div>
            </section>
        </main>
    );
}