import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bigArrow from "../../../../assets/bigArrow.png";

gsap.registerPlugin(ScrollTrigger);

const Register = () => {
  const sectionRef = useRef(null);
  const topTextRef = useRef(null);
  const mainTextRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(topTextRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          mainTextRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          arrowRef.current,
          {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.6"
        );

      const section = sectionRef.current;
      const arrow = arrowRef.current;

      const hoverIn = () => {
        gsap.killTweensOf(arrow);

        gsap
          .timeline()
          .to(arrow, {
            x: 50,
            y: -50,
            duration: 0.4,
            ease: "power2.in",
          })
          .set(arrow, {
            x: -50,
            y: 50,
          })
          .to(arrow, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          });
      };

      const hoverOut = () => {
        gsap.killTweensOf(arrow);

        gsap.to(arrow, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      section.addEventListener("mouseenter", hoverIn);
      section.addEventListener("mouseleave", hoverOut);

      return () => {
        section.removeEventListener("mouseenter", hoverIn);
        section.removeEventListener("mouseleave", hoverOut);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="md:w-[1200px] mx-auto py-[60px] md:py-[100px] px-4 md:px-0"
    >
      <div className="bg-[#231F20] text-white rounded-2xl px-6 py-12 md:px-10 md:py-14">
        <div className="flex flex-col justify-between gap-8 md:gap-20">
          <h4
            ref={topTextRef}
            className="font-normal text-2xl"
          >
            Register Now
          </h4>

          <div className="flex justify-between items-end">
            <h1
              ref={mainTextRef}
              className="text-3xl md:text-[80px] font-semibold leading-[100%]"
            >
              Join the
              <br />
              Fashion Revolution
            </h1>

            <img
              ref={arrowRef}
              src={bigArrow}
              alt="arrow icon"
              className="w-10 h-10 md:w-16 md:h-16 ml-6 mb-2 md:mb-1 shrink-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;