// PhoneInputWithModal.jsx
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import postData from "../../hooks/usePost";
import { Value } from "@radix-ui/react-select";
import SearchIcon from "/searchWhite.png";
import { useLoading, Spinner } from "../../hooks/useLoading";
import { ArrowLeftCircleIcon } from "lucide-react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { error } from "console";
import { Country } from "country-state-city";
import * as Flags from "country-flag-icons/react/3x2";

// const countries = [
//   {
//     id: "IN",
//     name: "India",
//     dial_code: "+91",
//     flagSvgUrl: "https://flagsapi.com/IN/flat/64.png",
//   },
//   {
//     id: "AF",
//     name: "Afghanistan",
//     dial_code: "+93",
//     flagSvgUrl: "https://flagsapi.com/AF/flat/64.png",
//   },
//   {
//     id: "AL",
//     name: "Albania",
//     dial_code: "+355",
//     flagSvgUrl: "https://flagsapi.com/AL/flat/64.png",
//   },
//   {
//     id: "DZ",
//     name: "Algeria",
//     dial_code: "+213",
//     flagSvgUrl: "https://flagsapi.com/DZ/flat/64.png",
//   },
//   {
//     id: "AD",
//     name: "Andorra",
//     dial_code: "+376",
//     flagSvgUrl: "https://flagsapi.com/AD/flat/64.png",
//   },
//   {
//     id: "AO",
//     name: "Angola",
//     dial_code: "+244",
//     flagSvgUrl: "https://flagsapi.com/AO/flat/64.png",
//   },
//   {
//     id: "AG",
//     name: "Antigua & Barbuda",
//     dial_code: "+1268",
//     flagSvgUrl: "https://flagsapi.com/AG/flat/64.png",
//   },
//   {
//     id: "AR",
//     name: "Argentina",
//     dial_code: "+54",
//     flagSvgUrl: "https://flagsapi.com/AR/flat/64.png",
//   },
//   {
//     id: "AM",
//     name: "Armenia",
//     dial_code: "+374",
//     flagSvgUrl: "https://flagsapi.com/AM/flat/64.png",
//   },
//   {
//     id: "AU",
//     name: "Australia",
//     dial_code: "+61",
//     flagSvgUrl: "https://flagsapi.com/AU/flat/64.png",
//   },
//   {
//     id: "AT",
//     name: "Austria",
//     dial_code: "+43",
//     flagSvgUrl: "https://flagsapi.com/AT/flat/64.png",
//   },
//   {
//     id: "BD",
//     name: "Bangladesh",
//     dial_code: "+880",
//     flagSvgUrl: "https://flagsapi.com/BD/flat/64.png",
//   },
//   {
//     id: "BB",
//     name: "Barbados",
//     dial_code: "+1246",
//     flagSvgUrl: "https://flagsapi.com/BB/flat/64.png",
//   },
//   {
//     id: "BY",
//     name: "Belarus",
//     dial_code: "+375",
//     flagSvgUrl: "https://flagsapi.com/BY/flat/64.png",
//   },
//   {
//     id: "BE",
//     name: "Belgium",
//     dial_code: "+32",
//     flagSvgUrl: "https://flagsapi.com/BE/flat/64.png",
//   },
//   {
//     id: "BZ",
//     name: "Belize",
//     dial_code: "+501",
//     flagSvgUrl: "https://flagsapi.com/BZ/flat/64.png",
//   },
//   {
//     id: "BJ",
//     name: "Benin",
//     dial_code: "+229",
//     flagSvgUrl: "https://flagsapi.com/BJ/flat/64.png",
//   },
//   {
//     id: "BT",
//     name: "Bhutan",
//     dial_code: "+975",
//     flagSvgUrl: "https://flagsapi.com/BT/flat/64.png",
//   },
//   {
//     id: "BO",
//     name: "Bolivia",
//     dial_code: "+591",
//     flagSvgUrl: "https://flagsapi.com/BO/flat/64.png",
//   },
//   {
//     id: "BA",
//     name: "Bosnia & Herzegovina",
//     dial_code: "+387",
//     flagSvgUrl: "https://flagsapi.com/BA/flat/64.png",
//   },
//   {
//     id: "BW",
//     name: "Botswana",
//     dial_code: "+267",
//     flagSvgUrl: "https://flagsapi.com/BW/flat/64.png",
//   },
//   {
//     id: "BR",
//     name: "Brazil",
//     dial_code: "+55",
//     flagSvgUrl: "https://flagsapi.com/BR/flat/64.png",
//   },
//   {
//     id: "CA",
//     name: "Canada",
//     dial_code: "+1",
//     flagSvgUrl: "https://flagsapi.com/CA/flat/64.png",
//   },
//   {
//     id: "QA",
//     name: "Qatar",
//     dial_code: "+974",
//     flagSvgUrl: "https://flagsapi.com/QA/flat/64.png",
//   },
//   {
//     id: "CN",
//     name: "China",
//     dial_code: "+86",
//     flagSvgUrl: "https://flagsapi.com/CN/flat/64.png",
//   },
//   {
//     id: "EG",
//     name: "Egypt",
//     dial_code: "+20",
//     flagSvgUrl: "https://flagsapi.com/EG/flat/64.png",
//   },
//   {
//     id: "FR",
//     name: "France",
//     dial_code: "+33",
//     flagSvgUrl: "https://flagsapi.com/FR/flat/64.png",
//   },
//   {
//     id: "DE",
//     name: "Germany",
//     dial_code: "+49",
//     flagSvgUrl: "https://flagsapi.com/DE/flat/64.png",
//   },
//   {
//     id: "ID",
//     name: "Indonesia",
//     dial_code: "+62",
//     flagSvgUrl: "https://flagsapi.com/ID/flat/64.png",
//   },
//   {
//     id: "JP",
//     name: "Japan",
//     dial_code: "+81",
//     flagSvgUrl: "https://flagsapi.com/JP/flat/64.png",
//   },
//   {
//     id: "KE",
//     name: "Kenya",
//     dial_code: "+254",
//     flagSvgUrl: "https://flagsapi.com/KE/flat/64.png",
//   },
//   {
//     id: "KR",
//     name: "South Korea",
//     dial_code: "+82",
//     flagSvgUrl: "https://flagsapi.com/KR/flat/64.png",
//   },
//   {
//     id: "MX",
//     name: "Mexico",
//     dial_code: "+52",
//     flagSvgUrl: "https://flagsapi.com/MX/flat/64.png",
//   },
//   {
//     id: "MY",
//     name: "Malaysia",
//     dial_code: "+60",
//     flagSvgUrl: "https://flagsapi.com/MY/flat/64.png",
//   },
//   {
//     id: "NG",
//     name: "Nigeria",
//     dial_code: "+234",
//     flagSvgUrl: "https://flagsapi.com/NG/flat/64.png",
//   },
//   {
//     id: "PK",
//     name: "Pakistan",
//     dial_code: "+92",
//     flagSvgUrl: "https://flagsapi.com/PK/flat/64.png",
//   },
//   {
//     id: "PH",
//     name: "Philippines",
//     dial_code: "+63",
//     flagSvgUrl: "https://flagsapi.com/PH/flat/64.png",
//   },
//   {
//     id: "PL",
//     name: "Poland",
//     dial_code: "+48",
//     flagSvgUrl: "https://flagsapi.com/PL/flat/64.png",
//   },
//   {
//     id: "PT",
//     name: "Portugal",
//     dial_code: "+351",
//     flagSvgUrl: "https://flagsapi.com/PT/flat/64.png",
//   },
//   {
//     id: "RU",
//     name: "Russia",
//     dial_code: "+7",
//     flagSvgUrl: "https://flagsapi.com/RU/flat/64.png",
//   },
//   {
//     id: "SA",
//     name: "Saudi Arabia",
//     dial_code: "+966",
//     flagSvgUrl: "https://flagsapi.com/SA/flat/64.png",
//   },
//   {
//     id: "SG",
//     name: "Singapore",
//     dial_code: "+65",
//     flagSvgUrl: "https://flagsapi.com/SG/flat/64.png",
//   },
//   {
//     id: "ZA",
//     name: "South Africa",
//     dial_code: "+27",
//     flagSvgUrl: "https://flagsapi.com/ZA/flat/64.png",
//   },
//   {
//     id: "ES",
//     name: "Spain",
//     dial_code: "+34",
//     flagSvgUrl: "https://flagsapi.com/ES/flat/64.png",
//   },
//   {
//     id: "SE",
//     name: "Sweden",
//     dial_code: "+46",
//     flagSvgUrl: "https://flagsapi.com/SE/flat/64.png",
//   },
//   {
//     id: "CH",
//     name: "Switzerland",
//     dial_code: "+41",
//     flagSvgUrl: "https://flagsapi.com/CH/flat/64.png",
//   },
//   {
//     id: "TH",
//     name: "Thailand",
//     dial_code: "+66",
//     flagSvgUrl: "https://flagsapi.com/TH/flat/64.png",
//   },
//   {
//     id: "TR",
//     name: "Turkey",
//     dial_code: "+90",
//     flagSvgUrl: "https://flagsapi.com/TR/flat/64.png",
//   },
//   {
//     id: "UA",
//     name: "Ukraine",
//     dial_code: "+380",
//     flagSvgUrl: "https://flagsapi.com/UA/flat/64.png",
//   },
//   {
//     id: "GB",
//     name: "United Kingdom",
//     dial_code: "+44",
//     flagSvgUrl: "https://flagsapi.com/GB/flat/64.png",
//   },
//   {
//     id: "US",
//     name: "United States",
//     dial_code: "+1",
//     flagSvgUrl: "https://flagsapi.com/US/flat/64.png",
//   },
// ];
type CountryOption = {
  isoCode: string;
  name: string;
  countryCode?: string;
  dialCode?: string;
};

const countries: CountryOption[] = Country.getAllCountries().map((c) => ({
  isoCode: c.isoCode,
  name: c.name,
  countryCode: c.isoCode,
  dialCode: c.phonecode,
}));

export default function PhoneInputWithModal() {
  const [selected, setSelected] = useState<CountryOption | null>(countries[100]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const filtered = countries.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const navigate = useNavigate();
  const onBack = () => navigate(-1);

  const [phoneNumber, setPhoneNumber] = useState({
    mobile: "",
  });
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({ phone });
  const formRef = useRef();
  const { hookHandleSubmit, showError, showSuccess } = postData();

  const validatePhone = (v) =>
    !v
      ? "Please Enter phone"
      : !/^\d{10}$/.test(v) && "Please Phone must be 10 digits";

  const onPhoneChange = (e) => {
    const v = e.target.value;
    setErrors((prev) => ({ ...prev, phone: validatePhone(v) || "" }));
    setPhone(v);
  };

  const { loading, wrap } = useLoading();

  const selectedIndex = countries.findIndex(
    (c) => c.isoCode === selected?.isoCode
  );
  //console.log(selectedIndex)
  const submitHandler = async (e) => {
    e.preventDefault();
    //console.log(phoneNumber);
    wrap(async () => {
      // simulate async call
      const newErrs = {
        phone: validatePhone(phone),
      };
      Object.keys(newErrs).forEach((k) => {
        if (!newErrs[k]) delete newErrs[k];
      });
      if (Object.keys(newErrs).length) {
        setErrors(newErrs);
        formRef.current.classList.remove("animationsubmit");
        void formRef.current.offsetWidth;
        formRef.current.classList.add("animationsubmit");
      }
      // alert("Invalid!");
      else {
        await new Promise((r) => setTimeout(r, 1000));

        setPhoneNumber({ ...phoneNumber, mobile: phone });
        const updatedPhoneNumber = { ...phoneNumber, mobile: phone };
        console.log(updatedPhoneNumber);

        sessionStorage.setItem("mobile", updatedPhoneNumber.mobile);
        //alert("Submitted!");

        hookHandleSubmit(
          updatedPhoneNumber,
          `${import.meta.env.VITE_BACKEND_URL}/auth/register/mobile`,
          `/mobileotp`
        );
      }
    });
  };

  // useEffect(() => {
  //   if (showSuccess) {
  //     // console.log(showSuccess);
  //     toast.success(showSuccess);
  //     sessionStorage.setItem("mobile", phoneNumber.mobile);
  //   } else if (showError) {
  //     toast.error(showError);
  //     // console.log(showError);
  //   }
  // }, [showSuccess, showError]);

  return (
    <>
      <div className="custom-bg max-w-screen max-h-screen w-full h-full flex justify-center items-center relative">
        <div className="absolute inset-0 z-50 flex justify-center items-center">
          <div
            ref={formRef}
            className="glass-card-phone max-w-screen-lg p-8 max-h-screen bg-transparent text-[#FFFF] rounded-3xl border-[2px] border-[#d5d0f1]"
          >
            <div className="w-full">
              <div className="w-full ">
                <p className="w-full font-bold flex justify-between items-center text-[26px] tracking-[0.2px]">
                  Enter Your Number
                  <span className="cursor-pointer" onClick={onBack}>
                    <ArrowLeftCircleIcon />
                  </span>
                </p>
                <p className="text-sm font-normal w-full tracking-[0.2px] mt-1">
                  We collect your phone number to verify your identity, enhance
                  security, and ensure a smooth onboarding experience.
                </p>
              </div>
              <div className="w-full mt-4">
                <form
                  onSubmit={submitHandler}
                  className="w-full flex flex-col gap-4"
                >
                  <div className="w-full h-[80px]">
                    <label
                      htmlFor="name"
                      className="w-full text-[14px] font-medium tracking-[0.2px]"
                    >
                      Phone Number
                    </label>
                    <div
                      className={`flex border-2 focus:border-2 rounded-xl overflow-hidden ${
                        errors.phone ? "invalidInputBox" : "border-blue-300 "
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpen(true)}
                        className="flex w-3/12 h-[46px] items-center justify-center bg-trasparent text-[16px] border-r"
                      >
                        {selected && (
                          <div
                            onClick={() => setSelected(selected)}
                            className="flex items-center gap-2"
                          >
                            {" "}
                            {React.createElement(
                              (Flags as any)[selected.isoCode],
                              { title: selected.name, style: { width: "24px" } }
                            )}{" "}
                            {selected.dialCode.charAt(0) !== "+"
                              ? `+${selected.dialCode}`
                              : selected.dialCode}
                          </div>
                        )}
                      </button>
                      <input
                        type="number"
                        name="mobile"
                        value={phone}
                        onChange={onPhoneChange}
                        placeholder="Enter your phone number"
                        className={`"phoneDialInput w-8/12 px-3 py-2 scrollbar-hide required:normal-nums text-sm outline-none bg-transparent placeholder:text-white placeholder:opacity-75" ${
                          errors.phone ? "" : "validInputBox"
                        }`}
                        maxLength={10}
                      />
                    </div>
                    {errors.phone ? (
                      <p className="inputBoxError">{errors.phone}</p>
                    ) : (
                      <p className="inputBoxError">{showError}{showSuccess}</p>)}
                  </div>
                  <div className="">
                    <div className="mt-1 flex relative items-center">
                      <button
                        type="submit"
                        className="text-[#FFFF] text-md font-semibold h-[46px] w-full px-auto py-2 rounded-xl bg-blue-800 border border-transparent"
                      >
                        {loading && <Spinner />}
                        {loading ? "" : "Next"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <Dialog open={open} onClose={setOpen} className="relative z-50 bg-transparent opacity-100">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-trasparent transition-opacity data-closed:opacity-1 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />
        {/* {isModalOpen && ( */}
        <div className="fixed inset-0 bg-opacity-100 flex items-center justify-center z-50">
          <DialogPanel className="w-[604px] shadow-md bg-transparent shadow-blue-400 h-[530px] scrollbar-hide glass-bg-mobile rounded-xl p-4 max-h-[80%] overflow-y-auto">
            <button
              onClick={() => setOpen(false)}
              className="text-white text-[16px] mb-4"
            >
              <span className="font-[22px]">&lt;</span> Back
            </button>
            <div className="w-full text-white mt-4 rounded-xl p-3 flex border focus:border-[#BED6FF] border-[#BED6FF] px-4">
              <img src={SearchIcon} alt="" className="w-5 h-5" />
              <input
                type="text"
                placeholder="Search for Countries"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="outline-none font-normal ml-1 placeholder:text-white px-2 text-sm w-full bg-transparent"
              />
            </div>

            <ul className="mt-6">
              {filtered.map((c) => (
                <li
                  key={c.isoCode}
                  onClick={() => {
                    setSelected(c);
                    setOpen(false);
                    setSearch("");
                  }}
                  className="flex items-center rounded-[5px] text-white text-sm font-normal px-3 py-2 hover:bg-blue-700 cursor-pointer"
                >
                  {React.createElement((Flags as any)[c.isoCode], {
                    title: c.name,
                    style: { width: "25px", marginRight: "12px" },
                  })}{" "}
                  {c.name}
                  {c.dialCode.charAt(0) !== "+" ? `+${c.dialCode}` : c.dialCode}
                </li>
              ))}
            </ul>
          </DialogPanel>
        </div>
        {/* )} */}
      </Dialog>
    </>
  );
}
