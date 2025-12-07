import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo-.png";
import { MdDashboard } from "react-icons/md";
import { TbBurger } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LuMailSearch } from "react-icons/lu";
import { MdOutlineSupportAgent } from "react-icons/md";

const id = crypto.randomUUID();
export default function SideMenu() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="w-[350px] h-dvh bg-creamy border-r border-r-gray-50 flex flex-col">
      <div className="w-full flex justify-center">
        <img src={logo} alt="logo" className="w-[250px]" />
      </div>
      <div className="flex-1 flex flex-col gap-3 p-3">
        <NavLink
          className={({ isActive }) =>
            `p-3 rounded-2xl hover:bg-yellow flex items-center gap-4 ${
              isActive && "bg-yellow"
            }`
          }
          to="/"
        >
          <MdDashboard />
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `p-3 rounded-2xl hover:bg-yellow flex items-center gap-4 ${
              isActive && "bg-yellow"
            }`
          }
          to="menu"
        >
          <TbBurger />
          Menu
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `p-3 rounded-2xl hover:bg-yellow flex items-center gap-4 ${
              isActive && "bg-yellow"
            }`
          }
          to="messages"
        >
          <TiMessages />
          Messages
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `p-3 rounded-2xl hover:bg-yellow flex items-center gap-4 ${
              isActive && "bg-yellow"
            }`
          }
          to="bills"
        >
          <FaFileInvoiceDollar />
          Bills
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `p-3 rounded-2xl hover:bg-yellow flex items-center gap-4 ${
              isActive && "bg-yellow"
            }`
          }
          to="settings"
        >
          <IoSettingsOutline />
          Settings
        </NavLink>
        <div className="flex flex-col gap-3 mt-4">
          <p className=" text-sm text-grey px-3">Other</p>
          <NavLink
            className={({ isActive }) =>
              `p-3 rounded-2xl hover:bg-yellow flex items-center gap-4 ${
                isActive && "bg-yellow"
              }`
            }
            to="notifications"
          >
            <LuMailSearch />
            Notifications
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `p-3 rounded-2xl hover:bg-yellow flex items-center gap-4 ${
                isActive && "bg-yellow"
              }`
            }
            to="support"
          >
            <MdOutlineSupportAgent />
            Support
          </NavLink>
          <button className="btn btn-error" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div className=" flex flex-col grow justify-center items-center">
          <div className="flex flex-col gap-4 rounded-3xl shadow-sm  w-[250px] p-3 text-center mb-4">
            <img
              src={`https://i.pravatar.cc/48?=${id}`}
              alt=""
              className="rounded-full w-20 mx-auto"
            />
            <h3 className="font-semibold text-[18px]">Theresa Webb</h3>
            <p className="text-grey">Waiter . 4h 56m</p>
            <button className="bg-gray-200 rounded-xl font-medium p-2">
              Open profile
            </button>
          </div>
          <p>&copy; 2020 SmartPOS App</p>
        </div>
      </div>
    </div>
  );
}
