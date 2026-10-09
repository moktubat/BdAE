import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutBanner from "../../assets/aboutBanner.webp";
import aboutMission from "../../assets/aboutMission.webp";
import useTitle from "../../hook/useTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useTitle("About");
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".about-banner-text", { y: -50, opacity: 0, duration: 1, ease: "power3.out" })
        .from(".about-intro", { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .from(".about-mission", { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .from(".about-stats", { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.5");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".stat-number").forEach((el) => {
        const finalValue = Number(el.dataset.value);
        const suffix = el.dataset.suffix || "";
        const counter = { value: 0 };

        gsap.to(counter, {
          value: finalValue,
          duration: 2,
          ease: "power2.out",
          snap: { value: 1 },
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = Math.ceil(counter.value) + suffix;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="md:w-[1200px] mx-auto pt-4 px-4 md:px-0">
      {/* Banner */}
      <div className="about-banner bg-[#231F20] text-white rounded-3xl py-16 md:py-24 text-center mb-[60px] md:mb-[100px] overflow-hidden relative">
        <h1 className="about-banner-text font-oswald text-6xl md:text-[130px] font-semibold uppercase tracking-[-3%] leading-[100%]">
          About The Expo
        </h1>
      </div>

      <hr className="md:w-[1200px] border-0 h-[1px] bg-[#808080]" />

      {/* Intro */}
      <div className="about-intro grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center my-[60px] md:my-[100px]">
        <div>
          <h2 className="font-oswald text-4xl md:text-6xl font-bold uppercase mb-6 text-[#231F20]">
            Welcome to Bangladesh Apparel Exchange
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            “Bangladesh Apparel Expo” is open for manufacturers of RMG, fabrics, accessories, chemical suppliers and all other industries related to apparel. It brings opportunities for the global buyers and their representatives to see the varied categories of Bangladesh garments industries with the world&apos;s most competitive sourcing offers.
          </p>
        </div>
        <div className="w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden">
          <img
            src={aboutBanner}
            alt="Bangladesh Apparel Exchange"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="about-mission grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center my-[60px] md:my-[100px]">
        <div className="w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden md:order-1 order-2">
          <img
            src={aboutMission}
            alt="Apparel industry mission"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:order-2 order-1">
          <h2 className="font-oswald text-4xl md:text-6xl font-bold uppercase mb-6 text-[#231F20]">
            Mission & Vision
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            <span className="font-semibold">Our mission</span> is to connect Bangladesh&apos;s apparel industry with global buyers, fostering business opportunities, collaboration, and innovation. <span className="font-semibold">Our vision</span> is to establish Bangladesh as a leading global hub for apparel sourcing by promoting quality, sustainability, and long-term partnerships across the industry.
          </p>
        </div>
      </div>

      <hr className="md:w-[1200px] border-0 h-[1px] bg-[#808080]" />

      {/* Stats Section */}
      <div className="about-stats bg-gray-100 rounded-3xl p-8 md:p-12 my-[60px] md:my-[100px]">
        <h3 className="text-center font-oswald text-3xl md:text-5xl font-bold uppercase mb-8 text-[#231F20]">
          By The Numbers
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "10K+", label: "Attendees" },
            { num: "45+", label: "Exhibitors" },
            { num: "200+", label: "Brands" },
            { num: "500+", label: "Networking" },
          ].map((stat, i) => (
            <div key={i} className="p-4">
              <h4
                className="stat-number font-oswald text-5xl md:text-7xl font-bold text-[#A81F25] mb-2"
                data-value={parseInt(stat.num)}
                data-suffix={stat.num.replace(/[0-9]/g, "")}
              >
                0{stat.num.replace(/[0-9]/g, "")}
              </h4>
              <p className="text-gray-600 text-lg uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;