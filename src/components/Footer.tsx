import { Mail, MessageCircle, Send } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="ExBlenk Logo" className="h-10 w-10" />
              <span className="text-xl font-bold">
                <span className="text-primary">Ex</span>
                <span className="text-secondary-foreground">Blenk</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              شرائح eSIM بأفضل الأسعار في الشرق الأوسط. خدمة موثوقة وتفعيل فوري.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#pricing" className="text-muted-foreground hover:text-accent transition-smooth">الأسعار</a></li>
              <li><a href="#countries" className="text-muted-foreground hover:text-accent transition-smooth">الدول المتاحة</a></li>
              <li><a href="#payment" className="text-muted-foreground hover:text-accent transition-smooth">طرق الدفع</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-accent transition-smooth">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">خدماتنا</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">شرائح eSIM سعودية</li>
              <li className="text-muted-foreground">شرائح eSIM مصرية</li>
              <li className="text-muted-foreground">باقات MENA</li>
              <li className="text-muted-foreground">دعم فني ٢٤/٧</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/201060103226"
                className="flex items-center gap-2 text-muted-foreground hover:text-[#25D366] transition-smooth"
              >
                <MessageCircle className="w-5 h-5" />
                <span>واتساب</span>
              </a>
              <a 
                href="https://t.me/ispott"
                className="flex items-center gap-2 text-muted-foreground hover:text-[#0088cc] transition-smooth"
              >
                <Send className="w-5 h-5" />
                <span>تليجرام</span>
              </a>
              <a 
                href="mailto:exblenk@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-smooth"
              >
                <Mail className="w-5 h-5" />
                <span>exblenk@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} ExBlenk. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
