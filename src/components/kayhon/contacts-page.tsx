"use client";

import { company } from "@/config/kayhon";
import { Reveal } from "./reveal";
import { SocialLinks } from "./social-links";
import { Phone, Instagram, Facebook, MapPin } from "lucide-react";

export function ContactsPage() {
  return (
    <div className="pt-28 sm:pt-32">
      {/* Hero */}
      <section className="py-12 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="flex items-center gap-3 mb-6 text-wood">
              <span className="block h-px w-12 bg-wood" />
              <span className="text-xs tracking-wide-luxe uppercase">Контакты</span>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[0.98] max-w-4xl">
              Свяжитесь с {company.name}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Main contacts */}
      <section className="pb-24 sm:pb-32 lg:pb-40">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left: contact info */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="space-y-10">
                  <div>
                    <p className="text-xs uppercase tracking-luxe text-wood mb-3 flex items-center gap-2">
                      <MapPin className="size-4" strokeWidth={1.5} />
                      Город
                    </p>
                    <p className="font-display text-3xl sm:text-4xl font-light">
                      {company.locationLabel}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-luxe text-wood mb-3 flex items-center gap-2">
                      <Phone className="size-4" strokeWidth={1.5} />
                      Телефон
                    </p>
                    <a
                      href={company.phoneHref}
                      className="font-display text-4xl sm:text-5xl lg:text-6xl font-light link-underline"
                    >
                      {company.phone}
                    </a>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-luxe text-wood mb-3">
                      Социальные сети
                    </p>
                    <div className="space-y-3">
                      <a
                        href={company.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-3 border-b border-border py-4 hover:border-foreground/40 transition-colors"
                      >
                        <span className="flex items-center gap-4">
                          <Instagram className="size-6 text-wood" strokeWidth={1.5} />
                          <span className="font-display text-2xl font-light">Instagram</span>
                        </span>
                        <span className="text-xs tracking-luxe text-muted-foreground group-hover:text-foreground transition-colors">
                          {company.instagramHandle} ↗
                        </span>
                      </a>
                      <a
                        href={company.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-3 border-b border-border py-4 hover:border-foreground/40 transition-colors"
                      >
                        <span className="flex items-center gap-4">
                          <Facebook className="size-6 text-wood" strokeWidth={1.5} />
                          <span className="font-display text-2xl font-light">Facebook</span>
                        </span>
                        <span className="text-xs tracking-luxe text-muted-foreground group-hover:text-foreground transition-colors">
                          /kayhonmebel.tj ↗
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Note about messengers */}
              <Reveal delay={0.2}>
                <p className="mt-10 text-xs text-muted-foreground leading-relaxed max-w-md">
                  Мессенджеры WhatsApp и Telegram не подтвержждены публично.
                  Для связи используйте телефон и официальные страницы в
                  Instagram и Facebook.
                </p>
              </Reveal>
            </div>

            {/* Right: big action buttons */}
            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <div className="grid grid-cols-1 gap-3">
                  <a
                    href={company.phoneHref}
                    className="group flex items-center justify-between gap-4 bg-primary text-primary-foreground p-7 hover:bg-wood-dark transition-colors duration-300"
                  >
                    <span className="flex items-center gap-4">
                      <Phone className="size-7" strokeWidth={1.25} />
                      <span className="font-display text-2xl font-light">Позвонить</span>
                    </span>
                    <span className="text-sm tracking-luxe opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                  </a>
                  <a
                    href={company.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 border border-foreground/30 p-7 hover:bg-secondary transition-colors duration-300"
                  >
                    <span className="flex items-center gap-4">
                      <Instagram className="size-7 text-wood" strokeWidth={1.25} />
                      <span className="font-display text-2xl font-light">Instagram</span>
                    </span>
                    <span className="text-sm tracking-luxe text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all">↗</span>
                  </a>
                  <a
                    href={company.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 border border-foreground/30 p-7 hover:bg-secondary transition-colors duration-300"
                  >
                    <span className="flex items-center gap-4">
                      <Facebook className="size-7 text-wood" strokeWidth={1.25} />
                      <span className="font-display text-2xl font-light">Facebook</span>
                    </span>
                    <span className="text-sm tracking-luxe text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all">↗</span>
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="mt-8 p-6 bg-secondary/40 border border-border">
                  <p className="text-xs uppercase tracking-luxe text-wood mb-2">
                    Адрес и карта
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Точный адрес и интерактивная карта будут добавлены после
                    официального подтверждения. Сейчас для связи доступны
                    телефон и страницы в социальных сетях.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
