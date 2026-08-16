"use client";

import { Portfolio } from "./portfolio";
import { Reveal } from "./reveal";

export function PortfolioPage() {
  return (
    <div className="pt-28 sm:pt-32">
      <section className="py-12 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex items-center gap-3 mb-6 text-wood">
                  <span className="block h-px w-12 bg-wood" />
                  <span className="text-xs tracking-wide-luxe uppercase">Портфолио</span>
                </div>
                <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[0.98]">
                  Наши работы
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <p className="font-display text-xl sm:text-2xl text-muted-foreground leading-relaxed font-light">
                  Сетка реальных проектов из Instagram и Facebook. Фильтруйте
                  по категориям и открывайте фото в полноэкранном режиме.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Portfolio showHeading={false} showFilter={true} />
    </div>
  );
}
