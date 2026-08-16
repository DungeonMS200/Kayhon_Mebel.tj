"use client";

import { useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  portfolioItems,
  portfolioCategories,
  type PortfolioCategory,
  type PortfolioItem,
} from "@/config/kayhon";
import { Reveal } from "./reveal";
import { Lightbox } from "./lightbox";
import { cn } from "@/lib/utils";

type Props = {
  /** Ограничение количества выводимых элементов (для превью на главной). */
  limit?: number;
  showFilter?: boolean;
  showHeading?: boolean;
};

export function Portfolio({ limit, showFilter = true, showHeading = true }: Props) {
  const [active, setActive] = useState<PortfolioCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);

  const filtered = useMemo<PortfolioItem[]>(() => {
    const list =
      active === "all"
        ? portfolioItems
        : portfolioItems.filter((p) => p.category === active);
    return limit ? list.slice(0, limit) : list;
  }, [active, limit]);

  const openLightbox = useCallback((idx: number) => setLightboxIndex(idx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(-1), []);
  const prev = useCallback(
    () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length),
    [filtered.length]
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i + 1) % filtered.length),
    [filtered.length]
  );

  return (
    <section className="bg-background py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {showHeading && (
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
            <Reveal>
              <div className="flex items-center gap-3 mb-5 text-wood">
                <span className="block h-px w-12 bg-wood" />
                <span className="text-xs tracking-wide-luxe uppercase">Портфолио</span>
              </div>
              <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] font-light leading-[1.05]">
                Наши работы
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-muted-foreground max-w-md text-base sm:text-lg leading-relaxed">
                Реализованные проекты — корпусная и мягкая мебель, кухни,
                спальни, гардеробные и индивидуальные решения.
              </p>
            </Reveal>
          </div>
        )}

        {showFilter && (
          <Reveal delay={0.1}>
            <div className="no-scrollbar -mx-5 sm:mx-0 overflow-x-auto pb-2 mb-10 sm:mb-12">
              <div className="flex items-center gap-2 px-5 sm:px-0">
                {portfolioCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActive(cat.id)}
                    className={cn(
                      "shrink-0 px-5 py-2.5 text-xs uppercase tracking-luxe transition-all duration-300 border",
                      active === cat.id
                        ? "bg-foreground text-background border-foreground"
                        : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                    )}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        {/* Masonry grid via CSS columns */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 [column-fill:_balance]"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.button
                key={item.id}
                layout
                onClick={() => openLightbox(i)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group mb-4 sm:mb-5 block w-full overflow-hidden bg-secondary/40 text-left break-inside-avoid"
              >
                <div className="img-zoom relative">
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ aspectRatio: `${item.w} / ${item.h}` }}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="text-[10px] tracking-wide-luxe uppercase text-cream/70">
                        {portfolioCategories.find((c) => c.id === item.category)?.label}
                      </span>
                      <div className="flex items-end justify-between gap-3 mt-1.5">
                        <h3 className="font-display text-xl sm:text-2xl font-light text-cream">
                          {item.title}
                        </h3>
                        <ArrowUpRight
                          className="size-5 text-cream/80 shrink-0"
                          strokeWidth={1.25}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            В этой категории пока нет подтверждённых проектов.
          </div>
        )}
      </div>

      <Lightbox
        items={filtered}
        index={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prev}
        onNext={next}
      />
    </section>
  );
}
