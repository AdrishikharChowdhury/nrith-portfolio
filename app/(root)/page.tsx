import { CONTENT } from "@/src/content";
import { AnimatedWordmark } from "@/src/components/AnimatedWordmark";

export default function Page() {
  return (
    <main className="wordmark-page">
      <AnimatedWordmark label={CONTENT.hero.wordmark} />
    </main>
  );
}