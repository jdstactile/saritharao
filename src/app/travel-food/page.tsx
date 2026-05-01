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

const categorySlugs = [
  "food",
  "places",
  "south-asia",
  "india",
  "europe",
  "travel-food",
];

export default function TravelFoodPage() {
  const filtered = allPosts.filter((p) =>
    p.categories.some((c) => categorySlugs.includes(c.slug))
  );

  return (
    <main>
      <CategoryHeader title="Travel & Food" />

      <div className="mx-auto max-w-7xl px-6 py-16">
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
      </div>
    </main>
  );
}
