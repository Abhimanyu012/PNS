import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Zap } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#footer" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = theme === "dark";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isDark
              ? "glass glass-dark py-3"
              : "glass glass-light py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className={`flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-300 ${
              isDark ? "bg-electric/10" : "bg-electric/10"
            }`}>
              <Zap className="h-5 w-5 text-electric" />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold tracking-tight leading-none ${isDark ? "text-arctic" : "text-charcoal"}`}>
                Paras & Sons
              </span>
              <span className={`text-[10px] font-medium tracking-[0.2em] uppercase ${isDark ? "text-arctic-darker" : "text-slate-500"}`}>
                Faridabad
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-electric ${
                  isDark ? "text-arctic-dark" : "text-slate-600"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 ${
                isDark
                  ? "bg-charcoal-lighter text-arctic-dark hover:bg-charcoal-light"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="h-4.5 w-4.5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="h-4.5 w-4.5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <a
              href="https://www.indiamart.com/parasandsons-faridabad/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 rounded-full bg-electric px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-electric-dark hover:shadow-lg hover:shadow-electric/25"
            >
              Order Now
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`flex md:hidden h-10 w-10 items-center justify-center rounded-full ${
                isDark ? "bg-charcoal-lighter text-arctic" : "bg-slate-100 text-slate-700"
              }`}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className={`fixed inset-x-0 top-[72px] z-40 border-b px-6 py-6 md:hidden ${
              isDark
                ? "glass glass-dark border-charcoal-lighter"
                : "glass glass-light border-slate-200 shadow-lg"
            }`}
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base font-medium ${isDark ? "text-arctic-dark" : "text-slate-700"}`}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="https://www.indiamart.com/parasandsons-faridabad/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full bg-electric px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Order via IndiaMART
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
