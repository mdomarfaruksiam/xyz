import React, { useState } from 'react';
import image_1 from '../../images/image_1.png';

export default function ProductCard() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 p-5 border border-border rounded-xl bg-surface shadow-xs items-center md:items-start transition-all hover:shadow-sm">

            {/* Left Column: Media Presentation Cluster */}
            <div className="flex flex-col items-center md:items-start gap-3">
                <div className="w-full aspect-square max-w-50 flex items-center justify-center bg-bg rounded-lg border border-border p-2 overflow-hidden">
                    <img
                        className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                        src={image_1}
                        alt="Arsham Carpet Premium Wholesale Inventory"
                        draggable="false"
                    />
                </div>
            </div>

            {/* Right Column: Detailed Specifications & B2B Invoicing Metadata */}
            <div className="flex flex-col justify-between h-full space-y-4 text-sm leading-relaxed text-muted w-full min-w-0">
                <div>
                    {/* Header Title Layer */}
                    <h3 className="text-lg uppercase font-bold tracking-wider text-primary">
                        Arsham Carpet
                    </h3>

                    {/* Corporate Sourcing & Origin Meta */}
                    <div className="font-medium flex items-center gap-1.5 mt-0.5 text-text/80 text-xs md:text-sm">
                        <span className="font-semibold">Akij Group</span>
                        <span className="text-muted/60">•</span>
                        <span className="bg-bg px-2 py-0.5 rounded border border-border">Bangladesh</span>
                    </div>

                    {/* Description Paragraph Container */}
                    <div className="mt-4 text-sm">
                        <p className={`text-text/90 ${!isExpanded ? "line-clamp-1" : ""}`}>
                            Premium wholesale industrial-grade woven textile solution designed for luxury hospitality complexes,
                            commercial workspaces, and high-traffic export distribution environments.
                        </p>
                        <button
                            type="button"
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-primary hover:text-accent font-semibold text-xs mt-1 transition-colors cursor-pointer block"
                        >
                            {isExpanded ? "Show less" : "See more..."}
                        </button>
                    </div>

                    {/* Operational Specification Tags */}
                    <div className="flex flex-wrap items-center gap-2 mt-3 font-bold text-xs text-success bg-success/5 border border-success/10 px-2.5 py-1 rounded-md w-fit">
                        <span>1000+ stock</span>
                        <span className="opacity-40 font-normal">|</span>
                        <span>Leather & Fabrics</span>
                    </div>
                </div>

                {/* Interactive Sourcing Action Deck Placeholder */}
                <div className="pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <span className="text-xs text-muted block font-medium">Minimum Order Qty (MOQ)</span>
                        <span className="text-sm font-bold text-text">500 Square Meters</span>
                    </div>

                    {/* Primary B2B Action Set */}
                    <div className="flex gap-3">
                        <button className="bg-surface hover:bg-bg text-text border border-border font-semibold px-4 py-2 rounded-lg text-xs tracking-wide transition-all transform active:scale-95 shadow-xs cursor-pointer">
                            Sell now
                        </button>
                        <button className="bg-primary hover:bg-accent text-bg font-semibold px-4 py-2 rounded-lg text-xs tracking-wide transition-all transform active:scale-95 shadow-xs cursor-pointer">
                            Order now
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}