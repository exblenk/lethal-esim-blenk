import PricingCard from "./PricingCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import stcImage from "@/assets/stc-esim-new.jpg";
import egyptImage from "@/assets/orange-esim.jpg";
import pricingBg from "@/assets/pricing-background.png";

const Pricing = () => {
  const saudiPlans = [
    {
      duration: "يومين",
      price: "٢٠",
      features: ["إنترنت غير محدود", "تفعيل فوري", "دعم فني ٢٤/٧"]
    },
    {
      duration: "٥ أيام",
      price: "٤٥",
      oldPrice: "٤٧",
      features: ["إنترنت غير محدود", "تفعيل فوري", "دعم فني ٢٤/٧", "خصم ٥٪"]
    },
    {
      duration: "شهر واحد",
      price: "١٩٠",
      oldPrice: "٢١١",
      features: ["إنترنت غير محدود", "تفعيل فوري", "دعم فني ٢٤/٧", "خصم ١٠٪"],
      popular: true
    },
    {
      duration: "شهرين",
      price: "٣٦٠",
      oldPrice: "٤٢٤",
      features: ["إنترنت غير محدود", "تفعيل فوري", "دعم فني ٢٤/٧", "خصم ١٥٪"]
    },
    {
      duration: "٣ أشهر",
      price: "٥٥٩",
      oldPrice: "٦٩٩",
      features: ["إنترنت غير محدود", "تفعيل فوري", "دعم فني ٢٤/٧", "خصم ٢٠٪"]
    }
  ];

  const egyptPlans = [
    {
      duration: "يومين",
      price: "١٤٠",
      features: ["إنترنت غير محدود", "تفعيل فوري", "دعم فني ٢٤/٧"]
    },
    {
      duration: "٥ أيام",
      price: "٣١٥",
      oldPrice: "٣٣٢",
      features: ["إنترنت غير محدود", "تفعيل فوري", "دعم فني ٢٤/٧", "خصم ٥٪"]
    },
    {
      duration: "شهر واحد",
      price: "١٣٣٠",
      oldPrice: "١٤٧٨",
      features: ["إنترنت غير محدود", "تفعيل فوري", "دعم فني ٢٤/٧", "خصم ١٠٪"],
      popular: true
    },
    {
      duration: "شهرين",
      price: "٢٥٢٠",
      oldPrice: "٢٩٦٥",
      features: ["إنترنت غير محدود", "تفعيل فوري", "دعم فني ٢٤/٧", "خصم ١٥٪"]
    },
    {
      duration: "٣ أشهر",
      price: "٣٩١٠",
      oldPrice: "٤٨٨٨",
      features: ["إنترنت غير محدود", "تفعيل فوري", "دعم فني ٢٤/٧", "خصم ٢٠٪"]
    }
  ];

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
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اختر الباقة المناسبة لك - كلما زادت المدة، زاد الخصم
          </p>
        </div>

        <Tabs defaultValue="saudi" className="w-full" dir="rtl">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 p-1.5 h-auto">
            <TabsTrigger value="saudi" className="text-base md:text-lg h-12">السعودية 🇸🇦</TabsTrigger>
            <TabsTrigger value="egypt" className="text-base md:text-lg h-12">مصر 🇪🇬</TabsTrigger>
          </TabsList>
          
          <TabsContent value="saudi" className="data-[state=active]:animate-fade-in">
            <Carousel 
              opts={{
                align: "start",
                loop: false,
                direction: "rtl"
              }}
              className="w-full px-4 md:px-8"
            >
              <CarouselContent className="mx-0 gap-4 pb-4">
                {saudiPlans.map((plan, index) => (
                  <CarouselItem key={index} className="pl-0 basis-[85%] sm:basis-[70%] md:basis-1/2 lg:basis-1/3">
                    <PricingCard
                      country="السعودية - STC"
                      duration={plan.duration}
                      price={plan.price}
                      oldPrice={plan.oldPrice}
                      currency="ريال"
                      features={plan.features}
                      popular={plan.popular}
                      image={stcImage}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-6">
                <CarouselPrevious className="relative inset-0 translate-y-0 translate-x-0 h-10 w-10 rounded-full gradient-gold hover:glow-gold border-0 transition-all duration-300 hover:scale-110" />
                <CarouselNext className="relative inset-0 translate-y-0 translate-x-0 h-10 w-10 rounded-full gradient-gold hover:glow-gold border-0 transition-all duration-300 hover:scale-110" />
              </div>
            </Carousel>
          </TabsContent>
          
          <TabsContent value="egypt" className="data-[state=active]:animate-fade-in">
            <Carousel 
              opts={{
                align: "start",
                loop: false,
                direction: "rtl"
              }}
              className="w-full px-4 md:px-8"
            >
              <CarouselContent className="mx-0 gap-4 pb-4">
                {egyptPlans.map((plan, index) => (
                  <CarouselItem key={index} className="pl-0 basis-[85%] sm:basis-[70%] md:basis-1/2 lg:basis-1/3">
                    <PricingCard
                      country="مصر - Orange"
                      duration={plan.duration}
                      price={plan.price}
                      oldPrice={plan.oldPrice}
                      currency="جنيه"
                      features={plan.features}
                      popular={plan.popular}
                      image={egyptImage}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-6">
                <CarouselPrevious className="relative inset-0 translate-y-0 translate-x-0 h-10 w-10 rounded-full gradient-gold hover:glow-gold border-0 transition-all duration-300 hover:scale-110" />
                <CarouselNext className="relative inset-0 translate-y-0 translate-x-0 h-10 w-10 rounded-full gradient-gold hover:glow-gold border-0 transition-all duration-300 hover:scale-110" />
              </div>
            </Carousel>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Pricing;
