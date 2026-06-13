import { Link } from "react-router";
import Banner from "../../Components/home/Banner";
import Products from "../../Components/home/Products";
import Suppliers from "../../Components/home/Suppliers";

export default function Home() {
    // Dynamic query routing parameters mapping cleanly into your Multi-Step sign-up module
    const userRoles = [
        { name: "Buyer", path: "/signup?role=buyer" },
        { name: "Supplier", path: "/signup?role=supplier" },
        { name: "Reseller", path: "/signup?role=reseller" },
        { name: "Affiliate Marketer", path: "/signup?role=affiliate" }
    ];

    return (
        <main className="container mx-auto px-4 py-6 space-y-12 bg-bg text-text">

            {/* Business Segment Gateway Matrix Option Board */}
            <section className="p-8 py-16 md:py-24 rounded-2xl bg-surface border border-border shadow-sm relative overflow-hidden">
                {/* Visual Background Mesh Lighting Blobs (Utilizes v4 transparent opacity weights) */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text mb-4">
                        XYZ B2B Platform
                    </h1>
                    <p className="text-base md:text-xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
                        Maximize your business potential with the XYZ B2B marketplace.
                        Join our digital ecosystem for verified global networking, targeted marketing, and seamless bulk trading.
                    </p>

                    {/* Role Selection Execution Grid Block */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {userRoles.map((role, index) => (
                            <Link
                                key={index}
                                to={role.path}
                                className="block w-full bg-primary hover:bg-accent font-semibold text-bg py-3.5 px-6 rounded-xl shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 text-center text-sm md:text-base"
                            >
                                I'm a {role.name}
                            </Link>
                        ))}
                    </div>

                    {/* Secondary Account Re-entry Point */}
                    <div className="mt-8 text-sm text-muted">
                        Already have a verified workspace?{" "}
                        <Link to="/signin" className="text-primary font-semibold hover:underline">
                            Sign In
                        </Link>
                    </div>
                </div>
            </section>

            {/* Directory Showcase Segment 02: Catalog Index Listing */}
            <section className="pt-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-2">
                    <div>
                        <h2 className="text-2xl font-bold text-text tracking-tight">Trending Products</h2>
                        <p className="text-sm text-muted mt-1">Explore bulk inventory listings fresh from global factories.</p>
                    </div>
                    <Link to="/products" className="text-sm font-semibold text-primary hover:underline whitespace-nowrap mt-2 md:mt-0">
                        Browse Catalog →
                    </Link>
                </div>
                <Products />
            </section>
            {/* Promotional Banner Carousel Engine Component */}
            <Banner />

            {/* Directory Showcase Segment 01: Supplier Network */}
            <section className="pt-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-2">
                    <div>
                        <h2 className="text-2xl font-bold text-text tracking-tight">Verified Suppliers</h2>
                        <p className="text-sm text-muted mt-1">Connect directly with certified manufacturers and verified trade partners.</p>
                    </div>
                    <Link to="/suppliers" className="text-sm font-semibold text-primary hover:underline whitespace-nowrap mt-2 md:mt-0">
                        View All Suppliers →
                    </Link>
                </div>
                <Suppliers />
            </section>
        </main>
    );
}