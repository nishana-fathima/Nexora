"use client";

import { motion } from "framer-motion";

const stats = [
  ["98%", "Customer satisfaction"],
  ["42K+", "Active users"],
  ["150+", "Countries"],
  ["24/7", "Support"],
];

export default function Stats() {
  return (
    <section id="stats" className="px-6 py-24">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">

        <div className="grid gap-10 md:grid-cols-4">
          {stats.map(([number, label], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="text-center"
            >
              <p className="text-4xl font-semibold sm:text-5xl">
                {number}
              </p>

              <p className="mt-3 text-sm text-white/40">
                {label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}