import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FiAlertCircle } from "react-icons/fi"; // red warning icon

const schema = yup.object({
  companyName: yup.string().required("Company Name is required"),
  businessType: yup.string().required("Select a Business Type"),
  industrySector: yup.string().required("Select an Industry/Sector"),
  businessModel: yup.string().required("Select a Business Model"),
  companyStage: yup
    .string()
    .oneOf(["early", "growth", "mature"], "Select a Company Stage")
    .required("Select Company Stage"),
  minFunding: yup
    .number()
    .typeError("Min must be a number")
    .required("Min funding is required")
    .min(0),
  maxFunding: yup
    .number()
    .typeError("Max must be a number")
    .required("Max funding is required")
    .moreThan(yup.ref("minFunding"), "Max must be greater than Min"),
  state: yup.string().required("Select a State"),
  city: yup.string().required("Select a City"),
  referrals: yup
    .array()
    .of(yup.string())
    .min(1, "Select at least one referral source"),
});

type FormData = yup.InferType<typeof schema>;

const CompanyForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange", // validates on every change :contentReference[oaicite:1]{index=1}
  });

  const onSubmit = (data) => {
    // build FormData, submit, navigate...
    const fData = new FormData();
    for (const key in data) {
      const value = data[key];
      if (Array.isArray(value)) {
        value.forEach((item) => fData.append(key, item));
      } else {
        fData.append(key, value as any);
      }
    }
    console.log("✅ Valid data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Company Name */}
      <div>
        <label>Company Name</label>
        <input {...register("companyName")} placeholder="Enter company name" />
        {errors.companyName && (
          <p className="text-red-600 flex items-center gap-1">
            <FiAlertCircle /> {errors.companyName.message}
          </p>
        )}
      </div>

      {/* Business Type */}
      <div>
        <label>Business Type</label>
        <select {...register("businessType")}>
          <option value="">Select Business Type</option>
          <option value="manufacturer">Manufacturer</option>
          <option value="retailer">Retailer</option>
          <option value="service">Service Provider</option>
        </select>
        {errors.businessType && (
          <p className="text-red-600 flex items-center gap-1">
            <FiAlertCircle /> {errors.businessType.message}
          </p>
        )}
      </div>

      {/* Industry */}
      <div>
        <label>Industry & Sector</label>
        <select {...register("industrySector")}>
          <option value="">Select Industry/Sector</option>
          <option value="tech">Technology</option>
          <option value="finance">Finance</option>
          <option value="health">Healthcare</option>
        </select>
        {errors.industrySector && (
          <p className="text-red-600 flex items-center gap-1">
            <FiAlertCircle /> {errors.industrySector.message}
          </p>
        )}
      </div>

      {/* Business Model */}
      <div>
        <label>Business Model</label>
        <select {...register("businessModel")}>
          <option value="">Select Business Model</option>
          <option value="b2b">B2B</option>
          <option value="b2c">B2C</option>
          <option value="d2c">D2C</option>
        </select>
        {errors.businessModel && (
          <p className="text-red-600 flex items-center gap-1">
            <FiAlertCircle /> {errors.businessModel.message}
          </p>
        )}
      </div>

      {/* Company Stage */}
      <div>
        <label>Company Stage</label>
        <Controller
          control={control}
          name="companyStage"
          render={({ field }) => (
            <div className="flex gap-2">
              {["early", "growth", "mature"].map((stage) => (
                <button
                  key={stage}
                  type="button"
                  className={`px-4 py-2 rounded ${
                    field.value === stage
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => field.onChange(stage)}
                >
                  {stage.charAt(0).toUpperCase() + stage.slice(1)} Stage
                </button>
              ))}
            </div>
          )}
        />
        {errors.companyStage && (
          <p className="text-red-600 flex items-center gap-1">
            <FiAlertCircle /> {errors.companyStage.message}
          </p>
        )}
      </div>

      {/* Funding Range */}
      <div>
        <label>Amount Required for Funding</label>
        <div className="flex items-center gap-2">
          <input type="number" {...register("minFunding")} placeholder="Min" />
          <span>—</span>
          <input type="number" {...register("maxFunding")} placeholder="Max" />
        </div>
        {errors.minFunding && (
          <p className="text-red-600 flex items-center gap-1">
            <FiAlertCircle /> {errors.minFunding.message}
          </p>
        )}
        {errors.maxFunding && (
          <p className="text-red-600 flex items-center gap-1">
            <FiAlertCircle /> {errors.maxFunding.message}
          </p>
        )}
      </div>

      {/* State */}
      <div>
        <label>State</label>
        <select {...register("state")}>
          <option value="">Select State</option>
          <option value="mp">Madhya Pradesh</option>
          <option value="gujarat">Gujarat</option>
          <option value="maharashtra">Maharashtra</option>
        </select>
        {errors.state && (
          <p className="text-red-600 flex items-center gap-1">
            <FiAlertCircle /> {errors.state.message}
          </p>
        )}
      </div>

      {/* City */}
      <div>
        <label>City</label>
        <select {...register("city")}>
          <option value="">Select City</option>
          <option value="indore">Indore</option>
          <option value="bhopal">Bhopal</option>
          <option value="ujjain">Ujjain</option>
        </select>
        {errors.city && (
          <p className="text-red-600 flex items-center gap-1">
            <FiAlertCircle /> {errors.city.message}
          </p>
        )}
      </div>

      {/* Referrals */}
      <div>
        <p>How Do You Hear About Us</p>
        {["Facebook", "Instagram", "Youtube", "Friend", "Others"].map((ref) => (
          <label key={ref} className="flex items-center gap-2">
            <input type="checkbox" value={ref} {...register("referrals")} />
            {ref}
          </label>
        ))}
        {errors.referrals && (
          <p className="text-red-600 flex items-center gap-1">
            <FiAlertCircle /> {errors.referrals.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={!isValid} // disabled until all fields valid :contentReference[oaicite:2]{index=2}
        className={`px-6 py-2 rounded ${
          isValid ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-600"
        }`}
      >
        Submit
      </button>
    </form>
  );
};

export default CompanyForm;
