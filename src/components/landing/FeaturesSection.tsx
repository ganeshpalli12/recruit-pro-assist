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
    <section className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center mb-20">
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl bg-text-gradient bg-clip-text text-transparent">
            Everything You Need to Scale Sales
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive AI-powered tools that transform how recruitment agencies handle LinkedIn outreach.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden hover-lift animate-fade-in bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                <CardHeader className="pb-4">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 group-hover:bg-primary/80 transition-colors"></div>
                        <span className="leading-relaxed">{benefit}</span>
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