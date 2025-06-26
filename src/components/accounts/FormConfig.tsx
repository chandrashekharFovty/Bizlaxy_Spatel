import { Form } from "radix-ui";

// formConfig.ts

export type UserType = 1 | 2 | 3 | 3 | 4 | 5 | 6 | 7; // etc.

// export interface FieldConfig {
//   name: string;
//   type: string;
//   label: string;
//   placeholder?: string;
// };

// export const formConfig: Record<UserType, FieldConfig[]> = {
//   1: [
//     {
//       name: "comapanyname",
//       type: "text",
//       label: "Company Name",
//       placeholder: "Enter your company name here",
//     },
//     {
//       name: "businesstype",
//       type: "text",
//       label: "Business Type",
//       placeholder: "Select Business Type",
//     },
//     {
//       name: "industrysector",
//       type: "text",
//       label: "Industry & Sector",
//       placeholder: "Select Industry/Sector",
//     },
//     {
//       name: "businessmodel",
//       type: "text",
//       label: "Business Model",
//       placeholder: "Select Business Model",
//     },
//   ],
//   2: [
//     { name: "firstName", type: "text", label: "Investor", placeholder: "John" },
//   ],
//   3: [
//     {
//       name: "Startup",
//       type: "text",
//       label: "Startup",
//       placeholder: "Your nickname",
//     },
//   ],
//   4: [
//     {
//       name: "Learner",
//       type: "text",
//       label: "Learner",
//       placeholder: "Your nickname",
//     },
//   ],
//   5: [
//     {
//       name: "Startup Idea",
//       type: "text",
//       label: "StartupIdea",
//       placeholder: "Your nickname",
//     },
//   ],
//   6: [
//     {
//       name: "Business Owner",
//       type: "text",
//       label: "BusinessOwner",
//       placeholder: "Your nickname",
//     },
//   ],
//   7: [
//     {
//       name: "Professional",
//       type: "text",
//       label: "Professional",
//       placeholder: "Your nickname",
//     },
//   ],
//   // add the rest of your types...
// };

export interface FieldHead {
  formheading: string;
  formdescription: string;
};

export const formHeadConfig: Record<UserType, FieldHead[]> = {
  1: [
    {
      formheading: "Complete Your Company Profile",
      formdescription:
        "Tell us more about your company to personalize your experience and unlock relevant business opportunities.",
    },
  ],
  2: [
    {
      formheading: "Complete Your Investor Profile",
      formdescription:
        "Tell us more about your company to personalize your experience and unlock relevant business opportunities.",
    },
  ],
  3: [
    {
      formheading: "Complete Your Startup Profile",
      formdescription:
        "Tell us more about your company to personalize your experience and unlock relevant business opportunities.",
    },
  ],
  4: [
    {
      formheading: "Complete Your Learner Profile",
      formdescription:
        "Tell us more about your company to personalize your experience and unlock relevant business opportunities.",
    },
  ],
  5: [
    {
      formheading: "Complete Your Startup Idea Profile",
      formdescription:
        "Tell us more about your company to personalize your experience and unlock relevant business opportunities.",
    },
  ],
  6: [
    {
      formheading: "Complete Your Business Owner Profile",
      formdescription:
        "Tell us more about your company to personalize your experience and unlock relevant business opportunities.",
    },
  ],
  7: [
    {
      formheading: "Complete Your Professional Profile",
      formdescription:
        "Tell us more about your company to personalize your experience and unlock relevant business opportunities.",
    },
  ],
  // add the rest of your types...
};

// export interface FieldOptionConfig{
   
// }
// export const formSelectors: Record<UserType, FieldOptionConfig[]> = {};
