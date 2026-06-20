import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

const clients = [
  "Havells India",
  "Anchor by Panasonic",
  "Polycab",
  "Finolex",
  "Legrand",
  "Schneider Electric",
  "Siemens",
  "ABB",
  "L&T",
  "Bajaj Electricals",
];

export default function TrustMarquee() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`relative py-12 overflow-hidden ${isDark ? "bg-charcoal-light" : "bg-slate-50"}`}>
      <div className={`absolute inset-y-0 left-0 w-24 z-10 ${
        isDark ? "bg-gradient-to-r from-charcoal-light to-transparent" : "bg-gradient-to-r from-slate-50 to-transparent"
      }`} />
      <div className={`absolute inset-y-0 right-0 w-24 z-10 ${
        isDark ? "bg-gradient-to-l from-charcoal-light to-transparent" : "bg-gradient-to-l from-slate-50 to-transparent"
      }`} />
      
      <div className="mb-6 text-center">
        <span className={`text-[10px] font-bold tracking-[0.3em] uppercase ${isDark ? "text-arctic-darker" : "text-slate-400"}`}>
          Trusted by leading brands
        </span>
      </div>

      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...clients, ...clients].map((client, i) => (
            <span
              key={i}
              className={`text-lg font-bold tracking-tight ${isDark ? "text-charcoal-lighter/40" : "text-slate-300"}`}
            >
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
