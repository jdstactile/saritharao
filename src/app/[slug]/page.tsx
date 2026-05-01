import Link from "next/link";
import ImageWithLoader from "@/components/ImageWithLoader";
import ExternalRedirect from "@/components/ExternalRedirect";
import externalLinks from "@/data/external-links";
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

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold text-primary">
            Post Not Found
          </h1>
          <Link href="/" className="text-accent hover:underline">
            Return home
          </Link>
        </div>
      </main>
    );
  }

  // If this post has an external link, redirect to it
  const externalUrl = externalLinks[slug];
  if (externalUrl) {
    return <ExternalRedirect url={externalUrl} />;
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      {/* Categories */}
      {post.categories.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {post.categories.map((cat) => (
            <span
              key={cat.slug}
              className="rounded-full bg-accent/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-accent"
            >
              {cat.name}
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <h1 className="mb-4 font-heading text-4xl font-bold leading-tight text-primary md:text-5xl">
        {post.title}
      </h1>

      {/* Date */}
      <p className="mb-10 text-sm text-gray-500">{formatDate(post.date)}</p>

      {/* Featured image */}
      {post.featuredImageUrl && (
        <ImageWithLoader
          src={post.featuredImageUrl}
          alt={post.title}
          className="mb-10 w-full rounded-lg"
        />
      )}

      {/* Content */}
      <div
        className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-primary prose-a:text-accent prose-img:rounded-lg"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
}
