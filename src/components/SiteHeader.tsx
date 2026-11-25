import { CONTENT, LINKS } from "@/src/content";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="site-header__brand" href="#hero" aria-label={CONTENT.navbar.monogram}>
        {CONTENT.navbar.monogram}
      </a>

      <details className="site-menu">
        <summary className="site-menu__toggle" aria-label="Menu">
          <span />
          <span />
          <span />
        </summary>
        <nav className="site-menu__panel" aria-label="Main navigation">
          <a href="#hero">{CONTENT.navbar.monogram}</a>
          <a href={LINKS.hire}>{CONTENT.navbar.hire}</a>
        </nav>
      </details>

      <a className="site-header__hire" href={LINKS.hire}>
        {CONTENT.navbar.hire}
      </a>
    </header>
  );
}
