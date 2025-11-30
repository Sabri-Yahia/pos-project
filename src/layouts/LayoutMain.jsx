import { Outlet, useNavigate } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

export default function LayoutMain() {
  const navigate = useNavigate();
  useEffect(() => {
    let token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    token || navigate("/login");
  }, []);

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
