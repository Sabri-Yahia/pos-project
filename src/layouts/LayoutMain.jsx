import { Outlet } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import Navbar from "../components/Navbar";

export default function LayoutMain() {
  return (
    <div className="w-full h-dvh flex overflow-hidden">
      <SideMenu />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="bg-yellow flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
