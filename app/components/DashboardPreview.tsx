"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Bell,
  CheckCircle2,
  MoreHorizontal,
  Users,
} from "lucide-react";

const bars = [45, 65, 52, 78, 60, 88, 72, 95, 82, 100, 86, 94];

export default function DashboardPreview() {
  return (
    <section className="relative px-6 pb-28">
      <div className="mx-auto max-w-6xl">

        {/* Main Dashboard */}
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
            rotateX: 8,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotateX: 0,
          }}
          whileHover={{
            rotateX: 2,
            rotateY: -2,
            scale: 1.01,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          style={{
            transformPerspective: 1200,
          }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl"
        >

          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/20">
                <BarChart3
                  size={18}
                  className="text-purple-400"
                />
              </div>

              <div>
                <p className="text-sm font-medium">
                  Analytics
                </p>

                <p className="text-xs text-white/40">
                  Workspace overview
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4 text-white/50">
              <Bell size={18} />
              <MoreHorizontal size={20} />
            </div>

          </div>

          {/* Dashboard */}
          <div className="grid gap-5 p-5 lg:grid-cols-3">

            {/* Revenue */}
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5 lg:col-span-2">

              <div className="flex items-start justify-between">

                <div>
                  <p className="text-sm text-white/40">
                    Total revenue
                  </p>

                  <h3 className="mt-2 text-3xl font-semibold">
                    $84,240
                  </h3>
                </div>

                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                  +24.8%
                </span>

              </div>

              {/* Chart */}
              <div className="mt-10 flex h-48 items-end gap-2">

                {bars.map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      height: 0,
                    }}
                    whileInView={{
                      height: `${height}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.05,
                    }}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-purple-600/20 to-purple-400"
                  />
                ))}

              </div>
            </div>

            {/* Users */}
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">

              <div className="flex items-center justify-between">

                <p className="text-sm text-white/40">
                  Active users
                </p>

                <Users
                  size={18}
                  className="text-purple-400"
                />

              </div>

              <h3 className="mt-3 text-3xl font-semibold">
                12,842
              </h3>

              <p className="mt-2 text-xs text-emerald-400">
                +18.2% this month
              </p>

              <div className="mt-8 space-y-4">

                {["Design", "Development", "Marketing"].map(
                  (team, index) => {

                    const percentages = [82, 68, 54];
                    const percentage = percentages[index];

                    return (
                      <div key={team}>

                        <div className="mb-2 flex justify-between text-xs">

                          <span className="text-white/50">
                            {team}
                          </span>

                          <span>
                            {percentage}%
                          </span>

                        </div>

                        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">

                          <motion.div
                            initial={{
                              width: 0,
                            }}
                            whileInView={{
                              width: `${percentage}%`,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 1,
                            }}
                            className="h-full rounded-full bg-purple-400"
                          />

                        </div>

                      </div>
                    );
                  }
                )}

              </div>
            </div>

            {/* Activity */}
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5 lg:col-span-3">

              <div className="mb-5 flex items-center justify-between">

                <p className="font-medium">
                  Recent activity
                </p>

                <span className="text-xs text-purple-400">
                  View all
                </span>

              </div>

              <div className="grid gap-3 md:grid-cols-3">

                {[
                  "New project created",
                  "Design system updated",
                  "Team member joined",
                ].map((activity, index) => (

                  <div
                    key={activity}
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4"
                  >

                    <CheckCircle2
                      size={18}
                      className="text-emerald-400"
                    />

                    <div>

                      <p className="text-sm">
                        {activity}
                      </p>

                      <p className="mt-1 text-xs text-white/30">
                        {index + 2} hours ago
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}