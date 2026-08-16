"use client";

import { catalogCategories } from "@/config/kayhon";
import { Reveal } from "./reveal";
import { useNav } from "./nav-context";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function CatalogPage() {
  const { navigate } = useNav();

  return (
    <div className="pt-28 sm:pt-32">
      <section className="py-12 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex items-center gap-3 mb-6 text-wood">
                  <span className="block h-px w-12 bg-wood" />
                  <span className="text-xs tracking-wide-luxe uppercase">Каталог</span>
                </div>
                <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-[0.98]">
                  Направления
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <p className="font-display text-xl sm:text-2xl text-muted-foreground leading-relaxed font-light">
                  Категории мебели, которые мы изготавливаем на заказ.
                  Стоимость и сроки обсуждаются индивидуально по проекту.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating rows */}
      <section className="pb-24 sm:pb-32 lg:pb-40">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 space-y-20 sm:space-y-28 lg:space-y-32">
          {catalogCategories.map((cat, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={cat.id}>
                <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div
                    className={`lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}
                  >
                    <div className="img-zoom relative aspect-[4/3] sm:aspect-[16/10] bg-secondary overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.alt}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={`lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}>
                    <span className="text-xs tracking-wide-luxe text-wood uppercase">
                      0{i + 1}
                    </span>
                    <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
                      {cat.title}
                    </h2>
                    <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                      {cat.description}
                    </p>
                    <button
                      onClick={() => navigate("order")}
                      className="group mt-8 inline-flex items-center gap-3 border border-foreground/30 text-foreground px-6 py-3.5 text-xs uppercase tracking-luxe hover:bg-foreground hover:text-background transition-colors"
                    >
                      Заказать
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}

          {/* Final CTA */}
          <Reveal>
            <div className="border-t border-border pt-16 sm:pt-20 text-center">
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-light max-w-3xl mx-auto leading-snug">
                Не нашли нужную категорию? Расскажите о своём проекте —
                обсудим подходящее решение.
              </p>
              <button
                onClick={() => navigate("order")}
                className="group mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-luxe hover:bg-wood-dark transition-colors"
              >
                Обсудить проект
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
