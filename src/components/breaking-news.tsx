import { breakingNews } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const BreakingNews = () => {
  return (
    <Card className="bg-card border-accent shadow-md">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-accent text-center tracking-wider">
          Breaking News
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {breakingNews.map((item, index) => (
            <li key={item.id}>
              <p className="font-body text-base leading-relaxed">{item.headline}</p>
              {index < breakingNews.length - 1 && <Separator className="my-4 bg-accent/30" />}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default BreakingNews;
