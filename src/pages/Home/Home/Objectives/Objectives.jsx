import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Objectives = () => {
  const sectionRef = useRef(null);
  const expoTextRef = useRef(null);
  const objectivesTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".objective-card", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      });

      tl.from(
        [expoTextRef.current, objectivesTextRef.current],
        {
          x: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="md:w-[1200px] mx-auto py-[60px] md:py-[100px] px-4 md:px-0 overflow-hidden"
    >
      <h1 className="block lg:hidden text-[#231F20] font-bold text-6xl mb-6">
        Expo Objectives
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px]">

        {/* Network */}
        <div className="objective-card bg-[#F0F0F0] rounded-xl px-6 pt-10 pb-[31px]">
          <h3 className="font-oswald text-[#231F20] text-[40px] font-semibold uppercase tracking-[-3%] mb-10">
            Network
          </h3>

          <p className="text-xl leading-[150%]">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested.
          </p>
        </div>

        {/* Collaborate */}
        <div className="objective-card bg-[#F0F0F0] rounded-xl px-6 pt-10 pb-[31px]">
          <h3 className="font-oswald text-[#231F20] text-[40px] font-semibold uppercase tracking-[-3%] mb-10">
            Collaborate
          </h3>

          <p className="text-xl leading-[150%]">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested.
          </p>
        </div>

        {/* Reach */}
        <div className="objective-card bg-[#F0F0F0] rounded-xl px-6 pt-10 pb-[31px]">
          <h3 className="font-oswald text-[#231F20] text-[40px] font-semibold uppercase tracking-[-3%] mb-10">
            Reach
          </h3>

          <p className="text-xl leading-[150%]">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested.
          </p>
        </div>

        {/* Expo - Bottom of first row */}
        <div
          ref={expoTextRef}
          className="hidden md:flex md:col-start-4 md:row-start-1 self-end justify-end items-end"
        >
          <h1 className="text-right font-oswald text-[#231F20] text-6xl sm:text-7xl md:text-[130px] leading-[0.85] font-semibold uppercase tracking-[-3%]">
            Expo
          </h1>
        </div>

        {/* Showcase */}
        <div className="objective-card bg-[#F0F0F0] rounded-xl px-6 pt-10 pb-[31px]">
          <h3 className="font-oswald text-[#231F20] text-[40px] font-semibold uppercase tracking-[-3%] mb-10">
            Showcase
          </h3>

          <p className="text-xl leading-[150%]">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested.
          </p>
        </div>

        {/* Enhance */}
        <div className="objective-card bg-[#F0F0F0] rounded-xl px-6 pt-10 pb-[31px]">
          <h3 className="font-oswald text-[#231F20] text-[40px] font-semibold uppercase tracking-[-3%] mb-10">
            Enhance
          </h3>

          <p className="text-xl leading-[150%]">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested.
          </p>
        </div>

        {/* Empty column */}
        <div className="hidden md:block"></div>

        {/* Objectives - Top of second row */}
        <div
          ref={objectivesTextRef}
          className="hidden md:flex md:col-start-4 md:row-start-2 self-start justify-end items-start"
        >
          <h1 className="text-right font-oswald text-[#231F20] text-6xl sm:text-7xl md:text-[130px] leading-[0.85] font-semibold uppercase tracking-[-3%]">
            Objectives
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Objectives;