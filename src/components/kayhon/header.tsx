"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { company, navigation } from "@/config/kayhon";
import { useNav } from "./nav-context";
import { cn } from "@/lib/utils";

export function Header() {
  const { page, navigate } = useNav();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Блокируем скролл фона при открытом мобильном меню
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const go = (id: (typeof navigation)[number]["id"]) => {
    navigate(id);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border/60 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <button
              onClick={() => go("home")}
              className="group flex flex-col items-start leading-none select-none"
              aria-label={`${company.name} — на главную`}
            >
              <span
                className={cn(
                  "font-display font-medium tracking-luxe transition-all duration-500",
                  scrolled ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"
                )}
              >
                {company.brandTop}
              </span>
              <span
                className={cn(
                  "font-display font-light tracking-wide-luxe text-wood transition-all duration-500",
                  scrolled ? "text-[10px] sm:text-xs" : "text-xs sm:text-sm"
                )}
              >
                {company.brandBottom}
              </span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Главная навигация">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className={cn(
                    "link-underline text-sm tracking-wide transition-colors duration-300",
                    page === item.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right cluster */}
            <div className="flex items-center gap-3 sm:gap-5">
              <a
                href={company.phoneHref}
                className="hidden sm:flex items-center gap-2 text-sm tracking-wide text-foreground hover:text-wood transition-colors"
              >
                <Phone className="size-4" strokeWidth={1.5} />
                <span className="font-medium">{company.phone}</span>
              </a>
              <button
                onClick={() => go("order")}
                className="hidden sm:inline-flex items-center justify-center bg-primary text-primary-foreground px-5 py-2.5 text-xs uppercase tracking-luxe font-medium hover:bg-wood-dark transition-colors duration-300"
              >
                Заказать
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden inline-flex items-center justify-center size-10 -mr-2 text-foreground"
                aria-label="Открыть меню"
              >
                <Menu className="size-6" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-[88%] max-w-sm bg-background shadow-2xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                <div className="flex flex-col leading-none">
                  <span className="font-display text-2xl tracking-luxe">{company.brandTop}</span>
                  <span className="font-display text-xs tracking-wide-luxe text-wood mt-1">
                    {company.brandBottom}
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="size-10 inline-flex items-center justify-center text-foreground"
                  aria-label="Закрыть меню"
                >
                  <X className="size-6" strokeWidth={1.5} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-1" aria-label="Мобильная навигация">
                {navigation.map((item, idx) => (
                  <motion.button
                    key={item.id}
                    onClick={() => go(item.id)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
                    className={cn(
                      "flex items-center justify-between py-4 border-b border-border/60 text-left",
                      page === item.id ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    <span className="font-display text-2xl tracking-wide">{item.label}</span>
                    <span className="text-xs text-wood tracking-luxe">
                      0{navigation.indexOf(item) + 1}
                    </span>
                  </motion.button>
                ))}
              </nav>

              <div className="px-6 py-6 border-t border-border space-y-4">
                <a
                  href={company.phoneHref}
                  className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-4 text-sm tracking-luxe uppercase font-medium"
                >
                  <Phone className="size-4" strokeWidth={1.5} />
                  {company.phone}
                </a>
                <button
                  onClick={() => go("order")}
                  className="w-full border border-foreground/30 text-foreground py-4 text-sm tracking-luxe uppercase hover:bg-foreground hover:text-background transition-colors"
                >
                  Заказать мебель
                </button>
                <div className="flex items-center justify-center gap-6 pt-2">
                  <a
                    href={company.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-luxe uppercase text-muted-foreground hover:text-foreground"
                  >
                    Instagram
                  </a>
                  <a
                    href={company.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-luxe uppercase text-muted-foreground hover:text-foreground"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
