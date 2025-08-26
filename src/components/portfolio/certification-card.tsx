export function CertificationCard({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="group p-6 border border-foreground/10 rounded-lg hover:border-accent/20 transition-all duration-300">
      <h3 className="font-headline text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="font-serif text-muted-foreground">
        {description}
      </p>
    </div>
  );
}