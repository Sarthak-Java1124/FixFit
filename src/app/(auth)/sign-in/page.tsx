"use client";
import Image from "next/image";
import Link from "next/link";
import StarBackground from "../../StarBackground";
import { motion, AnimatePresence, easeOut, easeInOut , Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { signInSchema } from "@/Schemas/signInSchema";



const cardVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: easeOut } },
  hover: { scale: 1.02, boxShadow: "0 0 32px #ff9900aa" },
};
const leftTextVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: easeOut } },
  float: { y: [0, -10, 0, 10, 0], transition: { repeat: Infinity, duration: 6, ease: easeInOut } },
};
const formStagger = {
  animate: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
};
const formItem = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

export default function SignIn() {
  const router = useRouter();
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", password: "" },
  });

  

  const {data : session , status} = useSession();
  useEffect(() => {
    if(status==="authenticated"){
      router.replace("/dashboard");
    }
  } , [status , router])
  const { register } = form;
  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (result?.error) {
        if (result.error === "CredentialsSignin") {
          toast("Incorrect username or password");
        } else {
          toast("Error Signing In");
        }
      }

      if (result?.url) {
        router.replace("/dashboard");
      }
    } catch (error) {
      toast("Sign in failed");
    }
  };

  if (status === "loading" || status === "authenticated") return null;
  return (
    <div className="min-h-screen flex flex-col bg-black/80 relative overflow-hidden font-[chakra]">
      <StarBackground />
      {/* Centered Card */}
      <div className="flex flex-1 items-center justify-center relative z-10 px-4 mt-20">
        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="relative flex w-full max-w-[750px] h-[500px] rounded-2xl shadow-2xl bg-[rgba(20,20,30,0.85)] backdrop-blur-xl overflow-hidden border border-[#ff9900]/30"
        >
          {/* Close Button */}
          <button className="absolute top-4 right-4 z-10 bg-[rgba(255,153,0,0.2)] hover:bg-[rgba(255,153,0,0.3)] rounded-full p-2 transition shadow-lg border border-[#ff9900]/30">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#ff9900">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {/* Left: Image & Text */}
          <div className="w-1/2 h-full relative flex flex-col justify-end bg-gradient-to-t from-[#ff9900]/20 to-[#ff6600]/10 p-4">
            <div className="absolute inset-0 rounded-l-2xl overflow-hidden">
              <Image
                src="/tailorMade.png"
                alt="Sign In Tailor"
                fill
                className="object-cover w-full h-full opacity-90"
                style={{ position: "absolute", inset: 0 }}
                priority
              />
            </div>
            <motion.div
              variants={leftTextVariants}
              initial="initial"
              animate={["animate", "float"]}
              className="relative z-10"
            >
              <h2 className="text-[#fffbe7] text-xl font-extrabold mb-2 font-[chakra] tracking-normal">Welcome Back!</h2>
              <p className="text-[#bfae8e] text-xs font-bold font-[chakra]">Sign in to manage your tailoring experience.</p>
            </motion.div>
          </div>
          {/* Right: Sign-in Form */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="w-1/2 h-full bg-[rgba(20,20,30,0.95)] backdrop-blur-lg flex flex-col justify-center px-6 py-4 relative z-10"
          >
            <AnimatePresence mode="wait">
              <motion.h3
                key="title"
                variants={formItem}
                initial="initial"
                animate="animate"
                exit="initial"
                className="text-2xl font-extrabold mb-2 font-[chakra] tracking-normal text-[#fffbe7]"
              >
                Sign in
              </motion.h3>
              <motion.p
                key="description"
                variants={formItem}
                initial="initial"
                animate="animate"
                exit="initial"
                className="text-[#bfae8e] text-xs mb-4 font-[chakra]"
              >
                Enter your email and password to access your account.
              </motion.p>
              <motion.form
                key="form"
                className="flex flex-col gap-3"
                variants={formStagger}
                initial="initial"
                animate="animate"
                exit="initial"
                onSubmit={form.handleSubmit(onSubmit)}
              
              >
                <motion.input
                  key="email"
                  type="email"
                  placeholder="Email address"
                  {...register("email")}
                  onChange={(e) => form.setValue("email", e.target.value)}
                  className="px-3 py-2 rounded-lg bg-[rgba(255,255,255,0.1)] text-[#fffbe7] placeholder-[#bfae8e] font-[chakra] border border-[#ff9900]/30 focus:border-[#ff9900] focus:ring-2 focus:ring-[#ff9900]/20 transition shadow-sm backdrop-blur-sm text-sm"
                  variants={formItem}
                  required
                />
                <motion.input
                  key="password"
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                  onChange={(e) => form.setValue("password", e.target.value)}
                  className="px-3 py-2 rounded-lg bg-[rgba(255,255,255,0.1)] text-[#fffbe7] placeholder-[#bfae8e] font-[chakra] border border-[#ff9900]/30 focus:border-[#ff9900] focus:ring-2 focus:ring-[#ff9900]/20 transition shadow-sm backdrop-blur-sm text-sm"
                  variants={formItem}
                  required
                />
                <motion.a
                  key="forgot-link"
                  href="#"
                  className="text-xs text-[#ff9900] hover:text-[#ff6600] hover:underline self-end mb-1 font-[chakra] transition"
                  variants={formItem}
                >
                  Forgot password?
                </motion.a>
                <motion.button
                  key="submit-button"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 32px #ff9900aa" }}
                  whileTap={{ scale: 0.95, boxShadow: "0 0 32px #ff9900aa" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  type="submit"
                  className="w-full py-2 rounded-lg bg-gradient-to-r from-[#ff9900] to-[#ff6600] text-white font-bold font-[chakra] shadow-lg hover:from-[#ff6600] hover:to-[#ff9900] transition text-sm"
                  variants={formItem}
                >
                  Sign in
                </motion.button>
              </motion.form>
              <motion.div
                key="divider"
                className="flex items-center my-3"
                variants={formItem}
                initial="initial"
                animate="animate"
                exit="initial"
              >
                <div className="flex-1 h-px bg-[#ff9900]/30" />
                <span className="mx-2 text-xs text-[#bfae8e] font-[chakra]">or</span>
                <div className="flex-1 h-px bg-[#ff9900]/30" />
              </motion.div>
              <motion.button
                key="google-button"
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-[rgba(255,255,255,0.1)] text-[#fffbe7] font-bold font-[chakra] shadow-lg hover:bg-[rgba(255,255,255,0.15)] transition border border-[#ff9900]/30 backdrop-blur-sm text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                variants={formItem}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Sign in with Google
              </motion.button>
              <motion.p className="text-xs text-[#bfae8e] mt-4 text-center font-[chakra]">
                Don&apos;t have an account? <Link href="/sign-up" className="text-[#ff9900] hover:underline">Sign up</Link>
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;700&display=swap');
        .font-[chakra] { font-family: 'Chakra Petch', sans-serif; }
      `}</style>
    </div>
  );
} 