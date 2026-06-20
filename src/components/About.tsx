import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Award, Users, TrendingUp } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="about" className={`relative py-24 lg:py-32 ${isDark ? "bg-charcoal" : "bg-arctic"}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className={`text-xs font-bold tracking-[0.2em] uppercase mb-4 block ${isDark ? "text-electric-glow" : "text-electric"}`}>
              About Paras & Sons
            </span>
            <h2 className={`text-4xl sm:text-5xl font-black tracking-tight mb-6 ${isDark ? "text-arctic" : "text-charcoal"}`}>
              Quality electrical
              <br />
              <span className="text-electric">parts & manufacturing.</span>
            </h2>
            <div className={`space-y-4 text-base leading-relaxed ${isDark ? "text-arctic-darker" : "text-slate-600"}`}>
              <p>
                Based in Jawahar Colony, Faridabad, Haryana, Paras & Sons is a dedicated manufacturer of electrical and electronics parts. We specialize in producing robust fan regulators and high-contact fan rotary switches.
              </p>
              <p>
                As a proprietorship under the leadership of CEO P Singh, we handle manufacturing, wholesale, and retail distribution, supplying reliable electrical components across India.
              </p>
            </div>

            {/* Factsheet Grid */}
            <div className={`mt-8 p-6 rounded-2xl border ${
              isDark ? "bg-charcoal-lighter/10 border-charcoal-lighter/10" : "bg-slate-50 border-slate-200/50"
            }`}>
              <h4 className={`text-xs font-bold uppercase tracking-widest mb-4 ${isDark ? "text-electric-glow" : "text-electric"}`}>
                Company Factsheet
              </h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
                <div>
                  <span className={`block text-xs font-semibold uppercase tracking-wider mb-0.5 ${isDark ? "text-arctic-darker" : "text-slate-400"}`}>CEO</span>
                  <span className={`font-bold ${isDark ? "text-arctic" : "text-charcoal"}`}>P Singh</span>
                </div>
                <div>
                  <span className={`block text-xs font-semibold uppercase tracking-wider mb-0.5 ${isDark ? "text-arctic-darker" : "text-slate-400"}`}>Nature of Business</span>
                  <span className={`font-medium ${isDark ? "text-arctic" : "text-charcoal"}`}>Manufacturer</span>
                </div>
                <div>
                  <span className={`block text-xs font-semibold uppercase tracking-wider mb-0.5 ${isDark ? "text-arctic-darker" : "text-slate-400"}`}>Legal Status</span>
                  <span className={`font-medium ${isDark ? "text-arctic" : "text-charcoal"}`}>Proprietorship</span>
                </div>
                <div>
                  <span className={`block text-xs font-semibold uppercase tracking-wider mb-0.5 ${isDark ? "text-arctic-darker" : "text-slate-400"}`}>Banker</span>
                  <span className={`font-medium ${isDark ? "text-arctic" : "text-charcoal"}`}>Yes Bank</span>
                </div>
                <div>
                  <span className={`block text-xs font-semibold uppercase tracking-wider mb-0.5 ${isDark ? "text-arctic-darker" : "text-slate-400"}`}>GST Registration Date</span>
                  <span className={`font-medium ${isDark ? "text-arctic" : "text-charcoal"}`}>March 2022</span>
                </div>
                <div>
                  <span className={`block text-xs font-semibold uppercase tracking-wider mb-0.5 ${isDark ? "text-arctic-darker" : "text-slate-400"}`}>Annual Turnover</span>
                  <span className={`font-medium ${isDark ? "text-arctic" : "text-charcoal"}`}>₹0 - 40 Lakhs</span>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-2 gap-6 border-t pt-6" style={{ borderColor: isDark ? "rgba(35,39,48,0.5)" : "rgba(226,232,240,0.8)" }}>
              {[
                { icon: Users, title: "Team Size", desc: "Upto 10 Skilled" },
                { icon: Award, title: "Operations", desc: "Retail & Wholesale" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg flex-shrink-0 ${
                    isDark ? "bg-electric/10" : "bg-electric/5"
                  }`}>
                    <item.icon className="h-5 w-5 text-electric" />
                  </div>
                  <div>
                    <div className={`text-sm font-bold ${isDark ? "text-arctic" : "text-charcoal"}`}>{item.title}</div>
                    <div className={`text-xs ${isDark ? "text-arctic-darker" : "text-slate-500"}`}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`rounded-3xl border p-8 lg:p-10 ${
              isDark
                ? "bg-charcoal-light border-charcoal-lighter/20"
                : "bg-white border-slate-200/60 shadow-xl shadow-slate-200/30"
            }`}
          >
            <h3 className={`text-2xl font-bold mb-8 ${isDark ? "text-arctic" : "text-charcoal"}`}>
              Get in Touch
            </h3>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  value: "Plot No. 4339/30, Saran School Road, Near Goyal Timber, Jawahar Colony, N.I.T Faridabad, Haryana — 121005",
                },
                {
                  icon: Phone,
                  label: "Phones",
                  value: "+91 99102 43876 / +91 72177 53804",
                  href: "tel:+919910243876",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "parasandsonsfbd@gmail.com",
                  href: "mailto:parasandsonsfbd@gmail.com",
                },
                {
                  icon: Clock,
                  label: "Working Hours",
                  value: "Mon — Sat: 9:00 AM to 6:00 PM",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl flex-shrink-0 ${
                    isDark ? "bg-charcoal-lighter" : "bg-slate-100"
                  }`}>
                    <item.icon className="h-5 w-5 text-electric" />
                  </div>
                  <div>
                    <div className={`text-xs font-semibold tracking-wide uppercase mb-0.5 ${isDark ? "text-arctic-darker" : "text-slate-400"}`}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className={`text-sm font-medium hover:text-electric transition-colors ${isDark ? "text-arctic-dark" : "text-slate-700"}`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className={`text-sm font-medium ${isDark ? "text-arctic-dark" : "text-slate-700"}`}>
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className={`mt-8 pt-6 border-t ${isDark ? "border-charcoal-lighter/20" : "border-slate-100"}`}>
              <div className={`text-xs font-semibold tracking-wide uppercase mb-2 ${isDark ? "text-arctic-darker" : "text-slate-400"}`}>
                GST Registration
              </div>
              <div className={`text-sm font-mono font-medium ${isDark ? "text-arctic-dark" : "text-slate-700"}`}>
                06DUVPS2785E1ZW
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
