import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";

export default function SignUp() {
    const location = useLocation();
    const [currentStep, setCurrentStep] = useState(1);

    const [formData, setFormData] = useState({
        // Step 1: Account Info
        role: "buyer",
        fullName: "",
        email: "",
        password: "",
        phone: "",

        // Step 2: Company Info
        companyName: "",
        website: "",
        taxId: "",
        companySize: "1-10",
        yearFounded: "",

        // Step 3: Business Scope
        businessCategory: "",
        targetMarket: "",
        description: ""
    });

    // Auto-fill role option from landing page query selections
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const roleParam = params.get("role");
        if (roleParam) {
            setFormData((prev) => ({ ...prev, role: roleParam }));
        }
    }, [location]);

    const handleNext = (e) => {
        e.preventDefault();
        setCurrentStep((prev) => Math.min(prev + 1, 3));
    };

    const handleBack = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting Theme-Compliant Dataset:", formData);
        // Execute registration API pipeline payload here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-bg px-4 py-12">
            {/* Form Card Frame container utilizes var(--color-surface) and var(--color-border) */}
            <div className="max-w-2xl w-full bg-surface p-8 rounded-2xl shadow-xl border border-border transition-all duration-300">

                {/* Visual Wizard Progress Indicator Tracker */}
                <div className="mb-10">
                    <div className="flex items-center justify-between max-w-md mx-auto relative">
                        {/* Static Underlying Connector bar Track line */}
                        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-border -translate-y-1/2 z-0" />

                        {/* Dynamic Filling Status Indicator Line tracker reading var(--color-primary) */}
                        <div
                            className="absolute left-0 top-1/2 h-0.5 bg-primary -translate-y-1/2 z-0 transition-all duration-500"
                            style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                        />

                        {/* Step Counter Indicator nodes */}
                        {[1, 2, 3].map((step) => (
                            <div
                                key={step}
                                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm z-10 transition-all duration-300 ${currentStep >= step
                                    ? "bg-primary text-bg ring-4 ring-primary/20"
                                    : "bg-border text-muted"
                                    }`}
                            >
                                {step}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between max-w-lg mx-auto text-xs font-semibold text-muted mt-2 px-2 text-center">
                        <span className={currentStep >= 1 ? "text-primary" : ""}>Account</span>
                        <span className={currentStep >= 2 ? "text-primary" : ""}>Company Profile</span>
                        <span className={currentStep >= 3 ? "text-primary" : ""}>Operations</span>
                    </div>
                </div>

                {/* Section Header Text block */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-text tracking-tight">Register Your Enterprise</h2>
                    <p className="text-muted mt-2 text-sm">Step {currentStep} of 3: Provide your organizational credentials</p>
                </div>

                {/* Multi-step execution form controller */}
                <form onSubmit={currentStep === 3 ? handleSubmit : handleNext} className="space-y-6">

                    {/* STEP 1: USER ACCOUNT PARAMETERS */}
                    {currentStep === 1 && (
                        <div className="space-y-4 animate-fadeIn">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-secondary mb-2">I am signing up as a</label>
                                    <select
                                        className="w-full p-3 rounded-lg border border-border bg-bg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-text capitalize transition-all"
                                        value={formData.role}
                                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    >
                                        <option value="buyer">Buyer</option>
                                        <option value="supplier">Supplier</option>
                                        <option value="reseller">Reseller</option>
                                        <option value="affiliate">Affiliate Marketer</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-secondary mb-2">Full Name</label>
                                    <input
                                        type="text" required
                                        className="w-full p-3 rounded-lg border border-border bg-bg text-text placeholder-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder="Alex Mercer"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-secondary mb-2">Corporate Email</label>
                                    <input
                                        type="email" required
                                        className="w-full p-3 rounded-lg border border-border bg-bg text-text placeholder-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder="alex@company.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-secondary mb-2">Phone Number</label>
                                    <input
                                        type="tel" required
                                        className="w-full p-3 rounded-lg border border-border bg-bg text-text placeholder-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder="+1 (555) 019-2834"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-secondary mb-2">Password</label>
                                    <input
                                        type="password" required minLength={8}
                                        className="w-full p-3 rounded-lg border border-border bg-bg text-text placeholder-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder="•••••••• (At least 8 characters)"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 2: COMPANY META PROPERTIES */}
                    {currentStep === 2 && (
                        <div className="space-y-4 animate-fadeIn">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-secondary mb-2">Registered Company Name</label>
                                    <input
                                        type="text" required
                                        className="w-full p-3 rounded-lg border border-border bg-bg text-text placeholder-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder="Nexus Logistics Int."
                                        value={formData.companyName}
                                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-secondary mb-2">Company Website</label>
                                    <input
                                        type="url" required
                                        className="w-full p-3 rounded-lg border border-border bg-bg text-text placeholder-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder="https://nexuslogistics.com"
                                        value={formData.website}
                                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-secondary mb-2">Tax ID / EIN Number</label>
                                    <input
                                        type="text" required
                                        className="w-full p-3 rounded-lg border border-border bg-bg text-text placeholder-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder="12-3456789"
                                        value={formData.taxId}
                                        onChange={(e) => setFormData({ ...formData, taxId: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-secondary mb-2">Company Size</label>
                                    <select
                                        className="w-full p-3 rounded-lg border border-border bg-bg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-text transition-all"
                                        value={formData.companySize}
                                        onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                                    >
                                        <option value="1-10">1-10 Employees</option>
                                        <option value="11-50">11-50 Employees</option>
                                        <option value="51-200">51-200 Employees</option>
                                        <option value="201+">201+ Employees</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-secondary mb-2">Year Founded</label>
                                    <input
                                        type="number" required min="1900" max="2026"
                                        className="w-full p-3 rounded-lg border border-border bg-bg text-text placeholder-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder="2018"
                                        value={formData.yearFounded}
                                        onChange={(e) => setFormData({ ...formData, yearFounded: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 3: OPERATIONS & TRADING REGIONS */}
                    {currentStep === 3 && (
                        <div className="space-y-4 animate-fadeIn">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-secondary mb-2">Primary Industry</label>
                                    <input
                                        type="text" required
                                        className="w-full p-3 rounded-lg border border-border bg-bg text-text placeholder-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder="Electronics, Textiles, Agriculture..."
                                        value={formData.businessCategory}
                                        onChange={(e) => setFormData({ ...formData, businessCategory: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-secondary mb-2">Primary Trading Regions</label>
                                    <input
                                        type="text" required
                                        className="w-full p-3 rounded-lg border border-border bg-bg text-text placeholder-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder="Global, North America, APAC..."
                                        value={formData.targetMarket}
                                        onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-secondary mb-2">Short Business Description</label>
                                    <textarea
                                        required rows={4}
                                        className="w-full p-3 rounded-lg border border-border bg-bg text-text placeholder-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none transition-all"
                                        placeholder="Briefly describe your products or sourcing requirements..."
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Footer Progress Action Triggers */}
                    <div className="flex justify-between items-center pt-6 border-t border-border mt-6">
                        {currentStep > 1 ? (
                            <button
                                type="button"
                                onClick={handleBack}
                                className="px-6 py-2.5 border border-border bg-bg rounded-lg text-text font-medium hover:bg-surface transition duration-200"
                            >
                                Back
                            </button>
                        ) : (
                            <div /> /* Layout spacing block spacer element */
                        )}

                        <button
                            type="submit"
                            className="px-8 py-2.5 bg-primary hover:bg-accent text-bg font-semibold rounded-lg transition transform active:scale-95 shadow-sm text-sm"
                        >
                            {currentStep === 3 ? "Complete Sign Up" : "Continue"}
                        </button>
                    </div>
                </form>

                {currentStep === 1 && (
                    <p className="text-sm text-center text-muted mt-6">
                        Already verified?{" "}
                        <Link to="/signin" className="text-primary font-semibold hover:underline">Sign In</Link>
                    </p>
                )}
            </div>
        </div>
    );
}