import { useState, useEffect} from "react";
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
import chat from "../assets/whatsapp.png";
import { whatsappLink } from "../utils/whatsapp";
import { icons } from "../constants/icons";
import ProductCarousel from "../components/ProductCarousel";
import CatalogueCard from "../components/CatalogueCard";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";

function Home() {

  return (
    <main className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">

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
      <CatalogueCard/>

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
      <Footer/>

      {/* ── BOTTOM FLOATING PILL NAV ── */}
      <BottomNav />

    </main>
  );
}

export default Home;