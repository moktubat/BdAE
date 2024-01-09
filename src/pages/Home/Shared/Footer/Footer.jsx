import facebook from "../../../../assets/facebook.svg";
import instagram from "../../../../assets/instagram.svg";
import twitter from "../../../../assets/twitter.svg";
import linkedin from "../../../../assets/linkedin.svg";
const Footer = () => {
  return (
    <div>
      <div className="bg-[#231F20] text-white">
        <div className="py-[35px] md:py-40 px-8 md:px-[120px]">
          <p className="font-semibold md:font-bold text-[20px] md:text-[40px]">
            “Bangladesh Apparel Expo” is open for manufacturers of RMG, fabrics,
            accessories, chemical suppliers and all other industries related to
            apparel. It brings opportunities for the global buyers and their
            representatives to see the varied categories of Bangladesh garments
            industries with the world&apos;s most competitive sourcing offers.
          </p>
        </div>
        <div className="md:flex justify-between mx-8 md:mx-[120px] pb-1 md:pb-[166px]">
          <div>
            <h4 className="font-bold text-2xl mb-4 md:mb-10">Follow Us</h4>
            <div className="flex gap-8">
              <div>
                <img
                  src={facebook}
                  className="p-5 md:p-10 border border-white rounded-full"
                  alt=""
                />
              </div>
              <div>
                <img
                  src={instagram}
                  className="p-5 md:p-10 border border-white rounded-full"
                  alt=""
                />
              </div>
              <div>
                <img
                  src={twitter}
                  className="p-5 md:p-10 border border-white rounded-full"
                  alt=""
                />
              </div>
              <div>
                <img
                  src={linkedin}
                  className="p-5 md:p-10 border border-white rounded-full"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="my-12 md:my-0">
            <h4 className="font-bold text-2xl mb-4 md:mb-10">
              Subscribe To Our Newsletter
            </h4>
            <div>
              <form className="md:w-[500px] h-[100px]">
                <div className="flex items-center border-b border-[#808080] py-2">
                  <input
                    className="text-[30px] appearance-none bg-transparent border-none w-full text-[#808080] py-1 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Your email"
                  />
                  <button
                    className="font-semibold flex-shrink-0 border-white border text-white py-[16px] px-[36px] rounded-lg"
                    type="button"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
