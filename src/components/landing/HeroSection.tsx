import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-subtle-gradient section-padding">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              AI Sales Assistant for{" "}
              <span className="text-gradient">Recruitment Agencies</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground sm:text-xl lg:text-2xl">
              Automate LinkedIn outreach, follow-ups, and relationship building — 
              so your recruiters can focus on closing deals and placements.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button 
                size="lg" 
                className="group bg-hero-gradient hover:opacity-90 hover-glow text-lg px-8 py-3"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-3 hover-lift"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="mt-16 animate-scale-in">
            <div className="relative mx-auto max-w-4xl">
              <div className="rounded-xl bg-card p-4 shadow-large">
                <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Play className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-muted-foreground">Platform Demo Video</p>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-hero-gradient opacity-20 blur-2xl -z-10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;