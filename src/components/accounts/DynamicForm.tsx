import React from "react";
import { FieldHead, formHeadConfig, UserType } from "./FormConfig";
import InfoCarousel from "./InfoCrousel";
import CompanyForm from "./infoForms/CompanyForm";
import ProfessionalForm from "./infoForms/ProfessionalForm";
import LearnerForm from "./infoForms/LearnerForm";
import InvestorForm from "./infoForms/StartupForm";
import StartupIdeaFrom from "./infoForms/StartupForm";
import BusinessOwnerForm from "./infoForms/StartupForm";
import StartupForm from "./infoForms/StartupForm";

const InfoBox = [
  {
    title: "Connect & Grow Together",
    descp:
      "Build meaningful social and professional connections, explore, chat, and collaborate with like-minded people.",
  },
  {
    title: "Explore New Opportunities",
    descp: "Find events, groups, and collaborations.",
  },
  {
    title: "Share & Learn",
    descp: "Share insights, ask questions, and grow your knowledge.",
  },
  // add all 7 entries here...
];
type Props = { userType: UserType };

export default function DynamicForm({ userType }: Props) {

  const headings = formHeadConfig[userType] || [];

  

  return (
    <div className="flex min-h-screen min-w-screen overflow-x-hidden">
      {/* Left side */}
      <div className="max-w-[500px] w-[420px] h-screen pt-[33%] fixed bg-blue-600 text-white flex overflow-hidden items-center justify-center">
        <InfoCarousel InfoBoxes={InfoBox} />
      </div>
      {/* Right side */}
      <div className="w-[1012px] mx-auto bg-white h-auto max-w-screen my-[60px] ml-[450px] mr-[50px]">
        {headings.map((headings: FieldHead) => (
          <div className="w-[952px] h-[58px] flex flex-col gap-[6px] mx-auto">
            <h3 className="text-2xl font-bold">{headings.formheading}</h3>
            <p className="text-[16px] font-normal text-gray-500">
              {headings.formdescription}
            </p>
          </div>
        ))}
       {userType === 1 ? <CompanyForm/> : ""}
       {userType === 2 ? <InvestorForm/> : ""}
       {userType === 3 ? <StartupForm/> : ""}
       {userType === 4 ? <LearnerForm/> : ""}
       {userType === 5 ? <StartupIdeaFrom/> : ""}
       {userType === 6 ? <BusinessOwnerForm/> : ""}
       {userType === 7 ? <ProfessionalForm/> : ""}
      </div>
    </div>
  );
}
