import ArticleCard from "@/components/article-card";
import ArticlePreviewGenerator from "@/components/article-preview-generator";
import BreakingNews from "@/components/breaking-news";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { mainArticles } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8">
        <Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12">
          <section className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mainArticles.map((article, index) => (
                <div key={article.id} 
                     className="animate-in fade-in slide-in-from-bottom duration-700" 
                     style={{ animationDelay: `${index * 150}ms` }}>
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          </section>

          <aside className="lg:col-span-4 space-y-8 mt-8 lg:mt-0 animate-in fade-in slide-in-from-right duration-1000">
            <BreakingNews />
            <ArticlePreviewGenerator />
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
