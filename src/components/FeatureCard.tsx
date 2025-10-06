import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50">
      <CardContent className="p-6 space-y-4">
        <div className="inline-flex p-3 rounded-xl bg-gradient-brand">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="font-heading font-semibold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
