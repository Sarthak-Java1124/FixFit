"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactSupportModal from "@/components/ContactSupportModal";

const faqs = [
  {
    question: "How does the e-tailoring service work?",
    answer: "Our e-tailoring platform connects you with skilled tailors in your area. Simply upload photos of your garment, describe what you need, and our AI-powered system will match you with the best tailor for your specific requirements. The tailor will pick up your item, make the alterations, and deliver it back to you."
  },
  {
    question: "What types of alterations can you handle?",
    answer: "We handle all types of alterations including hemming, taking in/letting out, sleeve adjustments, waist alterations, zipper repairs, button replacements, and complete garment reconstruction. Our tailors are experienced with all fabrics and garment types from casual wear to formal attire."
  },
  {
    question: "How long does it take to complete alterations?",
    answer: "Most standard alterations are completed within 2-3 business days. Complex alterations or rush orders may take longer. You'll receive real-time updates on your order status through our app, and we'll notify you when your garment is ready for pickup or delivery."
  },
  {
    question: "What if I'm not satisfied with the alterations?",
    answer: "We offer a 100% satisfaction guarantee. If you're not completely satisfied with the work, we'll have it redone at no additional cost or provide a full refund. Our quality assurance team reviews all work before delivery to ensure it meets our high standards."
  },
  {
    question: "Do you offer pickup and delivery services?",
    answer: "Yes! We offer convenient pickup and delivery services in most areas. Our tailors can collect your garments from your home or office and return them when completed. We also offer express delivery options for urgent alterations."
  },
  {
    question: "How do you ensure quality and safety?",
    answer: "All our tailors are thoroughly vetted, background-checked, and rated by previous customers. We use secure payment processing and provide insurance coverage for all garments. Our platform includes quality control measures and customer feedback systems to maintain high standards."
  },
  {
    question: "Can I schedule appointments with specific tailors?",
    answer: "Absolutely! You can browse tailors in your area, read their reviews and specialties, and book appointments with your preferred tailor. You can also save your favorite tailors for future appointments and build ongoing relationships with them."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, digital wallets (Apple Pay, Google Pay), and bank transfers. Payment is processed securely through our platform, and you'll only be charged once the work is completed and you're satisfied with the results."
  }
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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      id="faq"
      className="relative flex flex-col items-center justify-center py-24 bg-black/80 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-10 left-1/4 w-40 h-40 bg-gradient-to-br from-[#ff9900]/15 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-1/3 w-32 h-32 bg-gradient-to-br from-[#ff6600]/15 to-transparent rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15],
          x: [0, -20, 0],
          y: [0, 20, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div
        className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-br from-[#ff9900]/10 to-transparent rounded-full blur-xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.3, 0.1],
          x: [0, 15, 0],
          y: [0, -15, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      {/* Heading */}
      <motion.h2 
        variants={fadeUp} 
        className="text-4xl md:text-5xl font-bold text-[#fffbe7] text-center mb-12 z-10 font-sans font-[var(--font-sora)]" 
        style={{fontFamily: 'var(--font-sora), sans-serif'}}
        whileHover={{ 
          textShadow: "0 0 20px rgba(255, 153, 0, 0.5)",
          scale: 1.02
        }}
      >
        Frequently Asked Questions
      </motion.h2>
      
      {/* FAQ Grid */}
      <motion.div variants={fadeUp} className="w-full max-w-4xl z-10">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 30px rgba(255, 153, 0, 0.2)"
              }}
              className="bg-[rgba(20,20,30,0.85)] rounded-xl shadow-2xl border border-[#ff9900]/30 backdrop-blur-xl overflow-hidden relative"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[rgba(255,153,0,0.1)] transition-colors relative z-10"
                whileHover={{ 
                  backgroundColor: "rgba(255, 153, 0, 0.1)",
                  scale: 1.01
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.h3 
                  className="text-lg font-semibold text-[#fffbe7] font-sans font-[var(--font-sora)]" 
                  style={{fontFamily: 'var(--font-sora), sans-serif'}}
                  whileHover={{ color: "#ff9900" }}
                >
                  {faq.question}
                </motion.h3>
                <motion.div
                  animate={{ 
                    rotate: openIndex === index ? 180 : 0,
                    scale: openIndex === index ? 1.2 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-[#ff9900] text-2xl font-bold"
                >
                  ▼
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div 
                      className="px-8 pb-6"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      <p className="text-[#bfae8e] leading-relaxed font-sans font-[var(--font-sora)]" style={{fontFamily: 'var(--font-sora), sans-serif'}}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact CTA */}
      <motion.div 
        variants={fadeUp} 
        className="mt-16 text-center z-10"
        whileHover={{ scale: 1.02 }}
      >
        <motion.div 
          className="bg-[rgba(20,20,30,0.85)] rounded-xl shadow-2xl border border-[#ff9900]/30 backdrop-blur-xl p-8 max-w-2xl mx-auto relative overflow-hidden"
          whileHover={{ 
            boxShadow: "0 0 40px rgba(255, 153, 0, 0.3)",
            borderColor: "#ff9900"
          }}
        >
          <motion.h3 
            className="text-2xl font-bold text-[#fffbe7] mb-4 font-sans font-[var(--font-sora)]" 
            style={{fontFamily: 'var(--font-sora), sans-serif'}}
            whileHover={{ 
              textShadow: "0 0 15px rgba(255, 153, 0, 0.5)",
              scale: 1.05
            }}
          >
            Still Have Questions?
          </motion.h3>
          <motion.p 
            className="text-[#bfae8e] mb-6 font-sans font-[var(--font-sora)]" 
            style={{fontFamily: 'var(--font-sora), sans-serif'}}
            whileHover={{ color: "#fffbe7" }}
          >
            Our customer support team is here to help you with any questions or concerns.
          </motion.p>
          <motion.button
            onClick={() => setIsContactModalOpen(true)}
            whileHover={{ 
              scale: 1.08,
              boxShadow: "0 0 30px rgba(255, 153, 0, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-[#ff9900] to-[#ff6600] text-white font-bold rounded-lg hover:from-[#ff6600] hover:to-[#ff9900] transition shadow-lg"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </motion.div>
      
      {/* Contact Support Modal */}
      <ContactSupportModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </motion.section>
  );
} 