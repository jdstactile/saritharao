"use client";

import Link from "next/link";
import ImageWithLoader from "./ImageWithLoader";
import ScrollAnimate from "./ScrollAnimate";
import externalLinks from "@/data/external-links";
import { useToast } from "./Toast";

interface PostCategory {
  slug: string;
  name: string;
}

interface PostCardProps {
  slug: string;
  title: string;
  featuredImageUrl: string | null;
  categories?: PostCategory[];
  showCategories?: boolean;
}

/**
 * Picks a background color from the theme palette based on the slug,
 * so thumbnails look varied but consistent across reloads.
 */
const bgPalette = [
  "bg-[#164551]", // primary
  "bg-[#04A5C2]", // accent
  "bg-[#5EB5D5]", // light-blue
  "bg-[#1B5E6B]", // darker teal
  "bg-[#0E7490]", // mid teal
];

function hashSlug(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

/**
 * Strips column prefixes and long subtitles to keep just the article name.
 * "Literarily Speaking: Pinjar (2003) – A woman's place..." → "Pinjar (2003)"
 * "50 years of Chitralaya Gopu's Kasethan Kadavulada (1972) – An authoritarian..." → "50 years of Chitralaya Gopu's Kasethan Kadavulada (1972)"
 */
function extractArticleTitle(title: string): string {
  let cleaned = title;

  // Strip "Literarily Speaking:" or similar column prefixes
  cleaned = cleaned.replace(/^Literarily Speaking\s*[:–-]\s*/i, "");

  // Strip long subtitles after em-dash or hyphen separators
  cleaned = cleaned.replace(/\s*[–—]\s*.{20,}$/, "");
  cleaned = cleaned.replace(/\s+-\s+.{20,}$/, "");

  return cleaned.trim();
}

function TextThumbnail({ title, slug }: { title: string; slug: string }) {
  const bg = bgPalette[hashSlug(slug) % bgPalette.length];
  const displayTitle = extractArticleTitle(title);

  // Pick font size class based on title length so text fills the container
  let sizeClass = "text-2xl";
  if (displayTitle.length < 30) sizeClass = "text-3xl";
  else if (displayTitle.length < 60) sizeClass = "text-2xl";
  else if (displayTitle.length < 90) sizeClass = "text-xl";
  else sizeClass = "text-lg";

  return (
    <div
      className={`${bg} flex aspect-[16/10] w-full items-center justify-center rounded-lg p-6 shadow-sm transition-shadow duration-300 group-hover:shadow-lg`}
    >
      <p
        className={`${sizeClass} text-center font-light leading-snug text-white/90`}
        style={{ textWrap: "balance" } as React.CSSProperties}
      >
        {displayTitle}
      </p>
    </div>
  );
}

export default function PostCard({
  slug,
  title,
  featuredImageUrl,
  categories,
  showCategories = false,
}: PostCardProps) {
  const externalUrl = externalLinks[slug];
  const { show } = useToast();

  const thumbnail = externalUrl ? (
    <div className="overflow-hidden rounded-lg">
      <TextThumbnail title={title} slug={slug} />
    </div>
  ) : featuredImageUrl ? (
    <div className="overflow-hidden rounded-lg">
      <ImageWithLoader
        src={featuredImageUrl}
        alt={title}
        className="aspect-[16/10] w-full rounded-lg object-cover shadow-sm transition-shadow duration-300 group-hover:shadow-lg"
      />
    </div>
  ) : null;

  const cardContent = (
    <article className="flex h-full flex-col overflow-hidden">
      {thumbnail}
      <div className="flex flex-1 flex-col pt-4">
        {showCategories && categories && categories.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat.slug}
                className="rounded-full bg-accent/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-accent"
              >
                {cat.name}
              </span>
            ))}
          </div>
        )}
        <div className="flex items-start gap-1.5">
          <h3 className="font-heading text-base font-bold leading-snug text-primary transition-colors group-hover:text-accent">
            {title}
          </h3>
          {externalUrl && (
            <svg
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          )}
        </div>
      </div>
    </article>
  );

  if (externalUrl) {
    return (
      <ScrollAnimate>
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
          onClick={() => show("Article opened in a new tab")}
        >
          {cardContent}
        </a>
      </ScrollAnimate>
    );
  }

  return (
    <ScrollAnimate>
      <Link href={`/${slug}`} className="group block">
        {cardContent}
      </Link>
    </ScrollAnimate>
  );
}
