import { Outlet } from "react-router-dom";
import Sidebar, { Header, Footer } from "../layout/Sidebar";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="flex">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
