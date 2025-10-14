import PricingCard from "./PricingCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import pricingBg from "@/assets/pricing-background.png";
import { countriesData } from "@/data/countryPlans";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Pricing = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // تصنيف الدول حسب المنطقة
  const regionGroups = useMemo(() => {
    const middleEast = countriesData.filter(c => 
      ["السعودية", "الإمارات", "مصر", "الكويت", "قطر", "البحرين", "عمان", "الأردن", "لبنان", "العراق"].includes(c.name)
    );
    const africa = countriesData.filter(c => 
      ["المغرب", "تونس", "الجزائر", "جنوب أفريقيا"].includes(c.name)
    );
    const europe = countriesData.filter(c => 
      ["بريطانيا", "فرنسا", "ألمانيا", "إيطاليا", "إسبانيا", "هولندا", "بلجيكا", "سويسرا", "اليونان", "البرتغال"].includes(c.name)
    );
    const asia = countriesData.filter(c => 
      ["تركيا", "الصين", "اليابان", "كوريا", "تايلاند", "سنغافورة", "ماليزيا", "إندونيسيا", "الهند"].includes(c.name)
    );
    const americas = countriesData.filter(c => 
      ["أمريكا", "كندا", "المكسيك", "البرازيل", "الأرجنتين"].includes(c.name)
    );
    const oceania = countriesData.filter(c => 
      ["أستراليا", "نيوزيلندا"].includes(c.name)
    );

    return [
      { key: "middle-east", label: "الشرق الأوسط", countries: middleEast },
      { key: "africa", label: "أفريقيا", countries: africa },
      { key: "europe", label: "أوروبا", countries: europe },
      { key: "asia", label: "آسيا", countries: asia },
      { key: "americas", label: "الأمريكتين", countries: americas },
      { key: "oceania", label: "أوقيانوسيا", countries: oceania }
    ];
  }, []);

  // البحث في الدول
  const filteredCountries = useMemo(() => {
    if (!searchQuery.trim()) return countriesData;
    const query = searchQuery.toLowerCase();
    return countriesData.filter(country => 
      country.name.includes(searchQuery) || 
      country.nameEn.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <section id="pricing" className="relative py-20 px-4 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${pricingBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background z-0" />
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            باقاتنا <span className="gradient-gold bg-clip-text text-transparent">المميزة</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            نغطي أكثر من {countriesData.length} دولة حول العالم - اختر الباقة المناسبة لك
          </p>

          {/* شريط البحث */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="ابحث عن دولة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10 text-right"
            />
          </div>
        </div>

        {searchQuery ? (
          // عرض نتائج البحث
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-center mb-8">
              نتائج البحث ({filteredCountries.length})
            </h3>
            {filteredCountries.length > 0 ? (
              <Carousel 
                opts={{
                  align: "center",
                  loop: true,
                  direction: "rtl"
                }}
                className="w-full max-w-full"
              >
                <div className="flex justify-center gap-4 mb-6">
                  <CarouselPrevious className="relative inset-0 translate-y-0 translate-x-0 h-10 w-10" />
                  <CarouselNext className="relative inset-0 translate-y-0 translate-x-0 h-10 w-10" />
                </div>
                <CarouselContent className="-ml-2 md:-ml-4">
                  {filteredCountries.map((country, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-center mb-4 flex items-center justify-center gap-2">
                          <span className="text-3xl">{country.flag}</span>
                          <span>{country.name}</span>
                        </h4>
                        <div className="text-center text-sm text-muted-foreground mb-4">
                          <p>المزود: {country.provider}</p>
                          <p className="text-accent font-semibold">{country.phone}</p>
                        </div>
                        <Carousel 
                          opts={{
                            align: "start",
                            loop: false,
                            direction: "rtl"
                          }}
                          className="w-full"
                        >
                          <CarouselContent className="-ml-2">
                            {country.plans.map((plan, planIndex) => (
                              <CarouselItem key={planIndex} className="pl-2 basis-full">
                                <PricingCard
                                  country={`${country.name} - ${country.provider}`}
                                  duration={plan.duration}
                                  price={plan.price}
                                  currency={country.currency}
                                  features={plan.features}
                                  popular={plan.popular}
                                />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                        </Carousel>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            ) : (
              <p className="text-center text-muted-foreground text-xl">
                لم يتم العثور على نتائج. جرب البحث بكلمات أخرى.
              </p>
            )}
          </div>
        ) : (
          // عرض الدول حسب المناطق
          <Tabs defaultValue="middle-east" className="w-full" dir="rtl">
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-3 md:grid-cols-6 mb-12">
              {regionGroups.map(region => (
                <TabsTrigger key={region.key} value={region.key} className="text-sm md:text-base">
                  {region.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {regionGroups.map(region => (
              <TabsContent key={region.key} value={region.key} className="animate-fade-in">
                <Carousel 
                  opts={{
                    align: "center",
                    loop: true,
                    direction: "rtl"
                  }}
                  className="w-full max-w-full"
                >
                  <div className="flex justify-center gap-4 mb-6">
                    <CarouselPrevious className="relative inset-0 translate-y-0 translate-x-0 h-10 w-10" />
                    <CarouselNext className="relative inset-0 translate-y-0 translate-x-0 h-10 w-10" />
                  </div>
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {region.countries.map((country, index) => (
                      <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                        <div className="mb-8">
                          <h4 className="text-xl font-bold text-center mb-4 flex items-center justify-center gap-2">
                            <span className="text-3xl">{country.flag}</span>
                            <span>{country.name}</span>
                          </h4>
                          <div className="text-center text-sm text-muted-foreground mb-4">
                            <p>المزود: {country.provider}</p>
                            <p className="text-accent font-semibold">{country.phone}</p>
                          </div>
                          <Carousel 
                            opts={{
                              align: "start",
                              loop: false,
                              direction: "rtl"
                            }}
                            className="w-full"
                          >
                            <CarouselContent className="-ml-2">
                              {country.plans.map((plan, planIndex) => (
                                <CarouselItem key={planIndex} className="pl-2 basis-full">
                                  <PricingCard
                                    country={`${country.name} - ${country.provider}`}
                                    duration={plan.duration}
                                    price={plan.price}
                                    currency={country.currency}
                                    features={plan.features}
                                    popular={plan.popular}
                                  />
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                          </Carousel>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </section>
  );
};

export default Pricing;
