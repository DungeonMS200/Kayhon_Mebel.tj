"use client";

import { Hero } from "./hero";
import { Approach } from "./approach";
import { Portfolio } from "./portfolio";
import { Process } from "./process";
import { WhyUs } from "./why-us";
import { CTASection } from "./cta-section";

export function HomePage() {
  return (
    <>
      <Hero />
      <Approach />
      <Portfolio limit={9} showFilter={false} />
      <Process />
      <WhyUs />
      <CTASection />
    </>
  );
}
