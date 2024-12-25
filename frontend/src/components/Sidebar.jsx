import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/appLogo.svg";
import logout from "../assets/images/logout.png";
import {
  FaClipboardList,
  FaTrophy,
  FaUserAlt,
  FaChalkboardTeacher,
  FaSignOutAlt,
  FaUsers,
  FaHome,
} from "react-icons/fa";

const Sidebar = ({ role }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return (
    <div className="w-64 text-white bg-zinc-800 h-screen p-6 flex flex-col justify-between">
      <div>
        <img src={logo} className="absolute w-[80px] top-[12px] left-0"/>
        <h2 className="text-[40px] font-bold text-right font1 text-purple-400 mb-[90px]">MENTOR LINK</h2>
        <ul>
          {/* Dashboard link */}
          <li className="mb-[40px]">
            <Link
              to={`/${role}/dashboard`}
              className="flex items-center text-white space-x-4 p-2 rounded-lg group"
            >
              <FaHome className="text-xl text-pink-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
              <span className="transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 group-hover:tracking-wider">
                Dashboard
              </span>
            </Link>
          </li>

          {/* Select Mentee */}
          {role === "mentor" && (
            <li className="mb-[40px]">
              <Link
                to="/mentor/selectMentee"
                className="flex items-center space-x-4 p-2 rounded-lg group"
              >
                <FaUsers className="text-xl text-pink-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:text-green-400" />
                <span className="transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-500 group-hover:tracking-wider">
                  Select Mentee
                </span>
              </Link>
            </li>
          )}

          {/* Your Mentee */}
          {role === "mentor" && (
            <li className="mb-[40px]">
              <Link
                to="/mentor/yourMentee"
                className="flex items-center space-x-4 p-2 rounded-lg group"
              >
                <FaChalkboardTeacher className="text-xl text-pink-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:text-yellow-400" />
                <span className="transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-red-500 group-hover:tracking-wider">
                  Your Mentee
                </span>
              </Link>
            </li>
          )}

          {/* Appointments */}
          <li className="mb-[40px]">
            <Link
              to={`/${role}/appointments`}
              className="flex items-center text-white space-x-4 p-2 rounded-lg group"
            >
              <FaClipboardList className="text-xl text-pink-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:text-blue-400" />
              <span className="transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-indigo-500 group-hover:tracking-wider">
                Appointments
              </span>
            </Link>
          </li>

          {/* Achievements */}
          <li className="mb-[40px]">
            <Link
              to={`/${role}/achievements`}
              className="flex items-center space-x-4 p-2 rounded-lg group"
            >
              <FaTrophy className="text-xl text-pink-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:text-pink-400" />
              <span className="transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-600 group-hover:tracking-wider">
                Achievements
              </span>
            </Link>
          </li>

          {/* Feedback */}
          <li className="mb-[30px]">
            <Link
              to={`/${role}/feedback`}
              className="flex items-center space-x-4 p-2 rounded-lg group"
            >
              <FaUserAlt className="text-xl text-pink-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:text-teal-400" />
              <span className="transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-purple-400 group-hover:tracking-wider">
                Feedback
              </span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="w-full h-[50px] flex items-center relative justify-center space-x-4 bg-blue-900 text-white py-2 rounded-lg group transition-transform duration-300 hover:scale-105"
      >
        <img src={logout} className='w-[90px] left-0 bottom-[-10px] absolute'/>
        <FaSignOutAlt className="text-xl absolute left-[65px] transition-transform duration-300 group-hover:scale-110 group-hover:bg-clip-text group-hover:rotate-6" />
        <span className="transition-all duration-300 absolute left-[90px] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-red-500 group-hover:tracking-wider">
          Logout
        </span>
      </button>
    </div>
  );
};

export default Sidebar;

