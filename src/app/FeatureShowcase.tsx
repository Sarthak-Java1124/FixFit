"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaUserEdit, FaSocks, FaFemale, FaRegDotCircle, FaTruck, FaClock, FaCheckCircle } from "react-icons/fa";
import { GiZipper } from "react-icons/gi";

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

export default function FeatureShowcase() {
  return (
    <motion.section
      id="feature-showcase"
      className="relative flex flex-col items-center justify-center py-24 bg-black/80 overflow-hidden border-none shadow-none"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Orange label */}
      <motion.div variants={fadeUp} className="mb-4 text-xs font-semibold tracking-widest text-[#ff9900] uppercase z-10">JOIN THE REVOLUTION</motion.div>
      {/* Heading Glow Effect */}
      <motion.div variants={fadeUp} className="relative flex justify-center items-center mb-4 z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[120px] md:w-[700px] md:h-[180px] pointer-events-none -z-10 animate-glow-drop">
          <div className="w-full h-full rounded-full bg-gradient-to-b from-[#ff9900cc] via-[#fffbe7cc] to-transparent blur-3xl opacity-70" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#fffbe7] text-center z-10" style={{fontFamily: 'var(--font-sora), sans-serif'}}>
        Bringing Tailoring to<br/>Your Doorstep
        </h2>
      </motion.div>
      {/* Subtitle */}
      <motion.p variants={fadeUp} className="text-base md:text-lg text-[#bfae8e] text-center max-w-2xl mb-16 z-10" style={{fontFamily: 'var(--font-sora), sans-serif'}}>
      Get minor tailoring jobs like alteration, rafu, fall-pico & more done within 24 hours — without leaving home.
      </motion.p>
      {/* Glowing geometric background */}
      <div className="absolute left-1/2 top-32 md:top-28 -translate-x-1/2 z-0 pointer-events-none">
        <svg width="340" height="180" viewBox="0 0 340 180" fill="none" className="opacity-60 blur-[2px]">
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%" gradientTransform="matrix(1 0 0 0.5 0 0)">
              <stop offset="0%" stopColor="#ff9900" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#000" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="170" cy="90" rx="160" ry="70" fill="url(#glow)" />
        </svg>
        <svg width="120" height="120" viewBox="0 0 120 120" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80">
          <polygon points="60,10 110,110 10,110" fill="#ff9900" fillOpacity="0.08" />
          <polygon points="60,30 95,105 25,105" fill="#ff9900" fillOpacity="0.12" />
        </svg>
      </div>
      {/* Glassy Cards */}
      <motion.div variants={fadeUp} className="relative z-10 flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center items-stretch mt-8">
        {/* Left Card: Popular Tailoring Services */}
        <div className="flex-1 bg-[rgba(20,20,30,0.85)] rounded-xl shadow-2xl border border-[#ff9900]/30 backdrop-blur-xl p-8 min-w-[320px] max-w-[420px] flex flex-col justify-between">
          <div className="mb-6">
            <div className="text-white text-lg font-semibold mb-4 tracking-wide flex items-center gap-2">
              Popular Tailoring Services
            </div>
            <ul className="space-y-3 mb-4">
              <li className="flex items-center gap-3 text-white text-base font-medium">
                <FaUserEdit className="text-2xl text-[#ff9900]" /> Alteration <span className="ml-auto text-[#ff9900] font-bold">₹49</span>
              </li>
              <li className="flex items-center gap-3 text-white text-base font-medium">
                <FaSocks className="text-2xl text-[#ff9900]" /> Rafu (Torn Stitch Fix) <span className="ml-auto text-[#ff9900] font-bold">₹59</span>
              </li>
              <li className="flex items-center gap-3 text-white text-base font-medium">
                <FaFemale className="text-2xl text-[#ff9900]" /> Fall & Pico <span className="ml-auto text-[#ff9900] font-bold">₹39</span>
              </li>
              <li className="flex items-center gap-3 text-white text-base font-medium">
                <GiZipper className="text-2xl text-[#ff9900]" /> Zip Replacement <span className="ml-auto text-[#ff9900] font-bold">₹89</span>
              </li>
              <li className="flex items-center gap-3 text-white text-base font-medium">
                <FaRegDotCircle className="text-2xl text-[#ff9900]" /> Button Stitching <span className="ml-auto text-[#ff9900] font-bold">₹29</span>
              </li>
            </ul>
            <div className="text-sm font-semibold text-yellow-400 text-center mt-2">Pickup + Delivery included!</div>
          </div>
          {/* Ribbon */}
          <div className="mt-4 w-full text-xs font-semibold text-center bg-gradient-to-r from-[#18181c]/80 via-[#ff9900]/10 to-[#18181c]/80 text-[#fffbe7] rounded-lg py-2 shadow-inner border border-[#ff9900]/20">
            <span className="mr-2">🔐 Verified Local Tailors</span>|
            <span className="mx-2">🧾 Transparent Pricing</span>|
            <span className="ml-2">🛡️ Secure Payments</span>
          </div>
        </div>
        {/* Right Card: Delivery Guarantee & Stats */}
        <div className="flex-1 bg-[rgba(20,20,30,0.85)] rounded-xl shadow-2xl border border-[#ff9900]/30 backdrop-blur-xl p-8 min-w-[320px] max-w-[420px] flex flex-col justify-between">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-white text-lg font-semibold tracking-wide">Delivery Guarantee: <span className='text-[#ff9900]'>24 Hours</span></div>
            </div>
            <ul className="space-y-3 mt-6 mb-4">
              <li className="flex items-center gap-3 text-white text-base font-medium">
                <FaTruck className="text-2xl text-[#ff9900]" /> Orders Delivered <span className="ml-auto text-[#ff9900] font-bold">2351</span>
              </li>
              <li className="flex items-center gap-3 text-white text-base font-medium">
                <FaClock className="text-2xl text-[#ff9900]" /> Avg Pickup Time <span className="ml-auto text-[#ff9900] font-bold">1.5 hrs</span>
              </li>
              <li className="flex items-center gap-3 text-white text-base font-medium">
                <FaCheckCircle className="text-2xl text-[#ff9900]" /> Completion Success Rate <span className="ml-auto text-[#ff9900] font-bold">99.3%</span>
              </li>
            </ul>
            <div className="text-sm font-semibold text-yellow-400 text-center mt-2">Reliable | Fast | Affordable</div>
          </div>
          {/* Ribbon */}
          <div className="mt-4 w-full text-xs font-semibold text-center bg-gradient-to-r from-[#18181c]/80 via-[#ff9900]/10 to-[#18181c]/80 text-[#fffbe7] rounded-lg py-2 shadow-inner border border-[#ff9900]/20">
            <span className="mr-2">🔐 Verified Local Tailors</span>|
            <span className="mx-2">🧾 Transparent Pricing</span>|
            <span className="ml-2">🛡️ Secure Payments</span>
          </div>
        </div>
      </motion.div>
      <style jsx global>{`
        @keyframes glow-drop {
          0%, 100% { opacity: 0.7; filter: blur(48px); }
          50% { opacity: 1; filter: blur(64px); }
        }
        .animate-glow-drop {
          animation: glow-drop 3.2s infinite alternate;
        }
      `}</style>
    </motion.section>
  );
} 