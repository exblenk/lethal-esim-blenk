import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "ما هي شريحة eSIM؟",
      answer: "شريحة eSIM هي شريحة إلكترونية مدمجة في هاتفك، لا تحتاج لشريحة فعلية. يتم تفعيلها عن طريق مسح QR Code فقط."
    },
    {
      question: "كم يستغرق التفعيل؟",
      answer: "التفعيل فوري! بعد الدفع ستحصل على رمز QR خلال دقائق، وتفعيل الشريحة يتم خلال ٩٠ ثانية فقط."
    },
    {
      question: "هل هاتفي يدعم eSIM؟",
      answer: "معظم الهواتف الحديثة تدعم eSIM مثل iPhone XS وما بعدها، Samsung S20 وما بعدها، Google Pixel 3 وما بعدها. تواصل معنا للتأكد."
    },
    {
      question: "ماذا لو واجهت مشكلة؟",
      answer: "فريق الدعم متاح ٢٤/٧ عبر واتساب وتليجرام. نحن هنا لمساعدتك في أي وقت."
    },
    {
      question: "هل يمكنني استرجاع أموالي؟",
      answer: "لا يمكنك استرجاع اموالك اذا قمت بمسح QR Code وقمت بتفعيل الخدمة."
    },
    {
      question: "هل البيانات غير محدودة حقاً؟",
      answer: "نعم! جميع باقاتنا تشمل بيانات غير محدودة بسرعة عالية طوال فترة الاشتراك."
    },
    {
      question: "كيف أدفع؟",
      answer: "نقبل PayPal، STC Pay، Vodafone Cash، ومدى. اختر الطريقة الأنسب لك."
    },
    {
      question: "هل يمكن استخدام الشريحة في أكثر من دولة؟",
      answer: "نعم، لدينا باقات خاصة تغطي عدة دول في الشرق الأوسط. تواصل معنا لمعرفة التفاصيل."
    }
  ];

  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            الأسئلة <span className="gradient-gold bg-clip-text text-transparent">الشائعة</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            كل ما تحتاج معرفته عن خدماتنا
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card hover:glow-primary transition-smooth"
            >
              <AccordionTrigger className="text-lg font-semibold text-right hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
