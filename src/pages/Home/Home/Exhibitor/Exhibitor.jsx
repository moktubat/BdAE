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

const Exhibitor = () => {
  return (
    <div className="md:w-[1200px] mx-auto py-4 md:py-16 px-4 md:px-0">
      <div>
        <h1 className="font-bold text-4xl text-[#231F20]">
          Special Thanks To All Our Exhibitor
        </h1>
      </div>
      <div className="mt-8 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-7">
        <div className="w-[210px] h-[210px] md:w-[278px] md:h-[278px] border border-[#808080] rounded-tr-[48px] flex items-center justify-center">
          <img src={exhibitor1} alt="" />
        </div>
        <div className="w-[210px] h-[210px] md:w-[278px] md:h-[278px] border border-[#808080] rounded-tr-[48px] flex items-center justify-center">
          <img src={exhibitor2} alt="" />
        </div>
        <div className="w-[210px] h-[210px] md:w-[278px] md:h-[278px] border border-[#808080] rounded-tr-[48px] flex items-center justify-center">
          <img src={exhibitor3} alt="" />
        </div>
        <div className="w-[210px] h-[210px] md:w-[278px] md:h-[278px] border border-[#808080] rounded-tr-[48px] flex items-center justify-center">
          <img src={exhibitor4} alt="" />
        </div>
        <div className="w-[210px] h-[210px] md:w-[278px] md:h-[278px] border border-[#808080] rounded-tr-[48px] flex items-center justify-center">
          <img src={exhibitor5} alt="" />
        </div>
        <div className="w-[210px] h-[210px] md:w-[278px] md:h-[278px] border border-[#808080] rounded-tr-[48px] flex items-center justify-center">
          <img src={exhibitor6} alt="" />
        </div>
        <div className="w-[210px] h-[210px] md:w-[278px] md:h-[278px] border border-[#808080] rounded-tr-[48px] flex items-center justify-center">
          <img src={exhibitor7} alt="" />
        </div>
        <div className="w-[210px] h-[210px] md:w-[278px] md:h-[278px] border border-[#808080] rounded-tr-[48px] flex items-center justify-center">
          <img src={exhibitor8} alt="" />
        </div>
        <div className="w-[210px] h-[210px] md:w-[278px] md:h-[278px] border border-[#808080] rounded-tr-[48px] flex items-center justify-center">
          <img src={exhibitor9} alt="" />
        </div>
        <div className="w-[210px] h-[210px] md:w-[278px] md:h-[278px] border border-[#808080] rounded-tr-[48px] flex items-center justify-center">
          <img src={exhibitor10} alt="" />
        </div>
        <div className="w-[210px] h-[210px] md:w-[278px] md:h-[278px] border border-[#808080] rounded-tr-[48px] flex items-center justify-center">
          <img src={exhibitor11} alt="" />
        </div>
        <div className="flex  items-end">
          <button className="bg-[#A81F25] text-white font-bold py-2 px-4 rounded-lg mt-4 md:mt-0">
            <div className="flex justify-between gap-28">
              <div>
                <p className="text-xs text-left mb-5">Expand</p>
                <h5 className="text-left text-lg font-semibold">
                  View
                  <br />
                  All Exhibitors
                </h5>
              </div>
              <div className="flex flex-col items-end">
                <img
                  src={arrowDown}
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

export default Exhibitor;
