import PricingCard from "./PricingCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import stcImage from "@/assets/stc-esim-new.jpg";
import egyptImage from "@/assets/egypt-esim.jpg";
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
      features: ["إنترنت غير محدود", "تفعيل فوري", "دعم فني ٢٤/٧", "خصم ٥٪"]
    },
    {
      duration: "شهر واحد",
      price: "١٩٠",
      features: ["إنترنت غير محدود", "تفعيل فوري", "دعم فني ٢٤/٧", "خصم ١٠٪"],
      popular: true
    },
    {
      duration: "شهرين",
      price: "٣٦٠",
      features: ["إنترنت غير محدود", "تفعيل فوري", "دعم فني ٢٤/٧", "خصم ١٥٪"]
    },
    {
      duration: "٣ أشهر",
      price: "٥٥٩",
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
      features: ["إنترنت غير محدود", "تفعيل فوري", "دعم فني ٢٤/٧", "خصم ٥٪"]
    },
    {
      duration: "شهر واحد",
      price: "١٣٣٠",
      features: ["إنترنت غير محدود", "تفعيل فوري", "دعم فني ٢٤/٧", "خصم ١٠٪"],
      popular: true
    },
    {
      duration: "شهرين",
      price: "٢٥٢٠",
      features: ["إنترنت غير محدود", "تفعيل فوري", "دعم فني ٢٤/٧", "خصم ١٥٪"]
    },
    {
      duration: "٣ أشهر",
      price: "٣٩١٠",
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
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="saudi" className="text-lg">السعودية 🇸🇦</TabsTrigger>
            <TabsTrigger value="egypt" className="text-lg">مصر 🇪🇬</TabsTrigger>
          </TabsList>
          
          <TabsContent value="saudi" className="animate-fade-in">
            <div className="flex gap-6 overflow-x-auto pb-4 px-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-accent/50 scrollbar-track-transparent">
              {saudiPlans.map((plan, index) => (
                <div key={index} className="flex-shrink-0 w-[280px] snap-center">
                  <PricingCard
                    country="السعودية - STC"
                    duration={plan.duration}
                    price={plan.price}
                    currency="ريال"
                    features={plan.features}
                    popular={plan.popular}
                    image={stcImage}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="egypt" className="animate-fade-in">
            <div className="flex gap-6 overflow-x-auto pb-4 px-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-accent/50 scrollbar-track-transparent">
              {egyptPlans.map((plan, index) => (
                <div key={index} className="flex-shrink-0 w-[280px] snap-center">
                  <PricingCard
                    country="مصر - Orange"
                    duration={plan.duration}
                    price={plan.price}
                    currency="جنيه"
                    features={plan.features}
                    popular={plan.popular}
                    image={egyptImage}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Pricing;
