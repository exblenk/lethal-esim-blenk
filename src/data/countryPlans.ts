export interface CountryPlan {
  duration: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface CountryData {
  name: string;
  nameEn: string;
  flag: string;
  currency: string;
  image?: string;
  provider: string;
  phone: string;
  plans: CountryPlan[];
}

// Default plans structure for most countries
const createStandardPlans = (prices: { day2: string; day5: string; month1: string; month2: string; month3: string }): CountryPlan[] => [
  {
    duration: "يومين",
    price: prices.day2,
    features: ["إنترنت غير محدود", "تفعيل فوري", "دعم فني ٢٤/٧"]
  },
  {
    duration: "٥ أيام",
    price: prices.day5,
    features: ["إنترنت غير محدود", "تفعيل فوري", "دعم فني ٢٤/٧", "خصم ٥٪"]
  },
  {
    duration: "شهر واحد",
    price: prices.month1,
    features: ["إنترنت غير محدود", "تفعيل فوري", "دعم فني ٢٤/٧", "خصم ١٠٪"],
    popular: true
  },
  {
    duration: "شهرين",
    price: prices.month2,
    features: ["إنترنت غير محدود", "تفعيل فوري", "دعم فني ٢٤/٧", "خصم ١٥٪"]
  },
  {
    duration: "٣ أشهر",
    price: prices.month3,
    features: ["إنترنت غير محدود", "تفعيل فوري", "دعم فني ٢٤/٧", "خصم ٢٠٪"]
  }
];

export const countriesData: CountryData[] = [
  // الشرق الأوسط
  {
    name: "السعودية",
    nameEn: "Saudi Arabia",
    flag: "🇸🇦",
    currency: "ريال",
    provider: "STC",
    phone: "+966 50 123 4567",
    plans: createStandardPlans({ day2: "٢٠", day5: "٤٥", month1: "١٩٠", month2: "٣٦٠", month3: "٥٥٩" })
  },
  {
    name: "الإمارات",
    nameEn: "UAE",
    flag: "🇦🇪",
    currency: "درهم",
    provider: "Etisalat",
    phone: "+971 50 123 4567",
    plans: createStandardPlans({ day2: "٢٥", day5: "٥٥", month1: "٢٢٠", month2: "٤٢٠", month3: "٦٣٠" })
  },
  {
    name: "مصر",
    nameEn: "Egypt",
    flag: "🇪🇬",
    currency: "جنيه",
    provider: "Orange",
    phone: "+20 106 010 3226",
    plans: createStandardPlans({ day2: "١٤٠", day5: "٣١٥", month1: "١٣٣٠", month2: "٢٥٢٠", month3: "٣٩١٠" })
  },
  {
    name: "الكويت",
    nameEn: "Kuwait",
    flag: "🇰🇼",
    currency: "دينار",
    provider: "Zain",
    phone: "+965 5012 3456",
    plans: createStandardPlans({ day2: "٦", day5: "١٤", month1: "٥٨", month2: "١١٠", month3: "١٦٥" })
  },
  {
    name: "قطر",
    nameEn: "Qatar",
    flag: "🇶🇦",
    currency: "ريال",
    provider: "Ooredoo",
    phone: "+974 5012 3456",
    plans: createStandardPlans({ day2: "٢٢", day5: "٥٠", month1: "٢٠٥", month2: "٣٩٠", month3: "٥٨٥" })
  },
  {
    name: "البحرين",
    nameEn: "Bahrain",
    flag: "🇧🇭",
    currency: "دينار",
    provider: "Batelco",
    phone: "+973 3301 2345",
    plans: createStandardPlans({ day2: "٨", day5: "١٨", month1: "٧٥", month2: "١٤٣", month3: "٢١٥" })
  },
  {
    name: "عمان",
    nameEn: "Oman",
    flag: "🇴🇲",
    currency: "ريال",
    provider: "Omantel",
    phone: "+968 9012 3456",
    plans: createStandardPlans({ day2: "٨", day5: "١٨", month1: "٧٥", month2: "١٤٣", month3: "٢١٥" })
  },
  {
    name: "الأردن",
    nameEn: "Jordan",
    flag: "🇯🇴",
    currency: "دينار",
    provider: "Orange",
    phone: "+962 7 9012 3456",
    plans: createStandardPlans({ day2: "١٥", day5: "٣٤", month1: "١٤٠", month2: "٢٦٦", month3: "٤٠٠" })
  },
  {
    name: "لبنان",
    nameEn: "Lebanon",
    flag: "🇱🇧",
    currency: "ليرة",
    provider: "Touch",
    phone: "+961 3 012 345",
    plans: createStandardPlans({ day2: "٣٥٠٠٠", day5: "٧٨٧٥٠", month1: "٣٣٢٥٠٠", month2: "٦٣١٧٥٠", month3: "٩٤٩٥٠٠" })
  },
  {
    name: "العراق",
    nameEn: "Iraq",
    flag: "🇮🇶",
    currency: "دينار",
    provider: "Zain",
    phone: "+964 770 123 4567",
    plans: createStandardPlans({ day2: "٢٨٠٠٠", day5: "٦٣٠٠٠", month1: "٢٦٦٠٠٠", month2: "٥٠٥٤٠٠", month3: "٧٦٠٢٠٠" })
  },
  {
    name: "المغرب",
    nameEn: "Morocco",
    flag: "🇲🇦",
    currency: "درهم",
    provider: "Maroc Telecom",
    phone: "+212 6 0123 4567",
    plans: createStandardPlans({ day2: "٢٢٠", day5: "٤٩٥", month1: "٢٠٩٠", month2: "٣٩٧١", month3: "٥٩٧٠" })
  },
  {
    name: "تونس",
    nameEn: "Tunisia",
    flag: "🇹🇳",
    currency: "دينار",
    provider: "Tunisie Telecom",
    phone: "+216 20 123 456",
    plans: createStandardPlans({ day2: "٦٥", day5: "١٤٦", month1: "٦١٧", month2: "١١٧٢", month3: "١٧٦٢" })
  },
  {
    name: "الجزائر",
    nameEn: "Algeria",
    flag: "🇩🇿",
    currency: "دينار",
    provider: "Mobilis",
    phone: "+213 550 12 34 56",
    plans: createStandardPlans({ day2: "٢٨٠٠", day5: "٦٣٠٠", month1: "٢٦٦٠٠", month2: "٥٠٥٤٠", month3: "٧٦٠٢٠" })
  },

  // تركيا
  {
    name: "تركيا",
    nameEn: "Turkey",
    flag: "🇹🇷",
    currency: "ليرة",
    provider: "Turkcell",
    phone: "+90 532 123 4567",
    plans: createStandardPlans({ day2: "٧٠٠", day5: "١٥٧٥", month1: "٦٦٥٠", month2: "١٢٦٣٥", month3: "١٨٩٩٠" })
  },

  // أوروبا
  {
    name: "بريطانيا",
    nameEn: "United Kingdom",
    flag: "🇬🇧",
    currency: "جنيه",
    provider: "EE",
    phone: "+44 7401 234567",
    plans: createStandardPlans({ day2: "١٨", day5: "٤٠", month1: "١٧٠", month2: "٣٢٣", month3: "٤٨٥" })
  },
  {
    name: "فرنسا",
    nameEn: "France",
    flag: "🇫🇷",
    currency: "يورو",
    provider: "Orange",
    phone: "+33 6 01 23 45 67",
    plans: createStandardPlans({ day2: "٢٠", day5: "٤٥", month1: "١٩٠", month2: "٣٦١", month3: "٥٤٣" })
  },
  {
    name: "ألمانيا",
    nameEn: "Germany",
    flag: "🇩🇪",
    currency: "يورو",
    provider: "Telekom",
    phone: "+49 151 2345 6789",
    plans: createStandardPlans({ day2: "٢٠", day5: "٤٥", month1: "١٩٠", month2: "٣٦١", month3: "٥٤٣" })
  },
  {
    name: "إيطاليا",
    nameEn: "Italy",
    flag: "🇮🇹",
    currency: "يورو",
    provider: "TIM",
    phone: "+39 320 123 4567",
    plans: createStandardPlans({ day2: "٢٠", day5: "٤٥", month1: "١٩٠", month2: "٣٦١", month3: "٥٤٣" })
  },
  {
    name: "إسبانيا",
    nameEn: "Spain",
    flag: "🇪🇸",
    currency: "يورو",
    provider: "Movistar",
    phone: "+34 612 345 678",
    plans: createStandardPlans({ day2: "٢٠", day5: "٤٥", month1: "١٩٠", month2: "٣٦١", month3: "٥٤٣" })
  },
  {
    name: "هولندا",
    nameEn: "Netherlands",
    flag: "🇳🇱",
    currency: "يورو",
    provider: "KPN",
    phone: "+31 6 1234 5678",
    plans: createStandardPlans({ day2: "٢٠", day5: "٤٥", month1: "١٩٠", month2: "٣٦١", month3: "٥٤٣" })
  },
  {
    name: "بلجيكا",
    nameEn: "Belgium",
    flag: "🇧🇪",
    currency: "يورو",
    provider: "Proximus",
    phone: "+32 470 12 34 56",
    plans: createStandardPlans({ day2: "٢٠", day5: "٤٥", month1: "١٩٠", month2: "٣٦١", month3: "٥٤٣" })
  },
  {
    name: "سويسرا",
    nameEn: "Switzerland",
    flag: "🇨🇭",
    currency: "فرنك",
    provider: "Swisscom",
    phone: "+41 76 123 45 67",
    plans: createStandardPlans({ day2: "٢٢", day5: "٥٠", month1: "٢٠٥", month2: "٣٩٠", month3: "٥٨٥" })
  },
  {
    name: "اليونان",
    nameEn: "Greece",
    flag: "🇬🇷",
    currency: "يورو",
    provider: "Cosmote",
    phone: "+30 690 123 4567",
    plans: createStandardPlans({ day2: "٢٠", day5: "٤٥", month1: "١٩٠", month2: "٣٦١", month3: "٥٤٣" })
  },
  {
    name: "البرتغال",
    nameEn: "Portugal",
    flag: "🇵🇹",
    currency: "يورو",
    provider: "MEO",
    phone: "+351 910 123 456",
    plans: createStandardPlans({ day2: "٢٠", day5: "٤٥", month1: "١٩٠", month2: "٣٦١", month3: "٥٤٣" })
  },

  // آسيا
  {
    name: "الصين",
    nameEn: "China",
    flag: "🇨🇳",
    currency: "يوان",
    provider: "China Mobile",
    phone: "+86 138 0123 4567",
    plans: createStandardPlans({ day2: "١٤٥", day5: "٣٢٦", month1: "١٣٧٧", month2: "٢٦١٦", month3: "٣٩٣٦" })
  },
  {
    name: "اليابان",
    nameEn: "Japan",
    flag: "🇯🇵",
    currency: "ين",
    provider: "NTT Docomo",
    phone: "+81 90 1234 5678",
    plans: createStandardPlans({ day2: "٣٠٠٠", day5: "٦٧٥٠", month1: "٢٨٥٠٠", month2: "٥٤١٥٠", month3: "٨١٤٥٠" })
  },
  {
    name: "كوريا",
    nameEn: "South Korea",
    flag: "🇰🇷",
    currency: "وون",
    provider: "KT",
    phone: "+82 10 1234 5678",
    plans: createStandardPlans({ day2: "٢٧٠٠٠", day5: "٦٠٧٥٠", month1: "٢٥٦٥٠٠", month2: "٤٨٧٣٥٠", month3: "٧٣٣٥٠٠" })
  },
  {
    name: "تايلاند",
    nameEn: "Thailand",
    flag: "🇹🇭",
    currency: "بات",
    provider: "AIS",
    phone: "+66 81 234 5678",
    plans: createStandardPlans({ day2: "٧٥٠", day5: "١٦٨٨", month1: "٧١٢٥", month2: "١٣٥٣٨", month3: "٢٠٣٦٣" })
  },
  {
    name: "سنغافورة",
    nameEn: "Singapore",
    flag: "🇸🇬",
    currency: "دولار",
    provider: "Singtel",
    phone: "+65 8123 4567",
    plans: createStandardPlans({ day2: "٢٨", day5: "٦٣", month1: "٢٦٦", month2: "٥٠٥", month3: "٧٦٠" })
  },
  {
    name: "ماليزيا",
    nameEn: "Malaysia",
    flag: "🇲🇾",
    currency: "رينغيت",
    provider: "Maxis",
    phone: "+60 12 345 6789",
    plans: createStandardPlans({ day2: "٩٥", day5: "٢١٤", month1: "٩٠٣", month2: "١٧١٦", month3: "٢٥٨٠" })
  },
  {
    name: "إندونيسيا",
    nameEn: "Indonesia",
    flag: "🇮🇩",
    currency: "روبية",
    provider: "Telkomsel",
    phone: "+62 812 3456 7890",
    plans: createStandardPlans({ day2: "٣٢٠٠٠٠", day5: "٧٢٠٠٠٠", month1: "٣٠٤٠٠٠٠", month2: "٥٧٧٦٠٠٠", month3: "٨٦٨٨٠٠٠" })
  },
  {
    name: "الهند",
    nameEn: "India",
    flag: "🇮🇳",
    currency: "روبية",
    provider: "Airtel",
    phone: "+91 98765 43210",
    plans: createStandardPlans({ day2: "١٧٠٠", day5: "٣٨٢٥", month1: "١٦١٥٠", month2: "٣٠٦٨٥", month3: "٤٦١٧٠" })
  },

  // أمريكا
  {
    name: "أمريكا",
    nameEn: "United States",
    flag: "🇺🇸",
    currency: "دولار",
    provider: "T-Mobile",
    phone: "+1 (555) 123-4567",
    plans: createStandardPlans({ day2: "٢٠", day5: "٤٥", month1: "١٩٠", month2: "٣٦١", month3: "٥٤٣" })
  },
  {
    name: "كندا",
    nameEn: "Canada",
    flag: "🇨🇦",
    currency: "دولار",
    provider: "Rogers",
    phone: "+1 (647) 123-4567",
    plans: createStandardPlans({ day2: "٢٨", day5: "٦٣", month1: "٢٦٦", month2: "٥٠٥", month3: "٧٦٠" })
  },
  {
    name: "المكسيك",
    nameEn: "Mexico",
    flag: "🇲🇽",
    currency: "بيزو",
    provider: "Telcel",
    phone: "+52 55 1234 5678",
    plans: createStandardPlans({ day2: "٤٠٠", day5: "٩٠٠", month1: "٣٨٠٠", month2: "٧٢٢٠", month3: "١٠٨٦٠" })
  },
  {
    name: "البرازيل",
    nameEn: "Brazil",
    flag: "🇧🇷",
    currency: "ريال",
    provider: "Vivo",
    phone: "+55 11 91234-5678",
    plans: createStandardPlans({ day2: "١٠٥", day5: "٢٣٦", month1: "٩٩٨", month2: "١٨٩٦", month3: "٢٨٥٠" })
  },
  {
    name: "الأرجنتين",
    nameEn: "Argentina",
    flag: "🇦🇷",
    currency: "بيزو",
    provider: "Personal",
    phone: "+54 9 11 2345-6789",
    plans: createStandardPlans({ day2: "٢٠٥٠٠", day5: "٤٦١٢٥", month1: "١٩٤٧٥٠", month2: "٣٧٠٠٢٥", month3: "٥٥٦٥٠٠" })
  },

  // أستراليا ونيوزيلندا
  {
    name: "أستراليا",
    nameEn: "Australia",
    flag: "🇦🇺",
    currency: "دولار",
    provider: "Telstra",
    phone: "+61 412 345 678",
    plans: createStandardPlans({ day2: "٣٢", day5: "٧٢", month1: "٣٠٤", month2: "٥٧٨", month3: "٨٦٩" })
  },
  {
    name: "نيوزيلندا",
    nameEn: "New Zealand",
    flag: "🇳🇿",
    currency: "دولار",
    provider: "Spark",
    phone: "+64 21 123 4567",
    plans: createStandardPlans({ day2: "٣٥", day5: "٧٩", month1: "٣٣٣", month2: "٦٣٣", month3: "٩٥٢" })
  },

  // جنوب أفريقيا
  {
    name: "جنوب أفريقيا",
    nameEn: "South Africa",
    flag: "🇿🇦",
    currency: "راند",
    provider: "Vodacom",
    phone: "+27 82 123 4567",
    plans: createStandardPlans({ day2: "٣٨٠", day5: "٨٥٥", month1: "٣٦١٠", month2: "٦٨٥٩", month3: "١٠٣١٦" })
  }
];
