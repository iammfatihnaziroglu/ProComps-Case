import { DarkThemeToggle } from "flowbite-react";
import React, { useState, useRef, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Tıklanan yeri kontrol eden fonksiyon
  const handleClickOutside = (event: MouseEvent) => {
    if (
      userMenuRef.current &&
      !userMenuRef.current.contains(event.target as Node)
    ) {
      setUserMenuOpen(false);
    }
  };

  // Dışarı tıklama olayını dinleyen useEffect
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleUserMenu = () => {
    setUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-600 border-opacity-40 bg-black ">
      <div className="max-w-1xl ms-6 sm:px-0 lg:px-0 xl:px-0">
        <div className="relative mb-1 mt-2 flex h-10 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                className="h-10 w-auto"
                src="https://procomps.gg/images/logo_ProComps.png"
                alt="ProComps Logo"
              />
              {/* <span className="me-40 text-xl font-extrabold dark:text-white sm:text-2xl">
                PROCOMPS
              </span> */}
            </a>
          </div>
          <DarkThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
