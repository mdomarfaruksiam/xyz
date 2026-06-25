import { Link } from "react-router";
import Banner from "../../Components/home/Banner";
import Products from "../../Components/home/SupliersProducts";
import Suppliers from "../../Components/home/Suppliers";

export default function Home() {

    return (
        <main className="container mx-auto px-4 py-6 space-y-6 md:space-y-12 bg-bg text-text">
            {/* Directory Showcase Segment 02: Catalog Index Listing */}
            <section className="pt-2 md:pt-2">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-2">
                    <div>
                        <h2>Trending Products</h2>
                        <p>Explore bulk inventory listings fresh from global factories.</p>
                    </div>
                    <Link to="/products" className="text-sm font-semibold text-primary hover:underline whitespace-nowrap mt-2 md:mt-0">
                        Browse Catalog →
                    </Link>
                </div>

                {/* products are here */}
                <Products />
            </section>
            {/* Promotional Banner Carousel Engine Component */}
            <Banner />

            {/* Directory Showcase Segment 01: Supplier Network */}
            <section className="pt-2 md:pt-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-2">
                    <div>
                        <h2>Verified Suppliers</h2>
                        <p>Connect directly with certified manufacturers and verified trade partners.</p>
                    </div>
                    <Link to="/suppliers" className="text-sm font-semibold text-primary hover:underline whitespace-nowrap mt-2 md:mt-0">
                        View All Suppliers →
                    </Link>
                </div>

                {/* supplier are here */}
                <Suppliers />
            </section>
        </main>
    );
}