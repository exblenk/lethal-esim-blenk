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
        <div className="aspect-[4/3] overflow-hidden rounded-t-xl">
          <img 
            src={image} 
            alt={`${country} eSIM`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-lg md:text-xl">{country}</CardTitle>
          <div className="flex flex-col items-end">
            {oldPrice && (
              <div className="text-xs md:text-sm text-muted-foreground line-through">
                {oldPrice} {currency}
              </div>
            )}
            <div className="text-xl md:text-2xl font-bold gradient-gold bg-clip-text text-transparent whitespace-nowrap">
              {price} {currency}
            </div>
          </div>
        </div>
        <CardDescription className="text-sm md:text-base">{duration}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-3 pt-0">
        <ul className="space-y-1.5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="w-3 h-3 md:w-3.5 md:h-3.5 text-accent mt-0.5 flex-shrink-0" />
              <span className="text-xs md:text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          variant="whatsapp" 
          className="w-full text-sm md:text-base"
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
