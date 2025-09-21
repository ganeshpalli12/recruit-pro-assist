import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Bot className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold">HireFlow</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button size="sm" className="bg-hero-gradient hover:opacity-90">
              Book Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;