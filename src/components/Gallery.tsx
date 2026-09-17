"use client";

import { useState } from "react";

type Props = {
  images: readonly string[];
  alt: string;
};

export function Gallery({ images, alt }: Props) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {images.map((src) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(src)}
            className="group overflow-hidden rounded-2xl bg-ink/5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="aspect-square h-full w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </button>
        ))}
      </div>
      {active ? (
        <button
          type="button"
          className="fixed inset-0 z-50 flex items-center justify-center bg-night/90 p-4"
          onClick={() => setActive(null)}
          aria-label="Bild schließen"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={active} alt={alt} className="max-h-[92vh] max-w-[92vw] rounded-xl object-contain" />
        </button>
      ) : null}
    </>
  );
}
