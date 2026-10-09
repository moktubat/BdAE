import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import arrowRight from "../../../../assets/arrowRight.svg";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { backgroundPositionY: "0%" },
        {
          backgroundPositionY: "25%",
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 2, // higher = slower/smoother
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="pb-[60px] md:pb-[100px] pt-4 md:w-[1200px] mx-auto px-4 md:px-0">
      <div ref={bgRef} className="heroBg flex flex-col p-5 md:p-10">
        <div className="max-w-[280px] md:max-w-[512px]">
          <h1 className="font-oswald text-white text-3xl md:text-[80px] leading-[120%] uppercase font-semibold">
            Bangladesh Apparel Expo 2023
          </h1>
        </div>

        <div className="flex-1 flex flex-col justify-end items-end gap-[6px] mt-12 md:mt-0">
          <div className="text-right">
            <h2 className="font-oswald font-semibold text-2xl md:text-5xl uppercase text-white">
              May 16-17
            </h2>
            <p className="text-white text-lg md:text-[32px] my-4 md:my-8 leading-[28px] md:leading-[40px]">
              International Convention City
              <br className="hidden md:block" />
              Bashundhara (ICCB)
            </p>
          </div>

          <button className="bg-[#A81F25] text-white p-3 md:p-4 rounded-lg w-full sm:w-auto self-end">
            <div className="flex justify-between items-end gap-8 md:gap-[158px]">
              <div>
                <p className="text-xs text-left mb-3 md:mb-5">Booking</p>
                <h5 className="text-left text-lg md:text-xl font-semibold">
                  Get
                  <br />
                  Tickets
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

export default Hero;