"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { register } from "module";
import { text } from "stream/consumers";
import { title } from "process";
import axios from "axios";
import { success } from "zod/v4";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



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

export default function TestimonialSection() {

   type TestimonialForm ={
    name : string,
    position : string,
    experience : string,

   }
   const [testimonials , setTestimonials] = useState<TestimonialForm[]>([]);
   const [current, setCurrent] = useState(0);
   const total = testimonials.length;
   const next = () => setCurrent((prev) => (prev + 1) % total);
   const prev = () => setCurrent((prev) => (prev - 1 + total) % total);


    const form = useForm<TestimonialForm>({
      defaultValues : {
        name : "",
        position : "",
        experience : "",
      }
    })
    useEffect(() => {
      axios.get("/api/testimonial")
        .then((res) => {
          setTestimonials(res.data);
        })
        .catch((err) => {
          console.error("Error loading testimonials:", err);
        });
    }, []);
        const {register , handleSubmit  , reset} = form;
    const onSubmit = async (data : TestimonialForm)=>{
       try {
        const postResponse = await axios.post("/api/testimonial" , data);
       
        
        reset();
       }catch(error){
        console.log("The error is " , error);
         throw new Error("The testimonial is not accepted");
       }
    }
  return (
    <motion.section
      id="testimonial"
      className="relative flex flex-col items-center justify-center py-24 bg-black/80"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-[#fffbe7] text-center mb-12 z-10 font-sans font-[var(--font-sora)]" style={{fontFamily: 'var(--font-sora), sans-serif'}}>
        Testimonials
      </motion.h2>
      <div className="relative w-full max-w-md flex flex-col items-center h-[260px] z-10 mb-16">
        {total > 0 && (
          <motion.div
            key={current}
            className="flex flex-col bg-[rgba(20,20,30,0.85)] rounded-xl shadow-2xl border border-[#ff9900]/30 backdrop-blur-xl p-7 min-w-[320px] max-w-[340px] h-[220px] justify-between relative"
            variants={fadeUp}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div>
                <div className="text-white font-semibold text-base leading-tight">{testimonials[current].name}</div>
                <div className="text-xs text-[#ff9900] font-medium">{testimonials[current].position}</div>
              </div>
            </div>
            <div className="text-white text-sm mb-2 font-sans font-[var(--font-sora)]" style={{fontFamily: 'var(--font-sora), sans-serif'}}>
              "{testimonials[current].experience}"
            </div>
            <div className="absolute left-0 bottom-0 w-full h-2 bg-gradient-to-r from-transparent via-[#ff9900]/40 to-transparent blur-md opacity-80 rounded-b-xl" />
          </motion.div>
        )}
        {total > 1 && (
          <div className="flex items-center justify-center gap-6 mt-4">
            <button onClick={prev} aria-label="Previous" className="p-2 rounded-full bg-[#18181c] hover:bg-[#ff9900] text-[#ff9900] hover:text-white shadow-md transition">
              <FaChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <span key={idx} className={`w-2 h-2 rounded-full ${idx === current ? 'bg-[#ff9900]' : 'bg-[#fffbe7]/30'} transition`} />
              ))}
            </div>
            <button onClick={next} aria-label="Next" className="p-2 rounded-full bg-[#18181c] hover:bg-[#ff9900] text-[#ff9900] hover:text-white shadow-md transition">
              <FaChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
      <motion.div variants={fadeUp} className="w-full max-w-2xl z-10">
        <div className="bg-[rgba(20,20,30,0.85)] rounded-xl shadow-2xl border border-[#ff9900]/30 backdrop-blur-xl p-8">
          <h3 className="text-2xl font-bold text-[#fffbe7] text-center mb-6 font-sans font-[var(--font-sora)]" style={{fontFamily: 'var(--font-sora), sans-serif'}}>
            Share Your Experience
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#ff9900] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="w-full px-4 py-3 bg-[rgba(255,255,255,0.1)] border border-[#ff9900]/30 rounded-lg text-white placeholder-[#bfae8e] focus:border-[#ff9900] focus:ring-2 focus:ring-[#ff9900]/20 transition"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-[#ff9900] mb-2">
                  Title/Position
                </label>
                <input
                  type="text"
                  id="position"
                  {...register("position")}
                  className="w-full px-4 py-3 bg-[rgba(255,255,255,0.1)] border border-[#ff9900]/30 rounded-lg text-white placeholder-[#bfae8e] focus:border-[#ff9900] focus:ring-2 focus:ring-[#ff9900]/20 transition"
                  placeholder="e.g., Fashion Designer"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="testimonial" className="block text-sm font-medium text-[#ff9900] mb-2">
                Your Testimonial
              </label>
              <textarea
                id="testimonial"
                {...register("experience")}
                rows={4}
                className="w-full px-4 py-3 bg-[rgba(255,255,255,0.1)] border border-[#ff9900]/30 rounded-lg text-white placeholder-[#bfae8e] focus:border-[#ff9900] focus:ring-2 focus:ring-[#ff9900]/20 transition resize-none"
                placeholder="Share your experience with our tailoring services..."
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 bg-gradient-to-r from-[#ff9900] to-[#ff6600] text-white font-bold rounded-lg hover:from-[#ff6600] hover:to-[#ff9900] transition shadow-lg"
            >
              Submit Testimonial
            </motion.button>
          </form>
        </div>
      </motion.div>
    </motion.section>
  );
} 