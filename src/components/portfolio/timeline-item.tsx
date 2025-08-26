interface TimelineItemProps {
  title: string;
  subtitle?: string;
  date?: string;
  description: string | string[];
}

export function TimelineItem({ title, subtitle, date, description }: TimelineItemProps) {
  return (
    <div className="relative pl-8 group">
      <div className="absolute left-0 top-2 w-2 h-2 bg-accent rounded-full transition-all duration-300 group-hover:scale-150" />
      <div className="space-y-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-headline text-xl font-semibold">{title}</h3>
            {subtitle && (
              <p className="text-muted-foreground">{subtitle}</p>
            )}
          </div>
          {date && (
            <span className="text-sm text-muted-foreground font-serif">{date}</span>
          )}
        </div>
        {Array.isArray(description) ? (
          <ul className="list-disc list-inside space-y-1 text-muted-foreground/90">
            {description.map((item, index) => (
              <li key={index} className="font-serif">{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground/90 font-serif">{description}</p>
        )}
      </div>
    </div>
  );
}