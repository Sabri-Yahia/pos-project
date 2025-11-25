import { NavLink } from "react-router-dom";
import logo from "../assets/logo-.png";

export default function SideMenu() {
  return (
    <div className="w-[250px] h-dvh overflow-hidden bg-white border-r border-r-gray-50">
      <div className="w-full flex justify-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="w-full flex flex-col gap-3 p-4">
        <NavLink
          className={({ isActive }) =>
            `p-3 rounded hover:bg-yellow ${isActive && "bg-yellow"}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `p-3 rounded hover:bg-yellow ${isActive && "bg-yellow"}`
          }
          to="dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `p-3 rounded hover:bg-yellow ${isActive && "bg-yellow"}`
          }
          to="order"
        >
          Orders
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `p-3 rounded hover:bg-yellow ${isActive && "bg-yellow"}`
          }
          to="invoices"
        >
          Invoices
        </NavLink>
      </div>
    </div>
  );
}
