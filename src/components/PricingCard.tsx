import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  country: string;
  duration: string;
  price: string;
  currency: string;
  features: string[];
  popular?: boolean;
  image?: string;
}

const PricingCard = ({ country, duration, price, currency, features, popular, image }: PricingCardProps) => {
  const whatsappMessage = encodeURIComponent(`أريد شراء باقة ${country} - ${duration} بسعر ${price} ${currency}`);
  
  return (
    <Card className={`relative overflow-hidden transition-smooth hover:scale-105 ${popular ? 'border-accent border-2 glow-gold' : ''}`}>
      {popular && (
        <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
          الأكثر طلباً
        </div>
      )}
      
      {image && (
        <div className="aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={`${country} eSIM`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-xl">{country}</CardTitle>
          <div className="text-2xl font-bold gradient-gold bg-clip-text text-transparent whitespace-nowrap">
            {price} {currency}
          </div>
        </div>
        <CardDescription className="text-base">{duration}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          variant="whatsapp" 
          className="w-full"
          asChild
        >
          <a href={`https://wa.me/201060103226?text=${whatsappMessage}`}>
            اطلب الآن
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
