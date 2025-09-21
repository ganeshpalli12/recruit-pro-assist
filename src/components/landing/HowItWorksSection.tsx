import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, Bot, TrendingUp } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Link,
      title: "Connect LinkedIn + CRM",
      description: "Securely connect your LinkedIn account and existing CRM in under 5 minutes. Our platform integrates with all major systems."
    },
    {
      number: "02", 
      icon: Bot,
      title: "Let AI find & engage prospects",
      description: "Our AI identifies perfect prospects, crafts personalized messages, and manages multi-step follow-up sequences automatically."
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Book more client calls, faster",
      description: "Watch your response rates soar and your pipeline fill with qualified prospects while your team focuses on closing deals."
    }
  ];

  return (
    <section className="section-padding bg-subtle-gradient">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in minutes and see results in days. Our simple 3-step process gets you up and running fast.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="group hover-lift animate-fade-in border-0 shadow-soft hover:shadow-medium h-full">
                  <CardHeader className="text-center">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div className="mb-2 text-sm font-semibold text-primary">{step.number}</div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2 z-10"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;