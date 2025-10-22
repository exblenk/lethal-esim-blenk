import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import heroImage from "@/assets/hero-background.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)'
        }}
      />
      
      <div className="container relative z-10 px-4 py-20 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight animate-scale-in">
            شرائح eSIM دول عربية وجلوبال
            <span className="block gradient-gold bg-clip-text text-transparent mt-2">
              بأفضل سعر
            </span>
          </h1>
          
          <p className="text-xl md:text-3xl text-muted-foreground animate-fade-in">
            توصيل فوري & تفعيل خلال ٩٠ ثانية
          </p>
          
          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto animate-fade-in">
            إنترنت بدون حدود، اشتراكات يومية وشهرية — اطلب الآن
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-slide-up">
            <Button 
              variant="hero" 
              size="lg"
              className="w-full sm:w-auto text-lg px-8 py-6"
              asChild
            >
              <a href="https://wa.me/201060103226?text=أريد الاستفسار عن شرائح eSIM">
                <MessageCircle className="ml-2" />
                اطلب شريحتك الآن
              </a>
            </Button>
            
            <Button 
              variant="gold" 
              size="lg"
              className="w-full sm:w-auto text-lg px-8 py-6"
              asChild
            >
              <a href="#pricing">
                شاهد الأسعار
              </a>
            </Button>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-6 text-sm animate-fade-in">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-accent rounded-full animate-pulse-glow" />
              <span>تفعيل فوري</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-accent rounded-full animate-pulse-glow" />
              <span>دعم ٢٤/٧</span>
            </div>
          </div>

          {/* قسم تابعنا */}
          <div className="pt-6 flex items-center justify-center gap-4 text-xl animate-fade-in">
            <span className="text-foreground font-bold">تابعنا</span>
            <a 
              href="https://www.tiktok.com/@exblenk?_t=ZS-90lSMs5RzWS&_r=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-all hover:scale-110 transform"
              aria-label="TikTok"
            >
              <FaTiktok className="w-8 h-8" />
            </a>
            <a 
              href="https://www.instagram.com/exblenk?igsh=b2Z4dnF5MmpsMmh2&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-all hover:scale-110 transform"
              aria-label="Instagram"
            >
              <FaInstagram className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
