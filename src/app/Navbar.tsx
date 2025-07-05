"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar - Hidden on mobile */}
      <div className="hidden md:block">
        <div className="absolute left-1/2 -translate-x-1/2 top-4 w-[600px] h-[120px] z-0 pointer-events-none" style={{filter: 'blur(32px)'}}>
          <div className="w-full h-full rounded-full bg-gradient-to-b from-[#ff9900]/60 to-transparent" />
        </div>
        <nav className="flex items-center justify-between max-w-4xl mx-auto mt-8 px-8 py-3 rounded-md bg-[rgba(20,20,30,0.7)] shadow-xl backdrop-blur-lg border border-[#ffd70033] relative z-30" style={{boxShadow: '0 4px 32px #0008, 0 0 32px #ffd70022'}}>
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[120px] rounded-full bg-gradient-to-b from-[#ffd70044] to-transparent blur-2xl opacity-60" />
          </div>
          
          {/* Logo */}
          <div className="flex items-center gap-3 z-10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ffd700] to-[#fffbe7] flex items-center justify-center shadow-lg">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14" fill="#222" stroke="#ffd700" strokeWidth="2"/><path d="M16 10v8m0 4h.01" stroke="#ffd700" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <span className="text-[#ffd700] text-2xl font-bold tracking-wide font-sans" style={{fontFamily: 'var(--font-geist-sans), sans-serif'}}>FixFit</span>
          </div>

          {/* Desktop Navigation */}
          <div className="flex gap-8 items-center text-[#fffbe7] text-base font-medium z-10">
            <Link href="/" className="hover:text-[#ffd700] transition">Home</Link>
            <Link href="#about-us" className="hover:text-[#ffd700] transition">About Us</Link>
            <Link href="#feature-showcase" scroll={true} className="hover:text-[#ffd700] transition">Infrastructure</Link>
            <Link href="#testimonial" scroll={true} className="hover:text-[#ffd700] transition">Testimonial</Link>
            <Link href="#faq" scroll={true} className="hover:text-[#ffd700] transition">FAQ</Link>
            <Link href="#contact" scroll={true} className="hover:text-[#ffd700] transition">Contact</Link>
            
            <button className="ml-6 px-6 py-3 rounded-lg bg-gradient-to-r from-[#ff9900] to-[#ff6600] text-white text-lg font-extrabold shadow-lg hover:from-[#ff6600] hover:to-[#ff9900] transition">Sign Up</button>
          </div>
        </nav>
      </div>

      {/* Mobile Floating Menu Button */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <button
          onClick={toggleMenu}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-[#ff9900] to-[#ff6600] shadow-2xl hover:from-[#ff6600] hover:to-[#ff9900] transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={closeMenu}></div>
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-[rgba(20,20,30,0.95)] backdrop-blur-lg border-l border-[#ffd70033] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#ffd70033]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ffd700] to-[#fffbe7] flex items-center justify-center shadow-lg">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14" fill="#222" stroke="#ffd700" strokeWidth="2"/><path d="M16 10v8m0 4h.01" stroke="#ffd700" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <span className="text-[#ffd700] text-xl font-bold tracking-wide font-sans" style={{fontFamily: 'var(--font-geist-sans), sans-serif'}}>FixFit</span>
            </div>
            <button
              onClick={closeMenu}
              className="text-[#fffbe7] hover:text-[#ffd700] transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex-1 flex flex-col p-6 space-y-6">
            <Link 
              href="/" 
              className="text-[#fffbe7] text-lg font-medium hover:text-[#ffd700] transition-colors duration-200 py-3 border-b border-[#ffd70022]"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              href="#about-us" 
              className="text-[#fffbe7] text-lg font-medium hover:text-[#ffd700] transition-colors duration-200 py-3 border-b border-[#ffd70022]"
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link 
              href="#feature-showcase" 
              scroll={true} 
              className="text-[#fffbe7] text-lg font-medium hover:text-[#ffd700] transition-colors duration-200 py-3 border-b border-[#ffd70022]"
              onClick={closeMenu}
            >
              Infrastructure
            </Link>
            <Link 
              href="#testimonial" 
              scroll={true} 
              className="text-[#fffbe7] text-lg font-medium hover:text-[#ffd700] transition-colors duration-200 py-3 border-b border-[#ffd70022]"
              onClick={closeMenu}
            >
              Testimonial
            </Link>
            <Link 
              href="#faq" 
              scroll={true} 
              className="text-[#fffbe7] text-lg font-medium hover:text-[#ffd700] transition-colors duration-200 py-3 border-b border-[#ffd70022]"
              onClick={closeMenu}
            >
              FAQ
            </Link>
            <Link 
              href="#contact" 
              scroll={true} 
              className="text-[#fffbe7] text-lg font-medium hover:text-[#ffd700] transition-colors duration-200 py-3 border-b border-[#ffd70022]"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Sign Up Button */}
          <div className="p-6 border-t border-[#ffd70033]">
            <button className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-[#ff9900] to-[#ff6600] text-white text-lg font-extrabold shadow-lg hover:from-[#ff6600] hover:to-[#ff9900] transition-all duration-200 transform hover:scale-105">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
} 