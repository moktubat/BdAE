import about from '../../../../assets/about.jpeg'


const About = () => {
  return (
    <div className="md:w-[1200px] mx-auto py-4 md:py-16 px-4 md:px-0">
      <div className="flex gap-11 mb-14">
        <div>
          <h1 className="text-[#231F20] text-9xl font-bold mb-4">
            About
            <br />
            The Expo
          </h1>
        </div>
        <div className="flex flex-col">
          <p className="mt-auto">
            “Bangladesh Apparel Expo” is open for manufacturers of RMG, fabrics,
            <br />
            accessories, chemical suppliers and all other industries related to
            <br />
            apparel. It brings opportunities for the global buyers and their
            <br />
            representatives to see the varied categories of Bangladesh garments
            <br />
            industries with the world&apos;s most competitive sourcing offers.
          </p>
        </div>
      </div>
      <div>
        <img src={about} className='md:w-[1200px] md:h-[600px] rounded-3xl object-cover' alt="" />
      </div>
    </div>
  );
};

export default About;
