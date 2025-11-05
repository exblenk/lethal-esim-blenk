import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            تواصل <span className="gradient-gold bg-clip-text text-transparent">معنا</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            فريقنا جاهز لمساعدتك ٢٤/٧
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center hover:scale-105 transition-smooth animate-scale-in">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 text-[#25D366]" />
            <h3 className="font-bold text-lg mb-3">واتساب</h3>
            <Button 
              variant="whatsapp" 
              className="w-full"
              asChild
            >
              <a href="https://wa.me/966575809899">
                تواصل الآن
              </a>
            </Button>
          </Card>

          <Card className="p-6 text-center hover:scale-105 transition-smooth animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <Send className="w-12 h-12 mx-auto mb-4 text-[#0088cc]" />
            <h3 className="font-bold text-lg mb-3">تليجرام</h3>
            <Button 
              variant="secondary" 
              className="w-full"
              asChild
            >
              <a href="https://t.me/ispott">
                @ispott
              </a>
            </Button>
          </Card>

          <Card className="p-6 text-center hover:scale-105 transition-smooth animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <Mail className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className="font-bold text-lg mb-3">البريد الإلكتروني</h3>
            <Button 
              variant="outline" 
              className="w-full"
              asChild
            >
              <a href="mailto:exblenk@gmail.com">
                أرسل رسالة
              </a>
            </Button>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="p-8 gradient-primary">
            <h3 className="text-2xl font-bold mb-4">
              لديك سؤال؟ نحن هنا للمساعدة!
            </h3>
            <p className="text-muted-foreground mb-6">
              تواصل معنا الآن واحصل على رد فوري من فريق الدعم المتخصص
            </p>
            <Button 
              variant="gold" 
              size="lg"
              asChild
            >
              <a href="https://wa.me/966575809899?text=لدي سؤال عن خدماتكم">
                <MessageCircle className="ml-2" />
                ابدأ المحادثة
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
