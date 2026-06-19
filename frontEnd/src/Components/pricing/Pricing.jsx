import React, { useState } from 'react';
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";

export default function Pricing() {
    const [isAnnual, setIsAnnual] = useState(true);

    const plans = [
        {
            name: "Starter",
            description: "Essential trading tools for verified individual buyers and small setups.",
            monthlyPrice: 29,
            annualPrice: 24,
            features: [
                { text: "Up to 500 product inquiries/mo", included: true },
                { text: "Access to verified supplier directory", included: true },
                { text: "Standard RFQ templates", included: true },
                { text: "24/7 Global customer support", included: true },
                { text: "Custom API integration logs", included: false },
                { text: "Dedicated account manager", included: false },
            ],
            cta: "Get Started",
            popular: false,
        },
        {
            name: "Growth",
            description: "Advanced sourcing frameworks optimized for scaling distribution operations.",
            monthlyPrice: 79,
            annualPrice: 69,
            features: [
                { text: "Unlimited product inquiries", included: true },
                { text: "Access to verified supplier directory", included: true },
                { text: "Advanced RFQ automation engine", included: true },
                { text: "24/7 Global customer support", included: true },
                { text: "Custom API integration logs", included: true },
                { text: "Dedicated account manager", included: false },
            ],
            cta: "Upgrade to Growth",
            popular: true,
        },
        {
            name: "Enterprise",
            description: "Custom volume infrastructure built for global enterprise logistics clusters.",
            monthlyPrice: "Custom",
            annualPrice: "Custom",
            features: [
                { text: "Unlimited product inquiries", included: true },
                { text: "Access to verified supplier directory", included: true },
                { text: "Advanced RFQ automation engine", included: true },
                { text: "24/7 Priority SLA support track", included: true },
                { text: "Custom API integration logs", included: true },
                { text: "Dedicated account manager", included: true },
            ],
            cta: "Contact Enterprise Sales",
            popular: false,
        }
    ];

    const faqs = [
        { q: "Can I switch plans or cancel at any time?", a: "Yes, you can upgrade, downgrade, or cancel your subscription instantly from your dashboard settings panel without early termination fees." },
        { q: "What counts as a verified supplier request?", a: "A verified request is counted whenever you initiate direct transactional RFQ communication strings with certified global factory partners." }
    ];

    return (
        <main className="container mx-auto px-4 py-12 space-y-16 bg-bg text-text">

            {/* Header Text Stack */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Transparent B2B Sourcing Plans
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text">
                    Predictable Pricing, Scaled for Growth
                </h1>
                <p className="text-base md:text-lg text-muted max-w-xl mx-auto">
                    Choose the ideal configuration path for your wholesale sourcing pipeline. Secure your edge with zero hidden transaction costs.
                </p>

                {/* Billing Frequency Switch Toggle */}
                <div className="flex items-center justify-center gap-3 pt-4">
                    <span className={`text-sm font-medium ${!isAnnual ? 'text-text font-bold' : 'text-muted'}`}>Monthly</span>
                    <button
                        type="button"
                        onClick={() => setIsAnnual(!isAnnual)}
                        className="w-12 h-6 bg-surface border border-border rounded-full p-1 relative transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40"
                    >
                        <div className={`w-4 h-4 bg-primary rounded-full transition-transform duration-200 transform ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`} />
                    </button>
                    <span className={`text-sm font-medium flex items-center gap-1.5 ${isAnnual ? 'text-text font-bold' : 'text-muted'}`}>
                        Annually
                        <span className="text-[10px] bg-success/10 text-success border border-success/20 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                            Save up to 15%
                        </span>
                    </span>
                </div>
            </div>

            {/* Pricing Cards Structural Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                {plans.map((plan, idx) => {
                    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

                    return (
                        <section
                            key={idx}
                            className={`flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-surface border transition-all duration-200 relative ${plan.popular
                                    ? "border-primary shadow-md ring-1 ring-primary/40 md:-translate-y-2 scale-[1.01]"
                                    : "border-border shadow-xs hover:shadow-md"
                                }`}
                        >
                            {plan.popular && (
                                <span className="absolute top-0 right-6 transform -translate-y-1/2 bg-primary text-bg font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                                    Most Popular Choice
                                </span>
                            )}

                            {/* Plan Info & Pricing */}
                            <div className="space-y-4">
                                <div>
                                    <h2 className="text-xl font-bold tracking-tight text-text">{plan.name}</h2>
                                    <p className="text-xs text-muted mt-1 leading-relaxed min-h-[32px]">{plan.description}</p>
                                </div>

                                <div className="py-2 border-b border-border">
                                    {typeof price === "number" ? (
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-extrabold tracking-tight text-text">${price}</span>
                                            <span className="text-xs text-muted font-medium">/ month</span>
                                        </div>
                                    ) : (
                                        <span className="text-3xl font-extrabold tracking-tight text-text">{price}</span>
                                    )}
                                    <span className="text-[10px] block text-muted mt-1 h-4">
                                        {typeof price === "number" ? (isAnnual ? "Billed yearly ($" + price * 12 + ")" : "Billed calendar month-to-month") : "Requires vetting analysis"}
                                    </span>
                                </div>

                                {/* Feature List Tree Grid */}
                                <ul className="space-y-3 pt-2 text-sm">
                                    {plan.features.map((feat, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-2.5 text-text/90">
                                            {feat.included ? (
                                                <IoCheckmarkCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                                            ) : (
                                                <IoCloseCircle className="w-4 h-4 text-muted/40 shrink-0 mt-0.5" />
                                            )}
                                            <span className={feat.included ? "text-text/90" : "text-muted/60 line-through text-xs"}>
                                                {feat.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Conversion Intent Form Trigger Call-to-Action */}
                            <div className="pt-8">
                                <button
                                    type="button"
                                    className={`w-full py-3 px-4 rounded-xl font-bold text-sm tracking-wide transition-all transform active:scale-[0.98] shadow-xs cursor-pointer ${plan.popular
                                            ? "bg-primary hover:bg-accent text-bg"
                                            : "bg-bg hover:bg-bg/60 text-text border border-border"
                                        }`}
                                >
                                    {plan.cta}
                                </button>
                            </div>
                        </section>
                    );
                })}
            </div>

            {/* Bottom Frequently Asked Questions Risk Mitigation Micro-Block */}
            <div className="max-w-4xl mx-auto pt-12 border-t border-border space-y-6">
                <h3 className="text-xl font-bold tracking-tight text-text text-center md:text-left">
                    Pricing & Commitments FAQ
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="space-y-1.5 p-4 bg-surface/50 rounded-xl border border-border">
                            <h4 className="text-sm font-bold text-text">{faq.q}</h4>
                            <p className="text-xs text-muted leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}