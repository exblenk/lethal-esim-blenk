import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import CountryBundles from "@/components/CountryBundles";
import PaymentMethods from "@/components/PaymentMethods";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SchemaMarkup from "@/components/SchemaMarkup";

const Index = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <SchemaMarkup />
      <Header />
      <main>
        <Hero />
        <div className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-4xl mx-auto px-4">
              <div className="h-px gradient-gold opacity-30" />
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-background px-6 py-2 rounded-full border border-accent/30 glow-gold">
              <span className="gradient-gold bg-clip-text text-transparent font-bold text-lg">✦</span>
            </div>
          </div>
        </div>
        <Pricing />
        <div id="countries">
          <CountryBundles />
        </div>
        <div id="payment">
          <PaymentMethods />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <Features />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
