"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Compass, MapPin } from "lucide-react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import type { Retreat } from "../lib/retreats";

gsap.registerPlugin(ScrollTrigger);

type RetreatStoryScenesProps = {
  retreat: Retreat;
};

type ThumbnailRailProps = {
  images: string[];
  selectedImage: string;
  onSelect: (image: string) => void;
};

function ThumbnailRail({
  images,
  selectedImage,
  onSelect,
}: ThumbnailRailProps) {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <div className="relative px-8">
      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={Math.min(3, images.length)}
        slidesPerGroup={1}
        speed={650}
        resistanceRatio={0.75}
        watchOverflow={false}
        spaceBetween={12}
        className="detail-thumbnail-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={`${image}-${index}`}>
            <button
              type="button"
              className={`detail-scene-card group relative block h-28 w-full overflow-hidden text-left md:h-40 ${
                selectedImage === image ? "ring-2 ring-[#d7bb7c]" : ""
              }`}
              onClick={() => onSelect(image)}
              aria-label={`Select image ${index + 1}`}
            >
              <span
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              />

              <span className="absolute inset-0 bg-black/25" />

              <span className="image-copy-outline absolute bottom-3 left-3 text-xs tracking-[.18em] text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {images.length > 3 && (
        <>
          <button
            type="button"
            className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-[#d7bb7c]"
            onClick={() => {
              const swiper = swiperRef.current;

              if (!swiper) return;

              if (swiper.isBeginning) {
                swiper.slideTo(images.length - 3, 650);
              } else {
                swiper.slidePrev(650);
              }
            }}
            aria-label="Previous images"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-[#d7bb7c]"
            onClick={() => {
              const swiper = swiperRef.current;

              if (!swiper) return;

              if (swiper.isEnd) {
                swiper.slideTo(0, 650);
              } else {
                swiper.slideNext(650);
              }
            }}
            aria-label="Next images"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
}

export default function RetreatStoryScenes({
  retreat,
}: RetreatStoryScenesProps) {
  const root = useRef<HTMLDivElement>(null);

  const [mapLayer, setMapLayer] = useState<"satellite" | "terrain">("terrain");

  const accommodationImages = retreat.accommodationsGallery;
  const restaurantImages = retreat.restaurantGallery;

  const [accommodationImage, setAccommodationImage] = useState(
    accommodationImages[0] ?? retreat.heroImage,
  );

  const [restaurantImage, setRestaurantImage] = useState(
    restaurantImages[0] ?? retreat.heroImage,
  );

  const [galleryImage, setGalleryImage] = useState(
    retreat.gallery[0] ?? retreat.heroImage,
  );

  useLayoutEffect(() => {
    if (!root.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".detail-scene").forEach((scene) => {
        const background = scene.querySelector(".detail-scene-bg");
        const copy = scene.querySelector(".detail-scene-copy");

        if (scene.classList.contains("detail-directions-scene")) return;

        const sceneTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: scene,
            start: "top top",
            end: "+=150%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });
        sceneTimeline.fromTo(
          background,
          { scale: 1.12, opacity: 0.45 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            duration: 1,
          },
        );
        sceneTimeline.fromTo(
          copy,
          { y: 65, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 0.8,
          },
          0.12,
        );
        sceneTimeline.to(
          copy,
          { y: -30, opacity: 0, ease: "power2.in", duration: 0.55 },
          1.18,
        );
      });
    }, root);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={root}>
      {/* =========================================================
          ACCOMMODATIONS
      ========================================================= */}
      <section className="detail-scene relative h-screen overflow-hidden bg-[#17251d] text-white">
        <div
          className="detail-scene-bg absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${accommodationImage})`,
          }}
        />

        <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/75 via-black/35 to-transparent md:w-[80%]" />

        <div className="image-copy-outline detail-scene-copy absolute left-6 top-1/2 z-10 max-w-xl -translate-y-1/2 md:left-12">
          <p className="mb-6 text-xs tracking-[.28em] text-[#d7bb7c]">
            02 / ACCOMMODATIONS
          </p>

          <h2 className="text-5xl font-light leading-[.94] tracking-[-.045em] md:text-8xl">
            A softer place to land.
          </h2>

          <p className="mt-7 max-w-md text-base leading-7 text-white/75">
            {retreat.accommodations}
          </p>
        </div>

        <div className="detail-scene-rail absolute bottom-8 left-6 z-10 w-[calc(100%-3rem)] md:left-auto md:right-12 md:w-[min(46vw,620px)]">
          <ThumbnailRail
            images={accommodationImages}
            selectedImage={accommodationImage}
            onSelect={setAccommodationImage}
          />
        </div>
      </section>

      {/* =========================================================
          RESTAURANT
      ========================================================= */}
      <section className="detail-scene relative h-screen overflow-hidden bg-[#26372c] text-white">
        <div
          className="detail-scene-bg absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${restaurantImage})`,
          }}
        />

        <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/75 via-black/35 to-transparent md:w-[80%]" />

        <div className="image-copy-outline detail-scene-copy absolute left-6 top-1/2 z-10 max-w-xl -translate-y-1/2 md:left-12">
          <p className="mb-6 text-xs tracking-[.28em] text-[#d7bb7c]">
            03 / RESTAURANT
          </p>

          <h2 className="text-5xl font-light leading-[.94] tracking-[-.045em] md:text-8xl">
            Taste the place.
          </h2>

          <p className="mt-7 max-w-md text-base leading-7 text-white/75">
            {retreat.restaurant}
          </p>
        </div>

        <div className="detail-scene-rail absolute bottom-8 left-6 z-10 w-[calc(100%-3rem)] md:left-auto md:right-12 md:w-[min(46vw,620px)]">
          <ThumbnailRail
            images={restaurantImages}
            selectedImage={restaurantImage}
            onSelect={setRestaurantImage}
          />
        </div>
      </section>

      {/* =========================================================
          GALLERY
      ========================================================= */}
      <section className="detail-scene relative h-screen overflow-hidden bg-[#202d24] text-white">
        <div
          className="detail-scene-bg absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${galleryImage})`,
          }}
        />

        <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/75 via-black/35 to-transparent md:w-[80%]" />

        <div className="image-copy-outline detail-scene-copy absolute left-6 top-1/2 z-10 max-w-xl -translate-y-1/2 md:left-12">
          <p className="mb-6 text-xs tracking-[.28em] text-[#d7bb7c]">
            04 / GALLERY
          </p>

          <h2 className="text-5xl font-light leading-[.94] tracking-[-.045em] md:text-8xl">
            Remember every detail.
          </h2>

          <p className="mt-7 max-w-md text-base leading-7 text-white/75">
            Nature, space, and small moments. Keep the best memories of the days
            you spend here.
          </p>
        </div>

        <div className="detail-scene-rail absolute bottom-8 left-6 z-10 w-[calc(100%-3rem)] md:left-auto md:right-12 md:w-[min(46vw,620px)]">
          <ThumbnailRail
            images={retreat.gallery}
            selectedImage={galleryImage}
            onSelect={setGalleryImage}
          />
        </div>
      </section>

      {/* =========================================================
          HOW TO GET THERE
      ========================================================= */}
      <section className="detail-scene detail-directions-scene relative min-h-screen overflow-hidden bg-[#e0e4d9] text-[#17251d]">
        <div className="absolute right-[-2rem] top-[-2rem] select-none text-[18rem] font-light leading-none text-[#d4d9cb]">
          05
        </div>

        <div className="detail-scene-copy relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 md:px-12">
          <p className="mb-6 flex items-center gap-3 text-xs tracking-[.28em] text-[#718273]">
            <MapPin size={16} /> 05 / HOW TO GET THERE
          </p>

          <h2 className="max-w-5xl text-5xl font-light leading-[.94] tracking-[-.045em] md:text-8xl">
            The road is part of the story.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#5e675f]">
            {retreat.gettingThere}
          </p>

          <div className="mt-14 flex items-center gap-4 border-t border-[#bfc6b8] pt-5 text-sm text-[#687068]">
            <Compass size={18} /> {retreat.location}
          </div>

          <div className="relative mt-8 h-96 w-full max-w-full overflow-hidden border border-[#bfc6b8] bg-[#d1d5cc] md:h-96">
            <iframe
              title={`How to get there: ${retreat.title}`}
              src={retreat.mapUrl}
              loading="lazy"
              className="absolute inset-0 h-full w-full border-0"
            />

            <div className="pointer-events-none absolute left-2 top-2 bg-[#f1ede3]/95 px-3 py-2 text-[10px] uppercase tracking-[.18em] text-[#17251d] shadow-lg">
              How to get there
            </div>

            <div className="absolute right-2 top-2 flex gap-1 bg-[#f1ede3]/95 p-1 shadow-lg">
              {[
                ["satellite", "Satellite"],
                ["terrain", "Terrain"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setMapLayer(id as "satellite" | "terrain")}
                  className={`px-3 py-2 text-[9px] uppercase tracking-[.14em] transition-colors ${
                    mapLayer === id
                      ? "bg-[#17251d] text-[#f1ede3]"
                      : "text-[#687068] hover:text-[#17251d]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
