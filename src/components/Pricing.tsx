import PricingCard from "./PricingCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import stcImage from "@/assets/stc-esim-new.jpg";
import egyptImage from "@/assets/orange-esim-new.jpg";
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
    <section id="pricing" className="relative py-20 overflow-hidden">
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
      <div className="relative z-10 px-5 md:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            باقاتنا <span className="gradient-gold bg-clip-text text-transparent">المميزة</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            اختر الباقة المناسبة لك - كلما زادت المدة، زاد الخصم
          </p>
        </div>

        <Tabs defaultValue="saudi" className="w-full" dir="rtl">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 p-1.5 h-auto">
            <TabsTrigger value="saudi" className="text-base md:text-lg h-12">السعودية 🇸🇦</TabsTrigger>
            <TabsTrigger value="egypt" className="text-base md:text-lg h-12">مصر 🇪🇬</TabsTrigger>
          </TabsList>
          
          <TabsContent value="saudi" className="data-[state=active]:animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {saudiPlans.map((plan, index) => (
                <PricingCard
                  key={index}
                  country="السعودية - STC"
                  duration={plan.duration}
                  price={plan.price}
                  oldPrice={plan.oldPrice}
                  currency="ريال"
                  features={plan.features}
                  popular={plan.popular}
                  image={stcImage}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="egypt" className="data-[state=active]:animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {egyptPlans.map((plan, index) => (
                <PricingCard
                  key={index}
                  country="مصر - Orange"
                  duration={plan.duration}
                  price={plan.price}
                  oldPrice={plan.oldPrice}
                  currency="جنيه"
                  features={plan.features}
                  popular={plan.popular}
                  image={egyptImage}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Pricing;
