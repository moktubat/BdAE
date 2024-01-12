import "./ExhibitorForm.css";
import arrowOutward from "../../../assets/arrowOutward.svg";
import { useForm } from "react-hook-form";

const ExhibitorForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-white p-4 md:p-20 border-[0.5px] border-[#231F20] rounded-3xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <h1 className="text-[32px] font-bold uppercase mb-5 md:mb-20">
              Exhibitor Contact Information
            </h1>
            <div className="md:flex justify-between">
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

              <div className="flex flex-col gap-y-3 my-4 md:py-0">
                <label className="text-[#231F20] text-2xl font-semibold">
                  First Name
                </label>
                <input
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                  className={`md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none ${
                    errors.firstName ? "border-red-500" : ""
                  }`}
                  type="text"
                  placeholder="First Name"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-y-3">
                <label className="text-[#231F20] text-2xl font-semibold">
                  Last Name
                </label>
                <input
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                  className={`md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none ${
                    errors.lastName ? "border-red-500" : ""
                  }`}
                  type="text"
                  placeholder="Last Name"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-4 md:mt-8">
              <div className="flex flex-col gap-y-3">
                <label className="text-[#231F20] text-2xl font-semibold">
                  Email Address
                </label>
                <input
                  {...register("email", {
                    required: "Email Address is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={`w-full md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  type="email"
                  placeholder="Email Address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div className="mt-4 md:mt-8">
              <div className="flex flex-col gap-y-3">
                <label className="text-[#231F20] text-2xl font-semibold">
                  Phone
                </label>
                <input
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[+]?[0-9]*$/,
                      message: "Invalid phone number",
                    },
                  })}
                  className={`w-full md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                  type="tel"
                  placeholder="+8801234567890"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>
            </div>
            <div className="w-full mt-4 md:mt-8 md:flex gap-x-8">
              <div className="flex flex-col gap-y-3">
                <label className="text-[#231F20] text-2xl font-semibold">
                  Company Name
                </label>
                <input
                  {...register("companyName", {
                    required: "Company Name is required",
                    maxLength: {
                      value: 100,
                      message: "Company Name should not exceed 100 characters",
                    },
                  })}
                  className={`md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none ${
                    errors.companyName ? "border-red-500" : ""
                  }`}
                  type="text"
                  placeholder="Company Name"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm">
                    {errors.companyName.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-y-3 my-4 md:my-0">
                <label className="text-[#231F20] text-2xl font-semibold">
                  Designation
                </label>
                <input
                  {...register("designation", {
                    required: "Designation is required",
                    maxLength: {
                      value: 50,
                      message: "Designation should not exceed 50 characters",
                    },
                  })}
                  className={`md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none ${
                    errors.designation ? "border-red-500" : ""
                  }`}
                  type="text"
                  placeholder="Designation"
                />
                {errors.designation && (
                  <p className="text-red-500 text-sm">
                    {errors.designation.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-y-3">
                <label className="text-[#231F20] text-2xl font-semibold">
                  Department
                </label>
                <input
                  {...register("department", {
                    required: "Department is required",
                    maxLength: {
                      value: 50,
                      message: "Department should not exceed 50 characters",
                    },
                  })}
                  className={`md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none ${
                    errors.department ? "border-red-500" : ""
                  }`}
                  type="text"
                  placeholder="Department"
                />
                {errors.department && (
                  <p className="text-red-500 text-sm">
                    {errors.department.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-[32px] font-bold uppercase my-8 md:my-20">
              Secondary Contact Person
            </h1>
            <div className="md:flex justify-between">
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

              <div className="flex flex-col gap-y-3 my-4 md:py-0">
              <label className="text-[#231F20] text-2xl font-semibold">
                First Name
              </label>
              <input
                {...register("firstName", {
                  required: "First Name is required",
                })}
                className={`md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none ${
                  errors.firstName ? "border-red-500" : ""
                }`}
                type="text"
                placeholder="First Name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-y-3">
              <label className="text-[#231F20] text-2xl font-semibold">
                Last Name
              </label>
              <input
                {...register("lastName", { required: "Last Name is required" })}
                className={`md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none ${
                  errors.lastName ? "border-red-500" : ""
                }`}
                type="text"
                placeholder="Last Name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>
            </div>
            <div className="mt-4 md:mt-8">
            <div className="flex flex-col gap-y-3">
              <label className="text-[#231F20] text-2xl font-semibold">
                Email Address
              </label>
              <input
                {...register("email", {
                  required: "Email Address is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none ${
                  errors.email ? "border-red-500" : ""
                }`}
                type="email"
                placeholder="Email Address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            </div>
            <div className="mt-4 md:mt-8">
            <div className="flex flex-col gap-y-3">
              <label className="text-[#231F20] text-2xl font-semibold">
                Phone
              </label>
              <input
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[+]?[0-9]*$/,
                    message: "Invalid phone number",
                  },
                })}
                className={`w-full md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none ${
                  errors.phone ? "border-red-500" : ""
                }`}
                type="tel"
                placeholder="+8801234567890"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>
            </div>
            <div className="mt-4 md:mt-8">
              <div className="flex flex-col gap-y-3">
                <label className="text-[#231F20] text-2xl font-semibold">
                  Designation
                </label>
                <input
                  {...register("designation", {
                    required: "Designation is required",
                    maxLength: {
                      value: 50,
                      message: "Designation should not exceed 50 characters",
                    },
                  })}
                  className={`w-full md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none ${
                    errors.designation ? "border-red-500" : ""
                  }`}
                  type="text"
                  placeholder="Designation"
                />
                {errors.designation && (
                  <p className="text-red-500 text-sm">
                    {errors.designation.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-[32px] font-bold uppercase my-8 md:my-20">
              Exhibitor Company Information
            </h1>
            <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8 md:gap-y-0">
              <div className="flex flex-col gap-y-3">
                <label className="text-[#231F20] text-2xl font-semibold">
                  Company Name
                </label>
                <input
                  {...register("companyName", {
                    required: "Company Name is required",
                    maxLength: {
                      value: 100,
                      message: "Company Name should not exceed 100 characters",
                    },
                  })}
                  className={`md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none ${
                    errors.companyName ? "border-red-500" : ""
                  }`}
                  type="text"
                  placeholder="Company Name"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm">
                    {errors.companyName.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-y-3 my-4 md:my-0">
        <label className="text-[#231F20] text-2xl font-semibold">
          Company Website
        </label>
        <input
          {...register("companyWebsite", {
            required: "Company Website is required",
            pattern: {
              value: /^(ftp|http|https):\/\/[^ "]+$/,
              message: "Invalid URL format",
            },
          })}
          className={`md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none ${
            errors.companyWebsite ? "border-red-500" : ""
          }`}
          type="text"
          placeholder="Company Website"
        />
        {errors.companyWebsite && (
          <p className="text-red-500 text-sm">
            {errors.companyWebsite.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-y-3">
        <label className="text-[#231F20] text-2xl font-semibold">
          Industry Type
        </label>
        <input
          {...register("industryType", {
            required: "Industry Type is required",
            maxLength: {
              value: 50,
              message: "Industry Type should not exceed 50 characters",
            },
          })}
          className={`md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none ${
            errors.industryType ? "border-red-500" : ""
          }`}
          type="text"
          placeholder="Industry Type"
        />
        {errors.industryType && (
          <p className="text-red-500 text-sm">
            {errors.industryType.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-y-3 md:mt-5">
        <label className="text-[#231F20] text-2xl font-semibold">
          Product Type
        </label>
        <input
          {...register("productType", {
            required: "Product Type is required",
            maxLength: {
              value: 50,
              message: "Product Type should not exceed 50 characters",
            },
          })}
          className={`md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none ${
            errors.productType ? "border-red-500" : ""
          }`}
          type="text"
          placeholder="Product Type"
        />
        {errors.productType && (
          <p className="text-red-500 text-sm">
            {errors.productType.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-y-3 md:mt-5">
        <label className="text-[#231F20] text-2xl font-semibold">
          Key Clients
        </label>
        <input
          {...register("keyClients", {
            required: "Key Clients is required",
            maxLength: {
              value: 100,
              message: "Key Clients should not exceed 100 characters",
            },
          })}
          className={`md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none ${
            errors.keyClients ? "border-red-500" : ""
          }`}
          type="text"
          placeholder="Key Clients"
        />
        {errors.keyClients && (
          <p className="text-red-500 text-sm">
            {errors.keyClients.message}
          </p>
        )}
      </div>
            </div>
          </div>

          <div>
            <h1 className="text-[32px] font-bold uppercase my-8 md:my-20">
              Company Address
            </h1>
            <div className="w-full mt-4 md:mt-8 md:flex gap-x-8">
              <div className="flex flex-col gap-y-3">
                <label className="text-[#231F20] text-2xl font-semibold">
                  House No.
                </label>
                <input
                {...register("houseNo", {
                  required: "House No. is required",
                  maxLength: {
                    value: 50,
                    message: "House No. should not exceed 50 characters",
                  },
                })}
                className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                type="text"
                placeholder="House No."
              />
              {errors.houseNo && (
                <p className="text-red-500 text-sm">{errors.houseNo.message}</p>
              )}
              </div>
              <div className="flex flex-col gap-y-3 my-4 md:my-0">
                <label className="text-[#231F20] text-2xl font-semibold">
                  Road No.
                </label>
                <input
                {...register("roadNo", {
                  required: "Road No. is required",
                  maxLength: {
                    value: 50,
                    message: "Road No. should not exceed 50 characters",
                  },
                })}
                className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                type="text"
                placeholder="Road No."
              />
              {errors.roadNo && (
                <p className="text-red-500 text-sm">{errors.roadNo.message}</p>
              )}
              </div>

              <div className="flex flex-col gap-y-3">
                <label className="text-[#231F20] text-2xl font-semibold">
                  Block
                </label>
                <input
                {...register("block", {
                  required: "Block is required",
                  maxLength: {
                    value: 50,
                    message: "Block should not exceed 50 characters",
                  },
                })}
                className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                type="text"
                placeholder="Block"
              />
              {errors.block && (
                <p className="text-red-500 text-sm">{errors.block.message}</p>
              )}
              </div>
            </div>
            <div className="w-full mt-4 md:mt-8 md:flex gap-x-8">
              <div className="flex flex-col gap-y-3">
                <label className="text-[#231F20] text-2xl font-semibold">
                  Sector
                </label>
                <input
                {...register("sector", {
                  required: "Sector is required",
                  maxLength: {
                    value: 50,
                    message: "Sector should not exceed 50 characters",
                  },
                })}
                className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                type="text"
                placeholder="Sector"
              />
              {errors.sector && (
                <p className="text-red-500 text-sm">{errors.sector.message}</p>
              )}
              </div>
              <div className="flex flex-col gap-y-3 my-4 md:my-0">
                <label className="text-[#231F20] text-2xl font-semibold">
                  Area
                </label>
                <input
                {...register("area", {
                  required: "Area is required",
                  maxLength: {
                    value: 50,
                    message: "Area should not exceed 50 characters",
                  },
                })}
                className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                type="text"
                placeholder="Area"
              />
              {errors.area && (
                <p className="text-red-500 text-sm">{errors.area.message}</p>
              )}
              </div>

              <div className="flex flex-col gap-y-3">
                <label className="text-[#231F20] text-2xl font-semibold">
                  City
                </label>
                <input
                {...register("city", {
                  required: "City is required",
                  maxLength: {
                    value: 50,
                    message: "City should not exceed 50 characters",
                  },
                })}
                className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                type="text"
                placeholder="City"
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city.message}</p>
              )}
              </div>
            </div>
            <div className="w-full mt-4 md:mt-8 md:flex gap-x-8">
              <div className="flex flex-col gap-y-3">
                <label className="text-[#231F20] text-2xl font-semibold">
                  State / region
                </label>
                <input
                {...register("stateRegion", {
                  required: "State / region is required",
                  maxLength: {
                    value: 50,
                    message: "State / region should not exceed 50 characters",
                  },
                })}
                className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                type="text"
                placeholder="State / region"
              />
              {errors.stateRegion && (
                <p className="text-red-500 text-sm">
                  {errors.stateRegion.message}
                </p>
              )}
              </div>
              <div className="flex flex-col gap-y-3 my-4 md:my-0">
                <label className="text-[#231F20] text-2xl font-semibold">
                  Zip / Postal Code
                </label>
                <input
                {...register("zipCode", {
                  required: "Zip / Postal Code is required",
                  maxLength: {
                    value: 20,
                    message:
                      "Zip / Postal Code should not exceed 20 characters",
                  },
                })}
                className="md:w-[316px] md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none"
                type="text"
                placeholder="Zip / Postal Code"
              />
              {errors.zipCode && (
                <p className="text-red-500 text-sm">{errors.zipCode.message}</p>
              )}
              </div>

              <div className="flex flex-col gap-y-3">
                <label className="text-[#231F20] text-2xl font-semibold">
                  Country
                </label>
                <select
                {...register("country", { required: "Country is required" })}
                className="md:w-[316px] md:h-[80px] select py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-[#808080]"
              >
                <option value="">Select Country</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="India">India</option>
                <option value="Nepal">Nepal</option>
                <option value="Pakistan">Pakistan</option>
                <option value="China">China</option>
                <option value="Japan">Japan</option>
              </select>
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country.message}</p>
              )}
              </div>
            </div>
            <div className="mt-4 md:mt-8">
            <div className="flex flex-col gap-y-3">
        <label className="text-[#231F20] text-2xl font-semibold">
          Participation in Other Exhibitions
        </label>
        <input
          {...register("exhibitionsParticipation", {
            required: "Participation in Other Exhibitions is required",
            maxLength: {
              value: 200,
              message: "Exhibitions Participation should not exceed 200 characters",
            },
          })}
          className={`w-full md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none ${
            errors.exhibitionsParticipation ? "border-red-500" : ""
          }`}
          type="text"
          placeholder="Participation in Other Exhibitions"
        />
        {errors.exhibitionsParticipation && (
          <p className="text-red-500 text-sm">
            {errors.exhibitionsParticipation.message}
          </p>
        )}
      </div>
            </div>
            <div className="mt-4 md:mt-8">
            <div className="flex flex-col gap-y-3">
        <label className="text-[#231F20] text-2xl font-semibold">
          Type of business relation you are looking for
        </label>
        <input
          {...register("businessRelationType", {
            required: "Business Relation Type is required",
            maxLength: {
              value: 150,
              message: "Business Relation Type should not exceed 150 characters",
            },
          })}
          className={`w-full md:h-[80px] py-2 px-3 text-[#808080] text-2xl border-[0.5px] border-[#231F20] rounded-md focus:outline-none ${
            errors.businessRelationType ? "border-red-500" : ""
          }`}
          type="text"
          placeholder="Type of business relation you are looking for"
        />
        {errors.businessRelationType && (
          <p className="text-red-500 text-sm">
            {errors.businessRelationType.message}
          </p>
        )}
      </div>
            </div>
          </div>

          <div>
            <h1 className="text-[32px] font-bold uppercase my-8 md:my-20">
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
              <div className="bg-[#231F20] text-white md:flex justify-between items-center px-8 py-9 rounded-lg">
                <div>
                  <p className="text-xs font-medium mb-8 md:mb-0">
                    Submitting this application does not guarantee your spot in
                    Bangladesh Apparel Expo.
                    <br className="hidden md:block" />
                    If you face any difficulties to fill up exhibitor
                    registration form or login with correct information,
                    <br className="hidden md:block" />
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
