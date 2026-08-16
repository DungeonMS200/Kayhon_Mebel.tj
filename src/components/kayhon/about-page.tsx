"use client";

import { aboutGallery, company } from "@/config/kayhon";
import { Reveal } from "./reveal";
import { SocialLinks } from "./social-links";
import { useNav } from "./nav-context";
import { ArrowRight } from "lucide-react";

export function AboutPage() {
  const { navigate } = useNav();

  return (
    <div className="pt-28 sm:pt-32">
      {/* Hero */}
      <section className="py-12 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex items-center gap-3 mb-6 text-wood">
                  <span className="block h-px w-12 bg-wood" />
                  <span className="text-xs tracking-wide-luxe uppercase">О компании</span>
                </div>
                <h1 className="font-display text-[clamp(2.75rem,7vw,6rem)] font-light leading-[0.95]">
                  {company.name}
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <p className="font-display text-xl sm:text-2xl text-muted-foreground leading-relaxed font-light">
                  Компания из Худжанда, специализирующаяся на мебели на заказ.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery showcase */}
      <section className="pb-20 sm:pb-28 lg:pb-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
            <Reveal className="md:col-span-7 md:row-span-2">
              <figure className="img-zoom relative h-full min-h-[400px] bg-secondary overflow-hidden">
                <img
                  src={aboutGallery[0].src}
                  alt={aboutGallery[0].alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </figure>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-5">
              <figure className="img-zoom relative h-full min-h-[200px] bg-secondary overflow-hidden">
                <img
                  src={aboutGallery[1].src}
                  alt={aboutGallery[1].alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </figure>
            </Reveal>
            <Reveal delay={0.2} className="md:col-span-5">
              <figure className="img-zoom relative h-full min-h-[200px] bg-secondary overflow-hidden">
                <img
                  src={aboutGallery[2].src}
                  alt={aboutGallery[2].alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Text content */}
      <section className="pb-24 sm:pb-32 lg:pb-40">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7 lg:col-start-2">
              <Reveal>
                <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-light leading-snug text-foreground mb-8">
                  KAYHON MEBEL — компания из Худжанда, специализирующаяся на
                  мебели на заказ. Компания предлагает корпусную и мягкую
                  мебель, а также индивидуальные решения для интерьера.
                </p>
                <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Главная идея KAYHON MEBEL — создавать мебель, которая
                    сочетает стиль, комфорт и практичность. Каждый проект
                    разрабатывается под конкретное помещение и задачи
                    заказчика.
                  </p>
                  <p>
                    Компания публично указывает, что дизайн, замер, доставка и
                    установка входят в предложение и предоставляются
                    бесплатно. Это позволяет заказчику сосредоточиться на
                    идее и результате, а не на логистике.
                  </p>
                  <p>
                    Подход ориентирован на длительное использование: мебель
                    проектируется с учётом повседневной эксплуатации и
                    внимание к деталям — на всех этапах, от первой встречи до
                    установки.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <button
                    onClick={() => navigate("catalog")}
                    className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-xs uppercase tracking-luxe font-medium hover:bg-wood-dark transition-colors"
                  >
                    Смотреть каталог
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                  </button>
                  <button
                    onClick={() => navigate("portfolio")}
                    className="inline-flex items-center gap-3 border border-foreground/30 text-foreground px-7 py-4 text-xs uppercase tracking-luxe hover:bg-foreground hover:text-background transition-colors"
                  >
                    Наши работы
                  </button>
                </div>
              </Reveal>
            </div>

            <aside className="lg:col-span-3 lg:col-start-10 lg:pt-2">
              <Reveal delay={0.15}>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-luxe text-wood mb-2">Город</p>
                    <p className="font-display text-2xl font-light">{company.locationLabel}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-luxe text-wood mb-2">Телефон</p>
                    <a
                      href={company.phoneHref}
                      className="font-display text-2xl font-light link-underline"
                    >
                      {company.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-luxe text-wood mb-3">Соцсети</p>
                    <SocialLinks variant="footer" />
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
