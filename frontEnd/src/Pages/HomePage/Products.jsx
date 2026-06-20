import React, { useState } from 'react';
import { useNavigate } from 'react-router'; // 1. Added router engine hook
import { BiCategory } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

import Banner from '../../Components/home/Banner';
import ProductCard from '../../Components/products/ProductCard';
import ProductCategory from '../../Components/products/ProductCategory';

// 2. Exact mock dataset to populate into your custom view structure
const MOCK_ITEMS_ARRAY = [
    { id: '1', name: 'Premium Cloud Server Rack v4', category: 'Hardware', price: '2,499', sku: 'HW-CR4-092', description: 'Enterprise-grade architecture configured for heavy deep learning, high-density computing clusters, and distributed cloud database deployments.', specs: ['256GB ECC DDR5 RAM', '2x AMD EPYC 64-Core Processors', 'Redundant 1200W Hot-Swap Power Supplies'] },
    { id: '2', name: 'Quantum Encryption Network Hub', category: 'Networking', price: '1,850', sku: 'NW-QEH-881', description: 'Next-generation fiber layer optimization module supporting hardware-level cryptographic handshakes and ultra-secure nodes.', specs: ['Quantum Key Distribution Ready', '8x 100GbE QSFP28 Ports', 'Ultra-low <10ns Latency'] },
    { id: '3', name: 'SaaS Core API Infrastructure Key', category: 'Software', price: '899', sku: 'SW-API-CORE', description: 'Annual pipeline access clearing 50M concurrent endpoints with structured telemetry logging metrics.', specs: ['REST / GraphQL Compilers', 'Zero-Knowledge Tokens', 'Real-time Datadog Streams'] },
    { id: '4', name: 'Managed Kubernetes DevOps Cluster', category: 'Software', price: '1,200', sku: 'SW-K8S-DEVOPS', description: 'Fully scalable execution sandbox orchestration environment complete with integrated telemetry stacks.', specs: ['Automated Node Scaling Matrix', 'ArgoCD GitOps Pre-configured', 'Calico Network Policy Mesh'] }
];

export default function Products() {
    // 3. Map through real data instead of empty stubs
    const productItems = MOCK_ITEMS_ARRAY;
    const [categoryOpen, setCategoryOpen] = useState(false);
    const navigate = useNavigate(); // 4. Instantiated navigation framework

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
                    {/* RESTORED EXACT CSS DESIGN: kept as flex flex-col gap-4 w-full min-w-0 */}
                    <div className="flex flex-col gap-4 w-full min-w-0">
                        {productItems.map((product) => (
                            <div
                                key={product.id}
                                onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
                                className="cursor-pointer"
                            >
                                <ProductCard item={product} />
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </main>
    );
}