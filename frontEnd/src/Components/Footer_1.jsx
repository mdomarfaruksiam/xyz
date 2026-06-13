import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaLinkedinIn, FaXTwitter, FaFacebookF, FaGithub } from "react-icons/fa6";

export default function Footer_1() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email.trim()) return;
        console.log("Subscribing enterprise user:", email);
        setSubscribed(true);
        setEmail("");
    };

    const solutionLinks = [
        { name: "B2B Marketplace", path: "/marketplace" },
        { name: "Global Analytics", path: "/analytics" },
        { name: "Smart Logistics", path: "/logistics" },
        { name: "Supplier Directory", path: "/suppliers" }
    ];

    const resourceLinks = [
        { name: "Documentation", path: "/docs" },
        { name: "API Reference", path: "/api" },
        { name: "Guides & Blueprints", path: "/guides" },
        { name: "Help Center", path: "/support" }
    ];

    const socialLinks = [
        { icon: <FaLinkedinIn className="w-4 h-4" />, url: "#", label: "LinkedIn" },
        { icon: <FaXTwitter className="w-4 h-4" />, url: "#", label: "Twitter" },
        { icon: <FaFacebookF className="w-4 h-4" />, url: "#", label: "Facebook" },
        { icon: <FaGithub className="w-4 h-4" />, url: "#", label: "GitHub" }
    ];

    return (
        <footer className="w-full bg-surface border-t border-border text-text">
            {/* Main Content Grid Area */}
            <div className="container mx-auto px-4 md:px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

                {/* Column 1: Brand Typography & Operational Infrastructure Badges */}
                <div className="space-y-4">
                    <Link to="/" className="inline-block">
                        <span className="text-2xl font-extrabold tracking-tight text-primary">
                            XYZ<span className="text-text font-semibold ml-1">B2B</span>
                        </span>
                    </Link>
                    <p className="text-sm text-muted leading-relaxed max-w-xs">
                        Connecting global enterprises with scalable, digital-first commerce infrastructure and verified supply networks.
                    </p>

                    {/* Operational Indicator Component - Mapped to semantic Success tokens */}
                    <div className="inline-flex items-center gap-2 bg-success/10 text-success text-xs font-semibold px-3 py-1 rounded-full border border-success/20">
                        <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                        All Systems Operational
                    </div>
                </div>

                {/* Column 2: Solutions Navigation Tree */}
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-4 opacity-80">
                        Solutions
                    </h3>
                    <ul className="space-y-2.5 text-sm text-text/90">
                        {solutionLinks.map((link, idx) => (
                            <li key={idx}>
                                <Link
                                    to={link.path}
                                    className="hover:text-primary transition-all duration-150 hover:translate-x-0.5 inline-block"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Resources Navigation Tree */}
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-4 opacity-80">
                        Resources
                    </h3>
                    <ul className="space-y-2.5 text-sm text-text/90">
                        {resourceLinks.map((link, idx) => (
                            <li key={idx}>
                                <Link
                                    to={link.path}
                                    className="hover:text-primary transition-all duration-150 hover:translate-x-0.5 inline-block"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 4: Newsletter Engine & Interactive Social Node Graph */}
                <div className="space-y-4">
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-2 opacity-80">
                            Stay Connected
                        </h3>
                        <p className="text-sm text-muted">
                            Get intelligence briefs and marketplace supply alerts delivered weekly.
                        </p>
                    </div>

                    {!subscribed ? (
                        <form className="flex flex-col sm:flex-row gap-2 max-w-sm lg:max-w-none" onSubmit={handleSubscribe}>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Corporate email address"
                                className="bg-bg border border-border text-sm rounded-lg px-3.5 py-2 w-full text-text placeholder-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                            />
                            <button
                                type="submit"
                                className="bg-primary hover:bg-accent text-bg text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition transform active:scale-95 whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>
                    ) : (
                        <div className="text-sm text-success font-medium bg-success/10 border border-success/20 p-2.5 rounded-lg text-center animate-fadeIn">
                            ✓ Thank you for subscribing!
                        </div>
                    )}

                    {/* Social Anchor Blocks - Controlled strictly by local theme tokens */}
                    <div className="flex items-center gap-3 pt-2">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                aria-label={social.label}
                                className="w-8 h-8 rounded-full border border-border text-muted hover:text-primary hover:border-primary flex items-center justify-center transition-colors bg-bg hover:shadow-sm"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Panel: Copyright & Compliance Deck Wrapper */}
            <div className="border-t border-border bg-surface/50">
                <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
                    <p className="text-center md:text-left">
                        &copy; {new Date().getFullYear()} XYZ B2B Inc. Building global wholesale infrastructure. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-medium">
                        <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                        <Link to="/compliance" className="hover:text-primary transition-colors">Security Compliance</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}