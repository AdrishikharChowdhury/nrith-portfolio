import { Hero } from "@/src/components/Hero";
import { HeroIntro } from "@/src/components/HeroIntro";
import { SiteHeader } from "@/src/components/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <HeroIntro />
      </main>
    </>
  );
}