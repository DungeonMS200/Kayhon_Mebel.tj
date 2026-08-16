"use client";

import { Instagram, Facebook, Phone } from "lucide-react";
import { company } from "@/config/kayhon";
import { cn } from "@/lib/utils";

type Variant = "row" | "stacked" | "footer";

export function SocialLinks({
  variant = "row",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const items = [
    {
      href: company.phoneHref,
      label: "Позвонить",
      icon: Phone,
      external: false,
    },
    {
      href: company.instagram,
      label: "Instagram",
      icon: Instagram,
      external: true,
    },
    {
      href: company.facebook,
      label: "Facebook",
      icon: Facebook,
      external: true,
    },
  ];

  if (variant === "footer") {
    return (
      <div className={cn("flex flex-wrap gap-x-6 gap-y-2", className)}>
        {items.map((it) => (
          <a
            key={it.label}
            href={it.href}
            target={it.external ? "_blank" : undefined}
            rel={it.external ? "noopener noreferrer" : undefined}
            className="link-underline inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <it.icon className="size-4" strokeWidth={1.5} />
            {it.label}
          </a>
        ))}
      </div>
    );
  }

  if (variant === "stacked") {
    return (
      <div className={cn("flex flex-col gap-3", className)}>
        {items.map((it) => (
          <a
            key={it.label}
            href={it.href}
            target={it.external ? "_blank" : undefined}
            rel={it.external ? "noopener noreferrer" : undefined}
            className="group inline-flex items-center justify-between gap-3 border border-border bg-background px-5 py-4 hover:border-foreground/30 transition-colors"
          >
            <span className="flex items-center gap-3">
              <it.icon className="size-5 text-wood" strokeWidth={1.5} />
              <span className="font-display text-lg">{it.label}</span>
            </span>
            <span className="text-xs tracking-luxe uppercase text-muted-foreground group-hover:text-foreground transition-colors">
              {it.external ? "↗" : "→"}
            </span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          target={it.external ? "_blank" : undefined}
          rel={it.external ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-2 border border-border bg-background px-5 py-3 text-sm hover:border-foreground/40 hover:bg-secondary/50 transition-colors"
        >
          <it.icon className="size-4 text-wood" strokeWidth={1.5} />
          {it.label}
        </a>
      ))}
    </div>
  );
}
