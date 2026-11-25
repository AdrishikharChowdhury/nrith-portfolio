"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export function AnimatedWordmark({ label }: { label: string }) {
  const wordmarkRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const wordmark = wordmarkRef.current;

    if (!wordmark || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        wordmark,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" },
      );
    }, wordmark);

    return () => context.revert();
  }, []);

  return (
    <h1 className="wordmark" ref={wordmarkRef} aria-label={label}>
      <Image
        src="/assets/brand/logo-poster.png"
        alt=""
        width={1154}
        height={864}
        priority
      />
    </h1>
  );
}
