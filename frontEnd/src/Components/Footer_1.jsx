import React from 'react'

export default function Footer_1() {
    return (
        <footer className="bg-surface border-t border-border text-text mt-auto transition-colors duration-200">
            {/* Main Footer Container */}
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Column 1: Brand & Status */}
                <div className="space-y-4">
                    <h1 className="text-2xl font-black tracking-tight text-primary">
                        XYZ
                    </h1>
                    <p className="text-sm text-muted leading-relaxed">
                        Connecting global businesses with modern, seamless B2B commerce infrastructure.
                    </p>
                    {/* Live System Status using Success Color */}
                    <div className="inline-flex items-center gap-2 bg-success/10 text-success text-xs font-semibold px-2.5 py-1 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                        All Systems Operational
                    </div>
                </div>

                {/* Column 2: Solutions Hub */}
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-secondary mb-4">
                        Solutions
                    </h3>
                    <ul className="space-y-2 text-sm text-muted">
                        <li><a href="#market" className="hover:text-accent transition-colors">B2B Marketplace</a></li>
                        <li><a href="#market" className="hover:text-accent transition-colors">B2C Marketplace</a></li>
                        <li><a href="#analytics" className="hover:text-accent transition-colors">Global Analytics</a></li>
                        <li><a href="#logistics" className="hover:text-accent transition-colors">Smart Logistics</a></li>
                        <li>
                            <a href="#automation" className="hover:text-accent transition-colors inline-flex items-center gap-1.5">
                                Automation
                                <span className="bg-info/10 text-info text-[10px] font-bold px-1.5 py-0.5 rounded">New</span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Resources */}
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-secondary mb-4">
                        Resources
                    </h3>
                    <ul className="space-y-2 text-sm text-muted">
                        <li><a href="#docs" className="hover:text-accent transition-colors">Documentation</a></li>
                        <li><a href="#api" className="hover:text-accent transition-colors">API Reference</a></li>
                        <li><a href="#guides" className="hover:text-accent transition-colors">Guides & Blueprints</a></li>
                        <li><a href="#support" className="hover:text-accent transition-colors">Help Center</a></li>
                    </ul>
                </div>

                {/* Column 4: Newsletter & Engagement */}
                <div className="space-y-3">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-secondary">
                        Stay Connected
                    </h3>
                    <p className="text-sm text-muted">
                        Get product updates and enterprise insights sent directly to you.
                    </p>
                    <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter business email"
                            className="bg-bg border border-border text-sm rounded-lg px-3 py-2 w-full text-text placeholder-muted focus:outline-none focus:border-primary transition-colors"
                        />
                        <button
                            type="submit"
                            className="bg-primary text-bg text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 active:scale-95 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

            </div>

            {/* Bottom Copyright & Legal Ribbon */}
            <div className="border-t border-border bg-bg/40">
                <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
                    <p>
                        &copy; {new Date().getFullYear()} CONB2B Inc. Building the future of enterprise trades.
                    </p>
                    <div className="flex gap-6">
                        <a href="#privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
                        <a href="#terms" className="hover:text-accent transition-colors">Terms of Service</a>
                        <a href="#security" className="hover:text-accent transition-colors">Security Compliance</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}