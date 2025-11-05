import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/966575809899?text=مرحباً، أريد الاستفسار عن خدماتكم"
      className="fixed bottom-6 left-6 z-50 animate-float"
      aria-label="تواصل عبر واتساب"
    >
      <Button 
        size="lg"
        className="rounded-full h-16 w-16 shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] hover:scale-110 transition-smooth glow-gold"
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </Button>
    </a>
  );
};

export default FloatingWhatsApp;
