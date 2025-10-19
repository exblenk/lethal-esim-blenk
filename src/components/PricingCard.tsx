import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  country: string;
  duration: string;
  price: string;
  oldPrice?: string;
  currency: string;
  features: string[];
  popular?: boolean;
  image?: string;
  isActive?: boolean;
}

const PricingCard = ({ country, duration, price, oldPrice, currency, features, popular, image, isActive }: PricingCardProps) => {
  const whatsappMessage = encodeURIComponent(`أريد شراء باقة ${country} - ${duration} بسعر ${price} ${currency}`);
  
  return (
    <Card 
      className={`relative overflow-hidden h-full transition-all duration-300 rounded-xl ${
        isActive ? 'shadow-elegant scale-100' : 'shadow-md'
      } ${popular ? 'border-accent border-2 glow-gold' : ''}`}
      style={{ 
        WebkitTapHighlightColor: 'transparent',
        outline: 'none'
      }}
    >
      {popular && (
        <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-2.5 py-1 rounded-full text-xs font-bold z-10">
          الأكثر طلباً
        </div>
      )}
      
      {image && (
        <div className="overflow-hidden rounded-t-xl">
          <img 
            src={image} 
            alt={`${country} eSIM`}
            className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      )}
      
      <CardHeader className="pb-4 space-y-3">
        <div className="text-center">
          <CardTitle className="text-xl md:text-2xl mb-2">{country}</CardTitle>
          <CardDescription className="text-base md:text-lg font-medium">{duration}</CardDescription>
        </div>
        <div className="text-center">
          {oldPrice && (
            <div className="text-sm text-muted-foreground line-through mb-1">
              {oldPrice} {currency}
            </div>
          )}
          <div className="text-3xl md:text-4xl font-bold gradient-gold bg-clip-text text-transparent">
            {price} {currency}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4 pt-0">
        <ul className="space-y-2.5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <Check className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-sm md:text-base">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          variant="whatsapp" 
          className="w-full text-base md:text-lg h-12 md:h-14 font-semibold"
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
