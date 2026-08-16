"use client";

import { advantages } from "@/config/kayhon";
import { Reveal } from "./reveal";
import { Ruler, Truck, Wrench, PencilRuler } from "lucide-react";

const ICONS = [PencilRuler, Ruler, Truck, Wrench];

export function Approach() {
  return (
    <section className="bg-background py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3 mb-6 text-wood">
                <span className="block h-px w-12 bg-wood" />
                <span className="text-xs tracking-wide-luxe uppercase">Наш подход</span>
              </div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] text-foreground">
                От идеи до готового интерьера
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pt-2">
            <Reveal delay={0.15}>
              <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-2xl">
                Создаём мебель с учётом вашего пространства, пожеланий и задач.
                Каждый проект начинается с диалога — и доводится до установки
                под ключ.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {advantages.map((adv, i) => {
            const Icon = ICONS[i] ?? PencilRuler;
            return (
              <Reveal key={adv.id} delay={0.1 * i} className="bg-background">
                <div className="group h-full p-8 sm:p-10 flex flex-col">
                  <div className="mb-8 flex items-start justify-between">
                    <span className="text-xs tracking-luxe text-wood font-medium">
                      0{i + 1}
                    </span>
                    <Icon
                      className="size-7 text-foreground/80 transition-transform duration-500 group-hover:scale-110 group-hover:text-wood"
                      strokeWidth={1.25}
                    />
                  </div>
                  <h3 className="font-display text-2xl font-light leading-tight mb-3">
                    {adv.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {adv.description}
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
