import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import laptop from "../assets/laptop.png";
import mouse from "../assets/mouse.png";
import cctv from "../assets/cctv.png";
import desktop from "../assets/desktop.png";
import keyboard from "../assets/keyboard.png";
import router from "../assets/router.png";
import headset from "../assets/headset.png";
import printer from "../assets/printer.png";
import projector from "../assets/projector.png";

const carouselItems = [
  { label: "Laptop",    img: laptop },
  { label: "Desktop",   img: desktop },
  { label: "CCTV",      img: cctv },
  { label: "Mouse",     img: mouse },
  { label: "Keyboard",  img: keyboard },
  { label: "Printer",   img: printer },
  { label: "Router",    img: router },
  { label: "Headset",   img: headset },
  { label: "Projector", img: projector },
];

// Monochrome SVG icons for each category
const icons = {
  Laptops: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2H4zm0 2h16v8H4V7zM2 19h20v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-1z"/>
    </svg>
  ),
  Desktops: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M2 3a1 1 0 011-1h18a1 1 0 011 1v13a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm2 1v11h16V4H4zm5 13v2H7v1h10v-1h-2v-2H9z"/>
    </svg>
  ),
  CCTV: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M2 6a1 1 0 011-1h1V4h2v1h1a1 1 0 011 1v1l8-2v10l-8-2v1a1 1 0 01-1 1H3a1 1 0 01-1-1V6zm2 1v6h3V7H4zm12 7.27V9.73l-6 1.5v.54l6 1.5zM19 8h1a2 2 0 012 2v4a2 2 0 01-2 2h-1V8zM5 19h2v1H5v-1zm4 0h2v1H9v-1z"/>
    </svg>
  ),
  Printers: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M7 2h10v4H7V2zM4 7a1 1 0 00-1 1v7a1 1 0 001 1h1v3a1 1 0 001 1h12a1 1 0 001-1v-3h1a1 1 0 001-1V8a1 1 0 00-1-1H4zm3 9h10v4H7v-4zm-1-3h1v-1H6v1zm2 0h1v-1H8v1z"/>
    </svg>
  ),
  Accessories: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 1a5 5 0 015 5v1h1a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h1V6a5 5 0 015-5zm0 2a3 3 0 00-3 3v1h6V6a3 3 0 00-3-3zm-1 9a1 1 0 102 0 1 1 0 00-2 0z"/>
    </svg>
  ),
  Networking: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.06-7.44 7-7.93v15.86zm2 0V4.07c3.94.49 7 3.85 7 7.93s-3.06 7.44-7 7.93z"/>
    </svg>
  ),
  Peripherals: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M4 5a2 2 0 012-2h12a2 2 0 012 2v3H4V5zm0 5h16v9a2 2 0 01-2 2H6a2 2 0 01-2-2v-9zm3 2v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-8 4v2h2v-2H7zm4 0v2h6v-2h-6z"/>
    </svg>
  ),
  Consumables: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M6 3a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H6zm2 4h8v2H8V7zm0 4h8v2H8v-2zm0 4h5v2H8v-2zm8 0a2 2 0 110 4 2 2 0 010-4z"/>
    </svg>
  ),
  Services: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2a5 5 0 015 5c0 1.65-.8 3.1-2 4.03V13l3 2-1 2-2-1.33V17a3 3 0 01-3 3 3 3 0 01-3-3v-1.33L7 17l-1-2 3-2v-1.97A5 5 0 0112 2zm0 2a3 3 0 100 6 3 3 0 000-6z"/>
    </svg>
  ),
};

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

const whatsappNumber = "919500288164";

function ProductCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselItems.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full md:w-1/2 overflow-hidden flex items-center justify-center">
      {carouselItems.map((item, i) => (
        <img
          key={i}
          src={item.img}
          alt={item.label}
          className={`absolute w-full h-auto object-contain transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

// Floating bottom scrollable pill nav
function BottomNav() {
  const [active, setActive] = useState("laptops");
  const scrollRef = useRef(null);

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
        className="pointer-events-auto flex items-center gap-1 px-3 py-2 rounded-full shadow-2xl overflow-x-auto max-w-[95vw]"
        ref={scrollRef}
        style={{
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(16px)",
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
              className="flex flex-col items-center justify-center flex-shrink-0 transition-all duration-300 rounded-full px-3 py-1.5 gap-1"
              style={{
                background: isActive ? "#1a2bbd" : "transparent",
                color: isActive ? "#fff" : "#374151",
                minWidth: 60,
              }}
            >
              <span style={{ color: isActive ? "#fff" : "#1a2bbd" }}>
                {item.icon}
              </span>
              <span
                className="text-[10px] font-semibold whitespace-nowrap"
                style={{ color: isActive ? "#fff" : "#374151" }}
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

function Home() {
  const whatsappLink = (msg) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;

  return (
    <main className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300 pb-24">

      {/* ── HERO + CATEGORY BAR — unified blue block ── */}
      <section className="bg-primary dark:bg-dark-nav overflow-hidden">

        {/* Hero */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-stretch min-h-[420px]">
          {/* Left — text */}
          <div className="flex-1 flex flex-col justify-center px-10 py-16">
            <p className="text-blue-300 uppercase tracking-widest text-xs font-semibold mb-4">
              Est. 2002 · Tuticorin, India
            </p>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
              A 24-YEAR<br />
              LEGACY OF<br />
              TRUST,{" "}
              <span className="text-blue-300">EVOLVED</span>
              <br />
              FOR THE{" "}
              <span className="underline decoration-blue-400 decoration-4">
                FUTURE.
              </span>
            </h1>
            <p className="mt-6 text-blue-200 text-lg max-w-md">
              Browse our catalogue and ping us on WhatsApp — we'll give you the best price, always.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#catalogue"
                className="bg-white text-primary font-bold px-8 py-3 rounded-full shadow-lg hover:bg-blue-50 transition"
              >
                Browse Catalogue →
              </a>
              <a
                href={whatsappLink("Hi! I'd like to know more about your products.")}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/40 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right — carousel */}
          <ProductCarousel />
        </div>
      </section>

      {/* ── WHAT WE OFFER ── */}
      <section id="catalogue" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-black text-primary dark:text-blue-300 mb-2">
          What We Offer
        </h2>
        <p className="text-gray-400 dark:text-gray-400 mb-10">
          23 years of trusted service in Tuticorin. Ask us anything on WhatsApp.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: icons.Laptops,      title: "Laptops & Desktops",        desc: "New, refurbished, and custom-built systems for home and business.",    id: "laptops"     },
            { icon: icons.CCTV,         title: "CCTV Systems",              desc: "Complete surveillance solutions — supply, installation & support.",    id: "cctv"        },
            { icon: icons.Printers,     title: "Printer Services",          desc: "Printer repair, head reconditioning & laser toner refillings.",       id: "printers"    },
            { icon: icons.Accessories,  title: "Accessories & Consumables", desc: "Cables, cartridges, ink, and everything your setup needs.",           id: "accessories" },
            { icon: icons.Networking,   title: "Networking",                desc: "Routers, switches, structured cabling and network setup.",            id: "networking"  },
            { icon: icons.Peripherals,  title: "Peripherals",               desc: "Keyboards, mice, monitors, headsets and more.",                      id: "peripherals" },
            { icon: icons.Consumables,  title: "Ink & Toner Refilling",     desc: "On-site refilling park for laser toner and ink cartridges.",         id: "consumables" },
            { icon: icons.Services,     title: "Repairs & Service",         desc: "Hardware diagnostics, OS install, virus removal & data recovery.",   id: "service"     },
          ].map((item) => (
            <a
              key={item.id}
              id={item.id}
              href={whatsappLink(`Hi! I'm interested in your ${item.title}. Can you tell me more?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-dark-card border border-gray-100 dark:border-blue-900 rounded-2xl p-5 hover:shadow-xl hover:-translate-y-1 hover:border-primary dark:hover:border-blue-400 transition-all duration-300 group"
            >
              <span className="text-primary dark:text-blue-400">{item.icon}</span>
              <h3 className="mt-3 font-bold text-gray-800 dark:text-white group-hover:text-primary dark:group-hover:text-blue-300 transition">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-gray-400 dark:text-gray-400">
                {item.desc}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-green-600 dark:text-green-400">
                💬 Ask on WhatsApp →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="bg-primary dark:bg-dark-nav py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <img
            src={logo}
            alt="Phoenix Computers Logo"
            className="h-20 w-20 object-contain bg-white rounded-2xl p-2 shadow-lg flex-shrink-0"
          />
          <div>
            <h2 className="text-2xl font-black text-white">
              Phoenix Marketers · Phoenix Computers
            </h2>
            <p className="text-blue-300 mt-1 max-w-2xl">
              Laptops · Desktops · CCTV · Accessories · Consumables · Printer Service ·
              Laser Toner & Ink Cartridge Refillings · Printer Head Reconditioning · Networking
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        id="contact"
        className="bg-white dark:bg-dark-card border-t border-gray-100 dark:border-blue-900 py-12 px-4"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <p className="text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-widest mb-3">Company |</p>
            <div className="flex items-center gap-3 mb-3">
              <img src={logo} alt="Logo" className="h-10 w-10 object-contain bg-gray-50 dark:bg-dark-bg rounded-xl p-1" />
              <span className="font-bold text-gray-900 dark:text-gray-100 text-sm">Phoenix Marketers</span>
            </div>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Laptops | Desktops | CCTV | Accessories | Refilling Park</p>
            <p className="mt-2 text-sm font-semibold text-gray-600 dark:text-gray-400">Tuticorin, India</p>
          </div>

          <div>
            <p className="text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-widest mb-3">Address |</p>
            <div className="flex items-start gap-2">
              <span>📍</span>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 leading-relaxed">
                16/3, Chidambara Nagar<br />
                Main Road, Opp. CSI Church<br />
                Tuticorin — 628 008.
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=16/3+Chidambara+Nagar+Main+Road+Tuticorin"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-xs font-semibold text-gray-800 dark:text-gray-200 hover:underline"
            >
              📌 View on Google Maps →
            </a>
          </div>

          <div>
            <p className="text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-widest mb-3">Proprietorship Details</p>
            <p className="text-base font-bold text-gray-900 dark:text-gray-100">S.W. John Mohan</p>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-0.5">B.Sc., HDCM., PGDCA., MBA.</p>
          </div>

          <div>
            <p className="text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-widest mb-3">Contact</p>
            <div className="space-y-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              <a href="tel:+919500288164" className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-100 transition">
                📞 +91-95002 88164
              </a>
              <a href="tel:+919842125620" className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-100 transition">
                📞 +91-98421 25620
              </a>
              <a
                href={whatsappLink("Hi! I have an enquiry.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-600 transition"
              >
                💬 WhatsApp Us
              </a>
              <a href="mailto:phoenixmarketers@gmail.com" className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-100 transition break-all">
                ✉️ phoenixmarketers@gmail.com
              </a>
            </div>
            <div className="mt-4">
              <p className="text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-widest mb-1">Hours |</p>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Mon–Sat, 9AM–7PM</p>
            </div>
          </div>

        </div>

        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-100 dark:border-blue-900 text-center">
          <p className="text-xs font-semibold text-gray-700 dark:text-gray-400">
            © 2003–2026 Phoenix Computers. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* ── BOTTOM FLOATING PILL NAV ── */}
      <BottomNav />

    </main>
  );
}

export default Home;