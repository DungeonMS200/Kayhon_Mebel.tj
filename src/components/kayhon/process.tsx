"use client";

import { processSteps } from "@/config/kayhon";
import { Reveal } from "./reveal";

export function Process() {
  return (
    <section className="bg-secondary/40 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-5 text-wood">
              <span className="block h-px w-12 bg-wood" />
              <span className="text-xs tracking-wide-luxe uppercase">Процесс</span>
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05]">
              Как проходит заказ
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-muted-foreground max-w-md text-base sm:text-lg leading-relaxed">
              Шесть шагов от первой заявки до готовой мебели в вашем интерьере.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {processSteps.map((step, i) => (
            <Reveal key={step.num} delay={0.08 * i} className="bg-secondary/40">
              <div className="group relative h-full p-8 sm:p-10 bg-background hover:bg-secondary/60 transition-colors duration-500">
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="font-display text-5xl sm:text-6xl font-light text-wood/80 leading-none">
                    {step.num}
                  </span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <h3 className="font-display text-2xl font-normal mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12">
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl">
            Конкретные сроки изготовления зависят от проекта и согласовываются
            индивидуально. Компания не публикует универсальных сроков.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
