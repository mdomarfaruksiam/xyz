import React, { useState } from 'react';
import { Link } from 'react-router';
import { RiEyeLine, RiEyeOffLine, RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setErrorMessage("Please fill in all fields.");
            return;
        }
        console.log("Authenticating:", formData);
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-bg px-4 py-12">
            {/* Main Card Element - Controlled by var(--color-surface) and var(--color-border) */}
            <div className="max-w-md w-full bg-surface p-8 rounded-2xl shadow-xl border border-border transition-all duration-300">

                {/* Logo and Typography Headers - Controlled by var(--color-primary) and var(--color-text) */}
                <div className="text-center mb-8">
                    <Link to="/" className="inline-block mb-3">
                        <span className="text-2xl font-extrabold tracking-tight text-primary">
                            XYZ<span className="text-text font-semibold ml-1">B2B</span>
                        </span>
                    </Link>
                    <h2 className="text-2xl font-bold text-text tracking-tight">Welcome Back</h2>
                    <p className="text-sm text-muted mt-1.5">Sign in to manage your enterprise workspace</p>
                </div>

                {/* Feedback Notification Alert - Controlled by var(--color-error) */}
                {errorMessage && (
                    <div className="mb-5 p-3.5 bg-error/10 border border-error text-error text-sm font-medium rounded-lg">
                        {errorMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Text Inputs use border-border, text-text, and focus:border-primary */}
                    <div>
                        <label className="block text-sm font-semibold text-secondary mb-2">Business Email</label>
                        <div className="relative flex items-center">
                            <span className="absolute left-3 text-muted">
                                <MdOutlineMail className="w-5 h-5" />
                            </span>
                            <input
                                type="email" required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="name@company.com"
                                className="w-full pl-10 pr-4 py-2.5 bg-bg border border-border text-sm rounded-lg text-text placeholder-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-semibold text-secondary">Password</label>
                            <Link to="/forgot-password" className="text-xs font-semibold text-primary hover:underline">
                                Forgot password?
                            </Link>
                        </div>
                        <div className="relative flex items-center">
                            <span className="absolute left-3 text-muted">
                                <RiLockPasswordLine className="w-5 h-5" />
                            </span>
                            <input
                                type={showPassword ? "text" : "password"} required
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                placeholder="••••••••"
                                className="w-full pl-10 pr-10 py-2.5 bg-bg border border-border text-sm rounded-lg text-text placeholder-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 text-muted hover:text-text focus:outline-none"
                            >
                                {showPassword ? <RiEyeOffLine className="w-5 h-5" /> : <RiEyeLine className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Submit Layout Switch - Swaps directly from primary color tokens to accent states on hover */}
                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-accent text-bg font-semibold py-3 rounded-lg shadow-sm transition transform active:scale-95 text-sm mt-2"
                    >
                        Sign In to Dashboard
                    </button>
                </form>

                <p className="text-sm text-center text-muted mt-8">
                    New to the marketplace?{" "}
                    <Link to="/signup" className="text-primary font-semibold hover:underline">
                        Create an account
                    </Link>
                </p>

            </div>
        </div>
    );
}