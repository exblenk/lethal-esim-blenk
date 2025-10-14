import { Card } from "@/components/ui/card";
import { Zap, Shield, Clock, HeadphonesIcon, RefreshCw, Globe2 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "تفعيل فوري",
      description: "احصل على شريحتك خلال ٩٠ ثانية فقط من الطلب"
    },
    {
      icon: Shield,
      title: "آمن ومضمون",
      description: "جميع المعاملات مشفرة وضمان استرجاع المال"
    },
    {
      icon: Clock,
      title: "متاح ٢٤/٧",
      description: "خدمة العملاء متاحة على مدار الساعة"
    },
    {
      icon: HeadphonesIcon,
      title: "دعم فني محترف",
      description: "فريق متخصص لمساعدتك في أي وقت"
    },
    {
      icon: RefreshCw,
      title: "بدون التزام",
      description: "باقات مرنة بدون عقود طويلة الأمد"
    },
    {
      icon: Globe2,
      title: "تغطية واسعة",
      description: "نغطي جميع دول الشرق الأوسط وشمال أفريقيا"
    }
  ];

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-gold bg-clip-text text-transparent">تواصل معنا</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نقدم أفضل تجربة لشراء شرائح eSIM في المنطقة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:scale-105 transition-smooth hover:glow-primary animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
