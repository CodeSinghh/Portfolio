import { Separator } from "@/components/ui/separator";

export function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="font-headline text-3xl font-bold mb-8 flex items-center group">
      <span className="mr-4 group-hover:text-accent transition-colors duration-300">
        {title}
      </span>
      <Separator className="flex-grow opacity-30" />
    </h2>
  );
}