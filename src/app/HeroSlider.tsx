"use client";

import { useState, useEffect, useCallback } from "react";
import ImageWithLoader from "@/components/ImageWithLoader";

const slides = [
  {
    heading: "24 hours in Mysuru",
    desc: "Mysuru Palace to Kukkarahalli Kere, chow chow bath and filter coffee to baklava buns and kombucha...",
    bg: "https://saritharao.com/wp-content/uploads/2022/03/24hoursinmysuru.png",
    image:
      "https://saritharao.com/wp-content/uploads/2022/03/CleanShot-2022-03-05-at-20.24.40@2x.png",
    link: "https://natgeotraveller.in/24-hours-in-mysuru/",
  },
  {
    heading: "Chennai misses its beloved Mylapore street festival",
    desc: "The annual street festival celebrating music, art and culture has been cancelled...",
    bg: "https://saritharao.com/wp-content/uploads/2022/03/mylapore.png",
    image:
      "https://saritharao.com/wp-content/uploads/2022/03/ANI-20220107122-0_1643203630052_1643203698357.png",
    link: "https://lifestyle.livemint.com/fashion/trends/is-the-classic-men-s-suit-dead-zegna-has-an-answer-111646396819106.html",
  },
  {
    heading:
      "A Chennai apartment is a modern foreground to the greenery outside",
    desc: "A seamless mid-century modern inspired Chennai apartment by architect Faisal Manzur",
    bg: "https://saritharao.com/wp-content/uploads/2022/04/chennai-apartment-blur.png",
    image:
      "https://saritharao.com/wp-content/uploads/2022/04/chenna-apartment.png",
    link: "https://www.beautifulhomes.com/living/homes/a-chennai-apartment-is-a-modern-foreground-to-the-greenery-outside.html",
  },
  {
    heading: "46 years of 'Manmatha Leelai'",
    desc: "K. Balachander's 1976 Tamil movie set a benchmark with adult content in Tamil cinema",
    bg: "https://saritharao.com/wp-content/uploads/2022/04/manmatha-blur.png",
    image:
      "https://saritharao.com/wp-content/uploads/2022/04/manmatha.png",
    link: "https://www.ottplay.com/features/46-years-of-manmatha-leelai/45fbdb13f1744",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden">
      {/* Background images (all preloaded, only active one visible) */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: `url(${s.bg})`,
            filter: "blur(4px)",
            transform: "scale(1.05)",
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-12">
        <div className="grid w-full items-center gap-8 md:grid-cols-5">
          {/* Text - left side */}
          <div className="md:col-span-3">
            <h2 className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl">
              {slide.heading}
            </h2>
            <p className="mb-8 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
              {slide.desc}
            </p>
            <a
              href={slide.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#04A5C2] px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
            >
              Read Article
            </a>
          </div>

          {/* Preview image - right side */}
          <div className="hidden md:col-span-2 md:flex md:justify-end">
            <ImageWithLoader
              src={slide.image}
              alt={slide.heading}
              className="max-h-[400px] w-auto rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
        aria-label="Previous slide"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
        aria-label="Next slide"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              i === current
                ? "w-8 bg-[#04A5C2]"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
