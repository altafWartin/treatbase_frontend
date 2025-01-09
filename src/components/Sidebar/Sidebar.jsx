import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const navigationItems = [
  {
    id: "patient",
    label: "Patient",
    icon: "https://cdn.builder.io/api/v1/image/assets/b84dd30bad284682bdd2468de5480c9b/c9ba4e55d7c83518314dd048a386f4c5739affed3dee0414b999c8eafc4301d6?apiKey=b84dd30bad284682bdd2468de5480c9b&",
    className: "text-sky-500 bg-sky-100",
    path: "/",
  },
  {
    id: "language",
    label: "Language",
    icon: "https://cdn.builder.io/api/v1/image/assets/b84dd30bad284682bdd2468de5480c9b/b5909173d49c9a779098790aad0f271a2087dec209f474545b4a2fd0e4992906?apiKey=b84dd30bad284682bdd2468de5480c9b&",
    className: "bg-neutral-50",
  },
  {
    id: "tutorial",
    label: "Tutorial",
    icon: "https://cdn.builder.io/api/v1/image/assets/b84dd30bad284682bdd2468de5480c9b/69deb4e58d3ba3b1fd89fc9a93a765a394b3be5a2b370cd459551383f9f5750b?apiKey=b84dd30bad284682bdd2468de5480c9b&",
    className: "bg-neutral-50",
    path: "/tutorial",
  },
  {
    id: "settings",
    label: "Settings",
    icon: "https://cdn.builder.io/api/v1/image/assets/b84dd30bad284682bdd2468de5480c9b/4dd14abbcd9be1b322e9a28fe730a92815f9cb9ba2002b94a2e3b1f54ecc26ff?apiKey=b84dd30bad284682bdd2468de5480c9b&",
    className: "bg-neutral-50",
  },
  {
    id: "logout",
    label: "Logout",
    icon: "https://cdn.builder.io/api/v1/image/assets/b84dd30bad284682bdd2468de5480c9b/65998acc9779b3afcee680e5f8c0009ce6a4136856c6b3ae999c8a8da7857cb8?apiKey=b84dd30bad284682bdd2468de5480c9b&",
    className: "text-red-700 bg-red-700 bg-opacity-10",
  },
];

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

function NavigationItem({ icon, label, className, id, collapsed, language, setLanguage, path }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleLanguageSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setDropdownOpen(false);
  };

  const handleNavigation = () => {
    if (path) navigate(path);
  };

  return (
    <div
      ref={id === "language" ? dropdownRef : null}
      role="button"
      tabIndex={0}
      className={`relative flex items-center px-3.5 py-3 rounded-md ${
        collapsed ? "justify-center" : "gap-7"
      } ${className}`}
      aria-label={label}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
        }
      }}
      onClick={() => (id === "language" ? setDropdownOpen(!dropdownOpen) : handleNavigation())}
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
      />
      {!collapsed && (
        <div className="self-stretch my-auto">
          {id === "language" ? language : label}
        </div>
      )}
      {/* Dropdown for Language */}
      {id === "language" && dropdownOpen && (
        <div className="absolute left-0 mt-[27rem] w-44 bg-white border rounded shadow-lg z-10">
          {languages.map((lang) => (
            <div
              key={lang}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleLanguageSelect(lang)}
            >
              {lang}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SideNavigation() {
  const [collapsed, setCollapsed] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [language, setLanguage] = useState("English");

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
              className={`${item.className} ${
                index > 0 ? "mt-6" : ""
              } ${item.id === "logout" ? "mt-32" : ""}`}
              collapsed={collapsed}
              language={language}
              setLanguage={setLanguage}
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
          className={`fixed top-0 pt-28 px-16  left-0 w-full  h-full bg-white shadow-lg transform transition-transform z-[999] ${
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
          {navigationItems.map((item, index) => (
            <NavigationItem
              key={item.id}
              {...item}
              className={`${item.className} mt-6`}
              language={language}
              setLanguage={setLanguage}
            />
          ))}
        </nav>
      </div>
    </>
  );
}

export default SideNavigation;
