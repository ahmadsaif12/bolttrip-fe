import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100 mt-32 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl -mr-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          
          {/* Logo & Description */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="text-3xl font-black tracking-tighter flex items-center gap-1 mb-8">
              <span className="text-[#0b3155]">BOLT</span>
              <span className="text-[#FF6D38]">Trip</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-bold">
              Book your trip in minutes, get full control for much longer. The ultimate travel companion for the modern explorer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-[#0b3155] text-xs uppercase tracking-[0.2em] mb-8">Quick Links</h4>
            <ul className="space-y-5">
              <li><Link href="/" className="text-gray-500 hover:text-[#0b3155] text-sm font-bold transition-all">Home</Link></li>
              <li><Link href="/flights" className="text-gray-500 hover:text-[#0b3155] text-sm font-bold transition-all">Flights</Link></li>
              <li><Link href="/hotels" className="text-gray-500 hover:text-[#0b3155] text-sm font-bold transition-all">Hotels</Link></li>
              <li><Link href="/activities" className="text-gray-500 hover:text-[#0b3155] text-sm font-bold transition-all">Activities</Link></li>
              <li><Link href="/blog" className="text-gray-500 hover:text-[#0b3155] text-sm font-bold transition-all">Blog</Link></li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h4 className="font-black text-[#0b3155] text-xs uppercase tracking-[0.2em] mb-8">Discover</h4>
            <ul className="space-y-5">
              <li><Link href="/packages" className="text-gray-500 hover:text-[#0b3155] text-sm font-bold transition-all">Tour Packages</Link></li>
              <li><Link href="/hotels" className="text-gray-500 hover:text-[#0b3155] text-sm font-bold transition-all">Hotels</Link></li>
              <li><Link href="/guides" className="text-gray-500 hover:text-[#0b3155] text-sm font-bold transition-all">Guides & Porters</Link></li>
              <li><Link href="/planner" className="text-gray-500 hover:text-[#0b3155] text-sm font-bold transition-all">Itinerary Planner</Link></li>
              <li><Link href="/reviews" className="text-gray-500 hover:text-[#0b3155] text-sm font-bold transition-all">Reviews</Link></li>
            </ul>
          </div>

          {/* Support & Connect */}
          <div>
            <h4 className="font-black text-[#0b3155] text-xs uppercase tracking-[0.2em] mb-8">Support</h4>
            <ul className="space-y-5">
              <li><Link href="/contact" className="text-gray-500 hover:text-[#0b3155] text-sm font-bold transition-all">Contact Us</Link></li>
              <li><Link href="/faq" className="text-gray-500 hover:text-[#0b3155] text-sm font-bold transition-all">FAQ</Link></li>
              <li><Link href="/terms" className="text-gray-500 hover:text-[#0b3155] text-sm font-bold transition-all">Term & Policies</Link></li>
              <li><Link href="/about" className="text-gray-500 hover:text-[#0b3155] text-sm font-bold transition-all">About Us</Link></li>
            </ul>
          </div>

          {/* App & Social */}
          <div className="col-span-1 lg:col-span-1">
            <h4 className="font-black text-[#0b3155] text-xs uppercase tracking-[0.2em] mb-8">Our App</h4>
            <div className="flex gap-3 mb-10">
              <button className="bg-[#0b3155] text-white p-3 rounded-2xl shadow-lg shadow-blue-900/10 hover:scale-110 transition-all">
                <FaFacebook size={18} />
              </button>
              <button className="bg-[#FF6D38] text-white p-3 rounded-2xl shadow-lg shadow-orange-900/10 hover:scale-110 transition-all">
                <FaInstagram size={18} />
              </button>
              <button className="bg-[#00aaff] text-white p-3 rounded-2xl shadow-lg shadow-blue-500/10 hover:scale-110 transition-all">
                <FaTwitter size={18} />
              </button>
            </div>
            
            <div className="space-y-4">
              <button className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl flex items-center gap-4 hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all group">
                <div className="w-8 h-8 bg-black rounded-lg group-hover:rotate-12 transition-all"></div>
                <div className="text-left">
                  <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Download on</p>
                  <p className="text-xs font-black text-[#0b3155]">App Store</p>
                </div>
              </button>
              <button className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl flex items-center gap-4 hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all group">
                <div className="w-8 h-8 bg-black rounded-lg group-hover:rotate-12 transition-all"></div>
                <div className="text-left">
                  <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Get it on</p>
                  <p className="text-xs font-black text-[#0b3155]">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">
          <p>© 2025 Leadmark Info Sys. All Rights Reserved. | Site by Yubraj Khadka</p>
          <div className="flex items-center gap-8">
            <span className="cursor-pointer hover:text-[#0b3155] transition-colors">$ USD</span>
            <span className="cursor-pointer hover:text-[#0b3155] transition-colors">United States</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
