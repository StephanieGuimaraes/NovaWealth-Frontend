import { getAllPosts } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const posts = getAllPosts();
  
  // Ordenar posts por data (mais recente primeiro)
  const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  const [featuredPost, secondPost, thirdPost, ...otherPosts] = sortedPosts;
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 space-y-16">
      
      {/* HERO */}
      <section className="space-y-4">
        <h1 className="text-5xl font-bold leading-tight text-gray-900 dark:text-[#F2F4F7]">
          Build wealth with knowledge.
        </h1>

        <p className="text-lg text-gray-600 dark:text-[#D9DEE7] max-w-2xl">
          Insights on finance, software engineering, investing and long-term growth.
        </p>
      </section>

      {/* FEATURED GRID */}
      <section className="space-y-6">
        
        {/* Artigo mais recente - largura total */}
        {featuredPost && (
          <Link href={`/blog/${featuredPost.slug}`}>
            <article className="bg-white dark:bg-[#111827] rounded-2xl shadow-md h-64 overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative w-full h-full">
                {featuredPost.image && (
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {featuredPost.title}
                  </h2>
                </div>
              </div>
            </article>
          </Link>
        )}

        {/* Segundo e terceiro artigos - grid de 2 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Segundo artigo */}
          {secondPost && (
            <Link href={`/blog/${secondPost.slug}`}>
              <article className="bg-white dark:bg-[#111827] rounded-2xl shadow-md h-56 overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative w-full h-full">
                  {secondPost.image && (
                    <Image
                      src={secondPost.image}
                      alt={secondPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {secondPost.title}
                    </h3>
                    
                  </div>
                </div>
              </article>
            </Link>
          )}

          {/* Terceiro artigo */}
          {thirdPost && (
            <Link href={`/blog/${thirdPost.slug}`}>
              <article className="bg-white dark:bg-[#111827] rounded-2xl shadow-md h-56 overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative w-full h-full">
                  {thirdPost.image && (
                    <Image
                      src={thirdPost.image}
                      alt={thirdPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {thirdPost.title}
                    </h3>
                    
                  </div>
                </div>
              </article>
            </Link>
          )}
        </div>
      </section>

      {/* LISTA DE ARTIGOS */}
      <section className="space-y-8">
        {otherPosts.slice(0, 4).map((post) => (
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

        {/* Link para ver todos os artigos */}
        {sortedPosts.length > 3 && (
          <div className="text-center pt-4">
            <Link 
              href="/blog" 
              className="inline-flex items-center px-6 py-3 bg-[#0A1226] text-white rounded-lg hover:bg-[#12224f] transition-colors font-medium"
            >
              Ver todos os artigos
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </section>

    </main>
  );
}
