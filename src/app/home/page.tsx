"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import StarBackground from "../StarBackground";

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
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1 } },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black/90 font-[chakra] relative overflow-hidden flex flex-col items-center justify-center">
      <StarBackground />
      <div className="absolute left-1/2 -translate-x-1/2 top-4 w-[500px] h-[100px] z-0 pointer-events-none" style={{ filter: "blur(32px)" }}>
        <div className="w-full h-full rounded-full bg-gradient-to-b from-[#ff9900]/60 to-transparent" />
      </div>
      <section className="relative flex flex-col items-center justify-center min-h-[40vh] pt-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full flex flex-col items-center"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl text-[#fffbe7] mb-4 drop-shadow-lg leading-tight font-sans font-[var(--font-sora)]"
            style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: 400 }}
          >
            Welcome Home, FixFit User!
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-[#ffe259] mb-8 max-w-2xl mx-auto font-sans font-[var(--font-sora)]"
            style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: 400 }}
          >
            Discover the best tailoring services, manage your orders, and explore new stylesall in one place.
          </motion.p>
        </motion.div>
        <motion.div
          variants={fadeUp}
          className="relative w-full flex justify-center items-center h-[140px] md:h-[180px] z-10 mt-4 border-none"
        >
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
      </section>
      {/* Glassy Card with Quick Links */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        className="relative z-10 bg-[rgba(30,30,40,0.85)] border border-[#ffd70022] shadow-lg backdrop-blur-lg rounded-2xl p-10 w-full max-w-2xl flex flex-col items-center mt-10"
        style={{ boxShadow: "0 2px 24px #ff990033" }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center mb-6">
          <h2 className="text-2xl font-bold text-[#ffd700] mb-1 font-sans" style={{ fontFamily: "var(--font-sora), sans-serif" }}>Quick Links</h2>
          <p className="text-[#fffbe7] text-base font-medium">Jump to your favorite features</p>
        </motion.div>
        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <a href="#" className="bg-black/60 rounded-lg px-6 py-4 text-[#ffd700] font-semibold text-center shadow hover:bg-[#222] transition border border-[#ffd70033]">My Orders</a>
          <a href="#" className="bg-black/60 rounded-lg px-6 py-4 text-[#ffd700] font-semibold text-center shadow hover:bg-[#222] transition border border-[#ffd70033]">Measurements</a>
          <a href="#" className="bg-black/60 rounded-lg px-6 py-4 text-[#ffd700] font-semibold text-center shadow hover:bg-[#222] transition border border-[#ffd70033]">Tailor Chat</a>
          <a href="#" className="bg-black/60 rounded-lg px-6 py-4 text-[#ffd700] font-semibold text-center shadow hover:bg-[#222] transition border border-[#ffd70033]">Style Gallery</a>
        </motion.div>
      </motion.div>
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
      `}</style>
    </div>
  );
} 