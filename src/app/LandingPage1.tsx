"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";

const tailoringImages = [
  "/alterations.png",
  "/clothing.png",
  "/fashion-design.png",
  "/measure.png",
  "/sewing-machine.png"
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.4,
    },
  },
};
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 1.4 } },
};


function LandingPage1() {
  const { status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const router = useRouter();
  function routeIt() {
    router.push("/sign-in");
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
          <div className="min-h-screen bg-black/80 font-[chakra] relative overflow-hidden">
        <div className="hidden md:block">
        <div
          className="absolute left-1/2 -translate-x-1/2 top-4 w-[600px] h-[120px] z-0 pointer-events-none"
          style={{ filter: "blur(32px)" }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-b from-[#ff9900]/60 to-transparent" />
        </div>
        <nav
          className="flex items-center justify-between max-w-4xl mx-auto mt-8 px-8 py-3 rounded-md bg-[rgba(20,20,30,0.7)] shadow-xl backdrop-blur-lg border border-[#ffd70033] relative z-30"
          style={{ boxShadow: "0 4px 32px #0008, 0 0 32px #ffd70022" }}
        >
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[120px] rounded-full bg-gradient-to-b from-[#ffd70044] to-transparent blur-2xl opacity-60" />
          </div>
          <div className="flex items-center gap-3 z-10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ffd700] to-[#fffbe7] flex items-center justify-center shadow-lg">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  fill="#222"
                  stroke="#ffd700"
                  strokeWidth="2"
                />
                <path
                  d="M16 10v8m0 4h.01"
                  stroke="#ffd700"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span
              className="text-[#ffd700] text-2xl font-bold tracking-wide font-sans"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
            >
              FixFit
            </span>
          </div>
          <div className="flex gap-8 items-center text-[#fffbe7] text-base font-medium z-10">
            <a href="#feature-showcase" className="hover:text-[#ffd700] transition">Infrastructure</a>
            <a href="#testimonial" className="hover:text-[#ffd700] transition">Testimonial</a>
            <a href="/about-us" className="hover:text-[#ffd700] transition">About Us</a>
            <a href="#faq" className="hover:text-[#ffd700] transition">FAQ</a>
            <a href="#contact" className="hover:text-[#ffd700] transition">Contact</a>
          </div>
        </nav>
      </div>

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

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={closeMenu}></div>
      )}

      <div className={`fixed top-0 right-0 h-full w-80 bg-[rgba(20,20,30,0.95)] backdrop-blur-lg border-l border-[#ffd70033] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-[#ffd70033]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ffd700] to-[#fffbe7] flex items-center justify-center shadow-lg">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" fill="#222" stroke="#ffd700" strokeWidth="2"/>
                  <path d="M16 10v8m0 4h.01" stroke="#ffd700" strokeWidth="2" strokeLinecap="round"/>
                </svg>
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

          <div className="flex-1 flex flex-col p-6 space-y-6">
            <a 
              href="#feature-showcase" 
              className="text-[#fffbe7] text-lg font-medium hover:text-[#ffd700] transition-colors duration-200 py-3 border-b border-[#ffd70022]"
              onClick={closeMenu}
            >
              Infrastructure
            </a>
            <a 
              href="#testimonial" 
              className="text-[#fffbe7] text-lg font-medium hover:text-[#ffd700] transition-colors duration-200 py-3 border-b border-[#ffd70022]"
              onClick={closeMenu}
            >
              Testimonial
            </a>
            <a 
              href="/about-us" 
              className="text-[#fffbe7] text-lg font-medium hover:text-[#ffd700] transition-colors duration-200 py-3 border-b border-[#ffd70022]"
              onClick={closeMenu}
            >
              About Us
            </a>
            <a 
              href="#faq" 
              className="text-[#fffbe7] text-lg font-medium hover:text-[#ffd700] transition-colors duration-200 py-3 border-b border-[#ffd70022]"
              onClick={closeMenu}
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              className="text-[#fffbe7] text-lg font-medium hover:text-[#ffd700] transition-colors duration-200 py-3 border-b border-[#ffd70022]"
              onClick={closeMenu}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] pt-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full flex flex-col items-center"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center justify-center text-center px-4 mb-10 z-20"
          >
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl text-[#fffbe7] mb-4 drop-shadow-lg leading-tight font-sans font-[var(--font-sora)]"
              style={{
                letterSpacing: "-0.01em",
                fontFamily: "var(--font-sora), sans-serif",
                fontWeight: 400,
              }}
            >
              Step into the Future of E-Tailoring
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-[#ffe259] mb-8 max-w-xl mx-auto font-sans font-[var(--font-sora)]"
              style={{
                fontFamily: "var(--font-sora), sans-serif",
                fontWeight: 400,
              }}
            >
              Maximize your style with a powerful platform built to shape the
              future of tailoring. Book expert tailors for altering, cutting,
              rafu, and more—fast, reliable, and at your doorstep.
            </motion.p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="flex gap-4 justify-center mb-12 z-20"
          >
            {status === "authenticated" ? (
              <button
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#ff9900] to-[#ff6600] text-white font-bold text-lg shadow-lg hover:from-[#ff6600] hover:to-[#ff9900] transition font-sans"
                style={{
                  fontFamily: "var(--font-sora), sans-serif",
                  boxShadow: "0 2px 24px #ff990055",
                }}
                onClick={routeIt}
              >
                Go to Dashboard
              </button>
            ) : (
              <button
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#ff9900] to-[#ff6600] text-white font-bold text-lg shadow-lg hover:from-[#ff6600] hover:to-[#ff9900] transition font-sans"
                style={{
                  fontFamily: "var(--font-sora), sans-serif",
                  boxShadow: "0 2px 24px #ff990055",
                }}
                onClick={routeIt}
              > Log In</button>
            )}
            <button
              className="px-8 py-3 rounded-lg bg-black/80 text-white font-bold text-lg border border-[#222] shadow hover:bg-[#1a1a1a] transition font-sans"
              style={{
                fontFamily: "var(--font-sora), sans-serif",
                boxShadow: "0 2px 16px #0008",
              }}
            >
              Live Demo
            </button>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="relative w-full flex justify-center items-center h-[140px] md:h-[180px] z-10 mt-4 border-none"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] md:w-[220px] md:h-[220px] z-20 pointer-events-none flex items-center justify-center">
              <Image
                src="/glowingRing_transparent.gif"
                alt="Glowing Ring"
                width={220}
                height={220}
                className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] object-contain"
              />
            </div>
            <motion.div
              className="flex gap-32"
              initial={{ x: 0 }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 32,
                ease: "linear",
              }}
              style={{ width: "200%" }}
            >
              {[...tailoringImages, ...tailoringImages].map((src, idx) => (
                <span
                  key={idx}
                  className="flex items-center justify-center animate-glow min-w-[100px] min-h-[100px] md:min-w-[140px] md:min-h-[140px]"
                  style={{
                    filter:
                      idx % 5 === 2
                        ? "drop-shadow(0 0 48px #ff9900) brightness(1.5)"
                        : "drop-shadow(0 0 32px #ff9900)",
                  }}
                >
                  <Image
                    src={src}
                    alt="Tailoring Icon"
                    width={140}
                    height={140}
                    className="object-contain w-[100px] h-[100px] md:w-[140px] md:h-[140px] min-w-[100px] min-h-[100px] md:min-w-[140px] md:min-h-[140px]"
                  />
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      <style jsx global>{`
        @keyframes glow {
          0%,
          100% {
            filter: drop-shadow(0 0 16px #ff9900) brightness(1.2);
          }
          50% {
            filter: drop-shadow(0 0 32px #ffe259) brightness(1.5);
          }
        }
        .animate-glow {
          animation: glow 2s infinite alternate;
        }
        @keyframes fire-wall {
          0%,
          100% {
            box-shadow: 0 0 32px 8px #ff9900, 0 0 64px 16px #ffa75144;
            opacity: 1;
          }
          50% {
            box-shadow: 0 0 48px 16px #ffa751, 0 0 96px 32px #ff990044;
            opacity: 0.85;
          }
        }
        .animate-fire-wall {
          animation: fire-wall 1.2s infinite alternate;
        }
      `}</style>
    </div>
  );
}

export default LandingPage1; 