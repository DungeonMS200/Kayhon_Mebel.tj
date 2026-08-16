"use client";

import { whyUs } from "@/config/kayhon";
import { Reveal } from "./reveal";
import { Sparkles, Armchair, Hand, Eye, Layers, Heart } from "lucide-react";

const ICONS = [Sparkles, Armchair, Hand, Layers, Eye, Heart];

export function WhyUs() {
  return (
    <section className="relative bg-ink py-24 sm:py-32 lg:py-40 text-cream overflow-hidden">
      {/* Декоративная сетка */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 sm:mb-20">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="flex items-center gap-3 mb-6 text-wood">
                <span className="block h-px w-12 bg-wood" />
                <span className="text-xs tracking-wide-luxe uppercase">
                  Почему KAYHON MEBEL
                </span>
              </div>
              <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] font-light leading-[1.05]">
                Создаём стиль и комфорт для вашего дома.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:pt-3">
            <Reveal delay={0.15}>
              <p className="text-cream/70 text-base sm:text-lg leading-relaxed">
                Подходим к каждому проекту как к собственному — с вниманием к
                деталям, эргономике и стилю. Не повторяемся и не работаем по
                шаблону: каждая мебель — под конкретное пространство.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-cream/10">
          {whyUs.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={item.id} delay={0.08 * i} className="bg-ink">
                <div className="h-full p-8 sm:p-10 flex flex-col">
                  <Icon className="size-6 text-wood mb-6" strokeWidth={1.25} />
                  <h3 className="font-display text-2xl font-light mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-cream/65">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
