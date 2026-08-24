"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="pricing" className="px-6 py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-500/20 via-white/[0.04] to-blue-500/10 px-6 py-20 text-center"
      >
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-500/20 blur-[100px]" />

        <div className="relative">
          <p className="text-sm uppercase tracking-[0.25em] text-purple-400">
            Start today
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Your next big idea starts here.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-white/50">
            Bring your team together and turn ideas into
            meaningful results with Nexora.
          </p>

          <button className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-black transition hover:scale-105">
            Get started for free

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </motion.div>
    </section>
  );
}