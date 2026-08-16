"use client";

import { Header } from "@/components/kayhon/header";
import { Footer } from "@/components/kayhon/footer";
import { NavProvider, useNav } from "@/components/kayhon/nav-context";
import { HomePage } from "@/components/kayhon/home-page";
import { AboutPage } from "@/components/kayhon/about-page";
import { CatalogPage } from "@/components/kayhon/catalog-page";
import { PortfolioPage } from "@/components/kayhon/portfolio-page";
import { OrderPage } from "@/components/kayhon/order-page";
import { ContactsPage } from "@/components/kayhon/contacts-page";
import { motion, AnimatePresence } from "framer-motion";

function PageRouter() {
  const { page } = useNav();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {page === "home" && <HomePage />}
            {page === "about" && <AboutPage />}
            {page === "catalog" && <CatalogPage />}
            {page === "portfolio" && <PortfolioPage />}
            {page === "order" && <OrderPage />}
            {page === "contacts" && <ContactsPage />}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <NavProvider>
      <PageRouter />
    </NavProvider>
  );
}
