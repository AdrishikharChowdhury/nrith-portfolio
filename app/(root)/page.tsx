import { Hero } from "@/src/components/Hero";
import { SiteHeader } from "@/src/components/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
      </main>
    </>
  );
}