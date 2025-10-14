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
        <Features />
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
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
