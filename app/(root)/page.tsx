import { CONTENT } from "@/src/content";

export default function Page() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16">
      <section>
        {CONTENT.hero.lines.map((line) => (
          <h1 key={line} className="font-space-grotesk text-5xl font-bold">
            {line}
          </h1>
        ))}
        <p className="mt-6 max-w-2xl font-jakarta text-lg">
          {CONTENT.miami.bio}
        </p>
        <p className="mt-8 text-sm">{CONTENT.hero.disclaimer}</p>
      </section>
    </main>
  );
}