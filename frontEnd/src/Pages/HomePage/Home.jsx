import { Link } from "react-router";
import Banner from "../../Components/home/Banner";
import Products from "../../Components/home/Products";
import Suppliers from "../../Components/home/Suppliers";

export default function Home() {
    const links = [
        { name: "Buyer", path: "/" },
        { name: "Supplier", path: "/features" },
        { name: "Reseller", path: "/pricing" },
        { name: "Affilieate marketer", path: "/about" }
    ];

    return (
        <main className="container mx-auto p-2">
            {/* baners */}
            <Banner />

            {/* encourage to sign in */}
            <div className="mt-8 p-4 rounded-lg bg-surface">
                <div>
                    <h1 className="text-2xl font-bold text-text text-center mb-4">Bangladesh B2B Business Platform</h1>
                    <p className="text-md text-text text-center mb-8">Maximize Your Business Potential with Bangladesh B2B Marketplace for Buyers and Suppliers.
                        Join Free for Effective B2B Networking, Marketing & Trading Options.</p>
                </div>
                <div className="flex flex-wrap gap-2 items-center justify-center mt-4">
                    {links.map((link) => {
                        return (
                            <button>
                                <Link className="block bg-primary hover:bg-accent p-2 rounded-lg whitespace-nowrap font-semibold text-surface hover:text-surface/80"
                                    to={link.path}
                                >
                                    I'm {link.name}
                                </Link>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* supliers */}
            <Suppliers />

            {/* products */}
            <Products />
        </main>
    );
}