import logo2 from "../../assets/logo2.svg";
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"
import twitter from "../../assets/twitter.svg"
import linkedin from "../../assets/linkedin.svg"
const Email = () => {
  return (
    <div className="md:w-[640px] md:h-[776px] mx-auto mb-16 bg-[#F2F5F8] border border-orange-500">
      <div className="m-8">
        <div className="bg-[#216B4C] flex justify-between items-center px-8 py-6">
          <div>
            <img src={logo2} alt="" />
          </div>
          <p className="bg-[#A81F25] text-white px-8 py-3 uppercase text-xl rounded">
            May 16-17, 2023
          </p>
        </div>
      </div>
      <div className="m-8">
        <div className="m-8 text-[#231F20]">
          <h4 className="font-semibold">Dear [Recipient&apos;s Name],</h4>
          <p className="my-6">
            Thank you for registering for the Bangladesh Apparel Expo, scheduled
            on May 16-17, 2023, at the International Convention City Bashundhara
            (ICCB), Bangladesh, organized by the Bangladesh Apparel Exchange
            (BAE).
          </p>
          <p className="font-bold">
            Our team is currently reviewing the information you provided. Once
            your submission has been processed and approved, we will promptly
            send you a confirmation email along with your E-Ticket.
          </p>
          <p className="my-6">
            If you have any questions in the meantime, please feel free to
            contact us at{" "}
            <span className="text-[#3545EE]">
              <a href="mailto:info@bangladeshapparelexchange.com">
                info@bangladeshapparelexchange.com
              </a>
            </span>
            . You can also stay updated through our social media channels.
          </p>
          <p>
            Once again, we appreciate your interest in Bangladesh Apparel Expo.
          </p>
          <p className="my-6">
            Best Regards,
            <br />
            Bangladesh Apparel Expo Team
          </p>
        </div>
      </div>
      <div className="m-8">
        <div className="bg-[#A81F25] flex justify-between items-center px-8 py-6">
          <div>
            <img src={logo2} alt="" />
          </div>
          <p className="py-3 flex gap-3">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Email;
