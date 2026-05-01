"use client";

import { useState } from "react";

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function ImageWithLoader({
  src,
  alt,
  className = "",
  style,
}: ImageWithLoaderProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative" style={style}>
      {/* Shimmer skeleton */}
      {!loaded && !error && (
        <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
          <div className="shimmer-skeleton h-full w-full" />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        loading="lazy"
      />
    </div>
  );
}
