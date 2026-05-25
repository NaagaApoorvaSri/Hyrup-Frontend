import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MdSpaceDashboard,
  MdOutlineSupportAgent,
  MdOutlineNotificationsNone,
} from "react-icons/md";
import { FaUserGroup, FaUsers } from "react-icons/fa6";
import { TbBuildings } from "react-icons/tb";
import { IoBagSharp } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const closeOnMobile = () => {
    if (window.innerWidth < 1024) setOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2
        bg-[#3a150d] text-orange-400 rounded-md
        border border-orange-400"
      >
        <FiMenu size={20} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-64 bg-[#160B08] border-r border-[#3b261b]
          transform ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 transition-transform duration-300
          flex flex-col
        `}
      >
        {/* Profile */}
        <div className="px-6 py-6 border-b border-[#3b261b] flex items-center gap-3">
          <img
            src="./hyrup_logo.png"
            className="w-12 h-12 border border-[#3b261b] rounded-full p-2"
            alt="Hyrup"
          />
          <p className="text-xl font-bold text-white">Hyrup</p>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-3 py-6 space-y-1 text-sm overflow-y-auto">
          <SidebarItem to="/" icon={<MdSpaceDashboard />} label="Dashboard" onClick={closeOnMobile} />
          <SidebarItem to="/users" icon={<FaUserGroup />} label="Users List" onClick={closeOnMobile} />
          <SidebarItem to="/users details" icon={<FaUsers />} label="Users Details" onClick={closeOnMobile} />
          <SidebarItem to="/companies" icon={<TbBuildings />} label="Companies" onClick={closeOnMobile} />
          <SidebarItem to="/companies details" icon={<BsFillBuildingsFill />} label="Companies Details" onClick={closeOnMobile} />
          <SidebarItem to="/jobs" icon={<IoBagSharp />} label="Jobs" onClick={closeOnMobile} />
          <SidebarItem to="/events" icon={<FaRegCalendarAlt />} label="Events" onClick={closeOnMobile} />
          <SidebarItem to="/notifications" icon={<MdOutlineNotificationsNone />} label="Notifications" onClick={closeOnMobile} />
        </nav>

        {/* Footer */}
        <div className="px-4 py-6 border-t border-[#3b261b] space-y-1">
          <SidebarItem to="/support" icon={<MdOutlineSupportAgent />} label="Support" onClick={closeOnMobile} />
          <SidebarItem to="/settings" icon={<IoMdSettings />} label="Settings" onClick={closeOnMobile} />
        </div>
      </aside>
    </>
  );
}

function SidebarItem({ to, icon, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `w-full flex items-center gap-3 px-4 py-2 rounded-md transition-all
        ${
          isActive
            ? "bg-[#3a150d] text-orange-400 border border-orange-400"
            : "text-gray-300 hover:bg-white/5"
        }`
      }
    >
      <span className="text-lg">{icon}</span>
      <span className="truncate">{label}</span>
    </NavLink>
  );
}
