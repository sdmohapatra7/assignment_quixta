"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-widest text-white">
          IDYLLIC
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm text-gray-300 font-medium">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="#services" className="hover:text-white transition-colors">Services</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="text-sm text-gray-300 hover:text-white transition-colors">
            Login
          </Link>
          <Link
            href="/signup"
            className="text-sm bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 flex flex-col items-center py-6 space-y-4 shadow-2xl">
          <Link href="/" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#about" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#services" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="#contact" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Contact</Link>
          <div className="w-full flex flex-col px-6 space-y-3 pt-4 border-t border-white/10">
            <Link href="/login" className="text-center text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Login</Link>
            <Link href="/signup" className="text-center bg-white text-black py-2 rounded-full font-semibold" onClick={() => setIsOpen(false)}>Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
