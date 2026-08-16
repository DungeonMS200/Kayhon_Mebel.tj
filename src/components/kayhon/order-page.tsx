"use client";

import { Reveal } from "./reveal";
import { ContactForm } from "./contact-form";
import { company } from "@/config/kayhon";
import { Phone, Instagram, Facebook, Check } from "lucide-react";

export function OrderPage() {
  return (
    <div className="pt-28 sm:pt-32">
      {/* Hero */}
      <section className="py-12 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex items-center gap-3 mb-6 text-wood">
                  <span className="block h-px w-12 bg-wood" />
                  <span className="text-xs tracking-wide-luxe uppercase">Мебель на заказ</span>
                </div>
                <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-[0.98]">
                  Создадим мебель под ваше пространство
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <p className="font-display text-xl sm:text-2xl text-muted-foreground leading-relaxed font-light">
                  Расскажите, какую мебель вы хотите, покажите пример или
                  фотографию помещения — мы обсудим ваш проект.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="pb-24 sm:pb-32 lg:pb-40">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="bg-background border border-border p-6 sm:p-10 lg:p-12">
                  <h2 className="font-display text-2xl sm:text-3xl font-light mb-8">
                    Заявка на проект
                  </h2>
                  <ContactForm />
                </div>
              </Reveal>
            </div>

            <aside className="lg:col-span-5">
              <Reveal delay={0.15}>
                <div className="space-y-8">
                  {/* What's included */}
                  <div className="bg-secondary/50 border border-border p-8">
                    <h3 className="text-xs uppercase tracking-luxe text-wood mb-5">
                      Что входит в предложение
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Индивидуальный дизайн-проект",
                        "Бесплатный замер помещения",
                        "Бесплатная доставка",
                        "Бесплатная установка",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm sm:text-base">
                          <span className="mt-0.5 inline-flex items-center justify-center size-5 rounded-full bg-wood/15 shrink-0">
                            <Check className="size-3 text-wood" strokeWidth={2} />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Direct contact */}
                  <div className="bg-ink text-cream p-8">
                    <h3 className="text-xs uppercase tracking-luxe text-wood mb-5">
                      Или свяжитесь напрямую
                    </h3>
                    <a
                      href={company.phoneHref}
                      className="group flex items-center justify-between gap-3 py-4 border-b border-cream/15"
                    >
                      <span className="flex items-center gap-3">
                        <Phone className="size-5 text-wood" strokeWidth={1.5} />
                        <span className="font-display text-2xl font-light">{company.phone}</span>
                      </span>
                      <span className="text-xs tracking-luxe text-cream/50 group-hover:text-cream transition-colors">
                        →
                      </span>
                    </a>
                    <a
                      href={company.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 py-4 border-b border-cream/15"
                    >
                      <span className="flex items-center gap-3">
                        <Instagram className="size-5 text-wood" strokeWidth={1.5} />
                        <span className="text-base">Instagram</span>
                      </span>
                      <span className="text-xs tracking-luxe text-cream/50 group-hover:text-cream transition-colors">
                        ↗
                      </span>
                    </a>
                    <a
                      href={company.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 py-4"
                    >
                      <span className="flex items-center gap-3">
                        <Facebook className="size-5 text-wood" strokeWidth={1.5} />
                        <span className="text-base">Facebook</span>
                      </span>
                      <span className="text-xs tracking-luxe text-cream/50 group-hover:text-cream transition-colors">
                        ↗
                      </span>
                    </a>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Заявка обрабатывается в рабочее время. Мы свяжемся с вами
                    для уточнения деталей и согласования удобного времени
                    замера.
                  </p>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
