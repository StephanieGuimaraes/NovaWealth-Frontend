import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { remark } from "remark";
import html from "remark-html";
import Image from "next/image";

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const processedContent = await remark()
    .use(html)
    .process(post.content);

  const contentHtml = processedContent.toString();
  console.log("Rendering post:", post);

  return (
    <article className="max-w-4xl mx-auto px-4 md:px-6 py-8">

      {/* Main Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-gray-900">
        {post.title}
      </h1>

      {/* Subtítulo/Summary */}
      <h2 className="text-lg md:text-xl lg:text-2xl text-gray-600 font-normal leading-relaxed mb-8 border-l-4 border-blue-500 pl-4">
        {post.summary}
      </h2>

      {/* Article metadata */}
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-8 text-sm text-gray-500">
        <span className="font-medium">By NovaWealth</span>
        <span className="hidden md:inline">•</span>
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })} at {new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true
          })}
        </time>
        <span className="hidden md:inline">•</span>
        <span>Updated recently</span>
      </div>

      {/* Main Image */}
      <div className="prose prose-lg max-w-none mb-8">
        {post.image && (
          <figure className="mb-8">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-auto rounded-lg"
              priority
            />
            <figcaption className="mt-2 text-sm text-gray-500 text-center">
              {post.title} — Photo: NovaWealth
            </figcaption>
          </figure>
        )}
        
        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none
                    prose-headings:font-semibold prose-headings:text-gray-900
                    prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3

                    prose-p:text-gray-800 prose-p:leading-8 prose-p:my-6
                    prose-strong:text-gray-900
                    
                    prose-ul:list-disc prose-ul:pl-6 prose-li:my-2
                    
                    prose-blockquote:border-l-4 prose-blockquote:border-blue-600 
                    prose-blockquote:pl-5 prose-blockquote:italic prose-blockquote:text-gray-900 
                    prose-blockquote:my-8

                    prose-img:rounded-lg prose-img:my-10

                    [&_ul_li::marker]:text-blue-600 [&_ul_li::marker]:text-xl"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </article>
  );
}

// Generate static paths
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}