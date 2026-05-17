import { useTheme } from "../context/ThemeContext";
import logo from "../assets/logo.png";

function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="bg-primary dark:bg-dark-nav shadow-lg px-6 py-3 flex items-center justify-between sticky top-0 z-50">

      {/* Logo + Name */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Phoenix Computers Logo"
          className="h-11 w-11 object-contain rounded-full bg-white p-1 shadow"
        />
        <div className="flex flex-col leading-tight">
          <span className="text-white font-black text-base tracking-wide">
            Phoenix Computers
          </span>
          <span className="text-blue-300 text-xs tracking-widest uppercase">
            Your Tech Partner
          </span>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-5">
        <a href="#catalogue" className="text-blue-200 hover:text-white text-sm font-medium transition hidden sm:block">
          Catalogue
        </a>
        <a href="#contact" className="text-blue-200 hover:text-white text-sm font-medium transition hidden sm:block">
          Contact
        </a>
        <a
          href="https://wa.me/919500288164?text=Hi!%20I%20have%20an%20enquiry."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full transition"
        >
          💬 WhatsApp
        </a>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition text-lg border border-white/20"
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          aria-label="Toggle theme"
        >
          {isDark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;