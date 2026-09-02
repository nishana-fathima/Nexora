"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Gauge,
  Layers3,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-powered workflows",
    description:
      "Automate repetitive tasks and let intelligent workflows handle the busy work.",
  },
  {
    icon: Gauge,
    title: "Real-time analytics",
    description:
      "Understand your team's performance with beautiful live dashboards.",
  },
  {
    icon: Zap,
    title: "Lightning fast",
    description:
      "Built for speed with a modern architecture designed for scale.",
  },
  {
    icon: Layers3,
    title: "Everything connected",
    description:
      "Projects, tasks, communication and analytics in one workspace.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise security",
    description:
      "Your data stays protected with modern security standards.",
  },
  {
    icon: Brain,
    // title: "Smart insights",
    description:
      "Turn your data into actionable insights with intelligent recommendations yes.",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
            Powerful features
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            Everything you need
            <span className="text-white/30"> to move faster.</span>
          </h2>

          <p className="mt-6 text-white/50">
            A complete workspace designed to help modern teams
            focus on what actually matters.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-purple-400/30 hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10">
                  <Icon
                    size={22}
                    className="text-purple-400 transition-transform group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-6 text-xl font-medium">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}