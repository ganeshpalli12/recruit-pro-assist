import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Bot, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "How it Works", href: "#how-it-works" },
      { name: "Pricing", href: "#pricing" },
      { name: "API", href: "#api" }
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Contact", href: "#contact" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "GDPR", href: "#gdpr" }
    ]
  };

  return (
    <footer className="bg-background border-t">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Brand & Newsletter */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Bot className="h-5 w-5" />
                </div>
                <span className="text-xl font-bold">RecruitAI</span>
              </div>
              <p className="mb-6 text-muted-foreground max-w-md">
                AI-powered LinkedIn sales automation platform designed specifically for recruitment agencies.
              </p>
              <div className="space-y-4">
                <h3 className="font-semibold">Stay updated</h3>
                <div className="flex gap-2 max-w-md">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1"
                  />
                  <Button size="sm" className="px-6">
                    <Mail className="h-4 w-4 mr-2" />
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        <div className="py-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © 2024 RecruitAI. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;