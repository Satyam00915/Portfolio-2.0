import { Home, Info, Projector, ToolCaseIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    {
      name: "Home",
      url: "#",
      icon: Home,
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      name: "About Me",
      url: "#",
      icon: Info,
      gradient: "from-purple-400 to-pink-400",
    },
    {
      name: "Skills",
      url: "#",
      icon: ToolCaseIcon,
      gradient: "from-green-400 to-emerald-400",
    },
    {
      name: "Projects",
      url: "#",
      icon: Projector,
      gradient: "from-orange-400 to-red-400",
    },
  ];

  console.log(isHovered);

  return (
    <>
      {/* Desktop Navbar */}
      <div
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden sm:flex"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-full blur-xl opacity-60 animate-pulse" />

          {/* Main Container */}
          <div className="relative backdrop-blur-xl bg-black/40 border border-white/10 rounded-full px-8 py-4 shadow-2xl">
            <div className="flex items-center gap-8">
              {navItems.map((nav) => (
                <Link
                  key={nav.name}
                  to={nav.url}
                  className={`group relative saira-font cursor-pointer transition-all duration-500 ease-out ${
                    activeItem === nav.name ? "scale-110" : "hover:scale-105"
                  }`}
                  onClick={() => {
                    setActiveItem(nav.name);
                    console.log("Navigation clicked:", nav.name);
                  }}
                >
                  {/* Background Glow */}
                  <div
                    className={`absolute -inset-3 bg-gradient-to-r ${nav.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500`}
                  />

                  {/* Active Indicator */}
                  {activeItem === nav.name && (
                    <div
                      className={`absolute -inset-2 bg-gradient-to-r rounded-lg opacity-30 animate-pulse`}
                    />
                  )}

                  {/* Text */}
                  <span
                    className={`relative z-10 text-sm font-medium transition-all duration-300 ${
                      activeItem === nav.name
                        ? `bg-gradient-to-r ${nav.gradient} bg-clip-text text-transparent font-bold`
                        : "text-white/80 group-hover:text-white"
                    }`}
                  >
                    {nav.name}
                  </span>

                  {/* Underline Animation */}
                  <div
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${
                      nav.gradient
                    } transition-all duration-300 ${
                      activeItem === nav.name
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 sm:hidden">
        <div className="relative">
          {/* Mobile Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-cyan-600/30 rounded-2xl blur-lg opacity-70" />

          {/* Mobile Container */}
          <div className="relative backdrop-blur-xl bg-black/50 border border-white/20 rounded-2xl px-6 py-3 shadow-2xl">
            <div className="flex items-center justify-center gap-6">
              {navItems.map((nav) => {
                const IconComponent = nav.icon;
                return (
                  <Link
                    key={nav.name}
                    to={nav.url}
                    className={`group relative p-3 rounded-xl transition-all duration-300 ${
                      activeItem === nav.name ? "scale-110" : "hover:scale-105"
                    }`}
                    onClick={() => {
                      setActiveItem(nav.name);
                      console.log("Mobile navigation clicked:", nav.name);
                    }}
                  >
                    {/* Mobile Icon Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${nav.gradient} rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-300`}
                    />

                    {/* Active Mobile Indicator */}
                    {activeItem === nav.name && (
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${nav.gradient} rounded-xl opacity-30`}
                      />
                    )}

                    {/* Mobile Icon */}
                    <IconComponent
                      className={`relative z-10 w-5 h-5 transition-all duration-300 ${
                        activeItem === nav.name
                          ? "text-white drop-shadow-lg"
                          : "text-white/70 group-hover:text-white"
                      }`}
                    />

                    {/* Mobile Active Dot */}
                    {activeItem === nav.name && (
                      <div
                        className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r ${nav.gradient} rounded-full animate-ping`}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
