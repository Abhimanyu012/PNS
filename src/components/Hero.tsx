import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Award, Factory } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover opacity-40"
          loading="eager"
        />
        <div className={`absolute inset-0 ${isDark ? "bg-charcoal/80" : "bg-arctic/70"}`} />
      </div>
      <div className={`absolute inset-0 ${isDark ? "grid-pattern" : "grid-pattern-light"}`} />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${isDark ? "bg-electric/10" : "bg-electric/5"}`}
            style={{
              width: 80 + i * 40,
              height: 80 + i * 40,
              left: `${10 + i * 15}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-8"
              style={{
                borderColor: isDark ? "rgba(0,102,255,0.2)" : "rgba(0,102,255,0.15)",
                background: isDark ? "rgba(0,102,255,0.05)" : "rgba(0,102,255,0.03)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-electric" />
              </span>
              <span className={`text-xs font-semibold tracking-wide uppercase ${isDark ? "text-electric-glow" : "text-electric"}`}>
                ISO Certified Manufacturer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-6 ${
                isDark ? "text-arctic" : "text-charcoal"
              }`}
            >
              Precision
              <br />
              <span className="text-electric">Components.</span>
              <br />
              Built for
              <br />
              Reliability.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className={`text-lg sm:text-xl leading-relaxed mb-10 max-w-lg ${
                isDark ? "text-arctic-darker" : "text-slate-600"
              }`}
            >
              India's trusted manufacturer of fan regulators, rotary switches, and modular electrical components. Delivering excellence since 1995.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://www.indiamart.com/parasandsons-faridabad/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 rounded-full bg-electric px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-electric-dark glow-electric-hover overflow-hidden"
              >
                <span className="relative z-10">Order via IndiaMART</span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-electric-glow to-electric opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>

              <a
                href="#products"
                className={`group inline-flex items-center gap-2 rounded-full border-2 px-8 py-4 text-base font-semibold transition-all duration-300 ${
                  isDark
                    ? "border-charcoal-lighter text-arctic hover:border-electric hover:text-electric"
                    : "border-slate-200 text-slate-700 hover:border-electric hover:text-electric"
                }`}
              >
                <Play className="h-4 w-4" />
                View Catalog
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-14 flex flex-wrap items-center gap-6"
            >
              {[
                { icon: Shield, label: "BIS Certified" },
                { icon: Award, label: "ISO 9001:2015" },
                { icon: Factory, label: "Made in India" },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2">
                  <badge.icon className={`h-4 w-4 ${isDark ? "text-electric-glow" : "text-electric"}`} />
                  <span className={`text-xs font-semibold tracking-wide uppercase ${isDark ? "text-arctic-darker" : "text-slate-500"}`}>
                    {badge.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-electric/5 blur-3xl scale-110" />
              
              {/* Product showcase card */}
              <div className={`relative rounded-3xl border p-8 ${
                isDark
                  ? "bg-charcoal-light/50 border-charcoal-lighter/30"
                  : "bg-white/60 border-slate-200/60"
              } glass`}>
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-bold tracking-widest uppercase ${isDark ? "text-arctic-darker" : "text-slate-400"}`}>
                    Featured Product
                  </span>
                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-bold text-green-500">
                    In Stock
                  </span>
                </div>

                <div className="relative h-64 flex items-center justify-center">
                  <img
                    src="/images/7-speed-ceiling-fan-regulator-switch.jpeg"
                    alt="7-STEP Modular Fan Regulator"
                    className="h-full w-auto object-contain drop-shadow-2xl"
                    loading="eager"
                  />
                </div>

                <div className="mt-6 space-y-3">
                  <h3 className={`text-xl font-bold ${isDark ? "text-arctic" : "text-charcoal"}`}>
                    7-STEP Modular Fan Regulator
                  </h3>
                  <p className={`text-sm ${isDark ? "text-arctic-darker" : "text-slate-500"}`}>
                    Standard modular fit with 7-step speeds and flame retardant polycarbonate body.
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-2xl font-black ${isDark ? "text-arctic" : "text-charcoal"}`}>₹17</span>
                      <span className={`text-sm ${isDark ? "text-arctic-darker" : "text-slate-400"}`}>/ Piece</span>
                    </div>
                    <span className="rounded-lg bg-electric/10 px-3 py-1 text-xs font-bold text-electric">
                      MOQ: 100 pcs
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute -left-8 top-12 rounded-2xl border p-4 ${
                  isDark
                    ? "bg-charcoal-light/80 border-charcoal-lighter/20"
                    : "bg-white/80 border-slate-200/40"
                } glass`}
              >
                <div className="text-2xl font-black text-electric">30+</div>
                <div className={`text-xs font-medium ${isDark ? "text-arctic-darker" : "text-slate-500"}`}>Years Experience</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className={`absolute -right-4 bottom-20 rounded-2xl border p-4 ${
                  isDark
                    ? "bg-charcoal-light/80 border-charcoal-lighter/20"
                    : "bg-white/80 border-slate-200/40"
                } glass`}
              >
                <div className="text-2xl font-black text-electric">500+</div>
                <div className={`text-xs font-medium ${isDark ? "text-arctic-darker" : "text-slate-500"}`}>B2B Clients</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 ${
        isDark
          ? "bg-gradient-to-t from-charcoal to-transparent"
          : "bg-gradient-to-t from-arctic to-transparent"
      }`} />
    </section>
  );
}
