import { Linkedin, Twitter, Divide } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#0c0c0c] py-20 px-6 mt-24 text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-6 max-w-sm">
          <span className="text-2xl font-bold tracking-widest text-white uppercase">IDYLLIC</span>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.
          </p>
          <div className="flex gap-4 mt-2">
            <div className="w-10 h-10 rounded-full border border-gray-700 bg-[#161616] flex items-center justify-center hover:border-gray-400 cursor-pointer transition-colors text-white">
              <span className="font-bold text-sm">in</span>
            </div>
            <div className="w-10 h-10 rounded-full border border-gray-700 bg-[#161616] flex items-center justify-center hover:border-gray-400 cursor-pointer transition-colors text-white">
              <Twitter size={18} fill="currentColor" className="text-white" />
            </div>
          </div>
        </div>

        {/* Links Array */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16 text-sm">
          <div className="flex flex-col gap-5">
            <span className="font-bold text-white mb-2">Company Info</span>
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Careers</a>
            <a href="#" className="hover:text-white transition">Contact Us</a>
          </div>
          <div className="flex flex-col gap-5">
            <span className="font-bold text-white mb-2">Services</span>
            <a href="#" className="hover:text-white transition">Service 1</a>
            <a href="#" className="hover:text-white transition">Service 2</a>
            <a href="#" className="hover:text-white transition">Service 3</a>
          </div>
          <div className="flex flex-col gap-5">
            <span className="font-bold text-white mb-2">Legal policies</span>
            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
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
