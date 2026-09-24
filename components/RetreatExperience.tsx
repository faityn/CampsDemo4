"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, CalendarDays, MapPin, Phone, Sparkles } from "lucide-react";
import { retreats } from "../lib/retreats";

gsap.registerPlugin(ScrollTrigger);

export default function RetreatExperience() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-copy > *", {
        y: 35,
        opacity: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".scene").forEach((scene) => {
        const image = scene.querySelector(".scene-image");
        const copy = scene.querySelector(".scene-copy");
        gsap
          .timeline({
            scrollTrigger: {
              trigger: scene,
              start: "top top",
              end: "+=150%",
              scrub: 1,
              pin: true,
              anticipatePin: 1,
            },
          })
          .fromTo(
            image,
            { scale: 1.12, opacity: 0.45 },
            { scale: 1, opacity: 1, ease: "none", duration: 1 },
          )
          .fromTo(
            copy,
            { y: 65, opacity: 0 },
            { y: 0, opacity: 1, ease: "power2.out", duration: 0.8 },
            0.12,
          )
          .to(
            copy,
            { y: -30, opacity: 0, ease: "power2.in", duration: 0.55 },
            1.15,
          );
      });

      gsap.from(".feature", {
        scrollTrigger: { trigger: ".features", start: "top 75%" },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.14,
        ease: "power3.out",
      });

      gsap.from(".booking-card", {
        scrollTrigger: { trigger: ".booking", start: "top 75%" },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={root} className="overflow-x-hidden">
      <div className="noise" />

      <section className="hero-image relative flex min-h-screen items-end text-white">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/65 via-black/25 to-transparent md:w-[84%]" />
        <nav className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-6 py-6 md:px-12">
          <div className="text-lg font-semibold tracking-[.18em]">
            HOYORZAGAL<span className="text-[#d7bb7c]">.</span>
          </div>
          {/* <div className="hidden gap-8 text-sm md:flex">
            <a href="#about" className="opacity-80 hover:opacity-100">
              About us
            </a>
            <a href="#stay" className="opacity-80 hover:opacity-100">
              Stay
            </a>
            <a href="#contact" className="opacity-80 hover:opacity-100">
              Contact
            </a>
          </div> */}
        </nav>

        <div className="image-copy-outline hero-copy relative z-10 w-full px-6 pb-16 md:px-12 md:pb-28">
          <p className="mb-5 flex items-center gap-2 text-xs tracking-[.28em] text-white/75">
            <Sparkles size={14} /> A different kind of luxury
          </p>
          <h1 className="max-w-5xl text-balance text-5xl font-light leading-[.96] tracking-[-.04em] md:text-8xl">
            Space to breathe. Time to stay.
          </h1>
          <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="max-w-md text-base leading-7 text-white/75">
              Discover remote landscapes, thoughtful hospitality and the quiet
              beauty of Mongolia.
            </p>
            <a
              href="#experience"
              className="group flex items-center gap-3 text-sm"
            >
              Scroll to begin your journey{" "}
              <ArrowDown
                className="transition-transform group-hover:translate-y-1"
                size={18}
              />
            </a>
          </div>
        </div>
      </section>

      <section id="experience" className="bg-[#18251d] text-white">
        {retreats.map((scene) => (
          <article
            className="scene relative h-screen overflow-hidden"
            key={scene.number}
          >
            <div
              className="scene-image absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${scene.heroImage})`,
              }}
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/70 via-black/30 to-transparent md:w-[80%]" />
            <div className="image-copy-outline scene-copy absolute left-6 top-1/2 z-10 max-w-2xl -translate-y-1/2 md:left-12">
              <div className="mb-7 flex items-center gap-4 text-xs tracking-[.3em] text-[#d7bb7c]">
                <span>{scene.number}</span>
                <span className="h-px w-10 bg-[#d7bb7c]/60" />
                <span>{scene.eyebrow}</span>
              </div>
              <h2 className="whitespace-pre-line text-5xl font-light leading-[.98] tracking-[-.04em] md:text-8xl">
                {scene.title}
              </h2>
              <p className="mt-7 max-w-md text-base leading-7 text-white/75">
                {scene.body}
              </p>
              <div className="mt-8 border-t border-white/20 pt-4">
                <Link
                  href={`/retreat/${scene.slug}`}
                  className="group inline-flex items-center gap-2 border-b border-[#d7bb7c]/70 pb-1 text-sm text-[#d7bb7c] transition-colors hover:border-white hover:text-white"
                >
                  Read more{" "}
                  <ArrowDown
                    className="-rotate-90 transition-transform group-hover:translate-x-1"
                    size={16}
                  />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* <section
        id="stay"
        className="features bg-[#f4f0e7] px-6 py-28 md:px-12 md:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs tracking-[.25em] text-[#718273]">
                WHY STAY WITH US?
              </p>
              <h2 className="text-5xl font-light tracking-[-.04em] md:text-7xl">
                Small details.
                <br />
                <i>A lasting feeling.</i>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#687068]">
              Everything is thoughtfully planned to make your stay feel easy.
            </p>
          </div>

          <div className="grid border-t border-[#c9c4b8] md:grid-cols-3">
            {[
              [
                "01",
                "Fresh air",
                "Mountain wind in the morning, starry skies at night.",
              ],
              [
                "02",
                "Warm and comfortable",
                "A warm ger, clean bed, and everything you need for comfort.",
              ],
              [
                "03",
                "Good food",
                "Warm meals and breakfast prepared to order.",
              ],
            ].map(([n, t, d]) => (
              <div
                className="feature border-b border-[#c9c4b8] py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
                key={n}
              >
                <span className="text-xs text-[#8b8e84]">{n}</span>
                <h3 className="mt-16 text-2xl">{t}</h3>
                <p className="mt-4 max-w-xs text-sm leading-7 text-[#687068]">
                  {d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section
        id="contact"
        className="booking bg-[#f4f0e7] px-6 py-28 md:px-12 md:py-36"
      >
        <div className="booking-card mx-auto max-w-5xl rounded-[2rem] bg-[#17251d] p-8 text-white md:p-14">
          <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-xs tracking-[.25em] text-[#d7bb7c]">
                YOUR STAY STARTS HERE
              </p>
              <h2 className="mt-5 text-5xl font-light tracking-[-.04em] md:text-7xl">
                Book
                <br />
                <i>your escape today.</i>
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <button className="flex items-center justify-center gap-3 rounded-full bg-[#d7bb7c] px-7 py-4 text-sm font-semibold text-[#17251d] transition-transform hover:scale-[1.03]">
                <Phone size={17} /> 0000-0000
              </button>
            </div>
          </div>
        </div>
      </section> */}

      <footer className="flex flex-col gap-5 bg-[#000000] px-6 py-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between md:px-12">
        {/* <span className="font-semibold tracking-[.15em] text-white">
          hoyorzagal.
        </span> */}
        <span>© 2026 HOYORZAGAL · Crafted for unforgettable journeys.</span>
      </footer>
    </main>
  );
}
