const About = () => {
  return (
    <div className="md:w-[1200px] mx-auto py-4 md:py-10 px-4 md:px-0">
      <div
        className="md:h-[500px] rounded-xl flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(35, 31, 32, 0.70) 0%, rgba(35, 31, 32, 0.70) 100%), url(https://www.just-style.com/wp-content/uploads/sites/27/2022/04/thumbnail_Bangladesh-Denim-Expo-10.jpg)`,
        }}
      >
        <p className="text-white text-center text-2xl font-semibold mx-16">
          Welcome to Bangladesh Apparel Expo 2023 - a premier showcase of the
          vibrant and dynamic apparel industry in Bangladesh. Our event is
          designed to connect manufacturers, suppliers, and industry
          professionals, creating a platform for collaboration, networking, and
          exploration of the latest trends in the world of fashion.
        </p>
      </div>

      <div className="my-20 md:flex justify-between items-center gap-6">
        <img
          src="https://andit.co/projects/html/wingtrip/assets/img/about/about-left.png"
          alt=""
          className="w-1/2"
        />
        <div>
          <h2>About Us</h2>
          <p>
            At Bangladesh Apparel Expo, we take pride in being a catalyst for
            the global apparel industry. Established in 1994, our event has
            become a cornerstone for manufacturers of Ready-Made Garments (RMG),
            fabrics, accessories, and chemical suppliers. We are committed to
            providing a space where industry players can converge, fostering
            innovation, and propelling the garment sector to new heights.
          </p>
        </div>
      </div>

      <div className="my-20 md:flex justify-between items-center gap-6 text-right">
        <div>
          <h2>Our Mission</h2>
          <p>
            Our mission is to showcase the diverse and competitive landscape of
            Bangladesh&apos;s garment industry. We strive to create an environment
            that facilitates business opportunities, collaboration, and
            knowledge exchange among industry professionals. By connecting
            global buyers with the best offerings from Bangladesh, we contribute
            to the growth and sustainability of the apparel sector.
          </p>
        </div>
        <img
          src="https://i0.wp.com/rmgbd.net/wp-content/uploads/2021/12/Apparel-exporters-consider-setting-minimum-prices-on-products.jpg?fit=1248%2C702&ssl=1"
          alt=""
          className="w-1/2"
        />
      </div>
    </div>
  );
};

export default About;
