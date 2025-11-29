import { FaAngleRight } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-8">
        <button className="h-12 w-12 flex justify-center items-center bg-gray-200 hover:bg-gray-300 transition-all ease-in-out cursor-pointer shadow-sm rounded-2xl text-2xl my-3 ">
          &larr;
        </button>
        <p className="text-grey text-lg">Dashboard</p>
        <p className="flex items-center gap-3">
          <FaAngleRight /> Sales statistics
        </p>
      </div>
      <div className="flex items-center gap-6">
        <IoIosNotificationsOutline className="text-3xl" />
        <FaRegClock className="text-xl" />
        <div>
          <label className="input input-lg bg-gray-200 rounded-2xl">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
        </div>
      </div>
    </div>
  );
}
