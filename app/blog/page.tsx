import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Image from "next/image";

export default function BlogPage() {
  const posts = getAllPosts();
  
  // Ordenar posts por data (mais recente primeiro)
  const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="max-w-4xl mx-auto px-4 py-16 space-y-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-[#F2F4F7] mb-8">
        All Articles
      </h1>

      {/* LISTA DE ARTIGOS */}
      <section className="space-y-8">
        {sortedPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <article className="flex gap-6 items-start border-b border-gray-200 dark:border-gray-700 pb-8 group hover:bg-gray-50 dark:hover:bg-gray-800/50 -mx-4 px-4 py-4 rounded-lg transition-colors cursor-pointer">
              {/* Thumbnail */}
              <div className="w-32 h-32 shrink-0 rounded-xl overflow-hidden">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">No image</span>
                  </div>
                )}
              </div>

              {/* Conteúdo */}
              <div className="space-y-2">
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </time>

                <h2 className="text-xl font-semibold text-gray-900 dark:text-[#F2F4F7] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-600 dark:text-[#D9DEE7] line-clamp-2">
                  {post.summary}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}