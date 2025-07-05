"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

interface ContactSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactSupportModal({ isOpen, onClose }: ContactSupportModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    toast.success("Message sent successfully!");
    onClose();
    setFormData({ name: "", email: "", query: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              className="bg-[rgba(20,20,30,0.95)] rounded-2xl shadow-2xl border border-[#ff9900]/30 backdrop-blur-xl p-8 max-w-md w-full relative overflow-hidden"
              style={{ boxShadow: "0 8px 32px #0008, 0 0 32px #ff990022" }}
              whileHover={{ 
                boxShadow: "0 12px 40px #0008, 0 0 40px #ff990033"
              }}
            >
              <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full bg-gradient-to-b from-[#ffd70044] to-transparent blur-2xl opacity-40" />
              </div>

              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 text-[#ff9900] hover:text-[#ff6600] text-2xl font-bold z-10"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center mb-8 relative z-10"
              >
                <motion.h2 
                  className="text-3xl font-bold text-[#fffbe7] mb-2 font-sans font-[var(--font-sora)]"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  whileHover={{ 
                    textShadow: "0 0 15px rgba(255, 153, 0, 0.5)"
                  }}
                >
                  Contact Support
                </motion.h2>
                <motion.p 
                  className="text-[#bfae8e] font-sans font-[var(--font-sora)]"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  We&apos;re here to help! Send us your query.
                </motion.p>
              </motion.div>

              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[#ff9900]/30 rounded-lg text-[#fffbe7] placeholder-[#bfae8e] focus:outline-none focus:border-[#ff9900] focus:ring-2 focus:ring-[#ff9900]/20 transition-all font-sans font-[var(--font-sora)]"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    whileFocus={{ 
                      borderColor: "#ff9900",
                      boxShadow: "0 0 20px rgba(255, 153, 0, 0.3)"
                    }}
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[#ff9900]/30 rounded-lg text-[#fffbe7] placeholder-[#bfae8e] focus:outline-none focus:border-[#ff9900] focus:ring-2 focus:ring-[#ff9900]/20 transition-all font-sans font-[var(--font-sora)]"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    whileFocus={{ 
                      borderColor: "#ff9900",
                      boxShadow: "0 0 20px rgba(255, 153, 0, 0.3)"
                    }}
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <motion.textarea
                    name="query"
                    value={formData.query}
                    onChange={handleInputChange}
                    placeholder="Your Query"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[#ff9900]/30 rounded-lg text-[#fffbe7] placeholder-[#bfae8e] focus:outline-none focus:border-[#ff9900] focus:ring-2 focus:ring-[#ff9900]/20 transition-all font-sans font-[var(--font-sora)] resize-none"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    whileFocus={{ 
                      borderColor: "#ff9900",
                      boxShadow: "0 0 20px rgba(255, 153, 0, 0.3)"
                    }}
                  />
                </motion.div>

                <motion.button
                  type="button"
                  onClick={() => toast.success("Test toast working!")}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(255, 153, 0, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#00ff88] to-[#00cc66] text-white font-bold rounded-lg hover:from-[#00cc66] hover:to-[#00ff88] transition shadow-lg font-sans font-[var(--font-sora)] mb-3"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Test Toast
                </motion.button>
                
                <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(255, 153, 0, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#ff9900] to-[#ff6600] text-white font-bold rounded-lg hover:from-[#ff6600] hover:to-[#ff9900] transition shadow-lg font-sans font-[var(--font-sora)]"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Send Message
                </motion.button>
              </motion.form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 