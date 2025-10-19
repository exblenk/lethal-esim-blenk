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
      className={`relative overflow-hidden h-full transition-all duration-300 rounded-xl antialiased ${
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
        <div className="overflow-hidden rounded-t-lg sm:rounded-t-xl aspect-[16/10] sm:aspect-[4/3] max-h-44 sm:max-h-none">
          <img 
            src={image} 
            alt={`${country} eSIM`}
            className="block w-full h-full object-cover select-none pointer-events-none"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            draggable={false}
          />
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="text-lg md:text-xl leading-snug">{country}</CardTitle>
          <div className="flex flex-col items-end">
            {oldPrice && (
              <div className="text-xs md:text-sm text-muted-foreground line-through">
                {oldPrice} {currency}
              </div>
            )}
            <div className="text-xl md:text-2xl font-bold gradient-gold bg-clip-text text-transparent">
              {price} {currency}
            </div>
          </div>
        </div>
        <CardDescription className="text-sm md:text-base leading-relaxed">{duration}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-3 pt-0">
        <ul className="space-y-1.5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="w-3 h-3 md:w-3.5 md:h-3.5 text-accent mt-0.5 flex-shrink-0" />
              <span className="text-xs md:text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          variant="whatsapp" 
          className="w-full text-sm md:text-base"
          asChild
        >
          <a href={`https://wa.me/201060103226?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
            اطلب الآن
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
