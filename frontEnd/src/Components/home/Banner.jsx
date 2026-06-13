import React, { useEffect, useState, useCallback } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import banner_1 from "../../images/banner_1.jpg";
import banner_2 from "../../images/banner_2.avif";

export default function Banner() {
    const banners = [banner_1, banner_2, banner_1, banner_2];
    const [current, setCurrent] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev + 1) % banners.length);
    }, [banners.length]);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // 5-second interval
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <section className="relative overflow-hidden rounded-2xl border border-neutral-200 shadow-sm bg-neutral-100 group">

            {/* Image Slider Track Container */}
            <div
                className="flex transition-transform duration-700 ease-in-out will-change-transform"
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {banners.map((banner, index) => (
                    <div
                        key={index}
                        className="relative min-w-full aspect-[21/9] sm:aspect-[24/7] lg:max-h-[420px]"
                    >
                        <img
                            src={banner}
                            alt={`Promotional Offer Banner ${index + 1}`}
                            className="w-full h-full object-cover select-none"
                            draggable="false"
                        />
                        {/* Dark Gradient scrim layout overlay to optimize display contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>
                ))}
            </div>

            {/* Slider Controls (Hidden on mobile screens, reveals smoothly on desktop hover transitions) */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-neutral-800 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 z-20 focus:opacity-100"
                aria-label="Previous Slide"
            >
                <RiArrowLeftSLine className="w-6 h-6" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-neutral-800 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 z-20 focus:opacity-100"
                aria-label="Next Slide"
            >
                <RiArrowRightSLine className="w-6 h-6" />
            </button>

            {/* Bottom Left Navigation Indicator Bullets */}
            <div className="absolute bottom-4 left-6 flex items-center gap-2 z-20">
                {banners.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`transition-all duration-300 rounded-full ${current === index
                            ? "w-8 h-2 bg-white"
                            : "w-2 h-2 bg-white/60 hover:bg-white"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}