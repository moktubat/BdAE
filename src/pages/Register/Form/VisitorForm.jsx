import "./VisitorForm.css";
import arrowOutward from "../../../assets/arrowOutward.svg";
const VisitorForm = () => {
  return (
    <div className="bg-white p-20 border-[0.5px] border-[#231F20] rounded-3xl">
      <form>
        <div>
          <div className="flex justify-between">
            <div className="mr-8">
              <label className="text-[#231F20] text-2xl font-semibold">
                Title
              </label>
              <div className="flex text-2xl mt-8">
                <label className="block mr-4">
                  <input
                    type="radio"
                    name="title"
                    value="Mr."
                    className="mr-2 transform scale-150"
                  />
                  Mr.
                </label>
                <label className="block">
                  <input
                    type="radio"
                    name="title"
                    value="Ms."
                    className="mr-2 transform scale-150"
                  />
                  Ms.
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-y-3">
              <label className="text-[#231F20] text-2xl font-semibold">
                First Name
              </label>
              <input
                className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="First Name"
              />
            </div>

            <div className="flex flex-col gap-y-3">
              <label className="text-[#231F20] text-2xl font-semibold">
                Last Name
              </label>
              <input
                className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="mt-8">
            <div className="flex flex-col gap-y-3">
              <label className="text-[#231F20] text-2xl font-semibold">
                Email Address
              </label>
              <input
                className="w-full md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                type="email"
                name="name"
                id="name"
                placeholder="Email Address"
              />
            </div>
          </div>

          <div className="mt-8">
            <div className="flex flex-col gap-y-3">
              <label className="text-[#231F20] text-2xl font-semibold">
                Phone
              </label>
              <input
                className="w-full md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                type="tel"
                name="name"
                id="name"
                placeholder="+8801234567890"
              />
            </div>
          </div>
          <div className="w-full mt-8 flex gap-x-8">
            <div className="w-1/2 flex flex-col gap-y-3">
              <label className="text-[#231F20] text-2xl font-semibold">
                Company Name
              </label>
              <input
                className="md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Company Name"
              />
            </div>
            <div className="w-1/2 flex flex-col gap-y-3">
              <label className="text-[#231F20] text-2xl font-semibold">
                Job Title
              </label>
              <input
                className="md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Job Title"
              />
            </div>
          </div>
          <div className="w-full mt-8 flex gap-x-8">
            <div className="w-1/2 flex flex-col gap-y-3">
              <label className="text-[#231F20] text-2xl font-semibold">
                Job Title
              </label>
              <input
                className="md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Job Title"
              />
            </div>
            <div className="w-1/2 flex flex-col gap-y-3">
              <label className="text-[#231F20] text-2xl font-semibold">
                Concern Department
              </label>
              <input
                className="md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Concern Department"
              />
            </div>
          </div>
          <div className="w-full mt-8 flex gap-x-8">
            <div className="flex flex-col gap-y-3">
              <label className="text-[#231F20] text-2xl font-semibold">
                House No.
              </label>
              <input
                className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="House No."
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <label className="text-[#231F20] text-2xl font-semibold">
                Road No.
              </label>
              <input
                className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Road No."
              />
            </div>

            <div className="flex flex-col gap-y-3">
              <label className="text-[#231F20] text-2xl font-semibold">
                Block
              </label>
              <input
                className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Block"
              />
            </div>
          </div>
          <div className="w-full mt-8 flex gap-x-8">
            <div className="flex flex-col gap-y-3">
              <label className="text-[#231F20] text-2xl font-semibold">
                Sector
              </label>
              <input
                className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Sector"
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <label className="text-[#231F20] text-2xl font-semibold">
                Area
              </label>
              <input
                className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Area"
              />
            </div>

            <div className="flex flex-col gap-y-3">
              <label className="text-[#231F20] text-2xl font-semibold">
                City
              </label>
              <input
                className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="City"
              />
            </div>
          </div>
          <div className="w-full mt-8 flex gap-x-8">
            <div className="flex flex-col gap-y-3">
              <label className="text-[#231F20] text-2xl font-semibold">
                State / region
              </label>
              <input
                className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="State / region"
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <label className="text-[#231F20] text-2xl font-semibold">
                Zip / Postal Code
              </label>
              <input
                className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Zip / Postal Code"
              />
            </div>

            <div className="flex flex-col gap-y-3">
              <label className="text-[#231F20] text-2xl font-semibold">
                Interested Sector
              </label>
              <input
                className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Country"
              />
            </div>
          </div>
          <div className="mt-8">
            <label className="text-[#231F20] text-2xl font-semibold">
              Interested Sector
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center mr-4 mb-4">
                <input
                  id="radio1"
                  type="radio"
                  name="radio"
                  className="hidden"
                  checked
                />
                <label
                  htmlFor="radio1"
                  className="flex items-center cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block mr-4 border border-grey"></span>
                  Apparel/Textiles
                </label>
              </div>
              <div className="flex items-center mr-4 mb-4">
                <input
                  id="radio2"
                  type="radio"
                  name="radio"
                  className="hidden"
                  checked
                />
                <label
                  htmlFor="radio2"
                  className="flex items-center cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block mr-4 border border-grey"></span>
                  Leather
                </label>
              </div>
              <div className="flex items-center mr-4 mb-4">
                <input
                  id="radio3"
                  type="radio"
                  name="radio"
                  className="hidden"
                  checked
                />
                <label
                  htmlFor="radio3"
                  className="flex items-center cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block mr-4 border border-grey"></span>
                  Digital Industry
                </label>
              </div>
              <div className="flex items-center mr-4 mb-4">
                <input
                  id="radio4"
                  type="radio"
                  name="radio"
                  className="hidden"
                  checked
                />
                <label
                  htmlFor="radio4"
                  className="flex items-center cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block mr-4 border border-grey"></span>
                  Pharmaceutical/Health
                </label>
              </div>
              <div className="flex items-center mr-4 mb-4">
                <input
                  id="radio5"
                  type="radio"
                  name="radio"
                  className="hidden"
                  checked
                />
                <label
                  htmlFor="radio5"
                  className="flex items-center cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block mr-4 border border-grey"></span>
                  Light Engineering/Electronic
                </label>
              </div>
              <div className="flex items-center mr-4 mb-4">
                <input
                  id="radio6"
                  type="radio"
                  name="radio"
                  className="hidden"
                  checked
                />
                <label
                  htmlFor="radio6"
                  className="flex items-center cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block mr-4 border border-grey"></span>
                  Agro-Food
                </label>
              </div>
              <div className="flex items-center mr-4 mb-4">
                <input
                  id="radio7"
                  type="radio"
                  name="radio"
                  className="hidden"
                  checked
                />
                <label
                  htmlFor="radio7"
                  className="flex items-center cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block mr-4 border border-grey"></span>
                  FMCG
                </label>
              </div>
              <div className="flex items-center mr-4 mb-4">
                <input
                  id="radio8"
                  type="radio"
                  name="radio"
                  className="hidden"
                  checked
                />
                <label
                  htmlFor="radio8"
                  className="flex items-center cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block mr-4 border border-grey"></span>
                  Ceramic
                </label>
              </div>
              <div className="flex items-center mr-4 mb-4">
                <input
                  id="radio9"
                  type="radio"
                  name="radio"
                  className="hidden"
                  checked
                />
                <label
                  htmlFor="radio9"
                  className="flex items-center cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block mr-4 border border-grey"></span>
                  Jute
                </label>
              </div>
              <div className="flex items-center mr-4 mb-4">
                <input
                  id="radio10"
                  type="radio"
                  name="radio"
                  className="hidden"
                  checked
                />
                <label
                  htmlFor="radio10"
                  className="flex items-center cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block mr-4 border border-grey"></span>
                  Bicycle
                </label>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <button className="bg-[#A81F25] text-white font-medium uppercase py-5 px-10 rounded-lg">
              Apply Coupon
            </button>
          </div>

          <div className="mt-12">
            <div className="bg-[#231F20] text-white flex justify-between items-center px-8 py-9 rounded-lg">
              <div>
                <p className="text-xs font-medium">
                  If you face any difficulties to fill up visitor registration
                  form or login with correct information,
                  <br />
                  please feel free to contact us at
                  registration@bangladeshapparelexchange.com
                </p>
              </div>
              <div className="flex items-center gap-x-4 cursor-pointer">
                <input
                  type="submit"
                  className="font-bold text-[40px] uppercase cursor-pointer"
                  value="Submit"
                />
                <span>
                  <img src={arrowOutward} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VisitorForm;
