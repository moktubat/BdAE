import Marquee from "react-fast-marquee";
import organized1 from "../../../../assets/organized1.jpeg";
import organized2 from "../../../../assets/organized2.jpeg";
import organized3 from "../../../../assets/organized3.jpeg";
const Organized = () => {
  return (
    <div className="md:w-[1200px] mx-auto py-4 md:py-16 px-4 md:px-6">
      <Marquee speed={40} pauseOnHover={true} autoFill={true} className="overflow-hidden">
        <div className="bg-[#231F20] w-[380px] h-[477px] rounded-3xl mx-4">
          <div className="p-8">
            <img
              src={organized1}
              className="w-[332px] h-[198px] rounded-xl mb-8 object-cover"
              alt=""
            />
            <p className="text-[#808080] text-6xl mb-1 uppercase">ATTENDEES</p>
            <h1 className="text-white font-bold text-9xl">10K+</h1>
          </div>
        </div>

        <div className="bg-[#231F20] w-[380px] h-[477px] rounded-3xl mx-4">
          <div className="p-8">
            <p className="text-[#808080] text-6xl mb-1 uppercase">Exhibitors</p>
            <h1 className="text-white font-bold text-9xl mb-5">45+</h1>
            <img
              src={organized2}
              className="w-[332px] h-[198px] rounded-xl mb-8 object-cover"
              alt=""
            />
          </div>
        </div>

        <div className="bg-[#231F20] w-[380px] h-[477px] rounded-3xl mx-4">
          <div className="p-8">
            <img
              src={organized3}
              className="w-[332px] h-[198px] rounded-xl mb-8 object-cover"
              alt=""
            />
            <p className="text-[#808080] text-6xl mb-1 uppercase">Brands</p>
            <h1 className="text-white font-bold text-9xl">200+</h1>
          </div>
        </div>

        <div className="bg-[#231F20] w-[380px] h-[477px] rounded-3xl mx-4">
          <div className="p-8">
            <p className="text-[#808080] text-6xl mb-1 uppercase tracking-[-0.11em]">
              Networking
            </p>
            <h1 className="text-white font-bold text-9xl mb-5">500+</h1>
            <img
              src={organized3}
              className="w-[332px] h-[198px] rounded-xl mb-8 object-cover"
              alt=""
            />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Organized;
