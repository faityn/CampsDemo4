"use client";

import { useState } from "react";
import { Maximize2, X } from "lucide-react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type RetreatInfoGalleryProps = {
  label: string;
  description: string;
  image: string;
  images: string[];
  initialSlide: number;
};

export default function RetreatInfoGallery({
  label,
  description,
  image,
  images,
  initialSlide,
}: RetreatInfoGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="border-t border-white/20 py-8 md:py-10">
      <button
        type="button"
        className="group relative block h-64 w-full overflow-hidden text-left md:h-80"
        onClick={() => setIsOpen(true)}
        aria-label={`Open ${label} gallery`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        <span className="absolute bottom-5 left-5 flex items-center gap-2 text-xs tracking-[.22em] text-white">
          {label}
          <Maximize2 size={15} />
        </span>
      </button>
      <p className="mt-5 max-w-xl text-lg leading-8 text-white/75">
        {description}
      </p>

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#101812]/95 p-5 md:p-12"
          role="dialog"
          aria-modal="true"
          aria-label={`${label} gallery`}
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-[#17251d] md:right-10 md:top-8"
            onClick={() => setIsOpen(false)}
            aria-label="Close image"
          >
            <X size={20} />
          </button>
          <div
            className="w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="mb-4 text-xs tracking-[.22em] text-[#d7bb7c]">
              {label}
            </p>
            <Swiper
              key={`${label}-${initialSlide}`}
              modules={[A11y, Navigation, Pagination]}
              initialSlide={initialSlide}
              navigation
              loop
              pagination={{ clickable: true }}
              spaceBetween={18}
              className="retreat-modal-swiper h-[62vh] min-h-[320px]"
            >
              {images.map((slide, index) => (
                <SwiperSlide key={`${slide}-${index}`}>
                  <div
                    className="h-full w-full bg-contain bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${slide})` }}
                    role="img"
                    aria-label={`${label} image ${index + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </article>
  );
}
