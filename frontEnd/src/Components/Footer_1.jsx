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
        <footer className="w-full bg-surface border-t border-neutral-200 text-text mt-auto">
            {/* Main Content Area */}
            <div className="container mx-auto px-4 md:px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

                {/* Column 1: Brand & Operational Status */}
                <div className="space-y-4">
                    <Link to="/" className="inline-block">
                        <span className="text-2xl font-extrabold tracking-tight text-primary">
                            XYZ<span className="text-neutral-800 font-semibold ml-1">B2B</span>
                        </span>
                    </Link>
                    <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
                        Connecting global enterprises with scalable, digital-first commerce infrastructure and verified supply networks.
                    </p>
                    {/* Operational System Indicator */}
                    <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200/60">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        All Systems Operational
                    </div>
                </div>

                {/* Column 2: Solutions Navigation */}
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
                        Solutions
                    </h3>
                    <ul className="space-y-2.5 text-sm text-neutral-600">
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

                {/* Column 3: Resources Navigation */}
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
                        Resources
                    </h3>
                    <ul className="space-y-2.5 text-sm text-neutral-600">
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

                {/* Column 4: Premium Newsletter & Social Graph */}
                <div className="space-y-4">
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                            Stay Connected
                        </h3>
                        <p className="text-sm text-neutral-500">
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
                                className="bg-white border border-neutral-300 text-sm rounded-lg px-3.5 py-2 w-full text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                            />
                            <button
                                type="submit"
                                className="bg-primary hover:bg-accent text-surface text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition transform active:scale-95 whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>
                    ) : (
                        <div className="text-sm text-emerald-600 font-medium bg-emerald-50 border border-emerald-100 p-2.5 rounded-lg text-center animate-fadeIn">
                            ✓ Thank you for subscribing!
                        </div>
                    )}

                    {/* Social Interaction Graph */}
                    <div className="flex items-center gap-3 pt-2">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                aria-label={social.label}
                                className="w-8 h-8 rounded-full border border-neutral-200 text-neutral-500 hover:text-primary hover:border-primary flex items-center justify-center transition-colors bg-white hover:shadow-sm"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Panel: Copyright & Legal Compliance Track */}
            <div className="border-t border-neutral-200 bg-neutral-50/50">
                <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
                    <p className="text-center md:text-left">
                        &copy; {new Date().getFullYear()} XYZ B2B Inc. Building global wholesale infrastructure. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                        <Link to="/compliance" className="hover:text-primary transition-colors">Security Compliance</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}