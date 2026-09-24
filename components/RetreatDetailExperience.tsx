"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import type { Retreat } from "../lib/retreats";
import RetreatStoryScenes from "./RetreatStoryScenes";

gsap.registerPlugin(ScrollTrigger);

type RetreatDetailExperienceProps = {
  retreat: Retreat;
};

export default function RetreatDetailExperience({
  retreat,
}: RetreatDetailExperienceProps) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".detail-hero-copy > *", {
        y: 35,
        opacity: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.to(".detail-hero-image", {
        yPercent: 16,
        ease: "none",
        scrollTrigger: {
          trigger: ".detail-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".detail-reveal").forEach((element) => {
        gsap.from(element, {
          y: 55,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 82%" },
        });
      });

      gsap.from(".detail-gallery-image", {
        scale: 1.16,
        ease: "none",
        scrollTrigger: {
          trigger: ".detail-gallery",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".detail-marquee-track", {
        xPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: ".detail-marquee",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={root}
      className="detail-page overflow-x-hidden bg-[#f1ede3] text-[#17251d]"
    >
      <div className="noise" />

      <section className="detail-hero relative flex min-h-screen items-end overflow-hidden bg-[#17251d] text-white">
        <div
          className="detail-hero-image absolute -inset-[8%] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(90deg,rgba(8,16,11,.78),rgba(8,16,11,.12) 72%),url(${retreat.heroImage})`,
          }}
        />

        <nav className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-6 py-7 md:px-12">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white"
          >
            <ArrowLeft size={17} /> Back
          </Link>
          {/* <span className="text-lg font-semibold tracking-[.18em]">
            ALTAI<span className="text-[#d7bb7c]">.</span>
          </span> */}
          <a
            href="tel:00000000"
            className="flex items-center gap-2 border-b border-white/50 pb-1 text-sm"
          >
            Book your stay <ArrowUpRight size={15} />
          </a>
        </nav>

        <div className="image-copy-outline detail-hero-copy relative z-10 w-full px-6 pb-14 md:px-12 md:pb-20">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.82fr_1fr] md:items-end">
            <div className="max-w-4xl md:min-w-[800px]">
              <p className="mb-6 flex items-center gap-3 text-xs tracking-[.28em] text-[#d7bb7c]">
                <span>{retreat.number}</span>
                <span className="h-px w-12 bg-[#d7bb7c]/70" />
                {retreat.eyebrow}
              </p>
              <h1 className="max-w-5xl text-5xl font-light leading-[.9] tracking-[-.055em] md:text-8xl">
                {retreat.title}
              </h1>
              <p className="no-outline mt-8 max-w-xl text-base leading-7 text-white/70">
                {retreat.body}
              </p>
            </div>
            <div className="flex flex-col gap-7 md:items-end md:pb-2">
              <a
                href="#stay"
                className="no-outline group flex items-center gap-3 text-sm text-white/80"
              >
                Scroll to explore
                <ArrowDown
                  className="transition-transform group-hover:translate-y-1"
                  size={18}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="stay"
        className="relative overflow-hidden bg-[#f1ede3] px-6 py-24 md:px-12 md:py-36"
      >
        <div className="absolute right-[-4rem] top-[-3rem] select-none text-[18rem] font-light leading-none text-[#e6dfd1]">
          01
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-16 md:grid-cols-[.7fr_1.3fr]">
          <div className="detail-reveal md:sticky md:top-10 md:self-start">
            <p className="text-xs tracking-[.28em] text-[#718273]">
              01 / THE STAY
            </p>
            <p className="mt-8 flex items-center gap-2 text-sm text-[#687068]">
              <MapPin size={16} /> {retreat.location}
            </p>
            <div className="mt-14 border-t border-[#c7c1b5] pt-4 text-xs tracking-[.2em] text-[#8b8e84]">
              A SLOWER WAY TO TRAVEL
            </div>
          </div>
          <div className="detail-reveal">
            <h2 className="max-w-4xl text-4xl font-light leading-[1.02] tracking-[-.045em] md:text-7xl">
              A place to pause, breathe, and let the landscape set the pace.
            </h2>
            <div className="mt-14 grid gap-5 border-t border-[#c7c1b5] pt-5 sm:grid-cols-3">
              {retreat.highlights.map((highlight, index) => (
                <div key={highlight}>
                  <span className="text-xs text-[#8b8e84]">0{index + 1}</span>
                  <p className="mt-8 max-w-[180px] text-lg">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RetreatStoryScenes retreat={retreat} />

      <footer className="flex flex-col gap-5 bg-[#000000] px-6 py-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between md:px-12">
        <Link
          href="/"
          className="font-semibold tracking-[.15em] text-white uppercase"
        >
          hoyorzagal.
        </Link>
        <span>© 2026 Hoyorzagal · Rest close to nature</span>
      </footer>
    </main>
  );
}
