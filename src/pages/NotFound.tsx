import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background" dir="rtl">
      <div className="text-center space-y-6 p-8">
        <h1 className="mb-4 text-6xl font-bold gradient-gold bg-clip-text text-transparent">404</h1>
        <p className="mb-4 text-2xl text-foreground">عذراً! الصفحة غير موجودة</p>
        <p className="text-muted-foreground">الصفحة التي تبحث عنها غير متوفرة أو تم نقلها</p>
        <a 
          href="/" 
          className="inline-block mt-6 px-8 py-3 gradient-primary rounded-lg text-foreground font-semibold hover:scale-105 transition-smooth"
        >
          العودة للصفحة الرئيسية
        </a>
      </div>
    </div>
  );
};

export default NotFound;
