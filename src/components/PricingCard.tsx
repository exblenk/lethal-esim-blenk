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

const PricingCard = ({ country, duration, price, oldPrice, currency, features, popular, image }: PricingCardProps) => {
  const whatsappMessage = encodeURIComponent(`أريد شراء باقة ${country} - ${duration} بسعر ${price} ${currency}`);
  
  return (
    <Card 
      className={`relative overflow-hidden transition-all duration-300 rounded-xl shadow-md hover:shadow-elegant ${
        popular ? 'border-accent border-2 glow-gold' : ''
      }`}
    >
      {popular && (
        <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-2.5 py-1 rounded-full text-xs font-bold z-10">
          الأكثر طلباً
        </div>
      )}
      
      <div className="p-4 space-y-4">
        {/* الصورة */}
        {image && (
          <div className="w-full">
            <img 
              src={image} 
              alt={`${country} eSIM`}
              className="w-full h-[140px] object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        )}
        
        {/* المحتوى - تقسيم بين اليمين واليسار */}
        <div className="flex flex-row gap-4">
          {/* الميزات - على اليسار */}
          <div className="flex-1">
            <ul className="space-y-1.5">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* المعلومات الأساسية - على اليمين */}
          <div className="text-right space-y-1 min-w-[140px]">
            <div className="font-bold text-lg">{country}</div>
            <div className="text-muted-foreground text-sm">{duration}</div>
            {oldPrice && (
              <div className="text-sm text-muted-foreground line-through">
                {oldPrice} {currency}
              </div>
            )}
            <div className="text-2xl font-bold gradient-gold bg-clip-text text-transparent">
              {price} {currency}
            </div>
          </div>
        </div>
        
        {/* زر الطلب */}
        <Button 
          variant="whatsapp" 
          className="w-full text-sm h-10 font-semibold"
          asChild
        >
          <a href={`https://wa.me/201060103226?text=${whatsappMessage}`}>
            اطلب الآن
          </a>
        </Button>
      </div>
    </Card>
  );
};

export default PricingCard;
