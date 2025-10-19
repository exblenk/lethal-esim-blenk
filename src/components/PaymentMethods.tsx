import paypalLogo from "@/assets/paypal-logo.png";
import stcPayLogo from "@/assets/stc-pay-logo.png";
import vodafoneLogo from "@/assets/vodafone-logo.png";
import barqLogo from "@/assets/anb-barq-logo.png";

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
      name: "Barq",
      logo: barqLogo,
      description: "برق البنك العربي الوطني"
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

        <div className="flex justify-center items-start gap-3 md:gap-12 max-w-5xl mx-auto overflow-x-auto pb-2">
          {methods.map((method, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-2 animate-scale-in min-w-[70px] md:min-w-[120px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 md:w-28 md:h-28 flex items-center justify-center bg-white rounded-lg shadow-md border border-border/20 p-2 hover:shadow-lg hover:scale-105 hover:border-accent/30 transition-all duration-300">
                <img 
                  src={method.logo} 
                  alt={`${method.name} - ${method.description}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground text-center max-w-[120px] font-medium">{method.description}</p>
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
