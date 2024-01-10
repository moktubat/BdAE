import arrowRight from "../../../../assets/arrowRight.svg";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="mb-10 md:w-[1200px] mx-auto py-4 md:py-10 px-4 md:px-0">
      <div className="heroBg bg-center flex flex-col">
        <div className="flex-1 flex flex-col justify-start items-start p-10">
          <h1 className="text-white text-7xl font-bold mb-4">
            Bangladesh<br />Apparel Expo<br />2023
          </h1>
        </div>
        <div className="flex-1 flex flex-col justify-end items-end p-10 -mt-16">
          <div className="text-right">
            <h2 className="font-bold text-5xl text-white">May 16-17</h2>
            <p className="text-white text-3xl my-4">
              International Convention City
              <br />
              Bashundhara (ICCB)
            </p>
          </div>

          <button className="bg-[#A81F25] text-white font-bold py-2 px-4 rounded-lg">
            <div className="flex justify-between gap-28">
              <div>
                <p className="text-xs text-left mb-5">Booking</p>
                <h5 className="text-left text-xl font-semibold">
                  Get
                  <br />
                  Tickets
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
  );
};

export default Hero;
