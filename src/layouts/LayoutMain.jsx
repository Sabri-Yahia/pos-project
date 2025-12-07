import { Outlet, useNavigate } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { cartStore } from "../store/cartStore";

export default function LayoutMain() {
  const { openCart } = cartStore();
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
        <FaCartPlus className="text-2xl" onClick={openCart} />
        <div className="bg-yellow flex-1 overflow-auto mt-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
