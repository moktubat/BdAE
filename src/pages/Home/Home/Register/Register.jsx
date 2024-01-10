import bigArrow from "../../../../assets/bigArrow.png";

const Register = () => {
  return (
    <div className="bg-[#231F20] text-white md:w-[1200px] h-[140px] md:h-[330px] mx-4 md:mx-auto my-16 mb-16 py-4 md:py-10 px-4 md:px-10 rounded-2xl">
      <div className="md:flex flex-col justify-between">
        <div className="flex flex-col gap-6 md:gap-16">
          <h4 className="text-2xl">Register Now</h4>
          <h1 className="text-4xl md:text-7xl">
            Join the
            <br className="hidden md:block" />
            {} Fashion Revolution
          </h1>
        </div>
        <div className="flex flex-col items-end -my-12">
          <img
            src={bigArrow}
            alt="arrow icon"
            className="block w-8 h-8 md:w-12 md:h-12 mr-4 md:mr-0 mt-4 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
