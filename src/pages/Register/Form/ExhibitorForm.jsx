import "./ExhibitorForm.css";
import arrowOutward from "../../../assets/arrowOutward.svg";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { addExhibitorInfo } from "../../../api/fetch";

const ExhibitorForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await addExhibitorInfo(data);
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

  const inputClass = "w-full md:h-[80px] py-3 px-4 text-[#808080] text-xl md:text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none";
  const labelClass = "text-[#231F20] text-xl md:text-2xl font-semibold";
  const headingClass = "font-oswald text-[#1A1A1A] text-2xl md:text-[32px] font-medium uppercase mb-6";

  return (
    <div className="bg-white p-4 md:p-20 border-[0.5px] border-[#231F20] rounded-3xl">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-12">

        {/* Section 1: Exhibitor Contact Information */}
        <div>
          <h1 className={headingClass}>Exhibitor Contact Information</h1>
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-start">
              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>Title</label>
                <div className="flex gap-6 text-xl md:text-2xl mt-2">
                  <div className="flex items-center gap-2">
                    <input type="radio" name="exhibitorTitle" value="Mr." {...register("exhibitorTitle", { required: true })} className="mr-2 transform scale-150" />
                    Mr.
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="radio" name="exhibitorTitle" value="Ms." {...register("exhibitorTitle", { required: true })} className="mr-2 transform scale-150" />
                    Ms.
                  </div>
                </div>
                {errors.exhibitorTitle && <p className="text-red-500 mt-1 text-sm">Title is required.</p>}
              </div>

              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>First Name</label>
                <input
                  {...register("exhibitorFirstName", { required: "First Name is required" })}
                  className={`${inputClass} ${errors.exhibitorFirstName ? "border-red-500" : ""}`}
                  type="text"
                  placeholder="First Name"
                />
                {errors.exhibitorFirstName && <p className="text-red-500 text-sm">{errors.exhibitorFirstName.message}</p>}
              </div>

              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>Last Name</label>
                <input
                  {...register("exhibitorLastName", { required: "Last Name is required" })}
                  className={`${inputClass} ${errors.exhibitorLastName ? "border-red-500" : ""}`}
                  type="text"
                  placeholder="Last Name"
                />
                {errors.exhibitorLastName && <p className="text-red-500 text-sm">{errors.exhibitorLastName.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>Email Address</label>
                <input
                  {...register("exhibitorEmail", {
                    required: "Email Address is required",
                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Invalid email address" },
                  })}
                  className={`${inputClass} ${errors.exhibitorEmail ? "border-red-500" : ""}`}
                  type="email"
                  placeholder="Email Address"
                />
                {errors.exhibitorEmail && <p className="text-red-500 text-sm">{errors.exhibitorEmail.message}</p>}
              </div>
              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>Phone</label>
                <input
                  {...register("exhibitorPhone", {
                    required: "Phone number is required",
                    pattern: { value: /^[+]?[0-9]*$/, message: "Invalid phone number" },
                  })}
                  className={`${inputClass} ${errors.exhibitorPhone ? "border-red-500" : ""}`}
                  type="tel"
                  placeholder="+8801234567890"
                />
                {errors.exhibitorPhone && <p className="text-red-500 text-sm">{errors.exhibitorPhone.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-start">
              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>Company Name</label>
                <input
                  {...register("exhibitorCompanyName", {
                    required: "Company Name is required",
                    maxLength: { value: 100, message: "Company Name should not exceed 100 characters" },
                  })}
                  className={`${inputClass} ${errors.exhibitorCompanyName ? "border-red-500" : ""}`}
                  type="text"
                  placeholder="Company Name"
                />
                {errors.exhibitorCompanyName && <p className="text-red-500 text-sm">{errors.exhibitorCompanyName.message}</p>}
              </div>
              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>Designation</label>
                <input
                  {...register("exhibitorDesignation", {
                    required: "Designation is required",
                    maxLength: { value: 50, message: "Designation should not exceed 50 characters" },
                  })}
                  className={`${inputClass} ${errors.exhibitorDesignation ? "border-red-500" : ""}`}
                  type="text"
                  placeholder="Designation"
                />
                {errors.exhibitorDesignation && <p className="text-red-500 text-sm">{errors.exhibitorDesignation.message}</p>}
              </div>
              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>Department</label>
                <input
                  {...register("exhibitorDepartment", {
                    required: "Department is required",
                    maxLength: { value: 50, message: "Department should not exceed 50 characters" },
                  })}
                  className={`${inputClass} ${errors.exhibitorDepartment ? "border-red-500" : ""}`}
                  type="text"
                  placeholder="Department"
                />
                {errors.exhibitorDepartment && <p className="text-red-500 text-sm">{errors.exhibitorDepartment.message}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Secondary Contact Person */}
        <div>
          <h1 className={headingClass}>Secondary Contact Person</h1>
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-start">
              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>Title</label>
                <div className="flex gap-6 text-xl md:text-2xl mt-2">
                  <div className="flex items-center gap-2">
                    <input type="radio" name="secondaryTitle" value="Mr." {...register("secondaryTitle", { required: true })} className="mr-2 transform scale-150" />
                    Mr.
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="radio" name="secondaryTitle" value="Ms." {...register("secondaryTitle", { required: true })} className="mr-2 transform scale-150" />
                    Ms.
                  </div>
                </div>
                {errors.secondaryTitle && <p className="text-red-500 mt-1 text-sm">Title is required.</p>}
              </div>

              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>First Name</label>
                <input
                  {...register("secondaryFirstName", { required: "First Name is required" })}
                  className={`${inputClass} ${errors.secondaryFirstName ? "border-red-500" : ""}`}
                  type="text"
                  placeholder="First Name"
                />
                {errors.secondaryFirstName && <p className="text-red-500 text-sm">{errors.secondaryFirstName.message}</p>}
              </div>

              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>Last Name</label>
                <input
                  {...register("secondaryLastName", { required: "Last Name is required" })}
                  className={`${inputClass} ${errors.secondaryLastName ? "border-red-500" : ""}`}
                  type="text"
                  placeholder="Last Name"
                />
                {errors.secondaryLastName && <p className="text-red-500 text-sm">{errors.secondaryLastName.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>Email Address</label>
                <input
                  {...register("secondaryEmail", {
                    required: "Email Address is required",
                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Invalid email address" },
                  })}
                  className={`${inputClass} ${errors.secondaryEmail ? "border-red-500" : ""}`}
                  type="email"
                  placeholder="Email Address"
                />
                {errors.secondaryEmail && <p className="text-red-500 text-sm">{errors.secondaryEmail.message}</p>}
              </div>
              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>Phone</label>
                <input
                  {...register("secondaryPhone", {
                    required: "Phone number is required",
                    pattern: { value: /^[+]?[0-9]*$/, message: "Invalid phone number" },
                  })}
                  className={`${inputClass} ${errors.secondaryPhone ? "border-red-500" : ""}`}
                  type="tel"
                  placeholder="+8801234567890"
                />
                {errors.secondaryPhone && <p className="text-red-500 text-sm">{errors.secondaryPhone.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>Designation</label>
                <input
                  {...register("secondaryDesignation", {
                    required: "Designation is required",
                    maxLength: { value: 50, message: "Designation should not exceed 50 characters" },
                  })}
                  className={`${inputClass} ${errors.secondaryDesignation ? "border-red-500" : ""}`}
                  type="text"
                  placeholder="Designation"
                />
                {errors.secondaryDesignation && <p className="text-red-500 text-sm">{errors.secondaryDesignation.message}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Exhibitor Company Information */}
        <div>
          <h1 className={headingClass}>Exhibitor Company Information</h1>
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-start">
              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>Company Name</label>
                <input
                  {...register("exhibitorCompanyName", {
                    required: "Company Name is required",
                    maxLength: { value: 100, message: "Company Name should not exceed 100 characters" },
                  })}
                  className={`${inputClass} ${errors.exhibitorCompanyName ? "border-red-500" : ""}`}
                  type="text"
                  placeholder="Company Name"
                />
                {errors.exhibitorCompanyName && <p className="text-red-500 text-sm">{errors.exhibitorCompanyName.message}</p>}
              </div>
              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>Company Website</label>
                <input
                  {...register("exhibitorCompanyWebsite", {
                    required: "Company Website is required",
                    pattern: { value: /^(ftp|http|https):\/\/[^ "]+$/, message: "Invalid URL format" },
                  })}
                  className={`${inputClass} ${errors.exhibitorCompanyWebsite ? "border-red-500" : ""}`}
                  type="text"
                  placeholder="Company Website"
                />
                {errors.exhibitorCompanyWebsite && <p className="text-red-500 text-sm">{errors.exhibitorCompanyWebsite.message}</p>}
              </div>
              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>Industry Type</label>
                <input
                  {...register("exhibitorIndustryType", {
                    required: "Industry Type is required",
                    maxLength: { value: 50, message: "Industry Type should not exceed 50 characters" },
                  })}
                  className={`${inputClass} ${errors.exhibitorIndustryType ? "border-red-500" : ""}`}
                  type="text"
                  placeholder="Industry Type"
                />
                {errors.exhibitorIndustryType && <p className="text-red-500 text-sm">{errors.exhibitorIndustryType.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-start">
              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>Product Type</label>
                <input
                  {...register("exhibitorProductType", {
                    required: "Product Type is required",
                    maxLength: { value: 50, message: "Product Type should not exceed 50 characters" },
                  })}
                  className={`${inputClass} ${errors.exhibitorProductType ? "border-red-500" : ""}`}
                  type="text"
                  placeholder="Product Type"
                />
                {errors.exhibitorProductType && <p className="text-red-500 text-sm">{errors.exhibitorProductType.message}</p>}
              </div>
              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>Key Clients</label>
                <input
                  {...register("exhibitorKeyClients", {
                    required: "Key Clients is required",
                    maxLength: { value: 100, message: "Key Clients should not exceed 100 characters" },
                  })}
                  className={`${inputClass} ${errors.exhibitorKeyClients ? "border-red-500" : ""}`}
                  type="text"
                  placeholder="Key Clients"
                />
                {errors.exhibitorKeyClients && <p className="text-red-500 text-sm">{errors.exhibitorKeyClients.message}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Company Address */}
        <div>
          <h1 className={headingClass}>Company Address</h1>
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-start">
              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>House No.</label>
                <input
                  {...register("companyHouseNo", { required: "House No. is required", maxLength: { value: 50, message: "House No. should not exceed 50 characters" } })}
                  className={inputClass}
                  type="text"
                  placeholder="House No."
                />
                {errors.companyHouseNo && <p className="text-red-500 text-sm">{errors.companyHouseNo.message}</p>}
              </div>
              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>Road No.</label>
                <input
                  {...register("companyRoadNo", { required: "Road No. is required", maxLength: { value: 50, message: "Road No. should not exceed 50 characters" } })}
                  className={inputClass}
                  type="text"
                  placeholder="Road No."
                />
                {errors.companyRoadNo && <p className="text-red-500 text-sm">{errors.companyRoadNo.message}</p>}
              </div>
              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>Block</label>
                <input
                  {...register("companyBlock", { required: "Block is required", maxLength: { value: 50, message: "Block should not exceed 50 characters" } })}
                  className={inputClass}
                  type="text"
                  placeholder="Block"
                />
                {errors.companyBlock && <p className="text-red-500 text-sm">{errors.companyBlock.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-start">
              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>Sector</label>
                <input
                  {...register("companySector", { required: "Sector is required", maxLength: { value: 50, message: "Sector should not exceed 50 characters" } })}
                  className={inputClass}
                  type="text"
                  placeholder="Sector"
                />
                {errors.companySector && <p className="text-red-500 text-sm">{errors.companySector.message}</p>}
              </div>
              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>Area</label>
                <input
                  {...register("companyArea", { required: "Area is required", maxLength: { value: 50, message: "Area should not exceed 50 characters" } })}
                  className={inputClass}
                  type="text"
                  placeholder="Area"
                />
                {errors.companyArea && <p className="text-red-500 text-sm">{errors.companyArea.message}</p>}
              </div>
              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>City</label>
                <input
                  {...register("companyCity", { required: "City is required", maxLength: { value: 50, message: "City should not exceed 50 characters" } })}
                  className={inputClass}
                  type="text"
                  placeholder="City"
                />
                {errors.companyCity && <p className="text-red-500 text-sm">{errors.companyCity.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-start">
              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>State / region</label>
                <input
                  {...register("companyStateRegion", { required: "State / region is required", maxLength: { value: 50, message: "State / region should not exceed 50 characters" } })}
                  className={inputClass}
                  type="text"
                  placeholder="State / region"
                />
                {errors.companyStateRegion && <p className="text-red-500 text-sm">{errors.companyStateRegion.message}</p>}
              </div>
              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>Zip / Postal Code</label>
                <input
                  {...register("companyZipCode", { required: "Zip / Postal Code is required", maxLength: { value: 20, message: "Zip / Postal Code should not exceed 20 characters" } })}
                  className={inputClass}
                  type="text"
                  placeholder="Zip / Postal Code"
                />
                {errors.companyZipCode && <p className="text-red-500 text-sm">{errors.companyZipCode.message}</p>}
              </div>
              <div className="flex flex-col gap-y-3">
                <label className={labelClass}>Country</label>
                <select
                  {...register("companyCountry", { required: "Country is required" })}
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
                {errors.companyCountry && <p className="text-red-500 text-sm">{errors.companyCountry.message}</p>}
              </div>
            </div>

            <div className="flex flex-col gap-y-3">
              <label className={labelClass}>Participation in Other Exhibitions</label>
              <input
                {...register("exhibitionsParticipation", {
                  required: "Participation in Other Exhibitions is required",
                  maxLength: { value: 200, message: "Exhibitions Participation should not exceed 200 characters" },
                })}
                className={`${inputClass} ${errors.exhibitionsParticipation ? "border-red-500" : ""}`}
                type="text"
                placeholder="Participation in Other Exhibitions"
              />
              {errors.exhibitionsParticipation && <p className="text-red-500 text-sm">{errors.exhibitionsParticipation.message}</p>}
            </div>

            <div className="flex flex-col gap-y-3">
              <label className={labelClass}>Type of business relation you are looking for</label>
              <input
                {...register("businessRelationType", {
                  required: "Business Relation Type is required",
                  maxLength: { value: 150, message: "Business Relation Type should not exceed 150 characters" },
                })}
                className={`${inputClass} ${errors.businessRelationType ? "border-red-500" : ""}`}
                type="text"
                placeholder="Type of business relation you are looking for"
              />
              {errors.businessRelationType && <p className="text-red-500 text-sm">{errors.businessRelationType.message}</p>}
            </div>
          </div>
        </div>

        {/* Section 5: Booth Details & Submit */}
        <div>
          <h1 className={headingClass}>Booth Details</h1>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-y-3">
              <label className={labelClass}>Booth Size 15 SQM - Booth Fee: $12000</label>
              <div className="flex items-center">
                <input id="radio" type="radio" name="radio" className="hidden" checked readOnly />
                <label
                  htmlFor="radio"
                  className="flex items-center w-full md:h-[80px] py-3 px-4 text-[#808080] text-xl md:text-2xl border-[0.5px] border-[#231F20] rounded-md cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block mr-4 border border-grey"></span>
                  Confirm
                </label>
              </div>
            </div>

            <div className="bg-[#231F20] text-white flex flex-col md:flex-row justify-between items-center gap-6 px-6 md:px-8 py-8 md:py-9 rounded-lg">
              <p className="text-sm font-medium text-center md:text-left">
                Submitting this application does not guarantee your spot in Bangladesh Apparel Expo.
                <br className="hidden md:block" />
                If you face any difficulties to fill up exhibitor registration form or login with correct information,
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
        </div>

      </form>
    </div>
  );
};

export default ExhibitorForm;