import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useForm } from "react-hook-form";
import { subscribesUser } from "../../../../api/fetch";
import Swal from "sweetalert2";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".footer-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".footer-socials",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .from(
          ".footer-newsletter",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data) => {
    try {
      const result = await subscribesUser(data.email);

      if (result.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "This Mail Added For Newsletter",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Oops...This Mail not Added For Newsletter",
      });
    }
  };

  return (
    <div ref={footerRef} className="w-full bg-[#231F20] text-white">
      <div className="max-w-[1200px] mx-auto py-[35px] md:py-[100px] px-4 md:px-0">

        <p className="footer-text font-semibold md:font-bold text-[20px] md:text-[40px] leading-snug mb-12 md:mb-[100px]">
          “Bangladesh Apparel Expo” is open for manufacturers of RMG, fabrics,
          accessories, chemical suppliers and all other industries related to
          apparel. It brings opportunities for the global buyers and their
          representatives to see the varied categories of Bangladesh garments
          industries with the world&apos;s most competitive sourcing offers.
        </p>

        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-0">
          {/* Socials Section */}
          <div className="footer-socials">
            <h4 className="font-bold text-2xl mb-4 md:mb-10">Follow Us</h4>
            <div className="flex gap-6 md:gap-[30px]">
              <a
                href="#"
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] border border-white rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] border border-white rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] border border-white rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] border border-white rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="footer-newsletter w-full md:max-w-[500px]">
            <h4 className="font-bold text-2xl mb-2 md:mb-[16px]">
              Subscribe To Our Newsletter
            </h4>
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="flex items-center border-b border-[#808080] py-8">
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={`text-[20px] md:text-[32px] appearance-none bg-transparent border-none w-full text-[#808080] py-1 leading-tight focus:outline-none ${errors.email ? "border-red-500" : ""
                      }`}
                    type="text"
                    placeholder="Your email"
                  />
                  <input
                    type="submit"
                    className="text-base font-semibold flex-shrink-0 border-white border text-white py-[16px] px-[24px] md:px-[36px] rounded-lg cursor-pointer"
                    value="Subscribe"
                  />
                </div>
              </form>

              {errors.email && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;