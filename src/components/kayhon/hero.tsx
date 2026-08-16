"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { company, heroSlides } from "@/config/kayhon";
import { useNav } from "./nav-context";

export function Hero() {
  const { navigate } = useNav();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const current = heroSlides[slide];

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-ink">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={slide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={current.src}
              alt={current.alt}
              className="h-full w-full object-cover"
              fetchPriority="high"
              decoding="async"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-5 sm:right-8 lg:right-12 z-20 flex flex-col gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            aria-label={`Слайд ${i + 1}`}
            className="group flex items-center justify-end gap-3 py-1"
          >
            <span
              className={`text-[10px] tracking-luxe uppercase transition-all duration-500 ${
                i === slide ? "text-cream opacity-100" : "text-cream/40 opacity-0 group-hover:opacity-100"
              }`}
            >
              0{i + 1}
            </span>
            <span
              className={`block h-px transition-all duration-500 ${
                i === slide ? "w-12 bg-cream" : "w-6 bg-cream/40"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[100svh] flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="mx-auto max-w-[1440px] w-full px-5 sm:px-8 lg:px-12 pt-28 pb-16">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6 flex items-center gap-3 text-cream/80"
              >
                <span className="block h-px w-12 bg-wood" />
                <span className="text-xs tracking-wide-luxe uppercase">
                  {company.locationLabel}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-cream font-light leading-[0.95] text-[clamp(2.75rem,8vw,7rem)]"
              >
                {company.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 font-display text-cream/90 font-light text-[clamp(1.25rem,2.6vw,2rem)] leading-tight max-w-2xl"
              >
                Мебель, созданная для вашего пространства
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 text-cream/70 text-base sm:text-lg leading-relaxed max-w-xl"
              >
                Корпусная и мягкая мебель на заказ в Худжанде. Дизайн, замер,
                доставка и установка — бесплатно.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <button
                  onClick={() => navigate("order")}
                  className="group inline-flex items-center justify-center gap-3 bg-cream text-ink px-7 py-4 text-xs uppercase tracking-luxe font-medium hover:bg-wood hover:text-cream transition-colors duration-300"
                >
                  Заказать мебель
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </button>
                <button
                  onClick={() => navigate("portfolio")}
                  className="inline-flex items-center justify-center gap-3 border border-cream/40 text-cream px-7 py-4 text-xs uppercase tracking-luxe font-medium hover:bg-cream/10 transition-colors duration-300"
                >
                  Смотреть наши работы
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/60"
        >
          <span className="text-[10px] tracking-wide-luxe uppercase">Листайте</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="size-4" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
