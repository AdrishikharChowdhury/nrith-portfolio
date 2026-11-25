"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const SHARD_STARTS = [
  { x: -0.14, y: -0.12 },
  { x: -0.06, y: -0.16 },
  { x: 0.1, y: -0.14 },
  { x: 0.16, y: -0.1 },
  { x: -0.16, y: 0.08 },
  { x: -0.08, y: 0.14 },
  { x: 0, y: 0.16 },
  { x: 0.08, y: 0.1 },
  { x: 0.16, y: 0.08 },
  { x: 0.03, y: -0.04 },
] as const;

export function HeroIntro() {
  const loaderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const loader = loaderRef.current;
    const hero = document.querySelector<HTMLElement>(".hero");

    if (!loader) {
      console.error("Hero loader element was not found.");
      return;
    }

    if (!hero) {
      console.error("Hero section was not found; hiding the loader.");
      gsap.set(loader, { autoAlpha: 0 });
      return;
    }

    let disposed = false;
    let context: gsap.Context | undefined;
    const imagesReady = Array.from(document.images, (image) => image.decode());

    Promise.all([document.fonts.ready, ...imagesReady])
      .then(() => {
        if (disposed) {
          return;
        }

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          gsap.set(loader, { autoAlpha: 0 });
          return;
        }

        const poster = hero.querySelector<HTMLElement>(".hero__art");
        const logo = hero.querySelector<HTMLElement>(".hero__logo");
        const shards = Array.from(
          hero.querySelectorAll<HTMLElement>(".hero__shard"),
        );

        if (!poster || !logo || shards.length !== SHARD_STARTS.length) {
          console.error("Hero intro layers are incomplete; showing the static poster.");
          gsap.set(loader, { autoAlpha: 0 });
          return;
        }

        const { width, height } = poster.getBoundingClientRect();

        context = gsap.context(() => {
          gsap.set(poster, { autoAlpha: 0 });
          gsap.set(logo, {
            autoAlpha: 0,
            scale: 0.88,
            transformOrigin: "50% 50%",
          });

          shards.forEach((shard, index) => {
            const start = SHARD_STARTS[index];
            gsap.set(shard, {
              autoAlpha: 0,
              x: start.x * width,
              y: start.y * height,
            });
          });

          const timeline = gsap.timeline();
          timeline.to(
            shards,
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              duration: 0.52,
              ease: "power3.out",
              stagger: 0.02,
            },
            0,
          );
          timeline.to(
            loader,
            { autoAlpha: 0, duration: 0.45, ease: "power2.inOut" },
            0.12,
          );
          timeline.to(
            logo,
            { autoAlpha: 1, scale: 1, duration: 0.9, ease: "power3.out" },
            0.48,
          );
          timeline.to(
            poster,
            { autoAlpha: 1, duration: 0.18, ease: "none" },
            1.48,
          );
          timeline.to(
            shards,
            { autoAlpha: 0, duration: 0.18, ease: "none" },
            1.48,
          );
        }, hero);
      })
      .catch((error: unknown) => {
        if (disposed) {
          return;
        }

        console.error(
          "Hero assets failed to load; revealing the static poster instead.",
          error,
        );
        gsap.set(loader, { autoAlpha: 0 });
      });

    return () => {
      disposed = true;
      context?.revert();
    };
  }, []);

  return (
    <div
      className="site-loader"
      id="site-loader"
      ref={loaderRef}
      role="status"
      aria-label="Loading portfolio"
    >
      <Image
        className="site-loader__mark"
        src="/assets/brand/loader-logo.svg"
        alt=""
        width={1000}
        height={1000}
        priority
      />
    </div>
  );
}
