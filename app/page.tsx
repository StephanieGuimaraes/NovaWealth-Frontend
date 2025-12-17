export default function Home() {
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
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Artigo mais recente */}
        <article className="md:col-span-2 bg-white dark:bg-[#111827] rounded-2xl shadow-md h-64 flex items-center justify-center">
          <span className="text-gray-400">
            Imagem do artigo mais recente
          </span>
        </article>

        {/* Segundo artigo */}
        <article className="bg-white dark:bg-[#111827] rounded-2xl shadow-md h-56 flex items-center justify-center">
          <span className="text-gray-400">
            Segundo artigo
          </span>
        </article>

        {/* Terceiro artigo */}
        <article className="bg-white dark:bg-[#111827] rounded-2xl shadow-md h-56 flex items-center justify-center">
          <span className="text-gray-400">
            Terceiro artigo
          </span>
        </article>
      </section>

      {/* LISTA DE ARTIGOS */}
      <section className="space-y-8">
        {[1, 2].map((item) => (
          <article
            key={item}
            className="flex gap-6 items-start border-b border-gray-200 dark:border-gray-700 pb-8"
          >
            {/* Thumbnail */}
            <div className="w-32 h-32 bg-gray-300 dark:bg-gray-700 rounded-xl shrink-0" />

            {/* Conteúdo */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-[#F2F4F7]">
                Título
              </h2>

              <p className="text-gray-600 dark:text-[#D9DEE7]">
                As adoption grows, criminals intensify their attacks. Learn the main
                threats and how to stay safe.
              </p>
            </div>
          </article>
        ))}
      </section>

    </main>
  );
}
