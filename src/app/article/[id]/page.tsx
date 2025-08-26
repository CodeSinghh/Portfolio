import { mainArticles } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = mainArticles.find((a) => a.id.toString() === params.id);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8">
        <Header />
        <article className="mt-12">
          <header className="mb-12 text-center max-w-4xl mx-auto">
            <h1 className="font-headline text-5xl md:text-6xl font-bold leading-tight mb-6">
              {article.headline}
            </h1>
            <p className="text-muted-foreground mt-4 text-lg font-headline">
              {article.byline}
            </p>
          </header>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full aspect-[16/9] mb-12">
              <Image
                src={article.image}
                alt={article.headline}
                fill
                className="object-contain"
                data-ai-hint={article.dataAiHint}
              />
            </div>
            
            <div className="space-y-8 font-headline">
              {article.sections.map((section, index) => {
                switch (section.type) {
                  case "introduction":
                    return (
                      <p key={index} className="text-xl/relaxed font-medium text-justify">
                        {section.content}
                      </p>
                    );
                  case "heading":
                    return (
                      <h2 key={index} className="text-3xl font-bold mt-12 mb-6">
                        {section.content}
                      </h2>
                    );
                  case "paragraph":
                    return (
                      <p key={index} className="text-lg/relaxed text-justify">
                        {section.content}
                      </p>
                    );
                  case "bullets":
                    return (
                      <ul key={index} className="space-y-3 list-disc pl-6">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-lg/relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
