import React from 'react';

export default function About() {
    // Strategic performance milestones
    const metrics = [
        { value: "12K+", label: "Global Corporate Buyers" },
        { value: "450+", label: "Verified Production Plants" },
        { value: "$80M+", label: "Facilitated Invoicing Volume" },
        { value: "14+", label: "Export Logistics Channels" }
    ];

    // Core operational pillars with native embedded inline SVGs
    const values = [
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Uncompromising Integrity",
            desc: "Every manufacturer listed undergoes rigorous multi-step supply chain vetting and continuous quality verification auditing."
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9c1.657 0 3 4.03 3 9s-1.343 9-3 9m0-18c-1.657 0-3 4.03-3 9s1.343 9 3 9m-9-9h18" />
                </svg>
            ),
            title: "Borderless Commerce",
            desc: "Optimizing global distribution lines to establish frictionless wholesale product accessibility from factory floor straight to your warehouse."
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
            ),
            title: "Efficiency-Driven Design",
            desc: "Eliminating legacy middleman markup fees to secure absolute procurement transparency for our enterprise clients."
        }
    ];

    // Core leadership team initials generator tracking
    const leaders = [
        { name: "Asif Rahman", role: "Chief Executive Officer (CEO)", origin: "Ex-Logistics Core" },
        { name: "Sarah Jenkins", role: "Head of Supply Chain Relations", origin: "Global Manufacturing Vetting" },
        { name: "Tariqul Islam", role: "Director of Product Architecture", origin: "Enterprise System Infrastructure" }
    ];

    return (
        <main className="container mx-auto px-4 py-12 space-y-20 bg-bg text-text">

            {/* Section 1: Hero Narrative Statement */}
            <header className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div className="space-y-6">
                    <span className="text-xs inline-block font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                        Who We Are
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text leading-tight">
                        We are redesigning the global layout of industrial B2B sourcing.
                    </h1>
                    <p className="text-sm md:text-base text-muted leading-relaxed">
                        Founded with a clean, single focus: to bridge the operational gap between high-volume commercial enterprises and authenticated production complexes. We eliminate procurement friction, integrate automated distribution monitoring tools, and standardize complex global trade invoicing channels.
                    </p>
                    <p className="text-sm md:text-base text-muted leading-relaxed">
                        Whether you are navigating bulk contract agreements for luxury hospitality setups, sourcing high-grade consumer electronics components, or managing long-term apparel production contracts, our stack supplies the verification infrastructure you require.
                    </p>
                </div>

                {/* Conceptual Structural Layout Card */}
                <div className="bg-surface border border-border rounded-2xl p-8 shadow-xs flex flex-col justify-center min-h-[320px] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <blockquote className="text-lg md:text-xl font-medium text-text/90 italic relative z-10 leading-relaxed">
                        "Reliable sourcing shouldn't depend on unverified networks. It demands a deterministic software workflow and absolute logistical audit compliance."
                    </blockquote>
                    <div className="mt-6 border-t border-border pt-4 relative z-10">
                        <span className="block font-bold text-sm text-primary">The Architecture Board</span>
                        <span className="block text-xs text-muted">Akij Group Strategic Network Systems</span>
                    </div>
                </div>
            </header>

            {/* Section 2: Milestone Metric Grid */}
            <section className="bg-surface border border-border rounded-2xl max-w-6xl mx-auto p-8 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y-0 divide-x-0 lg:divide-x divide-border">
                {metrics.map((metric, idx) => (
                    <div key={idx} className="text-center space-y-1 p-2">
                        <span className="block text-3xl md:text-5xl font-extrabold tracking-tight text-primary">
                            {metric.value}
                        </span>
                        <span className="block text-xs md:text-sm font-semibold text-muted tracking-wide">
                            {metric.label}
                        </span>
                    </div>
                ))}
            </section>

            {/* Section 3: Core Corporate Values Matrix */}
            <section className="max-w-6xl mx-auto space-y-10">
                <div className="text-center space-y-2">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-text">
                        The Core Pillars of Our Architecture
                    </h2>
                    <p className="text-xs md:text-sm text-muted max-w-xl mx-auto">
                        Every system calculation, listing permission, and trade confirmation string executes against these strict validation criteria.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {values.map((val, idx) => (
                        <div key={idx} className="bg-surface border border-border rounded-xl p-5 space-y-4 hover:border-primary/40 transition-colors">
                            <div className="p-2.5 bg-primary/10 border border-primary/20 text-primary rounded-lg w-fit">
                                {val.icon}
                            </div>
                            <h3 className="font-bold text-base text-text">{val.title}</h3>
                            <p className="text-xs md:text-sm text-muted leading-relaxed">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 4: Leadership Management Grid */}
            <section className="max-w-6xl mx-auto space-y-10 pb-6">
                <div className="text-center space-y-2">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-text">
                        Leadership Infrastructure
                    </h2>
                    <p className="text-xs md:text-sm text-muted max-w-xl mx-auto">
                        Backed by multi-decade global trade authorities, supply logistics veterans, and software architects.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {leaders.map((leader, idx) => (
                        <div key={idx} className="bg-surface border border-border rounded-xl p-5 flex items-center gap-4 shadow-2xs">
                            <div className="w-12 h-12 rounded-full bg-bg border border-border flex items-center justify-center text-muted font-bold text-sm shrink-0 uppercase tracking-wider">
                                {leader.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className="space-y-0.5 min-w-0">
                                <h3 className="font-bold text-sm text-text truncate">{leader.name}</h3>
                                <p className="text-xs font-semibold text-primary truncate">{leader.role}</p>
                                <p className="text-[10px] text-muted truncate">{leader.origin}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}