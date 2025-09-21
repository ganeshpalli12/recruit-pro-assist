import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-hero-gradient text-white">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Scale Your Recruitment Sales
            </h2>
            <p className="mb-8 text-lg opacity-90 sm:text-xl">
              Join 500+ agencies using AI to automate LinkedIn outreach, 
              increase response rates, and close more deals.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="group text-lg px-8 py-3 hover-glow"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-3 border-white/20 text-white hover:bg-white/10 hover-lift"
              >
                Request Early Access
              </Button>
            </div>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <div className="flex items-center gap-2 text-sm opacity-80">
                <div className="h-2 w-2 rounded-full bg-accent"></div>
                <span>30-day free trial</span>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <div className="h-2 w-2 rounded-full bg-accent"></div>
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <div className="h-2 w-2 rounded-full bg-accent"></div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;