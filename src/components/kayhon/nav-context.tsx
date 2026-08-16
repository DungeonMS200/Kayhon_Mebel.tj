"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { NavId } from "@/config/kayhon";

type NavContextValue = {
  page: NavId;
  navigate: (page: NavId) => void;
};

const NavContext = createContext<NavContextValue | null>(null);

const VALID_PAGES: NavId[] = [
  "home",
  "about",
  "catalog",
  "portfolio",
  "order",
  "contacts",
];

function getInitialPage(): NavId {
  if (typeof window === "undefined") return "home";
  const hash = window.location.hash.replace(/^#/, "");
  if (!hash) return "home";
  return VALID_PAGES.includes(hash as NavId) ? (hash as NavId) : "home";
}

export function NavProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<NavId>(getInitialPage);

  const navigate = useCallback((next: NavId) => {
    setPage(next);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "auto" });
      // лёгкое обновление hash без полной перезагрузки — даёт шаряемые ссылки
      const url = new URL(window.location.href);
      url.hash = next === "home" ? "" : next;
      window.history.replaceState({}, "", url.toString());
    }
  }, []);

  return (
    <NavContext.Provider value={{ page, navigate }}>{children}</NavContext.Provider>
  );
}

export function useNav() {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error("useNav must be used within NavProvider");
  return ctx;
}
