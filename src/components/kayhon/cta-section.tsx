"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { useNav } from "./nav-context";

export function CTASection() {
  const { navigate } = useNav();
  return (
    <section className="bg-background py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="relative overflow-hidden bg-secondary/60 px-6 py-20 sm:px-12 sm:py-28 lg:py-32 text-center">
            {/* Тонкие декоративные линии */}
            <div className="absolute inset-0 pointer-events-none opacity-50">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-wood/40" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-wood/40" />
            </div>

            <div className="relative max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6 text-wood">
                <span className="block h-px w-12 bg-wood" />
                <span className="text-xs tracking-wide-luxe uppercase">
                  Индивидуальный проект
                </span>
                <span className="block h-px w-12 bg-wood" />
              </div>

              <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05]">
                Хотите мебель по своему проекту?
              </h2>

              <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Расскажите нам о своей идее — обсудим подходящее решение для
                вашего пространства.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => navigate("order")}
                  className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-luxe font-medium hover:bg-wood-dark transition-colors duration-300"
                >
                  Обсудить проект
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </button>
                <button
                  onClick={() => navigate("contacts")}
                  className="inline-flex items-center justify-center gap-3 border border-foreground/30 text-foreground px-8 py-4 text-xs uppercase tracking-luxe font-medium hover:bg-foreground hover:text-background transition-colors"
                >
                  Контакты
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
