"use client";
import { motion } from "framer-motion";
import StarBackground from "../StarBackground";
import { useForm } from "react-hook-form";
import {z} from "zod"
import { serviceSchema } from "@/Schemas/serviceSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1 } },
};

const locations = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune",
  "Other"
];

export default function SelectYourServicePage() {


  const form = useForm<z.infer<typeof serviceSchema>>({
    resolver : zodResolver(serviceSchema),
    defaultValues : {
      gender : "",
      location : "",
      service : "",
      requirements  : "",

    }
  })
  const router = useRouter();
  const {register  , reset} = form;
  const onSubmit = async (data : z.infer<typeof serviceSchema>)=>{
     try{
      await axios.post("api/select-your-service" , data);
      router.push("/dashboard");
      reset();
       
      return Response.json({
        success : true,
        message : "The response is registered"
      });
            


     }catch{
           return Response.json({
            success : true,
            message : "There was a problem in submitting your response"
           })
     }
  }

  return (
    <div className="min-h-screen bg-black/90 font-[chakra] relative overflow-hidden flex flex-col items-center justify-center py-16">
      <StarBackground />
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        className="relative z-10 bg-[rgba(30,30,40,0.85)] border border-[#ffd70022] shadow-lg backdrop-blur-lg rounded-2xl p-10 w-full max-w-lg flex flex-col items-center font-[chakra]"
        style={{ boxShadow: "0 2px 24px #ff990033" }}
      >
        <motion.h1
          variants={fadeUp}
          className="text-3xl md:text-4xl text-[#ffd700] mb-6 font-bold text-center font-[chakra]"
          style={{ fontFamily: "chakra, sans-serif" }}
        >
          Select Your Service
        </motion.h1>
        <motion.form
          variants={fadeUp}
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6 w-full font-[chakra]"
        >
          <div>
            <label
              className="block text-[#ffd700] font-semibold mb-2 font-[chakra]"
              style={{ fontFamily: "chakra, sans-serif" }}
            >
              What&apos;s your gender?
            </label>
            <select
              className="w-full px-4 py-2 rounded-lg bg-black/60 text-[#fffbe7] border border-[#ffd70033] focus:outline-none focus:ring-2 focus:ring-[#ffd700] transition font-[chakra]"
              style={{ fontFamily: "chakra, sans-serif" }}
              {...register("gender")}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label
              className="block text-[#ffd700] font-semibold mb-2 font-[chakra]"
              style={{ fontFamily: "chakra, sans-serif" }}
            >
              What&apos;s your location?
            </label>
            <select
              className="w-full px-4 py-2 rounded-lg bg-black/60 text-[#fffbe7] border border-[#ffd70033] focus:outline-none focus:ring-2 focus:ring-[#ffd700] transition font-[chakra]"
              style={{ fontFamily: "chakra, sans-serif" }}
              {...register("location")}
            >
              <option value="">Select location</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              className="block text-[#ffd700] font-semibold mb-2 font-[chakra]"
              style={{ fontFamily: "chakra, sans-serif" }}
            >
              Select your service
            </label>
            <select
              className="w-full px-4 py-2 rounded-lg bg-black/60 text-[#fffbe7] border border-[#ffd70033] focus:outline-none focus:ring-2 focus:ring-[#ffd700] transition font-[chakra]"
              style={{ fontFamily: "chakra, sans-serif" }}
              {...register("service")}
            >
              <option value="">Select service</option>
              <option value="rafu">Rafu</option>
              <option value="altering">Altering</option>
              <option value="ironing">Ironing</option>
              <option value="dry cleaning">Dry Cleaning</option>
            </select>
          </div>
          <div>
            <label
              className="block text-[#ffd700] font-semibold mb-2 font-[chakra]"
              style={{ fontFamily: "chakra, sans-serif" }}
            >
              Explain what do you want from us
            </label>
            <textarea
              className="w-full px-4 py-2 rounded-lg bg-black/60 text-[#fffbe7] border border-[#ffd70033] focus:outline-none focus:ring-2 focus:ring-[#ffd700] transition resize-none font-[chakra]"
              style={{ fontFamily: "chakra, sans-serif" }}
              rows={4}
              {...register("requirements")}
              placeholder="Describe your requirements..."
            />
          </div>
          <button
            type="submit"
            className="mt-2 px-6 py-2 rounded-lg bg-gradient-to-r from-[#ff9900] to-[#ffd700] text-black font-bold shadow-lg hover:from-[#ffd700] hover:to-[#ff9900] transition font-[chakra]"
          >
            Confirm
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
} 