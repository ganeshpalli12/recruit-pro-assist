import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Director of Sales",
      company: "TechTalent Recruiters",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      quote: "Our response rates increased by 300% in the first month. The AI personalization is incredible - prospects actually think we wrote each message individually."
    },
    {
      name: "Michael Chen", 
      role: "Founder",
      company: "Elite IT Staffing",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      quote: "We've cut our prospecting time by 80% while doubling our pipeline. This platform has completely transformed how we approach LinkedIn outreach."
    },
    {
      name: "Lisa Rodriguez",
      role: "VP Sales",
      company: "Global Recruitment Partners",
      avatar: "/api/placeholder/64/64", 
      rating: 5,
      quote: "The automated follow-up sequences are a game-changer. We never miss an opportunity now, and our conversion rates have never been higher."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Top Recruitment Agencies
          </h2>
          <p className="text-lg text-muted-foreground">
            See how leading agencies are scaling their sales with AI-powered LinkedIn automation.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover-lift animate-fade-in border-0 shadow-soft hover:shadow-medium"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="mb-6 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span>4.9/5 from 500+ agencies</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;