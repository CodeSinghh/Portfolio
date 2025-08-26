export function ProjectCard({
  title,
  description,
  tags
}: {
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="group p-6 border border-foreground/10 rounded-lg hover:border-accent/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]">
      <h3 className="font-headline text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="font-serif text-muted-foreground mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-accent/10 text-accent rounded text-sm font-serif"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}