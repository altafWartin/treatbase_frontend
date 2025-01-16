import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Icons
import UserIcon from "../../assets/Sidebar/UserIcon.svg";
import LanguageIcon from "../../assets/Sidebar/LanguageIcon.svg";
import TutorialIcon from "../../assets/Sidebar/YoutubIcon.svg";
import SettingsIcon from "../../assets/Sidebar/SettingIcon.svg";
import LogoutIcon from "../../assets/Sidebar/LogoutIcon.svg";
import UserActive from "../../assets/Sidebar/UserActive.svg";
import LanguageActive from "../../assets/Sidebar/LanguageActive.svg";
import TutorialActive from "../../assets/Sidebar/YoutubActive.svg";
import SettingsActive from "../../assets/Sidebar/SettingActive.svg";

const languages = [
  "English",
  "German",
  "French",
  "Italian",
  "Spanish",
  "Portuguese",
  "Hindi",
  "Japanese",
  "Chinese",
];

const navigationItems = [
  {
    id: "patient",
    label: "Patient",
    icon: UserIcon,
    activeIcon: UserActive,
    path: "/",
  },
  {
    id: "language",
    label: "Language",
    icon: LanguageIcon,
    activeIcon: LanguageActive,
    languages, // Pass languages here
  },
  {
    id: "tutorial",
    label: "Tutorial",
    icon: TutorialIcon,
    path: "/tutorial",
    activeIcon: TutorialActive,
  },
  {
    id: "settings",
    label: "Settings",
    icon: SettingsIcon,
    path: "/settings",
    activeIcon: SettingsActive,
  },
  {
    id: "logout",
    label: "Logout",
    icon: LogoutIcon,
    activeIcon: LogoutIcon,
    customStyles: "text-[#CF0D0D] mt-20",
  },
];

function NavigationItem({
  icon,
  activeIcon,
  label,
  id,
  collapsed,
  activeId,
  setActiveId,
  path,
  customStyles,
  languages, // New prop for languages
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
  const isActive = activeId === id;
  const navigate = useNavigate();

  const toggleDropdown = () => {
    if (id === "language") {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const handleNavigation = () => {
    setActiveId(id);
    if (path) {
      navigate(path);
    } else {
      toggleDropdown();
    }
  };

  return (
    <div className="gap-5">
      <div
        role="button"
        tabIndex={0}
        className={`relative flex items-center px-3.5 py-3 mt-4 rounded-md transition duration-200 ${
          collapsed ? "justify-center" : "gap-7"
        } ${isActive ? "text-sky-500 bg-sky-100" : "bg-neutral-50"} hover:bg-gray-200 hover:shadow-md ${customStyles || ""}`}
        aria-label={label}
        onClick={handleNavigation}
      >
        <img
          loading="lazy"
          src={isActive ? activeIcon : icon}
          alt=""
          className={`object-contain shrink-0 self-stretch my-auto w-6 aspect-square`}
        />
        {!collapsed && <div className="self-stretch my-auto">{label}</div>}
      </div>

      {/* Dropdown for Languages */}
      {isDropdownOpen && id === "language" && (
        <div className="absolute w-44 mt-2 left-12 bg-white shadow-lg rounded-md text-sm z-10">
          {languages.map((language) => (
            <button
              key={language}
              className="block px-4 py-2 hover:bg-gray-200 text-left w-full"
              onClick={() => {
                console.log(`Language selected: ${language}`);
                setIsDropdownOpen(false);
              }}
            >
              {language}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function SideNavigation() {
  const [collapsed, setCollapsed] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [activeId, setActiveId] = useState("patient");

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="md:block hidden absolute z-[999] ">
        <nav
          className={`flex flex-col px-5 pt-24 pb-7 text-base font-semibold whitespace-nowrap bg-white rounded-sm shadow-[6px_6px_14px_rgba(0,0,0,0.25)] text-stone-300 transition-all duration-300 ${
            collapsed ? "w-40" : "w-[17rem]"
          }`}
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Toggle Button */}
          <button
            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 self-end mb-6"
            onClick={toggleSidebar}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? ">" : "<"}
          </button>
          {/* Navigation Items */}
          {navigationItems.map((item, index) => (
            <NavigationItem
              key={item.id}
              {...item}
              activeId={activeId}
              setActiveId={setActiveId}
              collapsed={collapsed}
            />
          ))}
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden ">
        <button
          className="fixed top-20 left-4 z-[99999] bg-gray-100 p-2 rounded"
          onClick={toggleMobileSidebar}
          aria-label={mobileSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          ☰
        </button>
        <nav
          className={`fixed top-0 pt-28 px-16 left-0 w-full h-full bg-white shadow-lg transform transition-transform z-[999] ${
            mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <button
            className="absolute top-20 right-4 bg-gray-100 p-2 rounded"
            onClick={toggleMobileSidebar}
            aria-label="Close sidebar"
          >
            ✖
          </button>
          {/* Navigation Items */}
          {navigationItems.map((item) => (
            <NavigationItem
              key={item.id}
              {...item}
              activeId={activeId}
              setActiveId={setActiveId}
              collapsed={collapsed}
            />
          ))}
        </nav>
      </div>
    </>
  );
}

export default SideNavigation;
