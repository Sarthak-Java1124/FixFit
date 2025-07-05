"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="absolute left-1/2 -translate-x-1/2 top-4 w-[600px] h-[120px] z-0 pointer-events-none" style={{filter: 'blur(32px)'}}>
        <div className="w-full h-full rounded-full bg-gradient-to-b from-[#ff9900]/60 to-transparent" />
      </div>
      <nav className="flex items-center justify-between max-w-4xl mx-auto mt-8 px-8 py-3 rounded-md bg-[rgba(20,20,30,0.7)] shadow-xl backdrop-blur-lg border border-[#ffd70033] relative z-30" style={{boxShadow: '0 4px 32px #0008, 0 0 32px #ffd70022'}}>
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[120px] rounded-full bg-gradient-to-b from-[#ffd70044] to-transparent blur-2xl opacity-60" />
        </div>
        <div className="flex items-center gap-3 z-10">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ffd700] to-[#fffbe7] flex items-center justify-center shadow-lg">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14" fill="#222" stroke="#ffd700" strokeWidth="2"/><path d="M16 10v8m0 4h.01" stroke="#ffd700" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
          <span className="text-[#ffd700] text-2xl font-bold tracking-wide font-sans" style={{fontFamily: 'var(--font-geist-sans), sans-serif'}}>FixFit</span>
        </div>
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
    </>
  );
} 