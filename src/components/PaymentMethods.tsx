import paypalLogo from "@/assets/paypal-logo.png";
import stcPayLogo from "@/assets/stc-pay-logo.png";
import vodafoneLogo from "@/assets/vodafone-logo.png";
import madaLogo from "@/assets/mada-logo.png";

const PaymentMethods = () => {
  const methods = [
    {
      name: "PayPal",
      logo: paypalLogo,
      description: "دفع آمن عبر PayPal"
    },
    {
      name: "STC Pay",
      logo: stcPayLogo,
      description: "الدفع السريع عبر STC Pay"
    },
    {
      name: "Vodafone Cash",
      logo: vodafoneLogo,
      description: "فودافون كاش (مصر فقط)"
    },
    {
      name: "MADA",
      logo: madaLogo,
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {methods.map((method, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-3 p-4 rounded-xl bg-card border hover:border-primary/50 hover:shadow-lg transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 flex items-center justify-center">
                <img 
                  src={method.logo} 
                  alt={method.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <p className="text-xs text-muted-foreground text-center">{method.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            🔒 جميع المعاملات آمنة
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
