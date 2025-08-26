export function ExperienceItem({
  title,
  company,
  type,
  duration,
  responsibilities
}: {
  title: string;
  company: string;
  type: string;
  duration: string;
  responsibilities: string[];
}) {
  return (
    <div className="group space-y-4 hover:bg-accent/5 p-4 rounded-lg transition-colors duration-300">
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-headline text-2xl font-semibold">{title}</h3>
            <p className="text-accent font-serif">
              {company} • <span className="text-muted-foreground">{type}</span>
            </p>
          </div>
          <span className="text-muted-foreground font-serif">{duration}</span>
        </div>
      </div>
      <ul className="space-y-2">
        {responsibilities.map((resp, index) => (
          <li key={index} className="relative pl-6 font-serif text-muted-foreground/90 before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full before:transform before:-translate-y-1/2">
            {resp}
          </li>
        ))}
      </ul>
    </div>
  );
}