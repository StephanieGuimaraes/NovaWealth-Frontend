import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <div className="space-y-6">
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="p-4 border rounded cursor-pointer hover:bg-gray-50">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-600">{post.summary}</p>
              <span className="text-xs text-gray-400">{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}