"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-1/2 top-5 z-50 flex w-[90%] max-w-6xl -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl"
    >
      <div className="text-xl font-bold tracking-tight">
        nexora<span className="text-purple-400">.</span>
      </div>

      <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
        <a href="#features" className="transition hover:text-white">
          Features
        </a>

        <a href="#stats" className="transition hover:text-white">
          Analytics
        </a>

        <a href="#pricing" className="transition hover:text-white">
          Pricing
        </a>
      </div>

      <button className="flex items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:scale-105">
        Get Started
        <ArrowUpRight size={16} />
      </button>
    </motion.nav>
  );
}