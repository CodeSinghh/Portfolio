export function SkillCategory({ 
  title, 
  skills 
}: { 
  title: string;
  skills: { name: string; highlight?: boolean }[];
}) {
  return (
    <div className="space-y-2">
      <h3 className="font-headline text-xl font-semibold">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className={`px-3 py-1 rounded-full font-serif text-sm
              ${skill.highlight 
                ? 'bg-amber-100/20 text-amber-900 border border-amber-200/30' 
                : 'bg-muted/50 text-muted-foreground'}`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}