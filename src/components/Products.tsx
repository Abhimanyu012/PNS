import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Check, ChevronRight, MessageCircle, ShoppingBag } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

interface Variant {
  name: string;
  shortName: string;
  price: string;
  moq: string;
  image: string;
  specs: string[];
  badge?: string | null;
}

interface Product {
  id: number;
  categoryName: string;
  description: string;
  variants: Variant[];
}

const productsData: Product[] = [
  {
    id: 1,
    categoryName: "Fan Rotary Switches",
    description: "High-durability rotary switches with multiple step configurations and robust brass/copper contacts, manufactured for long-lasting fan speed control panels.",
    variants: [
      {
        name: "24mm T-Type (TOYO) Fan Rotary Switch",
        shortName: "24mm T-Type (TOYO)",
        price: "₹8",
        moq: "200 Pcs",
        image: "/images/blue-rotary-potentiometer-switch-component.png",
        specs: ["24mm Body Diameter", "T-Type (TOYO) Shaft", "Rugged Plastic Casing", "Long Lifecycle Contacts"],
        badge: "Best Seller"
      },
      {
        name: "26mm Full Rotation & 5-Step Fan Rotary Switch",
        shortName: "26mm 5-Step",
        price: "₹7",
        moq: "200 Pcs",
        image: "/images/blue-rotary-potentiometer-switch-component.png",
        specs: ["26mm Size Profile", "360° Full Rotation Dial", "5-Step Positive Click Detents", "High Contact Reliability"],
        badge: null
      },
      {
        name: "18mm 7 Step Fan Rotary Switch Circuit",
        shortName: "18mm 7-Step Circuit",
        price: "₹12",
        moq: "100 Pcs",
        image: "/images/step-fan-regulator-switch-with-wires.jpeg",
        specs: ["18mm Compact Form Factor", "7-Step PCB Circuit Integration", "Pre-soldered Connecting Wires", "Stable Step Resistance"],
        badge: "Popular"
      },
      {
        name: "18mm 4 Step Full Fan Rotary Switch",
        shortName: "18mm 4-Step Full",
        price: "₹5",
        moq: "500 Pcs",
        image: "/images/blue-rotary-potentiometer-switch-component.png",
        specs: ["18mm Mini Body Size", "4-Step Speed Shaft", "Blue Polycarbonate Housing", "Standard Modular Fan Fit"],
        badge: null
      },
      {
        name: "18mm 4 Step Fan Rotary Switch Circuit",
        shortName: "18mm 4-Step Circuit",
        price: "₹35",
        moq: "100 Pcs",
        image: "/images/step-fan-regulator-switch-with-wires.jpeg",
        specs: ["18mm Size Circuit Board", "4-Step Pre-wired Assembly", "Ready-to-Assemble Module", "Hum-Free Step Transitions"],
        badge: "Premium"
      },
      {
        name: "18mm 7 Step Full Fan Rotary Switch",
        shortName: "18mm 7-Step Full",
        price: "₹3.50",
        moq: "500 Pcs",
        image: "/images/blue-rotary-potentiometer-switch-component.png",
        specs: ["18mm Compact Dial", "7-Step Mechanical Switch", "Excellent Shaft Grip", "Cost-Effective OEM Choice"],
        badge: "Value Pack"
      }
    ]
  },
  {
    id: 2,
    categoryName: "Fan Regulators",
    description: "Premium step-type electronic fan regulators. Modular and non-modular designs engineered for noiseless, hum-free speed control and energy efficiency.",
    variants: [
      {
        name: "7-STEP Modular Fan Regulator",
        shortName: "7-STEP Modular",
        price: "₹17",
        moq: "100 Pcs",
        image: "/images/7-speed-ceiling-fan-regulator-switch.jpeg",
        specs: ["Modular Snap-in Design", "7-Step Speed Selection", "Highly Flame-Retardant Body", "Standard Modular Board Fit"],
        badge: "Hot Seller"
      },
      {
        name: "4 Step Modular Fan Regulator",
        shortName: "4 Step Modular",
        price: "₹35",
        moq: "100 Pcs",
        image: "/images/4-speed-ceiling-fan-regulator-switch.jpeg",
        specs: ["Modular Snap-in Fitting", "4-Step Electronic Dimming", "Noiseless Step Operation", "Sleek Premium Front Profile"],
        badge: null
      },
      {
        name: "4 Step Non-Modular Fan Regulator",
        shortName: "4 Step Non-Modular",
        price: "₹33",
        moq: "100 Pcs",
        image: "/images/multiple-ceiling-fan-regulator-styles.jpeg",
        specs: ["Surface / Flush Mount Type", "Non-Modular Screw Mounting", "4-Step Sturdy Rotary Dial", "Durable Internal Inductor Coil"],
        badge: null
      },
      {
        name: "7-Step Non-Modular Fan Regulator",
        shortName: "7-Step Non-Modular",
        price: "₹15",
        moq: "100 Pcs",
        image: "/images/multiple-ceiling-fan-regulator-styles.jpeg",
        specs: ["Flush Plate Mounting style", "7-Speed Dial Control", "Traditional Screw-Mount Plate", "Robust Copper Coil Winding"],
        badge: "Value Deal"
      },
      {
        name: "24mm 5-Step Modular Fan Regulator",
        shortName: "24mm 5-Step Modular",
        price: "₹75",
        moq: "50 Pcs",
        image: "/images/4-speed-ceiling-fan-regulator-switch.jpeg",
        specs: ["24mm Modular Width", "5-Step Speed Regulation", "Premium click feel", "BIS & Safety Certified"],
        badge: "Premium Quality"
      }
    ]
  }
];

export default function Products() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  // Track selected variant index for each product ID
  const [selectedVariants, setSelectedVariants] = useState<Record<number, number>>({
    1: 0, // Fan Rotary Switches
    2: 0, // Fan Regulators
  });

  const handleSelectVariant = (productId: number, variantIndex: number) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [productId]: variantIndex,
    }));
  };

  return (
    <section id="products" className={`relative py-24 lg:py-32 ${isDark ? "bg-charcoal" : "bg-arctic"}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className={`text-xs font-bold tracking-[0.2em] uppercase mb-4 block ${isDark ? "text-electric-glow" : "text-electric"}`}>
                Product Catalog
              </span>
              <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight ${isDark ? "text-arctic" : "text-charcoal"}`}>
                Precision Engineered
                <br />
                <span className="text-electric">Switchgear & Regulators.</span>
              </h2>
            </div>
            <p className={`max-w-md text-base leading-relaxed ${isDark ? "text-arctic-darker" : "text-slate-600"}`}>
              Select different features, dimensions, and circuits below to configure our rotary switches and modular step fan regulators according to your project requirements.
            </p>
          </div>
        </motion.div>

        {/* Product Cards Stack */}
        <div className="space-y-16">
          {productsData.map((product) => {
            const selectedIdx = selectedVariants[product.id] ?? 0;
            const currentVariant = product.variants[selectedIdx];

            return (
              <div
                key={product.id}
                className={`rounded-3xl border overflow-hidden p-6 lg:p-10 transition-all duration-300 ${
                  isDark
                    ? "bg-charcoal-light border-charcoal-lighter/20 hover:border-electric/30"
                    : "bg-white border-slate-200/60 hover:border-electric/30 hover:shadow-xl hover:shadow-electric/5"
                }`}
              >
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column: Interactive Image Preview */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-xs font-extrabold tracking-widest uppercase ${isDark ? "text-electric-glow" : "text-electric"}`}>
                          {product.categoryName}
                        </span>
                        {currentVariant.badge && (
                          <span className="rounded-full bg-electric/10 px-3 py-1 text-xs font-bold text-electric">
                            {currentVariant.badge}
                          </span>
                        )}
                      </div>
                      
                      <h3 className={`text-2xl lg:text-3xl font-black tracking-tight mb-2 ${isDark ? "text-arctic" : "text-charcoal"}`}>
                        {product.categoryName}
                      </h3>
                      <p className={`text-sm mb-6 ${isDark ? "text-arctic-darker" : "text-slate-500"}`}>
                        {product.description}
                      </p>
                    </div>

                    {/* Image display with cross-fade animation */}
                    <div className={`relative h-64 sm:h-80 rounded-2xl overflow-hidden flex items-center justify-center p-6 ${
                      isDark ? "bg-charcoal/50 border border-charcoal-lighter/10" : "bg-slate-50 border border-slate-100"
                    }`}>
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentVariant.name}
                          src={currentVariant.image}
                          alt={currentVariant.name}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.25 }}
                          className="h-full w-auto max-w-full object-contain drop-shadow-lg"
                        />
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Right Column: Customizer Details */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full">
                    
                    {/* Active Variant Info */}
                    <div className="mb-6">
                      <span className={`text-[11px] font-bold uppercase tracking-wider ${isDark ? "text-arctic-darker" : "text-slate-400"}`}>
                        Selected Feature / Configuration
                      </span>
                      <h4 className={`text-xl lg:text-2xl font-bold mt-1 mb-4 ${isDark ? "text-arctic" : "text-charcoal"}`}>
                        {currentVariant.name}
                      </h4>
                      
                      {/* Price Details */}
                      <div className="flex items-baseline gap-3 mb-6">
                        <span className={`text-3xl font-black ${isDark ? "text-arctic" : "text-charcoal"}`}>
                          {currentVariant.price}
                        </span>
                        <span className={`text-sm ${isDark ? "text-arctic-darker" : "text-slate-400"}`}>
                          per piece (excl. GST)
                        </span>
                        <span className={`text-xs font-semibold rounded-md px-2 py-0.5 ml-2 ${
                          isDark ? "bg-charcoal-lighter text-arctic-dark" : "bg-slate-100 text-slate-600"
                        }`}>
                          Min Order: {currentVariant.moq}
                        </span>
                      </div>
                    </div>

                    {/* Variant Selector List */}
                    <div className="mb-8">
                      <span className={`block text-xs font-bold uppercase tracking-wider mb-3 ${isDark ? "text-arctic-darker" : "text-slate-400"}`}>
                        Choose Feature / Size / Type
                      </span>
                      
                      <div className="flex flex-wrap gap-2.5">
                        {product.variants.map((v, idx) => {
                          const isActive = idx === selectedIdx;
                          return (
                            <button
                              key={v.name}
                              onClick={() => handleSelectVariant(product.id, idx)}
                              className={`px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                                isActive
                                  ? "bg-electric border-electric text-white shadow-md shadow-electric/25"
                                  : isDark
                                  ? "bg-charcoal border-charcoal-lighter/30 text-arctic-dark hover:border-arctic-darker hover:text-arctic"
                                  : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900 shadow-sm"
                              }`}
                            >
                              {v.shortName}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Dynamic Specifications */}
                    <div className={`mb-8 p-5 rounded-2xl border ${
                      isDark ? "bg-charcoal/30 border-charcoal-lighter/10" : "bg-slate-50 border-slate-100"
                    }`}>
                      <span className={`block text-xs font-bold uppercase tracking-wider mb-3 ${isDark ? "text-arctic-darker" : "text-slate-400"}`}>
                        Technical Specifications
                      </span>
                      <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
                        {currentVariant.specs.map((spec) => (
                          <div key={spec} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-electric flex-shrink-0" />
                            <span className={`text-xs font-medium ${isDark ? "text-arctic-dark" : "text-slate-700"}`}>
                              {spec}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Order CTAs */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-dashed"
                      style={{ borderColor: isDark ? "rgba(35,39,48,0.5)" : "rgba(226,232,240,0.8)" }}
                    >
                      <a
                        href="https://www.indiamart.com/parasandsons-faridabad/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3.5 text-xs font-bold text-white transition-all duration-200 hover:bg-electric-dark shadow-md hover:shadow-lg shadow-electric/15"
                      >
                        <ShoppingBag className="h-4 w-4" />
                        Order on IndiaMART
                        <ExternalLink className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
                      </a>
                      
                      <a
                        href={`https://wa.me/919910243876?text=Hi%20Paras%20%26%20Sons%2C%20I%20am%20interested%20in%20ordering%20the%20${encodeURIComponent(currentVariant.name)}%20(Price%3A%20${encodeURIComponent(currentVariant.price)}%2Fpc%2C%20MOQ%3A%20${encodeURIComponent(currentVariant.moq)}).%20Please%20provide%20more%20details.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/wa inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-xs font-bold transition-all duration-200 ${
                          isDark
                            ? "border-charcoal-lighter text-arctic hover:bg-[#25D366]/10 hover:border-[#25D366] hover:text-[#25D366]"
                            : "border-slate-200 text-slate-700 hover:bg-[#25D366]/5 hover:border-[#25D366] hover:text-[#25D366]"
                        }`}
                      >
                        <MessageCircle className="h-4 w-4" />
                        Inquire on WhatsApp
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* View All Catalog Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.indiamart.com/parasandsons-faridabad/"
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-2 rounded-full border-2 px-8 py-4 text-sm font-bold transition-all duration-300 ${
              isDark
                ? "border-charcoal-lighter text-arctic hover:border-electric hover:text-electric"
                : "border-slate-200 text-slate-700 hover:border-electric hover:text-electric"
            }`}
          >
            View Entire Custom Options on IndiaMART
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
