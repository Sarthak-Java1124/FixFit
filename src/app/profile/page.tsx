"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1 } },
};

export default async function ProfilePage() {
  await getServerSession(authOptions);

  
  return (
    <div className="min-h-screen bg-black/90 font-[chakra] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-4 w-[500px] h-[100px] z-0 pointer-events-none" style={{ filter: "blur(32px)" }}>
        <div className="w-full h-full rounded-full bg-gradient-to-b from-[#ff9900]/60 to-transparent" />
      </div>
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        className="relative z-10 bg-[rgba(30,30,40,0.85)] border border-[#ffd70022] shadow-lg backdrop-blur-lg rounded-2xl p-10 w-full max-w-md flex flex-col items-center"
        style={{ boxShadow: "0 2px 24px #ff990033" }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#ffd700] to-[#fffbe7] flex items-center justify-center shadow-lg mb-2">
            <Image src="/tailor-logo-1.png" alt="Profile" width={80} height={80} className="object-contain rounded-full" />
          </div>
          <h2 className="text-2xl font-bold text-[#ffd700] mb-1 font-sans" style={{ fontFamily: "var(--font-sora), sans-serif" }}>Your Profile</h2>
          <p className="text-[#fffbe7] text-base font-medium">Manage your account details</p>
        </motion.div>
        <motion.form variants={fadeUp} className="flex flex-col gap-5 w-full">
          <div>
            <label className="block text-[#ffd700] font-semibold mb-1">Name</label>
            <input type="text" className="w-full px-4 py-2 rounded-lg bg-black/60 text-[#fffbe7] border border-[#ffd70033] focus:outline-none focus:ring-2 focus:ring-[#ffd700] transition" placeholder="Your Name" disabled />
          </div>
          <div>
            <label className="block text-[#ffd700] font-semibold mb-1">Email</label>
            <input type="email" className="w-full px-4 py-2 rounded-lg bg-black/60 text-[#fffbe7] border border-[#ffd70033] focus:outline-none focus:ring-2 focus:ring-[#ffd700] transition" placeholder="you@email.com" disabled />
          </div>
          <div>
            <label className="block text-[#ffd700] font-semibold mb-1">Phone</label>
            <input type="tel" className="w-full px-4 py-2 rounded-lg bg-black/60 text-[#fffbe7] border border-[#ffd70033] focus:outline-none focus:ring-2 focus:ring-[#ffd700] transition" placeholder="Phone Number" disabled />
          </div>
          <div>
            <label className="block text-[#ffd700] font-semibold mb-1">Address</label>
            <input type="text" className="w-full px-4 py-2 rounded-lg bg-black/60 text-[#fffbe7] border border-[#ffd70033] focus:outline-none focus:ring-2 focus:ring-[#ffd700] transition" placeholder="Address" disabled />
          </div>
          <button type="button" className="mt-4 px-6 py-2 rounded-lg bg-gradient-to-r from-[#ff9900] to-[#ffd700] text-black font-bold shadow-lg hover:from-[#ffd700] hover:to-[#ff9900] transition">Edit Profile (UI only)</button>
        </motion.form>
      </motion.div>
    </div>
  );
} 