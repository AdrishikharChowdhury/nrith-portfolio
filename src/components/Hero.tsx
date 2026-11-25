import Image from "next/image";
import { CONTENT, LINKS } from "@/src/content";

export function Hero() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="hero__poster">
        <picture className="hero__art">
          <source
            media="(max-width: 767px)"
            srcSet="/assets/site/hero/mobile/poster.avif"
          />
          <Image
            src="/assets/site/hero/desktop/poster.avif"
            alt=""
            fill
            priority
            sizes="(max-width: 767px) 88vw, 69vw"
          />
        </picture>
        <div className="hero__logo">
          <Image
            src="/assets/brand/logo-poster.png"
            alt="Nrith Jana logo"
            width={1154}
            height={864}
            priority
            sizes="(max-width: 767px) 50vw, 30vw"
          />
        </div>
      </div>

      <div className="hero__content">
        <div className="hero__details">
          <h1 className="hero__tagline" id="hero-title">
            <span>{CONTENT.hero.lines[0]}</span>
            <span>{CONTENT.hero.lines[1]}</span>
          </h1>

          <ul className="hero__tech" aria-label="Technologies">
            {CONTENT.hero.tech.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <a className="hero__cta" href={LINKS.hire}>
          {CONTENT.hero.button}
          <span aria-hidden="true">↗</span>
        </a>

        <p className="hero__disclaimer">{CONTENT.hero.disclaimer}</p>
      </div>
    </section>
  );
}
