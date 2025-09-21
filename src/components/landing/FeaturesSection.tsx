import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, BarChart3, Network, Zap, Settings, Target } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Target,
      title: "Smart Prospecting",
      description: "AI-powered search to find the exact hiring managers and decision makers for your open roles.",
      benefits: ["Advanced Boolean search", "Company mapping", "Contact verification"]
    },
    {
      icon: Network,
      title: "Personalized Outreach at Scale",
      description: "Send hundreds of personalized messages that feel one-to-one, not mass marketing.",
      benefits: ["Dynamic personalization", "Industry-specific templates", "A/B testing"]
    },
    {
      icon: Zap,
      title: "Automated Follow-ups",
      description: "Multi-step sequences that adapt based on prospect behavior and engagement.",
      benefits: ["Smart timing", "Behavior triggers", "Response detection"]
    },
    {
      icon: Bot,
      title: "AI Inbox Assistant",
      description: "Automatically categorize replies and get suggested responses for every conversation.",
      benefits: ["Sentiment analysis", "Intent detection", "Response templates"]
    },
    {
      icon: Settings,
      title: "CRM & Workflow Integrations",
      description: "Seamlessly sync with your existing tools and workflows for maximum efficiency.",
      benefits: ["2-way sync", "Custom webhooks", "API access"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Optimization",
      description: "Track performance, identify what works, and continuously improve your outreach.",
      benefits: ["Response rates", "Pipeline tracking", "ROI metrics"]
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need to Scale Sales
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive AI-powered tools that transform how recruitment agencies handle LinkedIn outreach.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="group hover-lift animate-fade-in border-0 shadow-soft hover:shadow-medium"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-accent"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;