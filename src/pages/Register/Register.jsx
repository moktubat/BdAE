import dot from "../../assets/dot.png";

const Register = () => {
  return (
    <div className="md:w-[1200px] mx-auto py-4 md:py-10 px-4 md:px-0">
      <div className="relative bg-[#231F20] md:h-[480px] text-white text-center rounded-3xl pt-20">
        <h1 className="uppercase text-[130px] font-bold">Registration</h1>
        <p className="text-[30px]">
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

export default Register;
