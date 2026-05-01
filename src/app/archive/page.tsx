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

export default function ArchivePage() {
  const sorted = [...allPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main>
      <CategoryHeader title="Archive" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((post) => (
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
