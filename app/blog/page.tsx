import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Image from "next/image";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
              {post.image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{post.summary}</p>
                <span className="text-xs text-gray-400">{post.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}