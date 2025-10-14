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
        <div className="w-full py-8">
          <div className="container mx-auto px-4">
            <div className="h-px gradient-gold" />
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
