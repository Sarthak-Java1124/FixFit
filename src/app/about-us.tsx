"use client";

import React from "react";
import { motion } from "framer-motion";

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

export default function AboutUs() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="py-24 px-4 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#ff9900]/20 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-[#ff6600]/20 to-transparent rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -15, 0],
          y: [0, 15, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Hero Section */}
      <motion.section variants={fadeUp} className="text-center mb-20 relative z-10">
        <motion.div 
          variants={fadeUp} 
          className="mb-4 text-xs font-semibold tracking-widest text-[#ff9900] uppercase"
          whileHover={{ scale: 1.05 }}
        >
          OUR STORY
        </motion.div>
        <motion.h1 
          variants={fadeUp} 
          className="text-5xl md:text-6xl font-bold text-[#fffbe7] mb-6 font-sans font-[var(--font-sora)]" 
          style={{fontFamily: 'var(--font-sora), sans-serif'}}
          whileHover={{ 
            textShadow: "0 0 20px rgba(255, 153, 0, 0.5)",
            scale: 1.02
          }}
        >
          Revolutionizing Tailoring
        </motion.h1>
        <motion.p 
          variants={fadeUp} 
          className="text-xl text-[#bfae8e] max-w-3xl mx-auto font-sans font-[var(--font-sora)]" 
          style={{fontFamily: 'var(--font-sora), sans-serif'}}
          whileHover={{ color: "#fffbe7" }}
        >
          We&apos;re on a mission to bring the art of professional tailoring into the digital age, 
          making expert craftsmanship accessible to everyone, everywhere.
        </motion.p>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section variants={fadeUp} className="max-w-6xl mx-auto mb-20">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            variants={fadeUp}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 0 40px rgba(255, 153, 0, 0.3)"
            }}
            className="bg-[rgba(20,20,30,0.85)] rounded-xl shadow-2xl border border-[#ff9900]/30 backdrop-blur-xl p-8 relative overflow-hidden"
          >
            <motion.div 
              className="w-16 h-16 bg-gradient-to-br from-[#ff9900] to-[#ff6600] rounded-full flex items-center justify-center mb-6"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </motion.div>
            <motion.h3 
              className="text-2xl font-bold text-[#fffbe7] mb-4 font-sans font-[var(--font-sora)]" 
              style={{fontFamily: 'var(--font-sora), sans-serif'}}
              whileHover={{ color: "#ff9900" }}
            >
              Our Mission
            </motion.h3>
            <p className="text-[#bfae8e] leading-relaxed font-sans font-[var(--font-sora)]" style={{fontFamily: 'var(--font-sora), sans-serif'}}>
              To democratize access to professional tailoring services by connecting skilled artisans 
              with customers through innovative technology, ensuring every garment fits perfectly 
              and every customer feels confident.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeUp}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 0 40px rgba(255, 153, 0, 0.3)"
            }}
            className="bg-[rgba(20,20,30,0.85)] rounded-xl shadow-2xl border border-[#ff9900]/30 backdrop-blur-xl p-8 relative overflow-hidden"
          >
            <motion.div 
              className="w-16 h-16 bg-gradient-to-br from-[#ff9900] to-[#ff6600] rounded-full flex items-center justify-center mb-6"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
              </svg>
            </motion.div>
            <motion.h3 
              className="text-2xl font-bold text-[#fffbe7] mb-4 font-sans font-[var(--font-sora)]" 
              style={{fontFamily: 'var(--font-sora), sans-serif'}}
              whileHover={{ color: "#ff9900" }}
            >
              Our Vision
            </motion.h3>
            <p className="text-[#bfae8e] leading-relaxed font-sans font-[var(--font-sora)]" style={{fontFamily: 'var(--font-sora), sans-serif'}}>
              To become the global standard for digital tailoring services, where technology 
              enhances human craftsmanship, creating a world where perfectly fitted clothing 
              is accessible to everyone, regardless of location or budget.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Company Story */}
      <motion.section variants={fadeUp} className="max-w-4xl mx-auto mb-20" id="about-us">
        <motion.div 
          variants={fadeUp}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 0 40px rgba(255, 153, 0, 0.2)"
          }}
          className="bg-[rgba(20,20,30,0.85)] rounded-xl shadow-2xl border border-[#ff9900]/30 backdrop-blur-xl p-8 relative overflow-hidden"
        >
          <motion.h3 
            className="text-3xl font-bold text-[#fffbe7] mb-6 text-center font-sans font-[var(--font-sora)]" 
            style={{fontFamily: 'var(--font-sora), sans-serif'}}
            whileHover={{ 
              textShadow: "0 0 20px rgba(255, 153, 0, 0.5)",
              scale: 1.05
            }}
          >
            Our Journey
          </motion.h3>
          <div className="space-y-6 text-[#bfae8e] leading-relaxed font-sans font-[var(--font-sora)]" style={{fontFamily: 'var(--font-sora), sans-serif'}}>
            <motion.p
              whileHover={{ color: "#fffbe7" }}
              transition={{ duration: 0.3 }}
            >
              Founded in 2025, our e-tailoring platform emerged from a simple observation: 
              the traditional tailoring industry was struggling to adapt to the digital age, 
              while customers increasingly demanded convenience without compromising on quality.
            </motion.p>
            <motion.p
              whileHover={{ color: "#fffbe7" }}
              transition={{ duration: 0.3 }}
            >
              What started as a small team of fashion enthusiasts and tech innovators has 
              grown into a comprehensive platform that connects thousands of skilled tailors 
              with customers worldwide. We&apos;ve built our reputation on three core principles: 
              quality craftsmanship, technological innovation, and exceptional customer service.
            </motion.p>
            <motion.p
              whileHover={{ color: "#fffbe7" }}
              transition={{ duration: 0.3 }}
            >
              Today, we&apos;re proud to serve customers across multiple countries, working with 
              over 500 verified tailors and handling thousands of alterations, custom fittings, 
              and bespoke creations every month. Our platform continues to evolve, incorporating 
              AI-powered fitting algorithms, virtual try-on technology, and seamless payment systems.
            </motion.p>
          </div>
        </motion.div>
      </motion.section>

      {/* Values Section */}
      <motion.section variants={fadeUp} className="max-w-6xl mx-auto">
        <motion.h3 
          variants={fadeUp} 
          className="text-3xl font-bold text-[#fffbe7] mb-12 text-center font-sans font-[var(--font-sora)]" 
          style={{fontFamily: 'var(--font-sora), sans-serif'}}
          whileHover={{ 
            textShadow: "0 0 20px rgba(255, 153, 0, 0.5)",
            scale: 1.05
          }}
        >
          Our Values
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Craftsmanship",
              description: "We believe in preserving the art of traditional tailoring while embracing modern techniques.",
              icon: "✂️"
            },
            {
              title: "Innovation",
              description: "Continuously pushing boundaries to create better experiences for our customers and tailors.",
              icon: "🚀"
            },
            {
              title: "Community",
              description: "Building a supportive ecosystem where tailors thrive and customers receive exceptional service.",
              icon: "🤝"
            }
          ].map((value, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(255, 153, 0, 0.3)",
                y: -5
              }}
              className="bg-[rgba(20,20,30,0.85)] rounded-xl shadow-2xl border border-[#ff9900]/30 backdrop-blur-xl p-6 text-center relative overflow-hidden"
            >
              <motion.div 
                className="text-4xl mb-4"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {value.icon}
              </motion.div>
              <motion.h4 
                className="text-white font-semibold text-xl mb-3 font-sans font-[var(--font-sora)]" 
                style={{fontFamily: 'var(--font-sora), sans-serif'}}
                whileHover={{ color: "#ff9900" }}
              >
                {value.title}
              </motion.h4>
              <motion.p 
                className="text-[#bfae8e] leading-relaxed font-sans font-[var(--font-sora)]" 
                style={{fontFamily: 'var(--font-sora), sans-serif'}}
                whileHover={{ color: "#fffbe7" }}
              >
                {value.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
} 