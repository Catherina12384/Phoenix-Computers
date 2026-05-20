import { whatsappLink } from "../utils/whatsapp";
import chat from "../assets/whatsapp.png";
import { icons } from "../constants/icons";

function CatalogueCard(){
    return(
        <section id="catalogue" className="bg-white dark:bg-dark-card py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-black text-primary dark:text-blue-300 mb-2">
                    What We Offer
                </h2>
                <p className="text-gray-400 dark:text-gray-400 mb-10">
                    24 years of trusted service in Tuticorin. Ask us anything on WhatsApp.
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
                          <p className="mt-1 text-sm text-black-400 dark:text-gray-400">
                            {item.desc}
                          </p>
                          <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-green-600 dark:text-green-400">
                            <img src={chat} alt="whatsapp" className="w-5 h-5 animate-pulse"/> Ask on WhatsApp →
                          </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CatalogueCard;