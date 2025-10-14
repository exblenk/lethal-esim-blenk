import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, MessageCircle } from "lucide-react";
import menaImage from "@/assets/mena-map.jpg";

const CountryBundles = () => {
  const countries = [
    "🇦🇪 الإمارات",
    "🇪🇬 مصر",
    "🇰🇼 الكويت",
    "🇶🇦 قطر",
    "🇧🇭 البحرين",
    "🇴🇲 عمان",
    "🇯🇴 الأردن",
    "🇱🇧 لبنان",
    "🇮🇶 العراق",
    "🇲🇦 المغرب",
    "🇹🇳 تونس",
    "🇩🇿 الجزائر"
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <Globe className="w-16 h-16 mx-auto mb-4 text-accent animate-float" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            باقات <span className="gradient-gold bg-clip-text text-transparent">الدول العربية</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نغطي جميع دول الشرق الأوسط وشمال أفريقيا
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <Card className="overflow-hidden animate-scale-in">
            <img 
              src={menaImage} 
              alt="MENA Countries Map"
              className="w-full h-full object-cover min-h-[400px]"
              loading="lazy"
            />
          </Card>

          <div className="space-y-6 animate-fade-in">
            <Card className="gradient-primary p-6">
              <CardContent className="space-y-6 p-0">
                <div>
                  <h3 className="text-2xl font-bold mb-4">الدول المتاحة:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {countries.map((country, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-2 text-lg hover:text-accent transition-smooth"
                      >
                        <span className="text-2xl">{country.split(' ')[0]}</span>
                        <span>{country.split(' ')[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="text-lg mb-4 font-semibold">
                    🌟 جيجابايت غير محدودة
                  </p>
                  <p className="text-muted-foreground mb-6">
                    أسعار مخصصة لكل دولة. تواصل معنا عبر الواتساب لمعرفة التفاصيل والباقات المتاحة
                  </p>
                  
                  <Button 
                    variant="whatsapp" 
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <a href="https://wa.me/201060103226?text=أريد الاستفسار عن باقات دول الشرق الأوسط">
                      <MessageCircle className="ml-2" />
                      اسأل عن دولتك
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryBundles;
