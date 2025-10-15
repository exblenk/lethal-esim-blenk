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

        <div className="flex justify-center items-start gap-4 md:gap-8 max-w-5xl mx-auto overflow-x-auto pb-2">
          {methods.map((method, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-2 animate-scale-in min-w-[80px] md:min-w-[100px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-background rounded-lg border p-2 hover:border-primary/50 transition-smooth">
                <img 
                  src={method.logo} 
                  alt={method.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <p className="text-xs text-muted-foreground text-center max-w-[100px]">{method.description}</p>
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
