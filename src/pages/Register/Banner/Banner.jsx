import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dot from "../../../assets/dot.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const dotLeftRef = useRef(null);
  const dotRightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tl.from(headingRef.current, {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          paragraphRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          [dotLeftRef.current, dotRightRef.current],
          {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="md:w-[1200px] mx-auto pt-4 px-4 md:px-0">
      {/* Banner */}
      <div className="relative bg-[#231F20] text-white text-center rounded-3xl py-16 md:py-24 mb-[60px] md:mb-[100px] overflow-hidden min-h-[300px] md:min-h-[480px] flex flex-col justify-center">
        <h1
          ref={headingRef}
          className="font-oswald uppercase text-5xl md:text-[100px] lg:text-[130px] font-semibold leading-[100%] tracking-[-3%] mb-4"
        >
          Registration
        </h1>

        <p
          ref={paragraphRef}
          className="text-base md:text-xl text-gray-300 px-4 leading-[130%]"
        >
          Hurry up and secure your spot at the
          <br className="hidden md:block" />
          Bangladesh Apparel Expo 2023!
        </p>

        <img
          ref={dotLeftRef}
          className="absolute top-1 -left-[110px] md:-left-[57px]"
          src={dot}
          alt="decorative dot"
        />
        <img
          ref={dotRightRef}
          className="absolute bottom-1 -right-[110px] md:-right-[57px]"
          src={dot}
          alt="decorative dot"
        />
      </div>

      {/* Divider */}
      <hr className="w-full md:w-[1200px] mx-auto border-0 h-[1px] bg-[#808080]" />
    </div>
  );
};

export default Banner;