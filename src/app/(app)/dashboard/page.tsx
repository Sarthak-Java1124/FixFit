"use client";

import { motion, easeOut, easeInOut } from "framer-motion";
import Image from "next/image";
import StarBackground from "../../StarBackground";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


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

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: easeOut } },
  hover: { scale: 1.06, boxShadow: '0 0 48px #ffd70088, 0 0 0 #fff0' },
  tap: { scale: 0.97, boxShadow: '0 0 32px #ff9900cc' },
};
const headingVariants = {
  hidden: { opacity: 0, y: -32 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: easeOut } },
  float: { y: [0, -10, 0, 10, 0], transition: { repeat: Infinity, duration: 7, ease: easeInOut } },
};

export default function DashboardPage() {
  const router = useRouter();
  
  const handleLogout = async () => {
    try {
      console.log("Starting logout process...");
      
      await signOut({ 
        redirect: false
      });
      
      console.log("Sign out successful, redirecting...");
      
      router.push("/sign-in");
      
    } catch (error) {
      console.error("Logout error:", error);
      
      try {
        await signOut({ redirect: false });
      } catch (secondError) {
        console.error("Second logout attempt failed:", secondError);
      }
      
      window.location.href = "/sign-in";
    }
  };
  const dashboardFeatures = [
    {
      title: "Select Your Service",
      icon: "/scissor-icon.svg",
      desc: "Choose from a variety of tailoring services to get started.",
      onclick : ()=>{
        router.replace("/select-your-service");
      }
    },
    {
      title: "Measurements",
      icon: "/measure.png",
      desc: "Save and update your body measurements securely.",
      onclick : ()=>{
       
      }
    },
    {
      title: "Tailor Chat",
      icon: "/sewing-machine.png",
      desc: "Chat directly with your tailor for updates and requests.",
      onclick : ()=>{
       
      }

    },
    {
      title: "Style Gallery",
      icon: "/fashion-design.png",
      desc: "Browse and save your favorite styles and inspirations.",
      onclick : ()=>{
       
      }
    },
  ];
  
  const {status, data: session} = useSession();
  
  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/sign-in");
    }
  }, [status, router]);
  
  if (status === "loading") {
    return (
      <div className="min-h-screen bg-black/90 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }
  
  if (status === "unauthenticated") {
    return null;
  }
  return (
    <div className="min-h-screen bg-black/90 font-[chakra] relative overflow-hidden">
      <StarBackground />
      {/* Orange Glow Behind Navbar */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-4 w-[500px] h-[100px] z-0 pointer-events-none"
        style={{ filter: "blur(32px)" }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-b from-[#ff9900]/60 to-transparent" />
      </div>
      <nav
        className="flex items-center justify-between max-w-3xl mx-auto mt-8 px-8 py-3 rounded-md bg-[rgba(20,20,30,0.7)] shadow-xl backdrop-blur-lg border border-[#ffd70033] relative z-30"
        style={{ boxShadow: "0 4px 32px #0008, 0 0 32px #ffd70022" }}
      >
        <div className="flex items-center gap-3 z-10">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#ffd700] to-[#fffbe7] flex items-center justify-center shadow-lg">
            <Image src="/tailor-logo-1.png" alt="Logo" width={28} height={28} className="object-contain" />
          </div>
          <span
            className="text-[#ffd700] text-xl font-bold tracking-wide font-sans"
            style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
          >
            Tailor Dashboard
          </span>
        </div>
        <div className="flex gap-6 items-center text-[#fffbe7] text-base font-medium z-10">
          <a href="/home" className="hover:text-[#ffd700] transition">Home</a>
          <a href="/profile" className="hover:text-[#ffd700] transition">Profile</a>
          <button onClick={handleLogout} className="hover:text-[#ffd700] transition">Logout</button>
        </div>
      </nav>
      <section className="relative flex flex-col items-center justify-center min-h-[40vh] pt-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full flex flex-col items-center"
        >
          <motion.h1
            variants={headingVariants}
            initial="hidden"
            animate={["show", "float"]}
            className="text-4xl md:text-5xl text-white mb-4 drop-shadow-lg leading-tight font-sans font-[var(--font-sora)]"
            style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: 400 }}
          >
            Welcome to Your Tailoring Dashboard
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-[#ffe259] mb-8 max-w-2xl mx-auto font-sans font-[var(--font-sora)]"
            style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: 400 }}
          >
            Manage your orders, measurements, and tailor communications—all in one place.
          </motion.p>
        </motion.div>
      </section>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-6 py-12"
      >
        {dashboardFeatures.map((feature, idx) => (
          <motion.div
            key={feature.title}
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={feature.onclick}
            className={`bg-[rgba(30,30,40,0.85)] rounded-2xl p-8 flex items-center gap-6 shadow-lg border border-[#ffd70022] transition-transform duration-300 relative ${idx === 0 ? 'glow-animated-border' : ''}`}
            style={{ boxShadow: "0 2px 24px #ff990033" }}
          >
            <div className="flex-shrink-0">
              <Image src={feature.icon} alt={feature.title} width={64} height={64} className="object-contain w-16 h-16" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#ffd700] mb-2 font-sans" style={{ fontFamily: "var(--font-sora), sans-serif" }}>{feature.title}</h3>
              <p className="text-[#fffbe7] text-base font-medium">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <style jsx global>{`
        @keyframes gradient-move {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 6s ease-in-out infinite;
        }
        @keyframes glow-border {
          0%, 100% { box-shadow: 0 0 32px 8px #ffd70088, 0 0 0 #fff0; }
          50% { box-shadow: 0 0 64px 16px #ff9900cc, 0 0 0 #fff0; }
        }
        .glow-animated-border {
          animation: glow-border 2.8s infinite alternate;
        }
      `}</style>
    </div>
  );
} 