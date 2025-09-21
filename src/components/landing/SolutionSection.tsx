import { Bot, Brain, Target, Zap } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: Target,
      title: "Smart Prospecting",
      description: "AI identifies the perfect hiring managers and decision makers"
    },
    {
      icon: Brain,
      title: "Personalized Outreach",
      description: "Craft personalized messages that actually get responses"
    },
    {
      icon: Zap,
      title: "Automated Follow-ups",
      description: "Never miss a follow-up with intelligent timing and sequencing"
    },
    {
      icon: Bot,
      title: "AI Inbox Management",
      description: "Smart categorization and response suggestions for every reply"
    }
  ];

  return (
    <section className="section-padding bg-subtle-gradient">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Your <span className="text-gradient">AI-Powered</span> LinkedIn Assistant
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Smart prospecting, personalized outreach, automated follow-ups, and AI inbox management.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group text-center animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;