"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">

      {/* Background glow */}
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur"
        >
          <Sparkles size={15} className="text-purple-400" />
          The future of productivity
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl font-semibold leading-tight tracking-tight sm:text-7xl lg:text-8xl"
        >
          Work smarter.
          <br />

          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Create faster.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/50 sm:text-lg"
        >
          Nexora is an intelligent workspace that brings your projects,
          analytics and team collaboration together in one beautiful place.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-9 flex flex-col justify-center gap-4 sm:flex-row"
        >
        <MagneticButton>
  <span className="flex items-center gap-2">
    Start building
    <ArrowRight size={18} />
  </span>
</MagneticButton>

          <button className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white/80 backdrop-blur transition hover:bg-white/10">
            Explore features
          </button>
        </motion.div>

      </div>
    </section>
  );
}