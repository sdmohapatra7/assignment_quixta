export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020202] py-16 px-6 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-4 max-w-sm">
          <span className="text-2xl font-bold tracking-widest text-white">IDYLLIC</span>
          <p className="text-sm text-gray-500">
            Advanced materials for the next generation of modern technology and innovation.
          </p>
        </div>

        {/* Links Array */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">
          <div className="flex flex-col gap-4">
            <span className="font-semibold text-white">Company</span>
            <a href="#" className="text-gray-400 hover:text-white transition">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Careers</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Partners</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-semibold text-white">Resources</span>
            <a href="#" className="text-gray-400 hover:text-white transition">Blog</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Documentation</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Support</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-semibold text-white">Legal</span>
            <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
        <p>&copy; 2024 IDYLLIC Advanced Materials. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          {/* Social Icons Placeholders */}
          <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:border-gray-500 cursor-pointer transition">in</div>
          <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:border-gray-500 cursor-pointer transition">tw</div>
        </div>
      </div>
    </footer>
  );
}
