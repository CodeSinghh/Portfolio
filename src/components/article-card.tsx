import Image from "next/image";
import type { Article } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Link href={`/article/${article.id}`}>
      <Card className="group h-full border-2 border-foreground/10 transition-all duration-300 hover:border-foreground/20 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:-translate-y-1">
        <CardHeader className="space-y-2">
          <CardTitle className="font-headline text-2xl md:text-3xl leading-tight group-hover:text-accent transition-colors duration-300">
            {article.headline}
          </CardTitle>
          <CardDescription className="text-muted-foreground text-sm font-serif">
            {article.byline}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-sm">
            <Image
              src={article.image}
              alt={article.headline}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              data-ai-hint={article.dataAiHint}
            />
          </div>
          <p className="font-serif text-base/relaxed line-clamp-4 text-muted-foreground/90">
            {article.body}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArticleCard;
