import { Truck, Shield, Zap, CheckCircle } from "lucide-react";

const badges = [
  {
    icon: Truck,
    title: "Free Shipping",
    subtitle: "$50+ Orders"
  },
  {
    icon: Shield,
    title: "Premium Quality",
    subtitle: "Military-Grade Protection"
  },
  {
    icon: Zap,
    title: "Fast Production",
    subtitle: "5-7 Day Delivery"
  },
  {
    icon: CheckCircle,
    title: "100% Satisfaction",
    subtitle: "Money-Back Guarantee"
  }
];

const TrustBadges = () => {
  return (
    <section className="py-12 px-4 border-y border-border/40 bg-card/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center space-y-3 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-subtle flex items-center justify-center">
                <badge.icon className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold font-poppins text-base mb-1">
                  {badge.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {badge.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
