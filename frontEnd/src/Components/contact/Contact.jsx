import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Structural operational form logging placeholder
        console.log("Contact payload submitted successfully:", formData);
        alert("Thank you! Your message has been sent to our corporate communication team.");
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <main className="container mx-auto px-4 py-12 space-y-16 bg-bg text-text">

            {/* Header Identity Core */}
            <header className="text-center max-w-2xl mx-auto space-y-4">
                <span className="text-xs inline-block font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Connect With Us
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text">
                    Let's Build Better Supply Networks
                </h1>
                <p className="text-sm md:text-base text-muted leading-relaxed">
                    Have an item volume requirement, logistics distribution question, or looking to schedule a custom industrial audit? Drop our B2B trade officers a message.
                </p>
            </header>

            {/* Core Structural Layout Matrix */}
            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 max-w-6xl mx-auto items-start">

                {/* Left Column: Instant Access Metadata Channels */}
                <aside className="space-y-6 lg:sticky lg:top-36">
                    <h2 className="text-xl font-bold tracking-tight text-text">Corporate Channels</h2>
                    <p className="text-xs text-muted leading-relaxed">
                        Skip the structural contact queues if you represent an authorized government logistics division or an enterprise corporate network core.
                    </p>

                    <div className="space-y-4 pt-2">
                        {/* Channel Card 1: Communications */}
                        <div className="flex items-start gap-4 p-4 bg-surface border border-border rounded-xl">
                            <div className="p-2 bg-primary/10 text-primary border border-primary/20 rounded-lg shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="space-y-0.5 min-w-0">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-muted">Procurement Email</h3>
                                <a href="mailto:trade@akijgroup.com" className="text-sm font-semibold text-text hover:text-primary transition-colors block truncate">
                                    trade@akijgroup.com
                                </a>
                                <span className="text-[10px] text-muted block">Expected feedback matrix: 2–4 hours</span>
                            </div>
                        </div>

                        {/* Channel Card 2: Voice Lines */}
                        <div className="flex items-start gap-4 p-4 bg-surface border border-border rounded-xl">
                            <div className="p-2 bg-primary/10 text-primary border border-primary/20 rounded-lg shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div className="space-y-0.5 min-w-0">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-muted">Hotline Operations</h3>
                                <a href="tel:+88029999111" className="text-sm font-semibold text-text hover:text-primary transition-colors block">
                                    +880 (2) 9999-111
                                </a>
                                <span className="text-[10px] text-muted block">Sunday to Thursday, 9:00 AM – 6:00 PM (GMT+6)</span>
                            </div>
                        </div>

                        {/* Channel Card 3: HQ Location Map Details */}
                        <div className="flex items-start gap-4 p-4 bg-surface border border-border rounded-xl">
                            <div className="p-2 bg-primary/10 text-primary border border-primary/20 rounded-lg shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div className="space-y-0.5 min-w-0">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-muted">Headquarters</h3>
                                <p className="text-xs text-text leading-relaxed font-medium">
                                    Akij House, 198 Bir Uttam Mir Shawkat Sarak,<br />
                                    Gulshan-Tejgaon Link Road, Dhaka-1208,<br />
                                    Bangladesh.
                                </p>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Right Column: High-Converting Contact Inquiry Form Frame */}
                <section className="bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-xs w-full">
                    <h2 className="text-xl font-bold tracking-tight text-text mb-1">Inquiry Registration</h2>
                    <p className="text-xs text-muted mb-6 leading-relaxed">
                        Please compile all required business communication properties accurately to expedite tracking delegation.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Input 1: Full Name */}
                            <div className="space-y-1.5">
                                <label htmlFor="fullName" className="text-xs font-bold text-text/80 uppercase tracking-wider">Full Name *</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full bg-bg border border-border text-text rounded-lg px-3 py-2 text-sm focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all"
                                    placeholder="e.g., John Doe"
                                />
                            </div>

                            {/* Input 2: Corporate Brand Structure */}
                            <div className="space-y-1.5">
                                <label htmlFor="companyName" className="text-xs font-bold text-text/80 uppercase tracking-wider">Company Name</label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    className="w-full bg-bg border border-border text-text rounded-lg px-3 py-2 text-sm focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all"
                                    placeholder="e.g., Delta Logistics Ltd."
                                />
                            </div>
                        </div>

                        {/* Input 3: Corporate Email Identity */}
                        <div className="space-y-1.5">
                            <label htmlFor="email" className="text-xs font-bold text-text/80 uppercase tracking-wider">Business Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-bg border border-border text-text rounded-lg px-3 py-2 text-sm focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all"
                                placeholder="name@company.com"
                            />
                        </div>

                        {/* Input 4: Dynamic Action Classification Selection */}
                        <div className="space-y-1.5">
                            <label htmlFor="subject" className="text-xs font-bold text-text/80 uppercase tracking-wider">Inquiry Classification</label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full bg-bg border border-border text-text rounded-lg px-3 py-2 text-sm focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all appearance-none cursor-pointer"
                            >
                                <option value="General Inquiry">General Logistics Inquiry</option>
                                <option value="Wholesale Sourcing Bulk">Bulk Contract Allocation (Wholesale)</option>
                                <option value="Supplier Verification">Factory Account Authentication</option>
                                <option value="Billing SLA Support">Enterprise Plan Billing SLA Contract</option>
                            </select>
                        </div>

                        {/* Input 5: Core Text Payload Block */}
                        <div className="space-y-1.5">
                            <label htmlFor="message" className="text-xs font-bold text-text/80 uppercase tracking-wider">Detailed Message Requirements *</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-bg border border-border text-text rounded-lg px-3 py-2 text-sm focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all resize-none leading-relaxed"
                                placeholder="Outline your volume logistics demands, product material targets, minimum order capacity terms..."
                            />
                        </div>

                        {/* Form Submission Action Handle */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full sm:w-auto bg-primary hover:bg-accent text-bg font-bold text-sm tracking-wide px-6 py-3 rounded-xl transition-all transform active:scale-98 shadow-xs cursor-pointer block text-center"
                            >
                                Dispatch Corporate Request
                            </button>
                        </div>
                    </form>
                </section>
            </div>

        </main>
    );
}