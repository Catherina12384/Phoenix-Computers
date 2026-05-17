import { useState, useEffect } from "react";
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
  { label: "Laptop",     img: laptop },
  { label: "Desktop",    img: desktop },
  { label: "CCTV",       img: cctv },
  { label: "Mouse",      img: mouse },
  { label: "Keyboard",   img: keyboard },
  { label: "Printer",    img: printer },
  { label: "Router",     img: router },
  { label: "Headset",    img: headset },
  { label: "Projector",  img: projector },
];

const categories = [
  { icon: "💻", label: "Laptops" },
  { icon: "🖥️", label: "Desktops" },
  { icon: "📷", label: "CCTV" },
  { icon: "🖨️", label: "Printers" },
  { icon: "🔌", label: "Accessories" },
  { icon: "🌐", label: "Networking" },
  { icon: "🖱️", label: "Peripherals" },
  { icon: "🔋", label: "Consumables" },
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

  const prev = () => setCurrent((c) => (c - 1 + carouselItems.length) % carouselItems.length);
  const next = () => setCurrent((c) => (c + 1) % carouselItems.length);

  return (
    <div className="relative w-full md:w-1/2 overflow-hidden flex items-center justify-center">

      {/* Images — full bleed, no border, no card */}
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

function Home() {
  const whatsappLink = (msg) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;

  return (
    <main className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">

      {/* ── HERO ── */}
      <section className="relative bg-primary dark:bg-dark-nav overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-stretch min-h-[420px]">

          {/* Left — text (padded) */}
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

          {/* Right — full bleed carousel, no gap, flush to edge */}
          <ProductCarousel />

        </div>
      </section>

      {/* ── CATEGORY ICON BAR ── */}
      <section className="bg-white dark:bg-dark-card border-b border-gray-100 dark:border-blue-900 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-1 overflow-x-auto">
          {categories.map((cat) => (
            <a
              key={cat.label}
              href={`#${cat.label.toLowerCase()}`}
              className="flex flex-col items-center gap-1 px-5 py-2 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-bg transition group flex-shrink-0"
            >
              <span className="text-2xl">{cat.icon}</span>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-blue-300 transition whitespace-nowrap">
                {cat.label}
              </span>
            </a>
          ))}
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
            { icon: "💻", title: "Laptops & Desktops",       desc: "New, refurbished, and custom-built systems for home and business.",    id: "laptops"     },
            { icon: "📷", title: "CCTV Systems",             desc: "Complete surveillance solutions — supply, installation & support.",    id: "cctv"        },
            { icon: "🖨️", title: "Printer Services",         desc: "Printer repair, head reconditioning & laser toner refillings.",       id: "printers"    },
            { icon: "🔌", title: "Accessories & Consumables",desc: "Cables, cartridges, ink, and everything your setup needs.",           id: "accessories" },
            { icon: "🌐", title: "Networking",               desc: "Routers, switches, structured cabling and network setup.",            id: "networking"  },
            { icon: "🖱️", title: "Peripherals",              desc: "Keyboards, mice, monitors, headsets and more.",                      id: "peripherals" },
            { icon: "🔋", title: "Ink & Toner Refilling",    desc: "On-site refilling park for laser toner and ink cartridges.",         id: "refilling"   },
            { icon: "🛠️", title: "Repairs & Service",        desc: "Hardware diagnostics, OS install, virus removal & data recovery.",   id: "service"     },
          ].map((item) => (
            <a
              key={item.id}
              id={item.id}
              href={whatsappLink(`Hi! I'm interested in your ${item.title}. Can you tell me more?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-dark-card border border-gray-100 dark:border-blue-900 rounded-2xl p-5 hover:shadow-xl hover:-translate-y-1 hover:border-primary dark:hover:border-blue-400 transition-all duration-300 group"
            >
              <span className="text-4xl">{item.icon}</span>
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
      <footer id="contact" className="bg-white dark:bg-dark-card border-t border-gray-100 dark:border-blue-900 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <p className="text-xs font-bold text-primary dark:text-blue-300 uppercase tracking-widest mb-3">Company |</p>
            <div className="flex items-center gap-3 mb-3">
              <img src={logo} alt="Logo" className="h-10 w-10 object-contain bg-gray-50 dark:bg-dark-bg rounded-xl p-1" />
              <span className="font-black text-gray-800 dark:text-white text-sm">Phoenix Marketers</span>
            </div>
            <p className="text-sm text-gray-400 dark:text-gray-400">Laptops | Desktops | CCTV | Accessories | Refilling Park</p>
            <p className="mt-2 text-sm text-gray-300 dark:text-gray-500">Tuticorin, India</p>
          </div>

          <div>
            <p className="text-xs font-bold text-primary dark:text-blue-300 uppercase tracking-widest mb-3">Address |</p>
            <div className="flex items-start gap-2">
              <span>📍</span>
              <p className="text-sm text-gray-500 dark:text-gray-300 leading-relaxed">
                16/3, Chidambara Nagar<br />
                Main Road, Opp. CSI Church<br />
                Tuticorin — 628 008.
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=16/3+Chidambara+Nagar+Main+Road+Tuticorin"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-xs font-semibold text-primary dark:text-blue-300 hover:underline"
            >
              📌 View on Google Maps →
            </a>
          </div>

          <div>
            <p className="text-xs font-bold text-primary dark:text-blue-300 uppercase tracking-widest mb-3">Proprietorship Details</p>
            <p className="text-base font-bold text-gray-800 dark:text-white">S.W. John Mohan</p>
            <p className="text-sm text-gray-400 dark:text-gray-400 mt-0.5">B.Sc., HDCM., PGDCA., MBA.</p>
          </div>

          <div>
            <p className="text-xs font-bold text-primary dark:text-blue-300 uppercase tracking-widest mb-3">Contact</p>
            <div className="space-y-2 text-sm text-gray-500 dark:text-gray-300">
              <a href="tel:+919500288164" className="flex items-center gap-2 hover:text-primary dark:hover:text-blue-300 transition">
                📞 +91-95002 88164
              </a>
              <a href="tel:+919842125620" className="flex items-center gap-2 hover:text-primary dark:hover:text-blue-300 transition">
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
              <a href="mailto:phoenixmarketers@gmail.com" className="flex items-center gap-2 hover:text-primary dark:hover:text-blue-300 transition break-all">
                ✉️ phoenixmarketers@gmail.com
              </a>
            </div>
            <div className="mt-4">
              <p className="text-xs font-bold text-gray-300 dark:text-gray-500 uppercase tracking-widest mb-1">Hours |</p>
              <p className="text-sm text-gray-500 dark:text-gray-300">Mon–Sat, 9AM–7PM</p>
            </div>
          </div>

        </div>

        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-100 dark:border-blue-900 text-center">
          <p className="text-xs text-gray-300 dark:text-gray-500">
            © 2003–2026 Phoenix Computers. All Rights Reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}

export default Home;