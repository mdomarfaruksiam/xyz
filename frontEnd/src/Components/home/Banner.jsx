import React, { useEffect, useState } from "react";
import banner_1 from "../../images/banner_1.jpg";
import banner_2 from "../../images/banner_2.avif";

export default function Banner() {
    const banners = [
        banner_1,
        banner_2,
        banner_1,
        banner_2,
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % banners.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [banners.length]);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % banners.length);
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? banners.length - 1 : prev - 1
        );
    };
    return (
        <section className="relative overflow-hidden rounded-2xl border border-border">

            {/* Slider */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {banners.map((banner, index) => (
                    <div
                        key={index}
                        className="relative min-w-full"
                    >
                        <img
                            src={banner}
                            alt={`Banner ${index + 1}`}
                            className="w-full max-h-100 object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Previous */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white text-xl font-bold z-10"
            >
                ❮
            </button>

            {/* Next */}
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white text-xl font-bold z-10"
            >
                ❯
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-4 flex gap-3 z-10">
                {banners.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`transition-all duration-300 ${current === index
                            ? "w-10 h-3 bg-white rounded-full"
                            : "w-3 h-3 bg-white/70 rounded-full"
                            }`}
                    />
                ))}
            </div>
        </section>
    )
}
