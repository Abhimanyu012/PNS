import { motion } from "framer-motion";
import { Zap, ExternalLink } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const sitemap = [
  { label: "Products", href: "#products" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "About Us", href: "#about" },
  { label: "IndiaMART Store", href: "https://www.indiamart.com/parasandsons-faridabad/", external: true },
];

const products = [
  "Fan Regulators",
  "Fan Rotary Switches",
];

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer id="footer" className={`relative ${isDark ? "bg-charcoal-light" : "bg-slate-100"}`}>
      {/* Top border accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${isDark ? "bg-electric/10" : "bg-electric/10"}`}>
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
            <p className={`text-sm leading-relaxed mb-6 max-w-xs ${isDark ? "text-arctic-darker" : "text-slate-600"}`}>
              Leading manufacturer of precision electrical components. Supplying quality switchgear across India since 2022.
            </p>
            <div className={`text-xs font-mono ${isDark ? "text-arctic-darker" : "text-slate-500"}`}>
              <span className="font-semibold uppercase tracking-wide">GSTIN:</span> 06DUVPS2785E1ZW
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className={`text-xs font-bold tracking-[0.15em] uppercase mb-5 ${isDark ? "text-arctic" : "text-charcoal"}`}>
              Sitemap
            </h4>
            <ul className="space-y-3">
              {sitemap.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className={`group inline-flex items-center gap-1 text-sm transition-colors hover:text-electric ${
                      isDark ? "text-arctic-darker" : "text-slate-600"
                    }`}
                  >
                    {link.label}
                    {link.external && (
                      <ExternalLink className="h-3 w-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className={`text-xs font-bold tracking-[0.15em] uppercase mb-5 ${isDark ? "text-arctic" : "text-charcoal"}`}>
              Products
            </h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className={`text-sm transition-colors hover:text-electric ${isDark ? "text-arctic-darker" : "text-slate-600"}`}
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`text-xs font-bold tracking-[0.15em] uppercase mb-5 ${isDark ? "text-arctic" : "text-charcoal"}`}>
              Contact
            </h4>
            <div className={`space-y-3 text-sm ${isDark ? "text-arctic-darker" : "text-slate-600"}`}>
              <p className="leading-relaxed">
                Plot No. 4339/30, Saran School Road<br />
                Near Goyal Timber, Jawahar Colony<br />
                N.I.T Faridabad, Haryana — 121005
              </p>
              <p>
                <a href="tel:+919910243876" className="hover:text-electric transition-colors block">
                  +91 99102 43876
                </a>
                <a href="tel:+917217753804" className="hover:text-electric transition-colors block">
                  +91 72177 53804
                </a>
              </p>
              <p>
                <a href="mailto:parasandsonsfbd@gmail.com" className="hover:text-electric transition-colors">
                  parasandsonsfbd@gmail.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className={`mt-16 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
          isDark ? "border-charcoal-lighter/20" : "border-slate-200"
        }`}>
          <p className={`text-xs ${isDark ? "text-arctic-darker" : "text-slate-500"}`}>
            © {new Date().getFullYear()} Paras & Sons. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className={`text-xs transition-colors hover:text-electric ${isDark ? "text-arctic-darker" : "text-slate-500"}`}>
              Privacy Policy
            </a>
            <a href="#" className={`text-xs transition-colors hover:text-electric ${isDark ? "text-arctic-darker" : "text-slate-500"}`}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
