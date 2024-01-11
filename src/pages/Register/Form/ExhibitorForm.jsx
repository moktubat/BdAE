import "./ExhibitorForm.css";
import arrowOutward from "../../../assets/arrowOutward.svg";

const ExhibitorForm = () => {
  return (
    <div className="p-20 border-[0.5px] border-[#231F20] rounded-3xl">
      <form>
        <div>
          <div>
            <h1 className="text-[32px] font-bold uppercase mb-20">
              Exhibitor Contact Information
            </h1>
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
              <div className="flex flex-col gap-y-3">
                <label className="text-[#231F20] text-2xl font-semibold">
                  Company Name
                </label>
                <input
                  className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Company Name"
                />
              </div>
              <div className="flex flex-col gap-y-3">
                <label className="text-[#231F20] text-2xl font-semibold">
                  Designation
                </label>
                <input
                  className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Designation"
                />
              </div>

              <div className="flex flex-col gap-y-3">
                <label className="text-[#231F20] text-2xl font-semibold">
                  Department
                </label>
                <input
                  className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Department"
                />
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-[32px] font-bold uppercase my-20">
              Exhibitor Company Information
            </h1>
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
            <div className="mt-8">
              <div className="flex flex-col gap-y-3">
                <label className="text-[#231F20] text-2xl font-semibold">
                  Designation
                </label>
                <input
                  className="w-full md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Designation"
                />
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-[32px] font-bold uppercase my-20">
              Exhibitor Company Information
            </h1>
            <div className="w-full mt-8 grid grid-cols-3 gap-x-8">
              <div className="flex flex-col gap-y-3">
                <label className="text-[#231F20] text-2xl font-semibold">
                  Company Name
                </label>
                <input
                  className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Company Name"
                />
              </div>
              <div className="flex flex-col gap-y-3">
                <label className="text-[#231F20] text-2xl font-semibold">
                  Company Website
                </label>
                <input
                  className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Company Website"
                />
              </div>

              <div className="flex flex-col gap-y-3">
                <label className="text-[#231F20] text-2xl font-semibold">
                  Industry Type
                </label>
                <input
                  className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Industry Type"
                />
              </div>
              <div className="flex flex-col gap-y-3 mt-5">
                <label className="text-[#231F20] text-2xl font-semibold">
                  Product type
                </label>
                <input
                  className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Product type"
                />
              </div>
              <div className="flex flex-col gap-y-3 mt-5">
                <label className="text-[#231F20] text-2xl font-semibold">
                  Key Clients
                </label>
                <input
                  className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Key Clients"
                />
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-[32px] font-bold uppercase my-20">
              Company Address
            </h1>
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
                  Country
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
              <div className="flex flex-col gap-y-3">
                <label className="text-[#231F20] text-2xl font-semibold">
                  Participation in Other Exhibitions
                </label>
                <input
                  className="w-full md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Participation in Other Exhibitions"
                />
              </div>
            </div>
            <div className="mt-8">
              <div className="flex flex-col gap-y-3">
                <label className="text-[#231F20] text-2xl font-semibold">
                  Type of business relation you are looking for
                </label>
                <input
                  className="w-full md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Type of business relation you are looking for"
                />
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-[32px] font-bold uppercase my-20">
              Booth Details
            </h1>
            <div>
              <div className="mt-8">
                <div className="flex flex-col gap-y-3">
                  <label className="text-[#231F20] text-2xl font-semibold">
                    Booth Size 15 SQM - Booth Fee: $12000
                  </label>
                  <div className="flex items-center mb-4">
                    <input
                      id="radio"
                      type="radio"
                      name="radio"
                      className="hidden"
                      checked
                    />
                    <label
                      htmlFor="radio"
                      className="flex items-center w-full md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                    >
                      <span className="w-4 h-4 inline-block mr-4 border border-grey"></span>
                      Confirm
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <div className="bg-[#231F20] text-white flex justify-between items-center px-8 py-9 rounded-lg">
                <div>
                  <p className="text-xs font-medium">
                    Submitting this application does not guarantee your spot in
                    Bangladesh Apparel Expo.
                    <br />
                    If you face any difficulties to fill up exhibitor
                    registration form or login with correct information,
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
        </div>
      </form>
    </div>
  );
};

export default ExhibitorForm;
