"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import type { PortfolioItem } from "@/config/kayhon";

export function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: PortfolioItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[index];

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (index < 0) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [index, onKeyDown]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          {/* Top bar */}
          <div
            className="absolute top-0 left-0 right-0 px-5 sm:px-8 py-5 flex items-center justify-between text-cream z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-xs tracking-wide-luxe uppercase text-cream/60">
                {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </span>
            </div>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center size-11 text-cream hover:text-wood transition-colors"
              aria-label="Закрыть"
            >
              <X className="size-6" strokeWidth={1.5} />
            </button>
          </div>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-3 sm:left-6 z-10 inline-flex items-center justify-center size-12 text-cream/70 hover:text-cream transition-colors"
            aria-label="Предыдущее"
          >
            <ChevronLeft className="size-8" strokeWidth={1.25} />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-3 sm:right-6 z-10 inline-flex items-center justify-center size-12 text-cream/70 hover:text-cream transition-colors"
            aria-label="Следующее"
          >
            <ChevronRight className="size-8" strokeWidth={1.25} />
          </button>

          {/* Image */}
          <motion.div
            key={item.id}
            className="relative w-full h-full flex items-center justify-center px-16 sm:px-24 py-20"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="max-h-full max-w-full object-contain shadow-2xl"
              style={{ maxHeight: "calc(100vh - 12rem)" }}
            />
          </motion.div>

          {/* Caption */}
          {(item.title || item.caption || item.sourceUrl) && (
            <div
              className="absolute bottom-0 left-0 right-0 px-5 sm:px-12 py-6 text-cream z-10 bg-gradient-to-t from-ink/80 to-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-3xl mx-auto text-center">
                {item.title && (
                  <p className="font-display text-xl sm:text-2xl font-light mb-1">
                    {item.title}
                  </p>
                )}
                {item.caption && (
                  <p className="text-sm text-cream/70">{item.caption}</p>
                )}
                {item.sourceUrl && (
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs tracking-luxe uppercase text-wood hover:text-cream transition-colors"
                  >
                    Открыть оригинал
                    <ExternalLink className="size-3" strokeWidth={1.5} />
                  </a>
                )}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
