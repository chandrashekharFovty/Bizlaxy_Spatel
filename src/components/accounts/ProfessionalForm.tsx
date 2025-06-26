import React, { useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FiAlertCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

// 1. Yup schema
const schema = yup.object({
  companyName: yup.string().required("Company Name is required").min(3, "At least 3 characters"),
  businessType: yup.string().required("Select a Business Type"),
  industrySector: yup.string().required("Select an Industry/Sector"),
  businessModel: yup.string().required("Select a Business Model"),
  companyStage: yup.string().oneOf(["Early", "Growth", "Mature"], "Select a Company Stage").required(),
  minFunding: yup.number().typeError("Min must be a number").required("Min funding required").min(0),
  maxFunding: yup.number().typeError("Max must be a number").required("Max funding required")
    .moreThan(yup.ref("minFunding"), "Max must be greater than Min"),
  state: yup.string().required("Select a State"),
  city: yup.string().required("Select a City"),
  referrals: yup.array().of(yup.string()).min(1, "Pick at least one"),
});

// 2. City options by state
const citiesByState: Record<string, string[]> = {
  "Madhya Pradesh": ["Indore", "Bhopal", "Ujjain"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
};

type FormValues = yup.InferType<typeof schema>;

const CompanyForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid, isDirty },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      companyName: "",
      businessType: "",
      industrySector: "",
      businessModel: "",
      companyStage: "" as any,
      minFunding: 0,
      maxFunding: 0,
      state: "",
      city: "",
      referrals: [],
    },
  });

  const selectedState = watch("state");

  const cityOptions = useMemo(
    () => citiesByState[selectedState] || [],
    [selectedState]
  );

  const onSubmit = (values: FormValues) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, val]) => {
      if (Array.isArray(val)) {
        val.forEach((v) => formData.append(key, v));
      } else {
        formData.append(key, String(val));
      }
    });
    for (const [k, v] of formData.entries()) console.log(k, v);
    // Example: fetch("/api/submit", { method: "POST", body: formData })
    navigate("/feed");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Company Name */}
      <div>
        <label>Company Name</label>
        <input {...register("companyName")} placeholder="Enter your company name" />
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

      {/* Industry & Sector */}
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
          name="companyStage"
          control={control}
          render={({ field }) => (
            <div className="flex gap-2">
              {["Early", "Growth", "Mature"].map((stage) => (
                <button
                  type="button"
                  key={stage}
                  className={`px-3 py-1 rounded ${
                    field.value === stage ? "bg-blue-600 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => field.onChange(stage)}
                >
                  {stage}
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
          {Object.keys(citiesByState).map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
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
        <select {...register("city")} disabled={!cityOptions.length}>
          <option value="">Select City</option>
          {cityOptions.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
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
        {["Facebook", "Instagram", "YouTube", "Friend", "Others"].map((opt) => (
          <label key={opt} className="inline-flex items-center gap-1 mr-4">
            <input type="checkbox" value={opt} {...register("referrals")} />
            {opt}
          </label>
        ))}
        {errors.referrals && (
          <p className="text-red-600 flex items-center gap-1">
            <FiAlertCircle /> {errors.referrals.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!isDirty || !isValid}
        className={`px-6 py-2 rounded ${
          isDirty && isValid
            ? "bg-blue-600 text-white"
            : "bg-gray-300 text-gray-600 cursor-not-allowed"
        }`}
      >
        Submit
      </button>
    </form>
  );
};

export default CompanyForm;
