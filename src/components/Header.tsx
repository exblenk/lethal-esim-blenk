import { Button } from "@/components/ui/button";
import { MessageCircle, Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#pricing", label: "الأسعار" },
    { href: "#countries", label: "الدول" },
    { href: "#payment", label: "الدفع" },
    { href: "#faq", label: "الأسئلة" },
    { href: "#contact", label: "تواصل معنا" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-smooth">
            <img src={logo} alt="ExBlenk Logo" className="h-12 w-12" />
            <span className="text-2xl font-bold">
              <span className="text-[#D4A574]">Ex</span>
              <span className="text-secondary-foreground">Blenk</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-accent transition-smooth font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button 
              variant="whatsapp"
              className="hidden sm:flex"
              asChild
            >
              <a href="https://wa.me/201060103226">
                <MessageCircle className="ml-2" />
                واتساب
              </a>
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium hover:text-accent transition-smooth p-2"
                    >
                      {link.label}
                    </a>
                  ))}
                  <Button 
                    variant="whatsapp"
                    className="mt-4"
                    asChild
                  >
                    <a href="https://wa.me/201060103226">
                      <MessageCircle className="ml-2" />
                      تواصل عبر واتساب
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
