import { useEffect } from "react";

const SchemaMarkup = () => {
  useEffect(() => {
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "ExBlenk",
      "url": "https://lovable.app",
      "logo": "https://lovable.app/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+201060103226",
        "contactType": "customer service",
        "availableLanguage": ["ar", "en"]
      },
      "sameAs": [
        "https://wa.me/201060103226",
        "https://t.me/ispott"
      ]
    };

    const productSchemas = [
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "شريحة eSIM السعودية STC - شهر واحد",
        "description": "شريحة eSIM سعودية من STC بإنترنت غير محدود لمدة شهر",
        "brand": {
          "@type": "Brand",
          "name": "STC"
        },
        "offers": {
          "@type": "Offer",
          "price": "190",
          "priceCurrency": "SAR",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "ExBlenk"
          }
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "شريحة eSIM مصر Orange - شهر واحد",
        "description": "شريحة eSIM مصرية من Orange بإنترنت غير محدود لمدة شهر",
        "brand": {
          "@type": "Brand",
          "name": "Orange"
        },
        "offers": {
          "@type": "Offer",
          "price": "1330",
          "priceCurrency": "EGP",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "ExBlenk"
          }
        }
      }
    ];

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "ما هي شريحة eSIM؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "شريحة eSIM هي شريحة إلكترونية مدمجة في هاتفك، لا تحتاج لشريحة فعلية. يتم تفعيلها عن طريق مسح QR Code فقط."
          }
        },
        {
          "@type": "Question",
          "name": "كم يستغرق التفعيل؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "التفعيل فوري! بعد الدفع ستحصل على رمز QR خلال دقائق، وتفعيل الشريحة يتم خلال ٩٠ ثانية فقط."
          }
        },
        {
          "@type": "Question",
          "name": "هل هاتفي يدعم eSIM؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "معظم الهواتف الحديثة تدعم eSIM مثل iPhone XS وما بعدها، Samsung S20 وما بعدها، Google Pixel 3 وما بعدها."
          }
        }
      ]
    };

    // Add scripts to document head
    const scripts = [organizationSchema, ...productSchemas, faqSchema];
    const scriptElements = scripts.map((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      return script;
    });

    scriptElements.forEach(script => document.head.appendChild(script));

    // Cleanup
    return () => {
      scriptElements.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, []);

  return null;
};

export default SchemaMarkup;
