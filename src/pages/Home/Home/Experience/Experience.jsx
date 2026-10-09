import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import experience from "../../../../assets/experience.jpeg";
import play from "../../../../assets/play.svg";
import arrowRight from "../../../../assets/arrowRight.svg";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const inspiringRef = useRef(null);
  const imageRef = useRef(null);
  const paragraphRef = useRef(null);
  const experienceRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline for synchronized, beautiful transitions
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Start animation when top of section hits 80% of viewport
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
      });

      tl.from(inspiringRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          imageRef.current,
          {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5" // overlap with previous animation
        )
        .from(
          paragraphRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          experienceRef.current,
          {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          buttonRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="md:w-[1200px] mx-auto py-[60px] md:py-[100px] px-4 md:px-0 space-y-10 overflow-hidden"
    >
      {/* SECTION 1 */}
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-5.5 overflow-hidden items-end">
        <div className="flex flex-col justify-end">
          <h1
            ref={inspiringRef}
            className="font-oswald text-[#231F20] text-6xl sm:text-7xl md:text-[150px] leading-[70px] md:leading-[140px] font-semibold uppercase tracking-[-3%]"
          >
            Inspiring
          </h1>
        </div>
        <div className="relative w-full md:w-auto" ref={imageRef}>
          <img
            src={experience}
            alt="experienceImage"
            className="w-full max-w-[585px] h-[280px] sm:h-[350px] md:h-[400px] rounded-[20px] object-cover mx-auto md:mx-0"
          />
          <div className="absolute w-[100px] h-[100px] md:w-[126px] md:h-[126px] right-4 top-4 md:right-10 md:top-10 border rounded-full flex flex-col justify-center items-center bg-black/10 backdrop-blur-sm">
            <img src={play} alt="playImage" className="mb-2 md:mb-3 w-5 md:w-auto" />
            <p className="text-xs md:text-sm text-center text-white">
              See
              <br />
              Glimpse
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-8 md:gap-0">
        <p
          ref={paragraphRef}
          className="md:w-[483px] text-base md:text-xl mt-0"
        >
          Discover Bangladesh&apos;s fashion frontier at the debut of
          Bangladesh Apparel Expo 2023. Join us to explore new trends,
          celebrate creativity, and network with industry leaders. Don&apos;t
          miss out!
        </p>
        <h1
          ref={experienceRef}
          className="font-oswald text-[#231F20] text-6xl sm:text-7xl md:text-[150px] leading-[70px] md:leading-[150px] font-semibold uppercase tracking-[-3%] text-left md:text-right"
        >
          Experience
        </h1>
      </div>

      {/* SECTION 3 */}
      <div className="flex md:block justify-end" ref={buttonRef}>
        <div className="md:flex md:flex-col md:items-end">
          <button className="bg-[#A81F25] text-white p-3 md:p-4 rounded-lg w-full sm:w-auto md:self-end">
            <div className="flex justify-between items-end gap-8 md:gap-[103px]">
              <div>
                <p className="text-xs text-left mb-3 md:mb-5">Venue</p>
                <h5 className="text-left text-lg md:text-xl font-semibold">
                  Explore
                  <br />
                  The Location
                </h5>
              </div>

              <div className="flex flex-col items-end justify-end">
                <img
                  src={arrowRight}
                  alt="arrow icon"
                  className="block w-6 h-6"
                />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;