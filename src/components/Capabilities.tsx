import { motion } from "framer-motion";
import { Cog, FlaskConical, Ruler, Truck, Wrench, Cpu } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const capabilities = [
  {
    icon: Cog,
    title: "Precision Molding",
    desc: "High-grade polycarbonate and ABS injection molding with ±0.05mm tolerance.",
  },
  {
    icon: FlaskConical,
    title: "Material Testing",
    desc: "Rigorous dielectric strength, flammability, and aging tests on every batch.",
  },
  {
    icon: Ruler,
    title: "CNC Machining",
    desc: "Automated CNC production for rotary switch contacts and metal components.",
  },
  {
    icon: Truck,
    title: "Pan-India Logistics",
    desc: "Same-day dispatch from Faridabad. Bulk orders delivered within 72 hours.",
  },
  {
    icon: Wrench,
    title: "Custom Tooling",
    desc: "In-house die design and mold fabrication for OEM/ODM requirements.",
  },
  {
    icon: Cpu,
    title: "Smart QC Systems",
    desc: "Automated visual inspection and electrical parameter testing stations.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

export default function Capabilities() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="capabilities" className={`relative py-24 lg:py-32 ${isDark ? "bg-charcoal-light" : "bg-slate-50"}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="mb-16 max-w-3xl"
        >
          <span className={`text-xs font-bold tracking-[0.2em] uppercase mb-4 block ${isDark ? "text-electric-glow" : "text-electric"}`}>
            Manufacturing Excellence
          </span>
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 ${isDark ? "text-arctic" : "text-charcoal"}`}>
            Built in-house.
            <br />
            <span className="text-electric">Built to last.</span>
          </h2>
          <p className={`text-base leading-relaxed ${isDark ? "text-arctic-darker" : "text-slate-600"}`}>
            From raw material to finished product, every stage of manufacturing happens under our roof in Faridabad. This vertical integration ensures unmatched quality control and competitive pricing.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.title}
              variants={itemVariants}
              className={`group relative rounded-2xl border p-7 transition-all duration-300 ${
                isDark
                  ? "bg-charcoal border-charcoal-lighter/20 hover:border-electric/30"
                  : "bg-white border-slate-200/60 hover:border-electric/30 hover:shadow-lg hover:shadow-electric/5"
              }`}
            >
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${
                isDark
                  ? "bg-electric/10 group-hover:bg-electric/20"
                  : "bg-electric/5 group-hover:bg-electric/10"
              }`}>
                <cap.icon className="h-6 w-6 text-electric" />
              </div>
              <h3 className={`text-lg font-bold mb-2 ${isDark ? "text-arctic" : "text-charcoal"}`}>
                {cap.title}
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? "text-arctic-darker" : "text-slate-500"}`}>
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden ${
            isDark ? "bg-charcoal-lighter/20" : "bg-slate-200"
          }`}
        >
          {[
            { value: "30+", label: "Years in Business" },
            { value: "50L+", label: "Units Produced" },
            { value: "99.2%", label: "Quality Pass Rate" },
            { value: "72hr", label: "Avg. Delivery Time" },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center py-10 px-4 ${
                isDark ? "bg-charcoal-light" : "bg-white"
              }`}
            >
              <span className="text-3xl sm:text-4xl font-black text-electric mb-1">{stat.value}</span>
              <span className={`text-xs font-semibold tracking-wide uppercase text-center ${isDark ? "text-arctic-darker" : "text-slate-500"}`}>
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
