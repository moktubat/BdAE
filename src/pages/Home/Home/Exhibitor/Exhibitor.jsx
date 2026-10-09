import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import exhibitor1 from "../../../../assets/exhibitor1.svg";
import exhibitor2 from "../../../../assets/exhibitor2.svg";
import exhibitor3 from "../../../../assets/exhibitor3.svg";
import exhibitor4 from "../../../../assets/exhibitor4.svg";
import exhibitor5 from "../../../../assets/exhibitor5.svg";
import exhibitor6 from "../../../../assets/exhibitor6.svg";
import exhibitor7 from "../../../../assets/exhibitor7.svg";
import exhibitor8 from "../../../../assets/exhibitor8.svg";
import exhibitor9 from "../../../../assets/exhibitor9.svg";
import exhibitor10 from "../../../../assets/exhibitor10.svg";
import exhibitor11 from "../../../../assets/exhibitor11.svg";
import arrowDown from "../../../../assets/arrowDown.svg";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const exhibitors = [
  exhibitor1, exhibitor2, exhibitor3, exhibitor4, exhibitor5, exhibitor6,
  exhibitor7, exhibitor8, exhibitor9, exhibitor10, exhibitor11
];

const Exhibitor = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(headingRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(".exhibitor-card", {
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1, // Stagger creates the beautiful cascade effect
          ease: "power3.out",
        }, "-=0.4")
        .from(buttonRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        }, "-=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="md:w-[1200px] mx-auto py-[60px] md:py-[100px] px-4 md:px-0">
      <h1 ref={headingRef} className="font-bold text-[32px] leading-[150%] text-[#231F20]">
        Special Thanks To All Our Exhibitor
      </h1>

      <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-[20px] md:gap-[30px]">
        {exhibitors.map((exhibitor, index) => (
          <div
            key={index}
            className="exhibitor-card w-full h-[140px] sm:h-[210px] md:h-[278px] border border-[#808080] rounded-tr-[48px] flex items-center justify-center transition-colors duration-200 hover:bg-gray-50"
          >
            <img src={exhibitor} alt={`Exhibitor ${index + 1}`} className="w-1/2 h-1/2 object-contain" />
          </div>
        ))}

        <div ref={buttonRef} className="flex items-end w-full">
          <button className="bg-[#A81F25] text-white p-3 md:p-4 rounded-lg w-full">
            <div className="flex justify-between items-end gap-4 md:gap-[40px] w-full">
              <div className="shrink-0">
                <p className="text-xs text-left mb-3 md:mb-5">Expand</p>

                <h5 className="text-left text-lg md:text-xl font-semibold whitespace-nowrap">
                  View
                  <br />
                  All Exhibitors
                </h5>
              </div>

              <div className="flex items-end shrink-0">
                <img
                  src={arrowDown}
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

export default Exhibitor;