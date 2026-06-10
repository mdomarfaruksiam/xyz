import React, { useState } from 'react'

export default function SolutionsHub() {
    // Active state tracker for the interactive RFQ calculator demo
    const [orderQuantity, setOrderQuantity] = useState(250);

    // Calculates a dynamic tiered price based on quantity selection
    const getUnitPrice = (qty) => {
        if (qty >= 500) return 5.50;
        if (qty >= 200) return 7.20;
        return 9.80;
    };

    const features = [
        {
            title: "B2B Marketplace",
            badge: "Core Platform",
            badgeColor: "bg-primary/10 text-primary",
            desc: "Source directly from verified global manufacturers. Access factory-direct wholesale pricing, tiered volume discounts, and secure legal escrow lines.",
            highlights: ["Verified Supplier Directory", "Volume-Tiered Pricing Matrix", "Integrated RFQ Engine"],
            icon: "🏬"
        },
        {
            title: "Smart Logistics",
            badge: "Real-time Tracking",
            badgeColor: "bg-info/10 text-info",
            desc: "Streamline cargo coordination. Instantly calculate freight forwarder rates (Air, Sea, Land), auto-generate customs clearance files, and track milestones.",
            highlights: ["Multi-modal Freight Quoting", "Automated Customs Paperwork", "End-to-End Cargo Tracking"],
            icon: "🚢"
        },
        {
            title: "Global Analytics",
            badge: "Enterprise Grade",
            badgeColor: "bg-accent/10 text-accent",
            desc: "Complete financial transparency. Generate instant corporate expenditure reports, track supplier performance indices, and predict market shortages.",
            highlights: ["Spend Optimization Audits", "Supplier On-Time Ratings", "Predictive Supply Forecasting"],
            icon: "📊"
        },
        {
            title: "Automation Hub",
            badge: "New Integration",
            badgeColor: "bg-success/10 text-success",
            desc: "Connect your procurement workflows seamlessly. Sync directly with major ERP architectures like SAP, Oracle, NetSuite, and local bookkeeping suites.",
            highlights: ["Direct ERP & Accounting APIs", "Auto-Replenish Triggers", "Digital Smart Invoicing"],
            icon: "⚙️"
        }
    ];

    return (
        <section className="py-12 bg-bg text-text transition-colors duration-200">
            <div className="container mx-auto px-6 max-w-7xl space-y-16">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent px-3 py-1 bg-accent/10 rounded-full">
                        CONB2B Infrastructure
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                        Engineered for High-Volume Commerce
                    </h2>
                    <p className="text-muted md:text-lg leading-relaxed">
                        Discover tailored B2B solutions built to eliminate logistical friction, maximize supply margin, and automate procurement processes at scale.
                    </p>
                </div>

                {/* Core Interactive Marketplace Feature Box */}
                <div className="bg-surface border border-border rounded-2xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
                    <div className="lg:col-span-7 space-y-5">
                        <span className="text-xs font-bold uppercase tracking-wider text-success px-2.5 py-1 bg-success/10 rounded">
                            Marketplace Feature Spotlight
                        </span>
                        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                            Tiered Pricing & Live RFQ Matrix
                        </h3>
                        <p className="text-muted leading-relaxed text-sm md:text-base">
                            B2B purchasing requires flexible pricing tiers. Our automated system calculates unit discounts instantly based on your order size, bypassing long sales cycles.
                        </p>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-medium">
                            <li className="flex items-center gap-2"><span className="text-success">✔</span> Net 30/60/90 Payment Terms</li>
                            <li className="flex items-center gap-2"><span className="text-success">✔</span> Wire Transfer & Escrow Integration</li>
                            <li className="flex items-center gap-2"><span className="text-success">✔</span> Contract Customization Forms</li>
                            <li className="flex items-center gap-2"><span className="text-success">✔</span> Multi-Factory Batch Ordering</li>
                        </ul>
                    </div>

                    {/* Interactive pricing preview box widget */}
                    <div className="lg:col-span-5 bg-bg border border-border p-6 rounded-xl space-y-6 shadow-sm">
                        <div className="flex justify-between items-center border-b border-border pb-3">
                            <span className="text-sm font-bold text-secondary">Interactive RFQ Simulator</span>
                            <span className="text-[10px] font-mono text-muted uppercase bg-surface px-1.5 py-0.5 rounded">Live Demo</span>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-muted flex justify-between">
                                <span>Target Procurement Order Quantity:</span>
                                <span className="text-primary text-sm">{orderQuantity} units</span>
                            </label>
                            <input
                                type="range"
                                min="50"
                                max="1000"
                                value={orderQuantity}
                                onChange={(e) => setOrderQuantity(Number(e.target.value))}
                                className="w-full accent-primary bg-surface h-2 rounded-lg cursor-pointer"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4 bg-surface p-4 rounded-lg text-center">
                            <div>
                                <p className="text-[11px] font-bold text-muted uppercase">Contract Unit Price</p>
                                <p className="text-2xl font-black text-text">${getUnitPrice(orderQuantity).toFixed(2)}</p>
                            </div>
                            <div>
                                <p className="text-[11px] font-bold text-muted uppercase">Estimated Total Cost</p>
                                <p className="text-2xl font-black text-primary">${(orderQuantity * getUnitPrice(orderQuantity)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                            </div>
                        </div>

                        <button className="w-full bg-primary text-bg font-bold py-2.5 rounded-lg text-sm shadow hover:opacity-90 active:scale-98 transition">
                            Submit Request for Quote (RFQ)
                        </button>
                    </div>
                </div>

                {/* Solutions Pillar Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((item, index) => (
                        <div key={index} className="bg-surface border border-border p-6 rounded-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group shadow-2xs">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="text-3xl p-2 bg-bg rounded-lg border border-border group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${item.badgeColor}`}>
                                        {item.badge}
                                    </span>
                                </div>
                                <h4 className="text-xl font-bold text-text group-hover:text-primary transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-muted leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Bullet Points */}
                            <div className="mt-6 pt-4 border-t border-border/60 grid grid-cols-1 gap-2">
                                {item.highlights.map((highlight, idx) => (
                                    <div key={idx} className="text-xs text-secondary flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        {highlight}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}