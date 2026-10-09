import "./VisitorForm.css";
import arrowOutward from "../../../assets/arrowOutward.svg";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { addVisitorInfo } from "../../../api/fetch";

const VisitorForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await addVisitorInfo(data);
      if (result && result.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your information has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...Try Again",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...Try Again",
      });
    }
  };

  // Reusable base input class
  const inputClass = `w-full md:h-[80px] py-3 px-4 text-[#808080] text-xl md:text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none`;
  const labelClass = "text-[#231F20] text-xl md:text-2xl font-semibold";

  return (
    <div className="bg-white p-4 md:p-20 border-[0.5px] border-[#231F20] rounded-3xl">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 md:gap-12">

        {/* Row 1: Title, First Name, Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-start">
          <div className="flex flex-col gap-y-3">
            <label className={labelClass}>Title</label>
            <div className="flex gap-6 text-xl md:text-2xl mt-2">
              <div className="flex items-center gap-2">
                <input type="radio" name="visitorTitle" value="Mr." {...register("visitorTitle", { required: true })} className="mr-2 transform scale-150" />
                Mr.
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="visitorTitle" value="Ms." {...register("visitorTitle", { required: true })} className="mr-2 transform scale-150" />
                Ms.
              </div>
            </div>
            {errors.visitorTitle && <p className="text-red-500 mt-1 text-sm">Title is required.</p>}
          </div>

          <div className="flex flex-col gap-y-3">
            <label className={labelClass}>First Name</label>
            <input
              {...register("visitorFirstName", { required: "First Name is required" })}
              className={`${inputClass} ${errors.visitorFirstName ? "border-red-500" : ""}`}
              type="text"
              placeholder="First Name"
            />
            {errors.visitorFirstName && <p className="text-red-500 text-sm">{errors.visitorFirstName.message}</p>}
          </div>

          <div className="flex flex-col gap-y-3">
            <label className={labelClass}>Last Name</label>
            <input
              {...register("visitorLastName", { required: "Last Name is required" })}
              className={`${inputClass} ${errors.visitorLastName ? "border-red-500" : ""}`}
              type="text"
              placeholder="Last Name"
            />
            {errors.visitorLastName && <p className="text-red-500 text-sm">{errors.visitorLastName.message}</p>}
          </div>
        </div>

        {/* Row 2: Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          <div className="flex flex-col gap-y-3">
            <label className={labelClass}>Email Address</label>
            <input
              {...register("visitorEmail", {
                required: "Email Address is required",
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Invalid email address" },
              })}
              className={`${inputClass} ${errors.visitorEmail ? "border-red-500" : ""}`}
              type="email"
              placeholder="Email Address"
            />
            {errors.visitorEmail && <p className="text-red-500 text-sm">{errors.visitorEmail.message}</p>}
          </div>

          <div className="flex flex-col gap-y-3">
            <label className={labelClass}>Phone</label>
            <input
              {...register("visitorPhone", {
                required: "Phone number is required",
                pattern: { value: /^[+]?[0-9]*$/, message: "Invalid phone number" },
              })}
              className={`${inputClass} ${errors.visitorPhone ? "border-red-500" : ""}`}
              type="tel"
              placeholder="+8801234567890"
            />
            {errors.visitorPhone && <p className="text-red-500 text-sm">{errors.visitorPhone.message}</p>}
          </div>
        </div>

        {/* Row 3: Company & Industry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          <div className="flex flex-col gap-y-3">
            <label className={labelClass}>Company Name</label>
            <input
              {...register("visitorCompanyName", {
                required: "Company Name is required",
                maxLength: { value: 100, message: "Company Name should not exceed 100 characters" },
              })}
              className={`${inputClass} ${errors.visitorCompanyName ? "border-red-500" : ""}`}
              type="text"
              placeholder="Company Name"
            />
            {errors.visitorCompanyName && <p className="text-red-500 text-sm">{errors.visitorCompanyName.message}</p>}
          </div>
          <div className="flex flex-col gap-y-3">
            <label className={labelClass}>Industry Type</label>
            <input
              {...register("visitorIndustryType", {
                required: "Industry Type is required",
                maxLength: { value: 100, message: "Industry Type should not exceed 100 characters" },
              })}
              className={`${inputClass} ${errors.visitorIndustryType ? "border-red-500" : ""}`}
              type="text"
              placeholder="Industry Type"
            />
            {errors.visitorIndustryType && <p className="text-red-500 text-sm">{errors.visitorIndustryType.message}</p>}
          </div>
        </div>

        {/* Row 4: Job Title & Department */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          <div className="flex flex-col gap-y-3">
            <label className={labelClass}>Job Title</label>
            <input
              {...register("visitorJobTitle", {
                required: "Job Title is required",
                maxLength: { value: 100, message: "Job Title should not exceed 100 characters" },
              })}
              className={`${inputClass} ${errors.visitorJobTitle ? "border-red-500" : ""}`}
              type="text"
              placeholder="Job Title"
            />
            {errors.visitorJobTitle && <p className="text-red-500 text-sm">{errors.visitorJobTitle.message}</p>}
          </div>
          <div className="flex flex-col gap-y-3">
            <label className={labelClass}>Concern Department</label>
            <input
              {...register("visitorConcernDepartment", {
                required: "Concern Department is required",
                maxLength: { value: 100, message: "Concern Department should not exceed 100 characters" },
              })}
              className={`${inputClass} ${errors.visitorConcernDepartment ? "border-red-500" : ""}`}
              type="text"
              placeholder="Concern Department"
            />
            {errors.visitorConcernDepartment && <p className="text-red-500 text-sm">{errors.visitorConcernDepartment.message}</p>}
          </div>
        </div>

        {/* Row 5: House, Road, Block */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-start">
          <div className="flex flex-col gap-y-3">
            <label className={labelClass}>House No.</label>
            <input
              {...register("visitorHouseNo", { required: "House No. is required", maxLength: { value: 50, message: "House No. should not exceed 50 characters" } })}
              className={inputClass}
              type="text"
              placeholder="House No."
            />
            {errors.visitorHouseNo && <p className="text-red-500 text-sm">{errors.visitorHouseNo.message}</p>}
          </div>
          <div className="flex flex-col gap-y-3">
            <label className={labelClass}>Road No.</label>
            <input
              {...register("visitorRoadNo", { required: "Road No. is required", maxLength: { value: 50, message: "Road No. should not exceed 50 characters" } })}
              className={inputClass}
              type="text"
              placeholder="Road No."
            />
            {errors.visitorRoadNo && <p className="text-red-500 text-sm">{errors.visitorRoadNo.message}</p>}
          </div>
          <div className="flex flex-col gap-y-3">
            <label className={labelClass}>Block</label>
            <input
              {...register("visitorBlock", { required: "Block is required", maxLength: { value: 50, message: "Block should not exceed 50 characters" } })}
              className={inputClass}
              type="text"
              placeholder="Block"
            />
            {errors.visitorBlock && <p className="text-red-500 text-sm">{errors.visitorBlock.message}</p>}
          </div>
        </div>

        {/* Row 6: Sector, Area, City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-start">
          <div className="flex flex-col gap-y-3">
            <label className={labelClass}>Sector</label>
            <input
              {...register("visitorSector", { required: "Sector is required", maxLength: { value: 50, message: "Sector should not exceed 50 characters" } })}
              className={inputClass}
              type="text"
              placeholder="Sector"
            />
            {errors.visitorSector && <p className="text-red-500 text-sm">{errors.visitorSector.message}</p>}
          </div>
          <div className="flex flex-col gap-y-3">
            <label className={labelClass}>Area</label>
            <input
              {...register("visitorArea", { required: "Area is required", maxLength: { value: 50, message: "Area should not exceed 50 characters" } })}
              className={inputClass}
              type="text"
              placeholder="Area"
            />
            {errors.visitorArea && <p className="text-red-500 text-sm">{errors.visitorArea.message}</p>}
          </div>
          <div className="flex flex-col gap-y-3">
            <label className={labelClass}>City</label>
            <input
              {...register("visitorCity", { required: "City is required", maxLength: { value: 50, message: "City should not exceed 50 characters" } })}
              className={inputClass}
              type="text"
              placeholder="City"
            />
            {errors.visitorCity && <p className="text-red-500 text-sm">{errors.visitorCity.message}</p>}
          </div>
        </div>

        {/* Row 7: State, Zip, Country */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-start">
          <div className="flex flex-col gap-y-3">
            <label className={labelClass}>State / region</label>
            <input
              {...register("visitorStateRegion", { required: "State / region is required", maxLength: { value: 50, message: "State / region should not exceed 50 characters" } })}
              className={inputClass}
              type="text"
              placeholder="State / region"
            />
            {errors.visitorStateRegion && <p className="text-red-500 text-sm">{errors.visitorStateRegion.message}</p>}
          </div>
          <div className="flex flex-col gap-y-3">
            <label className={labelClass}>Zip / Postal Code</label>
            <input
              {...register("visitorZipCode", { required: "Zip / Postal Code is required", maxLength: { value: 20, message: "Zip / Postal Code should not exceed 20 characters" } })}
              className={inputClass}
              type="text"
              placeholder="Zip / Postal Code"
            />
            {errors.visitorZipCode && <p className="text-red-500 text-sm">{errors.visitorZipCode.message}</p>}
          </div>
          <div className="flex flex-col gap-y-3">
            <label className={labelClass}>Country</label>
            <select
              {...register("visitorCountry", { required: "Country is required" })}
              className={`${inputClass} focus:outline-[#808080]`}
            >
              <option value="">Select Country</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="India">India</option>
              <option value="Nepal">Nepal</option>
              <option value="Pakistan">Pakistan</option>
              <option value="China">China</option>
              <option value="Japan">Japan</option>
            </select>
            {errors.visitorCountry && <p className="text-red-500 text-sm">{errors.visitorCountry.message}</p>}
          </div>
        </div>

        {/* Interested Sector */}
        <div className="flex flex-col gap-y-6">
          <label className={labelClass}>Interested Sector</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { id: "checkbox1", value: "Apparel/Textiles" },
              { id: "checkbox2", value: "Leather" },
              { id: "checkbox3", value: "Digital Industry" },
              { id: "checkbox4", value: "Pharmaceutical/Health" },
              { id: "checkbox5", value: "Light Engineering/Electronic" },
              { id: "checkbox6", value: "Agro-Food" },
              { id: "checkbox7", value: "FMCG" },
              { id: "checkbox8", value: "Ceramic" },
              { id: "checkbox9", value: "Jute" },
              { id: "checkbox10", value: "Bicycle" },
            ].map((sector) => (
              <div key={sector.id} className="flex items-center cursor-pointer">
                <input
                  id={sector.id}
                  type="checkbox"
                  name="sectors"
                  value={sector.value}
                  {...register("visitorSectors", { required: "Please select an industry" })}
                  className="hidden"
                />
                <label htmlFor={sector.id} className="flex items-center cursor-pointer text-lg md:text-xl">
                  <span className="w-4 h-4 inline-block mr-1 md:mr-3 border border-grey"></span>
                  {sector.value}
                </label>
              </div>
            ))}
          </div>
          {errors.visitorSectors && <p className="text-red-500 text-sm mt-2">{errors.visitorSectors.message}</p>}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-8">
          <button type="button" className="bg-[#A81F25] text-white font-medium uppercase py-4 px-8 rounded-lg self-start text-lg md:text-xl">
            Apply Coupon
          </button>

          <div className="bg-[#231F20] text-white flex flex-col md:flex-row justify-between items-center gap-6 px-6 md:px-8 py-8 md:py-9 rounded-lg">
            <p className="text-sm font-medium text-center md:text-left">
              If you face any difficulties to fill up visitor registration form or login with correct information,
              <br className="hidden md:block" />
              please feel free to contact us at{" "}
              <a href="mailto:registration@bangladeshapparelexchange.com" className="text-blue-400 hover:underline">
                registration@bangladeshapparelexchange.com
              </a>
            </p>
            <div className="flex items-center gap-x-4 cursor-pointer shrink-0">
              <input
                type="submit"
                className="font-oswald font-semibold text-3xl md:text-[40px] uppercase cursor-pointer tracking-[-3%] hover:text-[#A81F25] transition-colors"
                value="Submit"
              />
              <span>
                <img src={arrowOutward} alt="outward arrow" className="w-8 h-8 md:w-9 md:h-9" />
              </span>
            </div>
          </div>
        </div>

      </form>
    </div>
  );
};

export default VisitorForm;