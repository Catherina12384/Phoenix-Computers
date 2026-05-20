import logo from "../assets/logo.png";
import { whatsappLink } from "../utils/whatsapp";
import chat from "../assets/whatsapp.png";


function Footer(){
    return(
        <footer id="contact" className="bg-white dark:bg-dark-card border-t border-gray-100 dark:border-blue-900 py-12 pb-24 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                <div>
                    <p className="text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-widest mb-3">Company |</p>
                    <div className="flex items-center gap-3 mb-3">
                      <img src={logo} alt="Logo" className="h-10 w-10 object-contain bg-gray-50 dark:bg-white rounded-xl p-1" />
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

                    <div className="mt-4">
                        <p className="text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-widest mb-1">Hours |</p>
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Mon–Sat, 10AM–8PM</p>
                    </div>
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
                        <img src={chat} alt="whatsapp" className="w-5 h-5 animate-pulse"/> WhatsApp Us
                      </a>
                      <a href="mailto:phoenixmarketers@gmail.com" className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-100 transition break-all">
                        ✉️ phoenixmarketers@gmail.com
                      </a>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-black-100 dark:border-blue-900 text-center">
                <p className="text-xs font-semibold text-black-700 dark:text-gray-400">
                  © 2003–2026 Phoenix Computers. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;