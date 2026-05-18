import { useTheme } from "../context/ThemeContext";
import logo from "../assets/logo.png";
import chatGif from "../assets/whatsapp.png";
import SunIcon from "../assets/sun.png";
import MoonIcon from "../assets/moon.png";


function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="bg-primary dark:bg-dark-nav shadow-lg px-6 py-3 flex items-center justify-between sticky top-0 z-50">

      {/* Logo + Name */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Phoenix Computers Logo"
          className="h-15 w-15 object-contain rounded-full bg-white p-1 shadow"
        />
        <div className="flex flex-col leading-tight">
          <span className="text-white font-black text-xl md:text-3xl tracking-wide">
            Phoenix Computers
          </span>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-5">
        <a
          href="#"
          className="relative text-blue-200 hover:text-white text-base font-medium transition hidden sm:block
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white
            hover:after:w-full after:transition-all after:duration-300"
        >
            Home
        </a>
        <a href="#catalogue" className="relative text-blue-200 hover:text-white text-base font-medium transition hidden sm:block
           after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white
           hover:after:w-full after:transition-all after:duration-300">
          Catalogue
        </a>
        <a href="#contact" className="relative text-blue-200 hover:text-white text-base font-medium transition hidden sm:block
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white
          hover:after:w-full after:transition-all after:duration-300">
          Contact
        </a>
        <a
          href="https://wa.me/919500288164?text=Hi!%20I%20have%20an%20enquiry."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center transition" // removed 'hidden sm:' for testing
        >
          <img
            src={chatGif}
            alt="Chat Icon"
            className="h-8 w-8 object-contain animate-pulse"
          />
        </a>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition text-lg border border-white/20"
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          aria-label="Toggle theme"
        >
          <img
            src={isDark ? SunIcon : MoonIcon}
            alt={isDark ? "Light Mode" : "Dark Mode"}
            className={`h-6 w-6 object-contain transition-transform duration-500 ${
              isDark ? "rotate-180 scale-110" : "rotate-0 scale-100"
            }`}
          />

        </button>
      </div>
    </nav>
  );
}

export default Navbar;