export function EducationItem({ 
  institution, 
  degree, 
  location, 
  duration, 
  courses 
}: { 
  institution: string;
  degree: string;
  location: string;
  duration: string;
  courses?: string;
}) {
  return (
    <div className="group space-y-2 hover:bg-accent/5 p-4 rounded-lg transition-colors duration-300">
      <h3 className="font-headline text-2xl font-semibold">{institution}</h3>
      <p className="font-serif text-lg text-accent">{degree}</p>
      <div className="flex justify-between text-muted-foreground font-serif">
        <span>{location}</span>
        <span>{duration}</span>
      </div>
      {courses && (
        <p className="text-muted-foreground/80 font-serif mt-2">
          Courses: {courses}
        </p>
      )}
    </div>
  );
}