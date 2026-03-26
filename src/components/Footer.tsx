import { Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#0c0c0c] py-20 px-6 mt-24 text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Header info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#1a1a1a] pb-10 gap-6">
          <span className="text-3xl font-light tracking-widest text-white uppercase">LOGO</span>
          <div className="flex flex-col md:flex-row gap-8 md:gap-32 text-sm text-gray-300">
            <span className="font-medium">+12 34567 8900</span>
            <span className="font-medium">email@email.com</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          {/* Brand Note & Socials */}
          <div className="flex flex-col gap-6 max-w-sm">
            <p className="text-sm leading-relaxed text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 bg-transparent flex items-center justify-center hover:border-gray-400 cursor-pointer transition-colors text-white">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 bg-transparent flex items-center justify-center hover:border-gray-400 cursor-pointer transition-colors text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 bg-transparent flex items-center justify-center hover:border-gray-400 cursor-pointer transition-colors text-white">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links Array */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24 text-sm w-full lg:w-auto">
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-white transition">Home</a>
              <a href="#" className="hover:text-white transition">About</a>
              <a href="#" className="hover:text-white transition">Careers</a>
              <a href="#" className="hover:text-white transition">News</a>
              <a href="#" className="hover:text-white transition">Contact</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-white transition">Service</a>
              <a href="#" className="hover:text-white transition">Contact us</a>
              <a href="#" className="hover:text-white transition">Careers</a>
              <a href="#" className="hover:text-white transition">History</a>
              <a href="#" className="hover:text-white transition">...</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-white transition">About Us</a>
              <a href="#" className="hover:text-white transition">Our Projects</a>
              <a href="#" className="hover:text-white transition">Archive</a>
              <a href="#" className="hover:text-white transition">Our Team</a>
              <a href="#" className="hover:text-white transition">Join</a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-center text-xs">
        <p>Copyright &copy; 2024. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Terms of use</a>
          <a href="#" className="hover:text-white">Privacy policy</a>
        </div>
      </div>
    </footer>
  );
}
