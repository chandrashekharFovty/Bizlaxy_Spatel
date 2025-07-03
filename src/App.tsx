import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner"; // Use if needed

import SignIn from "@/components/auth/SignIn";
import Register from "@/components/auth/Register";
import MobileRegister from "@/components/auth/MobileRegister";
import MobileOtpPage from "@/components/auth/MobileOtpPage";
import EmailRegister from "@/components/auth/EmailRegister";
import ForgotPassword from "@/components/auth/ForgotPassword";
import EmailOtpPage from "@/components/auth/EmailOtpPage";

import HomePage from "./pages/Homepage";
import ExplorePage from "./pages/ExplorePage";
import NotFound from "./pages/NotFound";
import Shop from "./pages/ShopPage";
import Pitch from "./pages/Pitch";
import EduvidPage from "./pages/EduvidPage";
import MessagePage from "./pages/MessagePage";
import Notifications from "./pages/Notifications";
import AddsManager from "./pages/AddsManager";

import Category from "./components/Shops/Categories";
import ProductList from "./components/Shops/ProductList";
import ProductCartDetial from "./components/Shops/ProductCardDetails";

import ProfilePager from "./pages/ProfilePager";
import Editprofile from "./components/profile/EditProfile";
import InvesterProfile from "./components/profile/InvesterProfile";
import InfoProfile from "./components/profile/InfoProfile";

import CreateAddOptions from "./components/addManagement/CreateAddOptions";
import Awareness from "./components/addManagement/Awareness";
import Custom from "./components/addManagement/Custom";
import Visiblity from "./components/addManagement/Visiblity";

import SelectAccountType from "./components/accounts/AccountTypeSelection";
import InfoForm from "./components/accounts/Info";

import Settings from "./DarkTheme/SettingsPanel";

import Product from "./components/feed/Product/Product";
import NextPages from "./components/feed/Product/Next-Pages";
import PriceInvetory from "./components/feed/Product/price-Inventory";
import Shipping from "./components/feed/Product/Shipping";
import MoreDetial from "./components/feed/Product/MoreDetial";

import PrivateRoute from "./routes/PrivateRoute";
import VoiceCall from "./components/chatMessage/VoiceCall";
import VideoCall from "./components/chatMessage/VideoCall";
import MostView from "./components/Shops/MostView";
import ShopProduct from "./components/Shops/ShopProducts";
import CreatePost from "./components/feed/CreatePost/CreatePost";
import ShopProfile from "./components/Shops/ShopProfile";
import Layout from "./components/layout/layout";

import MoreSetting from "./components/MoreSettingMobile/MoreSetting";
import SwitchApp from "./components/MoreSettingMobile/SwitchApp";
import ActiveStatus from "./components/MoreSettingMobile/ActiveStatus";
import SavePosts from "./components/MoreSettingMobile/SavePosts";
import GreenVerification from "./components/MoreSettingMobile/GreenVerification";
import BlueVerification from "./components/MoreSettingMobile/BlueVerification";
import HideStory from "./components/MoreSettingMobile/HideStory";
import Blocked from "./components/MoreSettingMobile/Blocked";
import AdOperation from "./components/MoreSettingMobile/AdOperation";
import PrivacySetting from "./components/MoreSettingMobile/PrivacySetting";
import DeletAccount from "./components/MoreSettingMobile/DeletAccount";
import ReportPro from "./components/MoreSettingMobile/ReportPro";
import HelpCenter from "./components/MoreSettingMobile/HelpCenter";
import Feedback from "./components/MoreSettingMobile/Feedback";
import HidePeople from "./components/MoreSettingMobile/HidePeople";
import ProfilePriv from "./components/MoreSettingMobile/ProfilePriv";

const appRouter = createBrowserRouter([
  { path: "/", element: <SignIn /> },
  { path: "/register", element: <Register /> },
  { path: "/mobileregister", element: <MobileRegister /> },
  { path: "/mobileotp", element: <MobileOtpPage /> },
  { path: "/emailregister", element: <EmailRegister /> },
  { path: "/forgotpassword", element: <ForgotPassword /> },
  { path: "/emailotp", element: <EmailOtpPage /> },
  { path: "/selectaccounttype", element: <SelectAccountType /> },
  { path: "/infoform", element: <InfoForm /> },

  // Private Routes
  { path: "/layout", element: <PrivateRoute><Layout /></PrivateRoute> },
  { path: "/feed", element: <PrivateRoute><HomePage /></PrivateRoute> },
  { path: "/shop", element: <PrivateRoute><Shop /></PrivateRoute> },
  { path: "/pitch", element: <PrivateRoute><Pitch /></PrivateRoute> },
  { path: "/explore", element: <PrivateRoute><ExplorePage /></PrivateRoute> },
  { path: "/eduvid", element: <PrivateRoute><EduvidPage /></PrivateRoute> },
  { path: "/message", element: <PrivateRoute><MessagePage /></PrivateRoute> },
  { path: "/category", element: <PrivateRoute><Category /></PrivateRoute> },
  { path: "/notification", element: <PrivateRoute><Notifications /></PrivateRoute> },
  { path: "/adds", element: <PrivateRoute><AddsManager /></PrivateRoute> },
  { path: "/createaddoptions", element: <PrivateRoute><CreateAddOptions /></PrivateRoute> },
  { path: "/products/:category", element: <PrivateRoute><ProductList /></PrivateRoute> },
  { path: "/productcart", element: <PrivateRoute><ProductCartDetial /></PrivateRoute> },
  { path: "/settings", element: <PrivateRoute><Settings /></PrivateRoute> },

  // Product feed
  { path: "/product", element: <PrivateRoute><Product /></PrivateRoute> },
  { path: "/next-page", element: <PrivateRoute><NextPages /></PrivateRoute> },
  { path: "/priceinventory", element: <PrivateRoute><PriceInvetory /></PrivateRoute> },
  { path: "/shipping", element: <PrivateRoute><Shipping /></PrivateRoute> },
  { path: "/moredetail", element: <PrivateRoute><MoreDetial /></PrivateRoute> },

  { path: "/awareness", element: <PrivateRoute><Awareness /></PrivateRoute> },
  { path: "/custom", element: <PrivateRoute><Custom /></PrivateRoute> },
  { path: "/visibility", element: <PrivateRoute><Visiblity /></PrivateRoute> },

  { path: "/profile", element: <PrivateRoute><ProfilePager /></PrivateRoute> },
  { path: "/editprofile", element: <PrivateRoute><Editprofile /></PrivateRoute> },
  { path: "/investerprofile", element: <PrivateRoute><InvesterProfile /></PrivateRoute> },
  { path: "/infoprofile", element: <PrivateRoute><InfoProfile /></PrivateRoute> },

  { path: "/voicecall", element: <PrivateRoute><VoiceCall /></PrivateRoute> },
  { path: "/videocall", element: <PrivateRoute><VideoCall /></PrivateRoute> },

  { path: "/mostview", element: <PrivateRoute><MostView /></PrivateRoute> },
  { path: "/shopproduct", element: <PrivateRoute><ShopProduct /></PrivateRoute> },
  { path: "/createpost", element: <PrivateRoute><CreatePost /></PrivateRoute> },
  { path: "/shopprofile", element: <PrivateRoute><ShopProfile /></PrivateRoute> },

  { path: "/moresetting", element: <PrivateRoute><MoreSetting /></PrivateRoute> },
  { path: "/switch", element: <PrivateRoute><SwitchApp /></PrivateRoute> },
  { path: "/active", element: <PrivateRoute><ActiveStatus /></PrivateRoute> },
  { path: "/save", element: <PrivateRoute><SavePosts /></PrivateRoute> },
  { path: "/green", element: <PrivateRoute><GreenVerification /></PrivateRoute> },
  { path: "/blue", element: <PrivateRoute><BlueVerification /></PrivateRoute> },
  { path: "/hide", element: <PrivateRoute><HideStory /></PrivateRoute> },
  { path: "/block", element: <PrivateRoute><Blocked /></PrivateRoute> },
  { path: "/operation", element: <PrivateRoute><AdOperation /></PrivateRoute> },
  { path: "/privacy", element: <PrivateRoute><PrivacySetting /></PrivateRoute> },
  { path: "/delete", element: <PrivateRoute><DeletAccount /></PrivateRoute> },
  { path: "/feedback", element: <PrivateRoute><Feedback /></PrivateRoute> },
  { path: "/help", element: <PrivateRoute><HelpCenter /></PrivateRoute> },
  { path: "/report", element: <PrivateRoute><ReportPro /></PrivateRoute> },
  { path: "/hidepeople", element: <PrivateRoute><HidePeople /></PrivateRoute> },
  { path: "/story", element: <PrivateRoute><ProfilePriv /></PrivateRoute> },



  { path: "*", element: <NotFound /> }
]);

export default function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <RouterProvider router={appRouter} />
      <Toaster />
    </div>
  );
}
