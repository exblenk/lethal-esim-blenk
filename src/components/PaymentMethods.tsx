import { Card } from "@/components/ui/card";
import { CreditCard, Smartphone, Wallet } from "lucide-react";

const PaymentMethods = () => {
  const methods = [
    {
      name: "PayPal",
      icon: CreditCard,
      description: "دفع آمن عبر PayPal"
    },
    {
      name: "STC Pay",
      icon: Smartphone,
      description: "الدفع السريع عبر STC Pay"
    },
    {
      name: "Vodafone Cash",
      icon: Wallet,
      description: "فودافون كاش (مصر فقط)"
    },
    {
      name: "MADA",
      icon: CreditCard,
      description: "بطاقات مدى السعودية"
    }
  ];

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            طرق <span className="gradient-gold bg-clip-text text-transparent">الدفع</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ادفع بالطريقة التي تناسبك - آمنة وسريعة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card 
                key={index}
                className="p-6 text-center hover:scale-105 transition-smooth hover:glow-primary animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-16 h-16 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-2">{method.name}</h3>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            🔒 جميع المعاملات مشفرة ومؤمنة بالكامل
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
