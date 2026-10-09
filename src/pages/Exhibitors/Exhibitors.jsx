import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import exhibitor1 from "../../assets/exhibitor1.svg";
import exhibitor2 from "../../assets/exhibitor2.svg";
import exhibitor3 from "../../assets/exhibitor3.svg";
import exhibitor4 from "../../assets/exhibitor4.svg";
import exhibitor5 from "../../assets/exhibitor5.svg";
import exhibitor6 from "../../assets/exhibitor6.svg";
import exhibitor7 from "../../assets/exhibitor7.svg";
import exhibitor8 from "../../assets/exhibitor8.svg";
import exhibitor9 from "../../assets/exhibitor9.svg";
import exhibitor10 from "../../assets/exhibitor10.svg";
import exhibitor11 from "../../assets/exhibitor11.svg";
import exhibitor12 from "../../assets/exhibitor1.svg";

gsap.registerPlugin(ScrollTrigger);

const exhibitorLogos = [
    exhibitor1,
    exhibitor2,
    exhibitor3,
    exhibitor4,
    exhibitor5,
    exhibitor6,
    exhibitor7,
    exhibitor8,
    exhibitor9,
    exhibitor10,
    exhibitor11,
    exhibitor12,
];

const categories = ["All", "RMG", "Fabrics", "Accessories"];

const allExhibitors = exhibitorLogos.map((img, i) => ({
    id: i + 1,
    name: `Exhibitor ${i + 1}`,
    category:
        i % 3 === 0 ? "RMG" : i % 3 === 1 ? "Fabrics" : "Accessories",
    img,
}));

const Exhibitors = () => {
    const sectionRef = useRef(null);
    const [filter, setFilter] = useState("All");

    const filteredExhibitors =
        filter === "All"
            ? allExhibitors
            : allExhibitors.filter((exhibitor) => exhibitor.category === filter);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            tl.from(".ex-banner", {
                y: -50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            }).from(
                ".ex-card",
                {
                    y: 60,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.05,
                    ease: "power3.out",
                },
                "-=0.5"
            );
        }, sectionRef);

        return () => ctx.revert();
    }, [filter]);

    return (
        <div ref={sectionRef} className="md:w-[1200px] mx-auto pt-4 px-4 md:px-0">
            {/* Banner */}
            <div className="ex-banner bg-[#231F20] text-white rounded-3xl py-16 md:py-24 text-center mb-[60px] md:mb-[100px]">
                <h1 className="font-oswald text-5xl md:text-[100px] lg:text-[130px] font-semibold uppercase tracking-[-3%] leading-[100%] mb-4">
                    Our Exhibitors
                </h1>
                <p className="text-base md:text-xl text-gray-300 px-4">
                    Browse the brands making an impact
                </p>
            </div>

            {/* Divider 1 */}
            <hr className="w-full md:w-[1200px] mx-auto border-0 h-[1px] bg-[#808080]" />

            {/* Filter Bar */}
            <div className="my-[60px] md:my-[100px] flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                    <button
                        key={category}
                        type="button"
                        onClick={() => setFilter(category)}
                        aria-pressed={filter === category}
                        className={`px-6 py-3 text-base md:text-lg font-medium rounded-lg border transition-all duration-300 focus:outline-none ${filter === category
                                ? "border-[#A81F25] bg-[#A81F25] text-white shadow"
                                : "border-[#231F20] bg-white text-[#231F20] hover:bg-gray-100"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Exhibitors Grid */}
            <div className="my-[60px] md:my-[100px] grid grid-cols-2 md:grid-cols-4 gap-[30px]">
                {filteredExhibitors.map((exhibitor) => (
                    <div
                        key={exhibitor.id}
                        className="ex-card flex h-[200px] md:h-[278px] items-center justify-center rounded-tr-[48px] border border-[#808080] transition-colors duration-300 hover:bg-gray-50"
                    >
                        <img
                            src={exhibitor.img}
                            alt={exhibitor.name}
                            loading="lazy"
                            className="h-auto max-h-[100px] md:max-h-[140px] w-1/2 object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
                        />
                    </div>
                ))}
            </div>

            {/* Divider 2 */}
            <hr className="w-full md:w-[1200px] mx-auto border-0 h-[1px] bg-[#808080]" />

            {/* Optional Footer Note (Matches Agenda style) */}
            <p className="text-center text-sm md:text-base text-gray-500 italic my-[60px] md:my-[100px]">
                * Exhibitor list is subject to change.
            </p>
        </div>
    );
};

export default Exhibitors;