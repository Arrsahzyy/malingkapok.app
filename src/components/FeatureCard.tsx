import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="group h-full hover-lift transition-smooth border-border/50 hover:border-primary/30">
      <CardContent className="p-6 space-y-4 flex flex-col h-full">
        <div className="inline-flex p-3 rounded-xl bg-gradient-brand w-fit transition-smooth group-hover:scale-110 group-hover:shadow-lg">
          <Icon className="w-6 h-6 text-white transition-transform group-hover:rotate-12" />
        </div>
        <h3 className="font-heading font-semibold text-lg transition-colors group-hover:text-primary">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
