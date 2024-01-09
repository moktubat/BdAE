import experience from "../../../../assets/experience.jpeg";
import play from "../../../../assets/play.svg";
import arrowRight from "../../../../assets/arrowRight.svg";

const Experience = () => {
  return (
    <div className="md:w-[1200px] mx-auto py-4 md:py-16 px-4 md:px-0">
      <div className="md:flex justify-between gap-4 overflow-hidden items-end">
        <div className="flex flex-col justify-end">
          <h1 className="text-8xl md:text-[150px] font-semibold text-[#231F20] uppercase tracking-tighter mb-4 md:mb-0">
            Inspiring
          </h1>
        </div>
        <div className="relative">
          <img
            src={experience}
            alt="experienceImage"
            className="w-[585px] h-[400px] rounded-[20px] object-cover mb-4"
          />
          <div className="absolute w-[126px] h-[126px] right-16 top-16 border rounded-full flex flex-col justify-center items-center">
            <img src={play} alt="playImage" className="mb-2" />
            <p className="text-center text-white">
              See
              <br />
              Glimpse
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex gap-8">
        <div>
          <p className="text-xl mt-5">
            Discover Bangladesh&apos;s fashion frontier at the debut of
            Bangladesh Apparel Expo 2023. Join us to explore new trends,
            celebrate creativity, and network with industry leaders. Don&apos;t
            miss out!
          </p>
        </div>
        <div>
          <h1 className="text-7xl md:text-9xl font-semibold text-[#231F20] uppercase tracking-tighter mt-4 md:mt-0">
            Experience
          </h1>
          <div className="md:flex flex-col items-end">
            <button className="bg-[#A81F25] text-white font-bold py-2 px-4 rounded-lg mt-4 md:mt-0">
              <div className="flex justify-between gap-28">
                <div>
                  <p className="text-xs text-left mb-5">Venue</p>
                  <h5 className="text-left text-xl font-semibold">
                    Explore
                    <br />
                    The Location
                  </h5>
                </div>
                <div className="flex flex-col items-end">
                  <img
                    src={arrowRight}
                    alt="arrow icon"
                    className="block w-6 h-6 mt-16"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
