import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import organized1 from "../../../../assets/organized1.jpeg";
import organized2 from "../../../../assets/organized2.jpeg";
import organized3 from "../../../../assets/organized3.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Organized = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full mx-auto py-[60px] md:py-[100px]">
      <Marquee speed={40} autoFill={true} className="overflow-hidden">

        <div className="bg-[#231F20] rounded-3xl px-6 py-10 space-y-6 mr-[30px]">
          <img
            src={organized1}
            className="w-[332px] h-[198px] rounded-xl object-cover"
            alt=""
          />
          <p className="font-oswald text-[#808080] text-6xl leading-[0.8] tracking-[-3%] uppercase">
            ATTENDEES
          </p>
          <h1 className="text-white font-semibold text-[140px] leading-[0.8] tracking-[-3%] uppercase">
            10K+
          </h1>
        </div>

        <div className="bg-[#231F20] rounded-3xl px-6 py-10 space-y-6 mr-[30px]">
          <p className="font-oswald text-[#808080] text-6xl leading-[0.8] tracking-[-3%] uppercase">Exhibitors</p>
          <h1 className="text-white font-semibold text-[140px] leading-[0.8] tracking-[-3%] uppercase">45+</h1>
          <img
            src={organized2}
            className="w-[332px] h-[198px] rounded-xl object-cover"
            alt=""
          />
        </div>

        <div className="bg-[#231F20] rounded-3xl px-6 py-10 space-y-6 mr-[30px]">
          <img
            src={organized3}
            className="w-[332px] h-[198px] rounded-xl object-cover"
            alt=""
          />
          <p className="font-oswald text-[#808080] text-6xl leading-[0.8] tracking-[-3%] uppercase">Brands</p>
          <h1 className="text-white font-semibold text-[140px] leading-[0.8] tracking-[-3%] uppercase">200+</h1>
        </div>

        <div className="bg-[#231F20] rounded-3xl px-6 py-10 space-y-6 mr-[30px]">
          <p className="font-oswald text-[#808080] text-6xl leading-[0.8] tracking-[-3%] uppercase">
            Networking
          </p>
          <h1 className="text-white font-semibold text-[140px] leading-[0.8] tracking-[-3%] uppercase">500+</h1>
          <img
            src={organized3}
            className="w-[332px] h-[198px] rounded-xl object-cover"
            alt=""
          />
        </div>

      </Marquee>
    </div>
  );
};

export default Organized;