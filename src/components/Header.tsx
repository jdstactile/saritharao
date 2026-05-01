"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import posts from "@/data/posts.json";

interface SearchPost {
  title: string;
  slug: string;
  categories: { slug: string; name: string }[];
}

const allPosts = posts as SearchPost[];

const navItems = [
  { label: "PEOPLE", href: "/people" },
  { label: "FICTION", href: "/fiction" },
  { label: "CINEMA", href: "/cinema" },
  { label: "BOOKS", href: "/books" },
  { label: "TRAVEL & FOOD", href: "/travel-food" },
  { label: "ART, DESIGN & CRAFTS", href: "/art-design-and-crafts" },
  { label: "OTHERS", href: "/others" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const searchResults =
    searchQuery.trim().length >= 2
      ? allPosts
          .filter((p) =>
            p.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .slice(0, 8)
      : [];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setSearchOpen(false);
    setSearchQuery("");
  }, [pathname]);

  return (
    <header>
      {/* Top bar */}
      <div className="bg-[#5EB5D5]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <Link
            href="/about"
            className="text-sm font-bold uppercase tracking-wide text-white hover:opacity-80"
          >
            About Me
          </Link>
          <div className="relative" ref={searchRef}>
            <input
              type="text"
              placeholder="Search articles"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSearchOpen(true);
              }}
              onFocus={() => setSearchOpen(true)}
              className="w-40 border-b border-white/50 bg-transparent px-2 py-1 text-sm text-white placeholder-white/80 outline-none focus:border-white sm:w-56"
            />
            <svg
              className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            {/* Search results dropdown */}
            {searchOpen && searchQuery.trim().length >= 2 && (
              <div className="absolute right-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-lg bg-white shadow-xl sm:w-96">
                {searchResults.length > 0 ? (
                  <ul className="max-h-80 overflow-y-auto">
                    {searchResults.map((post) => (
                      <li key={post.slug}>
                        <Link
                          href={`/${post.slug}`}
                          onClick={() => {
                            setSearchOpen(false);
                            setSearchQuery("");
                          }}
                          className="flex flex-col gap-1 border-b border-gray-100 px-4 py-3 transition-colors hover:bg-gray-50"
                        >
                          <span className="text-sm font-medium text-[#164551] line-clamp-2">
                            {post.title}
                          </span>
                          {post.categories.length > 0 && (
                            <span className="text-xs text-[#04A5C2]">
                              {post.categories.map((c) => c.name).join(", ")}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-4 py-6 text-center text-sm text-gray-400">
                    No articles found
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          {/* Logo */}
          <div className="w-1/4 shrink-0">
            <Link href="/">
              <img
                src="https://saritharao.com/wp-content/uploads/2021/09/srr-logo-v3.png"
                alt="Saritha Rao Rayachoti"
                className="max-w-[70%]"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden flex-wrap items-center justify-end gap-x-5 gap-y-2 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                  pathname === item.href
                    ? "text-[#04A5C2]"
                    : "text-[#164551] hover:text-[#04A5C2]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger button (mobile) */}
          <button
            type="button"
            className="flex flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-[#164551] transition-transform ${
                mobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#164551] transition-opacity ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#164551] transition-transform ${
                mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <nav className="border-t border-gray-100 px-4 pb-4 lg:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 text-sm font-bold uppercase tracking-wide ${
                  pathname === item.href
                    ? "text-[#04A5C2]"
                    : "text-[#164551] hover:text-[#04A5C2]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
