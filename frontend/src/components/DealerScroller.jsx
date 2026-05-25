import { useTheme } from "../context/ThemeContext";
import acer from "../assets/acer.png";
import amd from "../assets/amd.png";
import apple from "../assets/apple.png";
import asus from "../assets/asus.png";
import brother from "../assets/brother.png";
import canon from "../assets/canon.png";
import dell from "../assets/dell.png";
import epson from "../assets/epson.png";
import hp from "../assets/hp.png";
import intel from "../assets/intel.png";
import lenovo from "../assets/lenovo.png";
import nvidia from "../assets/nvidia.png";
import dlink from "../assets/dlink.png";
import logitech from "../assets/logitech.png";

const dealers = [
  { name: "Acer",     img: acer,    color: "#83b81a", bg: "#f0f7e0" },
  { name: "AMD",      img: amd,     color: "#ed1c24", bg: "#fde8e9" },
  { name: "Apple",    img: apple,   color: "#555555", bg: "#f0f0f0" },
  { name: "ASUS",     img: asus,    color: "#00539b", bg: "#e0eef8" },
  { name: "Brother",  img: brother, color: "#003087", bg: "#e0e8f5" },
  { name: "Canon",    img: canon,   color: "#cc0000", bg: "#fde8e8" },
  { name: "Dell",     img: dell,    color: "#007db8", bg: "#e0f0f9" },
  { name: "Epson",    img: epson,   color: "#0047ba", bg: "#e0eaf8" },
  { name: "HP",       img: hp,      color: "#0096d6", bg: "#e0f3fc" },
  { name: "Intel",    img: intel,   color: "#0071c5", bg: "#e0edf8" },
  { name: "Lenovo",   img: lenovo,  color: "#e2231a", bg: "#fde8e8" },
  { name: "Logitech", img: logitech,color: "#00b140", bg: "#e0f5e9" },
  { name: "NVIDIA",   img: nvidia,  color: "#76b900", bg: "#edf5e0" },
  { name: "D-Link",   img: dlink,   color: "#003da5", bg: "#e0e9f7" },
];

const scrollItems = [...dealers, ...dealers];

function DealerBadge({ dealer, isDark }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col items-center justify-center gap-2 mx-5"
      style={{ minWidth: 90 }}
    >
      <div
        className="w-26 h-26 rounded-2xl flex items-center justify-center shadow-sm transition-transform duration-200 hover:scale-110 overflow-hidden"
        style={{
          background: isDark ? "rgba(255,255,255,0.08)" : dealer.bg,
          border: isDark
            ? `1.5px solid ${dealer.color}44`
            : `1.5px solid ${dealer.color}33`,
        }}
      >
        <img
          src={dealer.img}
          alt={dealer.name}
          // Increased size constraint from 70% to 85% to fill the card nicely
          className="max-w-[100%] max-h-[100%] object-contain pointer-events-none"
        />
      </div>
      <span
        className="text-[11px] font-semibold tracking-wide"
        style={{
          color: isDark ? "rgba(200,210,255,0.75)" : "#6b7280",
        }}
      >
        {dealer.name}
      </span>
    </div>
  );
}

function DealerScroller() {
  const { isDark } = useTheme();

  return (
    <section
      className="py-10 overflow-hidden"
      style={{
        background: isDark
          ? "linear-gradient(180deg, #000061 0%, #05050f 100%)"
          : "#f8faff",
        borderTop: isDark ? "1px solid #1a1a8a" : "1px solid #e5e7eb",
        borderBottom: isDark ? "1px solid #1a1a8a" : "1px solid #e5e7eb",
      }}
    >
      {/* Header */}
      <div className="text-center mb-6 px-4">
        <p
          className="text-xs font-bold uppercase tracking-[0.2em]"
          style={{ color: isDark ? "rgba(147,162,255,0.7)" : "#9ca3af" }}
        >
          Authorized Dealers &amp; Brands We Carry
        </p>
      </div>

      {/* Scroller track */}
      <div className="relative">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{
            background: isDark
              ? "linear-gradient(to right, #05050f, transparent)"
              : "linear-gradient(to right, #f8faff, transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{
            background: isDark
              ? "linear-gradient(to left, #05050f, transparent)"
              : "linear-gradient(to left, #f8faff, transparent)",
          }}
        />

        {/* Scrolling row */}
        <div
          className="flex"
          style={{ animation: "scrollLeft 28s linear infinite" }}
        >
          {scrollItems.map((dealer, i) => (
            <DealerBadge key={i} dealer={dealer} isDark={isDark} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

export default DealerScroller;