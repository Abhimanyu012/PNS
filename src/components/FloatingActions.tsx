import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function FloatingActions() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp FAB */}
      <motion.a
        href="https://wa.me/919910243876"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-shadow hover:shadow-xl hover:shadow-[#25D366]/40"
        aria-label="Chat on WhatsApp"
      >
        <div className="pulse-ring absolute inset-0 text-[#25D366]" />
        <MessageCircle className="h-6 w-6 relative z-10" />
        
        {/* Tooltip */}
        <span className={`absolute right-full mr-3 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none ${
          isDark ? "bg-charcoal-light text-arctic border border-charcoal-lighter/20" : "bg-white text-charcoal border border-slate-200 shadow-lg"
        }`}>
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Call FAB */}
      <motion.a
        href="tel:+919910243876"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-electric text-white shadow-lg shadow-electric/30 transition-shadow hover:shadow-xl hover:shadow-electric/40"
        aria-label="Call us"
      >
        <div className="pulse-ring absolute inset-0 text-electric" />
        <Phone className="h-5 w-5 relative z-10" />
        
        {/* Tooltip */}
        <span className={`absolute right-full mr-3 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none ${
          isDark ? "bg-charcoal-light text-arctic border border-charcoal-lighter/20" : "bg-white text-charcoal border border-slate-200 shadow-lg"
        }`}>
          Click to Call
        </span>
      </motion.a>
    </div>
  );
}
