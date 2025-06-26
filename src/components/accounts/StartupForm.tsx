import React, { useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FiAlertCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

// 🔒 Validation schema
const schema = yup.object({
  companyName: yup.string().required("Required").min(3, "Min 3 chars"),
  businessType: yup.string().required("Required"),
  industrySector: yup.string().required("Required"),
  businessModel: yup.string().required("Required"),
  companyStage: yup.string().oneOf(["Early", "Growth", "Mature"]).required("Required"),
  minFunding: yup.number().typeError("Must be a number").required().min(0),
  maxFunding: yup.number().typeError("Must be a number").required()
    .moreThan(yup.ref("minFunding"), "Must be greater than Min"),
  state: yup.string().required("Required"),
  city: yup.string().required("Required"),
  referrals: yup.array().of(yup.string()).min(1, "Pick at least one"),
});

// 🌆 Cities per state
const citiesByState: Record<string, string[]> = {
  "Madhya Pradesh": ["Indore", "Bhopal", "Ujjain"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
};

type FormValues = yup.InferType<typeof schema>;

const CompanyForm = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, watch, control, formState: { errors, isValid, isDirty } } = useForm<FormValues>({
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
  const cityOptions = useMemo(() => citiesByState[selectedState] || [], [selectedState]);

  const onSubmit = (data: FormValues) => {
    const formData = new FormData();
    Object.entries(data).forEach(([k, v]) => {
      if (Array.isArray(v)) v.forEach(val => formData.append(k, val));
      else formData.append(k, String(v));
    });
    for (const [k, v] of formData.entries()) console.log(k, v);
    navigate("/feed");
  };

  return (
    <>
      {/* Progress */}
      <div className="w-full h-[8px] mt-5 mb-5 flex gap-1">
        {Array(6).fill(0).map((_, i) => (
          <progress key={i} value={i === 0 ? 100 : 0} max={100}
            className="rounded-[6px] bg-[#C7D3EB] w-1/6 h-[6.5px]" />
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-6">
        {[
          { label: "Company Name", name: "companyName", type: "text", placeholder: "Enter your company name" },
          { label: "Business Type", name: "businessType", type: "select", options: ["manufacturer", "Wholesaler", "Exporter",
            "Importer", "Distributor", "Retailer", "Service Provider", "Trader", "Supplier", "other"
          ] },
          { label: "Industry & Sector", name: "industrySector", type: "select", options: ["Telecom Equipment & Goods", "Sports Goods, Toys & Games", "Security Systems & Services", "Security Systems & Services", "Herbal & Ayurvedic Products", "Fashion Accessories & Gear", "Computer & IT Solutions", "Gems & Jewelry", 
            "Engineering Services", "Home Textile & Furnishing", "Home Textile & Furnishing", "Cosmetics & Personal Care", "Books & Stationery", 
            "Textiles, Yarn & Fabrics", "Kitchen Utensils & Appliances", "Handicrafts & Decoratives", "Metals, Alloys & Minerals", "Hand & Machine Tools", "Housewares & Supplies", "Agriculture & Farming", "Automobile, Parts & Spares"] },
          { label: "Business Model", name: "businessModel", type: "select", options: ["B2B","B2C", "SAAS", "E- COMMERCE"," SUBSCRIPTION", "MARKETPLACE", "ADVERTISING BASED" ,"FRANCHISE","OTHER"] },
        ].map((field) => (
          <div key={field.name} className="w-full min-w-[952px] flex flex-col mx-auto">
            <label className="text-sm font-medium">{field.label}</label>
            <div className="mt-2">
              {field.type === "text" && (
                <input {...register(field.name as any)} placeholder={field.placeholder}
                  className="w-full h-[60px] border border-[#BED6FF] rounded-xl px-7 text-sm"
                />
              )}
              {field.type === "select" && (
                <select {...register(field.name as any)}
                  className="w-full h-[60px] border border-[#BED6FF] rounded-xl px-7 text-sm"
                >
                  <option value="">Select {field.label}</option>
                  {field.options.map(opt => (
                    <option className="" style={{}} key={opt} value={opt}>{opt.charAt(0).toUpperCase() + opt.slice(1)}</option>
                  ))}
                </select>
              )}
            </div>
            {errors[field.name as keyof FormValues] && (
              <p className="text-red-600 flex items-center gap-1 mt-1">
                <FiAlertCircle /> {errors[field.name as keyof FormValues]?.message}
              </p>
            )}
          </div>
        ))}

        {/* Stage */}
        <div className="w-full min-w-[952px] flex flex-col mx-auto">
          <label className="text-sm font-medium">Stage of Company</label>
          <Controller name="companyStage" control={control} render={({ field }) => (
            <div className="flex gap-3 mt-2">
              {["Early", "Growth", "Mature"].map(stage => (
                <button key={stage} type="button"
                  className={`px-2 py-1 rounded-xl ${
                    field.value === stage ? "bg-[#bce2fd]" : "bg-[#EAF6FF]"
                  } border border-[#BED6FF] text-sm`}
                  onClick={() => field.onChange(stage)}>
                  {stage} stage
                </button>
              ))}
            </div>
          )} />
          {errors.companyStage && (
            <p className="text-red-600 flex items-center gap-1 mt-1">
              <FiAlertCircle /> {errors.companyStage.message}
            </p>
          )}
        </div>

        {/* Funding */}
        <div className="w-full min-w-[952px] flex flex-col mx-auto">
          <label className="text-sm font-medium">Amount Required for Funding</label>
          <div className="flex items-center justify-between mt-2">
            {["minFunding", "maxFunding"].map(name => (
              <input key={name} type="number" {...register(name as any)} placeholder={name === "minFunding" ? "Min" : "Max"}
                className="w-[40%] h-[46px] text-center border border-[#BED6FF] rounded-xl text-sm" />
            ))}
          </div>
          {["minFunding", "maxFunding"].map(name => (
            errors[name as keyof FormValues] && (
              <p key={name} className="text-red-600 flex items-center gap-1 mt-1">
                <FiAlertCircle /> {errors[name as keyof FormValues]?.message}
              </p>
            )
          ))}
        </div>

        {/* State & City */}
        <div className="w-full min-w-[952px] flex flex-col mx-auto">
          <label className="text-sm font-medium">State</label>
          <select {...register("state")}
            className="w-full h-[60px] mt-2 border border-[#BED6FF] rounded-xl px-7 text-sm">
            <option value="">Select State</option>
            {Object.keys(citiesByState).map(st => (
              <option key={st}>{st}</option>
            ))}
          </select>
          {errors.state && (
            <p className="text-red-600 flex items-center gap-1 mt-1">
              <FiAlertCircle /> {errors.state.message}
            </p>
          )}

          <label className="text-sm font-medium mt-4">City</label>
          <select {...register("city")}
            disabled={!cityOptions.length}
            className="w-full h-[60px] mt-2 border border-[#BED6FF] rounded-xl px-7 text-sm">
            <option value="">Select City</option>
            {cityOptions.map(city => (
              <option key={city}>{city}</option>
            ))}
          </select>
          {errors.city && (
            <p className="text-red-600 flex items-center gap-1 mt-1">
              <FiAlertCircle /> {errors.city.message}
            </p>
          )}
        </div>

        {/* Referrals */}
        <div className="w-full min-w-[952px] flex flex-col mx-auto">
          <p className="text-sm font-medium mb-2">How Do You Hear About Us</p>
          <div className="space-y-2">
            {["Facebook", "Instagram", "YouTube", "Friend", "Others"].map(ref => (
              <label key={ref} className="flex items-center gap-2">
                <input type="checkbox" value={ref} {...register("referrals")}
                  className="h-4 w-4 border-gray-300 rounded" />
                {ref}
              </label>
            ))}
          </div>
          {errors.referrals && (
            <p className="text-red-600 flex items-center gap-1 mt-1">
              <FiAlertCircle /> {errors.referrals.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="w-full min-w-[952px] flex justify-end mx-auto mt-4">
          <button type="submit" disabled={!isDirty || !isValid}
            className={`w-[122px] h-[51px] rounded-xl font-semibold text-lg
              ${isDirty && isValid ? "bg-[#1C4BC4] text-white" : "bg-gray-300 text-gray-600 cursor-not-allowed"}`}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CompanyForm;
