import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const speakers = [
    { name: "Jane Doe", role: "CEO, Fashion Co.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR94t7JAG7L-o3fk-ZlTDIzbDzJgqwRsfqVbDKYSMx54BMZeETC35yUtPM&s=10" },
    { name: "John Smith", role: "Director, RMG Group", img: "https://media.licdn.com/dms/image/v2/D5603AQHqArLtDlKo1A/profile-displayphoto-shrink_400_400/B56ZcyKh_HGoAs-/0/1748893311477?e=1793232000&v=beta&t=NQR6Ek4dDa1l2ah_kARD0PtTZYt4ac2pAV6XFtXI3Rw" },
    { name: "Alice Lee", role: "Founder, TexStyle", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbAF7alknlCVuKbRm5IqSBqXUZm2y8I3P7GzFiWQ8co6LinRxklYlX9HOl&s=10" },
    { name: "Bob Chen", role: "Sustainability Lead", img: "https://media.licdn.com/dms/image/v2/D5603AQHqZgu4K4kmYQ/profile-displayphoto-scale_400_400/B56Z1niBM7IUAg-/0/1775558471660?e=1793232000&v=beta&t=CPMsTOO1B_WfgJGT9pDEu9rrnC5LlPUkT79edbK6Yvs" },
    { name: "Emily Davis", role: "Head of Supply Chain", img: "https://media.licdn.com/dms/image/v2/D5603AQHnX1h8ntPg5g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695991610548?e=1793232000&v=beta&t=tNopZKqlCY1wOXanQQbiqJRtCWPSun1UsCxof_BdUCQ" },
    { name: "Robert Frost", role: "Textile Engineer", img: "https://framerusercontent.com/images/7i2jQcH6elbL8nCjA6uD0aZDx4.jpg?width=1004&height=1011" },
    { name: "Sarah Connor", role: "Marketing VP", img: "https://www.bennettschool.cam.ac.uk/wp-content/uploads/2025/01/Sarah-OConnor.webp" },
    { name: "Michael R.", role: "Policy Maker", img: "https://media.licdn.com/dms/image/v2/D4E03AQHR8oLC8Qnf_A/profile-displayphoto-scale_400_400/B4EZ2dr2FbJMAg-/0/1776467010958?e=1793232000&v=beta&t=PyRl7kTYBj0rMoVLIlQw-sOihGmcDucriL0910W1vfc" },
];

const Speakers = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            tl.from(".speaker-banner", { y: -50, opacity: 0, duration: 1, ease: "power3.out" })
                .from(
                    ".speaker-card",
                    {
                        y: 60,
                        opacity: 0,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "power3.out",
                    },
                    "-=0.5"
                );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="md:w-[1200px] mx-auto pt-4 px-4 md:px-0">
            {/* Banner */}
            <div className="speaker-banner bg-[#231F20] text-white rounded-3xl py-16 md:py-24 text-center mb-[60px] md:mb-[100px]">
                <h1 className="font-oswald text-5xl md:text-[100px] lg:text-[130px] font-semibold uppercase tracking-[-3%] leading-[100%] mb-4">
                    Meet Our Speakers
                </h1>
                <p className="text-base md:text-xl text-gray-300 px-4">
                    Industry experts and visionaries shaping the future
                </p>
            </div>

            {/* Divider 1 */}
            <hr className="w-full md:w-[1200px] mx-auto border-0 h-[1px] bg-[#808080]" />

            {/* Speakers Grid */}
            <div className="my-[60px] md:my-[100px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-[30px]">
                {speakers.map((speaker, index) => (
                    <div key={index} className="speaker-card group cursor-pointer">
                        <div className="w-full aspect-square rounded-bl-[48px] rounded-tr-[48px] overflow-hidden mb-4 border border-[#808080]">
                            <img
                                src={speaker.img}
                                alt={speaker.name}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="font-oswald text-xl md:text-2xl font-bold uppercase text-[#231F20] text-center">
                            {speaker.name}
                        </h3>
                        <p className="text-gray-500 text-center text-sm md:text-base">
                            {speaker.role}
                        </p>
                    </div>
                ))}
            </div>

            {/* Divider 2 */}
            <hr className="w-full md:w-[1200px] mx-auto border-0 h-[1px] bg-[#808080]" />

            {/* Optional Footer Note (Matches Agenda & Exhibitors style) */}
            <p className="text-center text-sm md:text-base text-gray-500 italic my-[60px] md:my-[100px]">
                * Speaker lineup is subject to change.
            </p>
        </div>
    );
};

export default Speakers;