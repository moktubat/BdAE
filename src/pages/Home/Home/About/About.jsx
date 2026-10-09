import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import about from "../../../../assets/about.jpeg";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for synchronized, beautiful transitions
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // Start animation when top of section hits 75% of viewport
          toggleActions: "play none none none",
        },
      });

      tl.from(headingRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          paragraphRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5" // slight overlap for smooth flow
        )
        .from(
          imageRef.current,
          {
            y: 100,
            opacity: 0,
            scale: 0.95,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.6"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full max-w-[1200px] mx-auto py-[60px] md:py-[100px] px-4 md:px-0"
    >
      <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-[46px] mb-12">
        <h1
          ref={headingRef}
          className="w-full md:max-w-[467px] font-oswald text-[#231F20] text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-[-3%] leading-[0.85] mb-0"
        >
          About The Expo
        </h1>

        <p
          ref={paragraphRef}
          className="w-full md:max-w-[687px] text-base sm:text-lg md:text-xl leading-[140%] md:pb-0"
        >
          “Bangladesh Apparel Expo” is open for manufacturers of RMG, fabrics,
          accessories, chemical suppliers and all other industries related to
          apparel. It brings opportunities for the global buyers and their
          representatives to see the varied categories of Bangladesh garments
          industries with the world&apos;s most competitive sourcing offers.
        </p>
      </div>

      <div ref={imageRef} className="w-full">
        <img
          src={about}
          className="w-full h-auto md:h-[600px] rounded-2xl md:rounded-3xl object-cover"
          alt="Bangladesh Apparel Expo"
        />
      </div>
    </div>
  );
};

export default About;