import dot from "../../../assets/dot.png";

const Banner = () => {
  return (
    <div>
      <div className="relative bg-[#231F20] md:h-[480px] text-white text-center rounded-3xl py-8 md:pt-32">
        <h1 className="uppercase text-5xl md:text-[130px] font-bold">
          Registration
        </h1>
        <p className="text-lg md:text-[30px] leading-relaxed">
          Hurry up and secure your spot at the
          <br />
          Bangladesh Apparel Expo 2023!
        </p>
        <div>
          <img className="absolute top-1 -left-[57px]" src={dot} alt="" />
          <img className="absolute bottom-1 -right-[57px]" src={dot} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
