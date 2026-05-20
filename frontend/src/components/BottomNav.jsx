import {useState, useRef} from "react";
import {icons} from "../constants/icons";
import { useTheme } from "../context/ThemeContext";

// Monochrome SVG icons for each category
const navItems = [
  { label: "Laptops",      id: "laptops",      icon: icons.Laptops },
  { label: "Desktops",     id: "desktops",     icon: icons.Desktops },
  { label: "CCTV",         id: "cctv",         icon: icons.CCTV },
  { label: "Printers",     id: "printers",     icon: icons.Printers },
  { label: "Accessories",  id: "accessories",  icon: icons.Accessories },
  { label: "Networking",   id: "networking",   icon: icons.Networking },
  { label: "Peripherals",  id: "peripherals",  icon: icons.Peripherals },
  { label: "Consumables",  id: "consumables",  icon: icons.Consumables },
  { label: "Services",     id: "service",      icon: icons.Services },
];

// Floating bottom scrollable pill nav
function BottomNav() {
  const [active, setActive] = useState("laptops");
  const scrollRef = useRef(null);

  const { isDark, toggleTheme } = useTheme();

  const handleClick = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed bottom-5 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <div
        ref={scrollRef}
        className="
          pointer-events-auto
          flex items-center gap-1
          px-3 py-2
          rounded-full
          shadow-2xl
          overflow-x-auto
          max-w-[95vw]

          bg-dark-bnav/90
          dark:bg-white/90

          backdrop-blur-xl
          border border-white/20
        "
        style={{
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: "0 8px 32px rgba(0,0,36,0.18), 0 1.5px 6px rgba(0,0,0,0.10)",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="
                flex flex-col items-center justify-center flex-shrink-0
                transition-all duration-300 rounded-full px-3 py-1.5 gap-1
              "
              style={{
                background: isActive
                  ? isDark
                    ? "var(--color-dark-bnav)"
                    : "#ffffff"
                  : "transparent",
                minWidth: 60,
              }}
            >
              <span
                className={
                  isActive
                    ? isDark
                      ? "text-white"
                      : "text-dark-bnav"
                    : isDark
                      ? "text-dark-bnav"
                      : "text-white"
                }
              >
                {item.icon}
              </span>

              <span
                className={`
                  text-[10px] font-semibold whitespace-nowrap
                  ${
                    isActive
                      ? isDark
                        ? "text-white"
                        : "text-dark-bnav"
                      : isDark
                        ? "text-dark-bnav"
                        : "text-white"
                  }
                `}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default BottomNav;