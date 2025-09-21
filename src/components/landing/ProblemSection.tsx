import { Clock, MessageSquare, Search, Users } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Search,
      title: "Searching for hiring managers",
      description: "Hours spent manually searching LinkedIn for the right contacts"
    },
    {
      icon: MessageSquare,
      title: "Sending repetitive messages",
      description: "Copy-pasting the same outreach templates over and over"
    },
    {
      icon: Clock,
      title: "Following up manually",
      description: "Tracking and timing follow-ups across dozens of prospects"
    },
    {
      icon: Users,
      title: "Managing replies",
      description: "Juggling conversations across multiple platforms and prospects"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Recruiters Waste Hours on LinkedIn
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Your talented recruiters are stuck in repetitive tasks instead of building relationships and closing deals.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div 
                key={index}
                className="group text-center animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-destructive/10 text-destructive group-hover:bg-destructive/20 transition-colors">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{problem.title}</h3>
                <p className="text-sm text-muted-foreground">{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;