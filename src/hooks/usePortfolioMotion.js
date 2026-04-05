import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * 히어로 로드 인 + 섹션 스크롤 등장 (ScrollTrigger).
 * prefers-reduced-motion 이면 실행하지 않음.
 */
export function usePortfolioMotion() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const hero = root.querySelector("#About");
      if (hero) {
        const heroEls = hero.querySelectorAll(
          ".section-about-content > *, .section-about__content-image"
        );
        gsap.from(heroEls, {
          y: 36,
          opacity: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.08,
        });
      }

      const sections = root.querySelectorAll(".portfolio-section");
      sections.forEach((section) => {
        let targets;
        if (section.id === "Career") {
          targets = section.querySelectorAll(".section-lineage__inner > *");
        } else if (section.id === "Skill") {
          targets = section.querySelectorAll(".section-card__content > *");
        } else if (section.id === "Project") {
          const title = section.querySelector(".section-card__title");
          const cards = section.querySelectorAll(".section-card__content-grid > *");
          targets = [...(title ? [title] : []), ...cards];
        } else {
          targets = section.querySelectorAll(":scope > *");
        }

        if (!targets.length) return;

        gsap.from(targets, {
          scrollTrigger: {
            trigger: section,
            start: "top 86%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          duration: 0.72,
          stagger: 0.11,
          ease: "power3.out",
        });
      });
    }, root);

    return () => {
      ctx.revert();
    };
  }, []);

  return rootRef;
}
