"use client";

import { company, navigation } from "@/config/kayhon";
import { SocialLinks } from "./social-links";
import { useNav } from "./nav-context";

export function Footer() {
  const { navigate } = useNav();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-ink text-cream">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex flex-col leading-none mb-6">
              <span className="font-display text-3xl sm:text-4xl font-medium tracking-luxe">
                {company.brandTop}
              </span>
              <span className="font-display text-sm tracking-wide-luxe text-wood mt-2">
                {company.brandBottom}
              </span>
            </div>
            <p className="font-display text-xl sm:text-2xl font-light text-cream/80 max-w-md leading-snug">
              Мебель, созданная для вашего пространства.
            </p>
            <p className="mt-6 text-sm text-cream/50 max-w-md leading-relaxed">
              Корпусная и мягкая мебель на заказ. Дизайн, замер, доставка и
              установка — бесплатно.
            </p>
          </div>

          {/* Nav */}
          <div className="lg:col-span-3">
            <h3 className="text-xs tracking-wide-luxe uppercase text-wood mb-5">
              Навигация
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => navigate(item.id)}
                    className="link-underline text-sm text-cream/70 hover:text-cream transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="lg:col-span-4">
            <h3 className="text-xs tracking-wide-luxe uppercase text-wood mb-5">
              Контакты
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="text-cream/70">{company.locationLabel}</li>
              <li>
                <a
                  href={company.phoneHref}
                  className="link-underline font-display text-2xl font-light text-cream hover:text-wood transition-colors"
                >
                  {company.phone}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <SocialLinks variant="footer" />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-cream/50">
          <span>
            © {year} {company.name}. Все права защищены.
          </span>
          <span className="tracking-luxe uppercase">
            {company.city}, {company.country}
          </span>
        </div>
      </div>
    </footer>
  );
}
