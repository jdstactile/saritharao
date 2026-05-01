import CategoryHeader from "@/components/CategoryHeader";
import PostCard from "@/components/PostCard";
import posts from "@/data/posts.json";

interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  content: string;
  excerpt: string;
  categories: { slug: string; name: string }[];
  featuredImageUrl: string | null;
}

const allPosts = posts as Post[];

const subcategories = [
  {
    title: "Contemporary Art & Illustration",
    slug: "contemporary-art-and-illustration",
  },
  { title: "Photography", slug: "photography" },
  { title: "Folk Art, Crafts & Weaves", slug: "folk-art-craft-weaves" },
  { title: "SMS", slug: "sms" },
];

export default function ArtDesignCraftsPage() {
  return (
    <main>
      <CategoryHeader title="Art, Design and Crafts" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        {subcategories.map((sub) => {
          const filtered = allPosts.filter((p) =>
            p.categories.some((c) => c.slug === sub.slug)
          );
          if (filtered.length === 0) return null;
          return (
            <section key={sub.slug} className="mb-16 last:mb-0">
              <h2 className="mb-10 text-center font-heading text-[32px] font-bold text-primary">
                {sub.title}
              </h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((post) => (
                  <PostCard
                    key={post.id}
                    slug={post.slug}
                    title={post.title}
                    featuredImageUrl={post.featuredImageUrl}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
