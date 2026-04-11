/*
Design reminder for this file: Aviation-informed luxury minimalism.
Use disciplined bilingual copy, executive clarity, and premium B2B positioning.
*/

export type Language = "en" | "ar";

export type NavKey = "home" | "about" | "services" | "why" | "contact";

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
};

export type AdvantageItem = {
  title: string;
  description: string;
};

export type ValueItem = {
  title: string;
  description: string;
};

export type SiteCopy = {
  meta: {
    siteTitle: string;
    siteDescription: string;
  };
  brand: {
    short: string;
    arabic: string;
    full: string;
    tagline: string;
  };
  nav: Record<NavKey, string>;
  shared: {
    switchLanguage: string;
    primaryCta: string;
    secondaryCta: string;
    footerStatement: string;
    contactPrompt: string;
    footerServiceLabels: string[];
    sectionLabels: {
      overview: string;
      services: string;
      values: string;
      advantages: string;
      contact: string;
    };
  };
  home: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stats: Array<{ value: string; label: string }>;
    overviewTitle: string;
    overviewText: string;
    serviceHighlights: Array<{ title: string; description: string }>;
    whyTitle: string;
    whyItems: AdvantageItem[];
    ctaTitle: string;
    ctaText: string;
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    storyTitle: string;
    storyText: string;
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
    valuesHeading: string;
    values: ValueItem[];
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: ServiceItem[];
    deliveryApproach: string;
    processTitle: string;
    processSteps: Array<{ step: string; title: string; description: string }>;
  };
  why: {
    eyebrow: string;
    title: string;
    intro: string;
    items: AdvantageItem[];
    proofTitle: string;
    proofHeading: string;
    proofPoints: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    formTitle: string;
    formHeading: string;
    formFields: {
      name: string;
      company: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
      success: string;
    };
    directTitle: string;
    directItems: Array<{ label: string; value: string }>;
    locationTitle: string;
    locationText: string;
  };
};

export const siteContent: Record<Language, SiteCopy> = {
  en: {
    meta: {
      siteTitle: "Tawasul Contact Solutions",
      siteDescription:
        "Premium bilingual outsourced call center solutions for tourism, flight booking, and service-driven businesses.",
    },
    brand: {
      short: "Tawasul",
      arabic: "تواصل",
      full: "Tawasul Contact Solutions",
      tagline: "Remote contact center excellence for business-critical conversations.",
    },
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      why: "Why Choose Us",
      contact: "Contact Us",
    },
    shared: {
      switchLanguage: "العربية",
      primaryCta: "Request a Consultation",
      secondaryCta: "Explore Services",
      footerStatement:
        "Tawasul Contact Solutions helps businesses deliver responsive, multilingual, and brand-aligned customer communication.",
      contactPrompt: "Speak with our team about your operational needs.",
      footerServiceLabels: [
        "Tourism support",
        "Flight booking support",
        "Customer care outsourcing",
        "Multilingual service teams",
      ],
      sectionLabels: {
        overview: "Company Overview",
        services: "Core Services",
        values: "Our Values",
        advantages: "Business Advantages",
        contact: "Get in Touch",
      },
    },
    home: {
      eyebrow: "Remote contact center excellence",
      title:
        "Premium outsourced call center support built for travel, booking, and service-focused businesses.",
      subtitle:
        "Tawasul Contact Solutions delivers bilingual customer communication, reservation support, and scalable remote call center operations for businesses that need dependable service capacity and brand-safe conversations.",
      stats: [
        { value: "24/7", label: "Operational availability" },
        { value: "B2B", label: "Service model" },
        { value: "EN / AR", label: "Core language coverage" },
      ],
      overviewTitle: "A strategic outsourcing partner for high-volume customer interactions",
      overviewText:
        "We support tourism companies, flight booking businesses, and service-driven organizations that require reliable inbound and outbound communication. Our model is designed to strengthen customer experience while reducing operational strain and preserving service consistency.",
      serviceHighlights: [
        {
          title: "Tourism call center operations",
          description:
            "Reservation inquiries, itinerary support, confirmations, and customer follow-up for travel brands.",
        },
        {
          title: "Flight booking support",
          description:
            "Handling booking assistance, schedule changes, passenger communication, and service continuity.",
        },
        {
          title: "Outsourced customer support",
          description:
            "Professional multichannel customer care aligned with your standards and operational workflows.",
        },
        {
          title: "Scalable remote teams",
          description:
            "Flexible staffing models for overflow periods, after-hours support, and business growth phases.",
        },
      ],
      whyTitle: "Why businesses trust Tawasul",
      whyItems: [
        {
          title: "Business-first service structure",
          description:
            "Every workflow is designed around response quality, accountability, and measurable operational value.",
        },
        {
          title: "Multilingual customer handling",
          description:
            "English and Arabic support helps businesses serve broader customer segments with clarity and confidence.",
        },
        {
          title: "Continuous availability",
          description:
            "Coverage models can support after-hours, peak-volume windows, and around-the-clock service needs.",
        },
        {
          title: "Premium brand presentation",
          description:
            "Our teams are positioned to represent your business with professionalism, consistency, and care.",
        },
      ],
      ctaTitle: "Need a dependable remote call center partner?",
      ctaText:
        "Let us help you design a support model that fits your sector, service volume, and customer expectations.",
    },
    about: {
      eyebrow: "About Tawasul",
      title: "Built to extend your customer communication with discipline and trust.",
      intro:
        "Tawasul Contact Solutions was shaped around a simple idea: businesses should be able to scale customer communication without compromising professionalism, responsiveness, or brand integrity.",
      storyTitle: "Our story",
      storyText:
        "We focus on remote contact center services for companies that depend on accurate, timely, and reassuring communication. From travel and booking support to general customer service operations, we help organizations maintain service quality while expanding capacity through an agile outsourcing model.",
      missionTitle: "Mission",
      missionText:
        "To provide businesses with premium outsourced contact center services that improve responsiveness, support continuity, and strengthen customer trust.",
      visionTitle: "Vision",
      visionText:
        "To become a preferred regional partner for bilingual remote call center operations in sectors where communication quality directly shapes customer confidence.",
      valuesHeading: "The principles behind our service culture",
      values: [
        {
          title: "Professional representation",
          description:
            "We communicate in a way that protects and elevates the brands we support.",
        },
        {
          title: "Operational reliability",
          description:
            "Consistency, responsiveness, and process discipline are central to every service engagement.",
        },
        {
          title: "Client partnership",
          description:
            "We work as an operational extension of our clients rather than a detached external vendor.",
        },
        {
          title: "Continuous improvement",
          description:
            "We refine workflows, quality controls, and team readiness to support long-term performance.",
        },
      ],
    },
    services: {
      eyebrow: "Service portfolio",
      title: "Outsourced call center services tailored to operationally demanding businesses.",
      intro:
        "Our services are structured for companies that require responsive communication, dependable escalation paths, and service coverage that can scale with demand.",
      items: [
        {
          id: "tourism",
          title: "Call center for tourism companies",
          description:
            "Customer communication support for travel agencies, tour operators, and hospitality-linked service providers.",
          bullets: [
            "Reservation and package inquiries",
            "Booking confirmations and follow-up",
            "Travel support communication",
          ],
        },
        {
          id: "flight",
          title: "Flight booking support",
          description:
            "Dedicated assistance for airlines, ticketing providers, and booking platforms managing high inquiry volumes.",
          bullets: [
            "Booking assistance and amendments",
            "Schedule update communication",
            "Passenger support coordination",
          ],
        },
        {
          id: "outsourced",
          title: "General outsourced call center",
          description:
            "Flexible remote call center operations for businesses seeking professional inbound and outbound support capacity.",
          bullets: [
            "Inbound call handling",
            "Outbound follow-up campaigns",
            "Overflow and seasonal support",
          ],
        },
        {
          id: "customer-support",
          title: "Customer support services",
          description:
            "Brand-aligned support designed to improve satisfaction, retention, and service continuity.",
          bullets: [
            "Complaint handling and resolution logging",
            "Order or service status updates",
            "Escalation and callback workflows",
          ],
        },
        {
          id: "multilingual",
          title: "Multilingual communication",
          description:
            "English and Arabic communication for organizations serving diverse customer bases.",
          bullets: [
            "Arabic-language customer handling",
            "English-language business communication",
            "Consistent script and tone alignment",
          ],
        },
        {
          id: "24-7",
          title: "After-hours and 24/7 coverage",
          description:
            "Availability models that help businesses remain reachable during peak demand and outside standard office hours.",
          bullets: [
            "Extended-hours support setup",
            "Emergency and urgent inquiry coverage",
            "Continuity planning for busy periods",
          ],
        },
      ],
      deliveryApproach: "Delivery approach",
      processTitle: "How we work with clients",
      processSteps: [
        {
          step: "01",
          title: "Operational assessment",
          description:
            "We review your service needs, peak volumes, communication priorities, and sector requirements.",
        },
        {
          step: "02",
          title: "Workflow alignment",
          description:
            "Scripts, escalation paths, service rules, and reporting expectations are structured around your brand.",
        },
        {
          step: "03",
          title: "Team activation",
          description:
            "Dedicated or shared-agent models are activated according to your support scope and timeline.",
        },
        {
          step: "04",
          title: "Quality continuity",
          description:
            "We maintain performance through monitoring, refinement, and consistent operational communication.",
        },
      ],
    },
    why: {
      eyebrow: "Why choose us",
      title: "A remote call center partner designed for resilience, quality, and cost control.",
      intro:
        "Businesses choose Tawasul when they need more than extra headcount. They need a structured support operation that protects customer experience while improving coverage and efficiency.",
      items: [
        {
          title: "Sector-aware support",
          description:
            "We understand the urgency and precision required in tourism, booking, and customer-facing service environments.",
        },
        {
          title: "24/7 availability options",
          description:
            "Coverage models are designed to maintain responsiveness during extended hours and high-volume periods.",
        },
        {
          title: "Multilingual agents",
          description:
            "English and Arabic capabilities support clearer communication across regional and international audiences.",
        },
        {
          title: "Technology-enabled workflows",
          description:
            "Structured processes, monitoring discipline, and reporting habits help maintain service consistency.",
        },
        {
          title: "Cost-efficient scaling",
          description:
            "Outsourcing allows businesses to expand customer support capacity with greater financial flexibility.",
        },
        {
          title: "Trustworthy brand handling",
          description:
            "We position every interaction to reflect professionalism, reassurance, and control.",
        },
      ],
      proofTitle: "What clients gain",
      proofHeading: "Operational outcomes that support growth and continuity",
      proofPoints: [
        "Reduced operational pressure during peak support periods",
        "Faster response handling without compromising tone or professionalism",
        "Reliable bilingual support for broader customer accessibility",
        "A flexible outsourcing model that supports business growth",
      ],
    },
    contact: {
      eyebrow: "Contact us",
      title: "Start a conversation about your support requirements.",
      intro:
        "Whether you need a dedicated outsourced team, bilingual customer support, or overflow coverage, we can help you shape the right operating model.",
      formTitle: "Send us your inquiry",
      formHeading: "Let us discuss the right support model for your business",
      formFields: {
        name: "Full Name",
        company: "Company Name",
        email: "Business Email",
        phone: "Phone Number",
        message: "Tell us about your support needs",
        submit: "Submit Inquiry",
        success: "Thank you. Your inquiry has been received. We will contact you soon.",
      },
      directTitle: "Direct contact",
      directItems: [
        { label: "Phone", value: "+20 XX XXX XXXX" },
        { label: "Email", value: "info@tawasul-cs.com" },
        { label: "WhatsApp", value: "+20 XX XXX XXXX" },
      ],
      locationTitle: "Location",
      locationText: "Office location details will be added here soon.",
    },
  },
  ar: {
    meta: {
      siteTitle: "تواصل لحلول مراكز الاتصال",
      siteDescription:
        "حلول احترافية ثنائية اللغة لمراكز الاتصال الخارجية للشركات العاملة في السياحة والحجوزات والخدمات.",
    },
    brand: {
      short: "Tawasul",
      arabic: "تواصل",
      full: "Tawasul Contact Solutions",
      tagline: "تميز في مراكز الاتصال عن بُعد للمحادثات المهمة للأعمال.",
    },
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      why: "لماذا نحن",
      contact: "تواصل معنا",
    },
    shared: {
      switchLanguage: "English",
      primaryCta: "اطلب استشارة",
      secondaryCta: "استعرض الخدمات",
      footerStatement:
        "تساعد تواصل الشركات على تقديم تواصل احترافي ومتعدد اللغات ومتوافق مع هوية العلامة التجارية.",
      contactPrompt: "تحدث مع فريقنا حول احتياجاتك التشغيلية.",
      footerServiceLabels: [
        "دعم السياحة",
        "دعم حجوزات الطيران",
        "إسناد خدمة العملاء",
        "فرق متعددة اللغات",
      ],
      sectionLabels: {
        overview: "نبذة عن الشركة",
        services: "الخدمات الأساسية",
        values: "قيمنا",
        advantages: "مزايا الأعمال",
        contact: "تواصل معنا",
      },
    },
    home: {
      eyebrow: "تميز مراكز الاتصال عن بُعد",
      title:
        "دعم احترافي خارجي لمراكز الاتصال مصمم لقطاعات السفر والحجوزات والأعمال الخدمية.",
      subtitle:
        "تقدم تواصل لحلول مراكز الاتصال خدمات اتصال ثنائية اللغة، ودعماً للحجوزات، وعمليات تشغيل مرنة لمراكز الاتصال عن بُعد للشركات التي تحتاج إلى سعة تشغيلية موثوقة وتواصل يعكس علامتها التجارية باحترافية.",
      stats: [
        { value: "24/7", label: "جاهزية تشغيلية" },
        { value: "B2B", label: "نموذج الخدمة" },
        { value: "AR / EN", label: "اللغات الأساسية" },
      ],
      overviewTitle: "شريك تشغيلي استراتيجي لإدارة التفاعلات عالية الكثافة مع العملاء",
      overviewText:
        "نخدم شركات السياحة، وشركات حجز الطيران، والمنشآت التي تحتاج إلى تواصل موثوق مع العملاء عبر المكالمات الواردة والصادرة. تم تصميم نموذجنا لتعزيز تجربة العميل وتقليل الضغط التشغيلي مع الحفاظ على جودة الخدمة واتساقها.",
      serviceHighlights: [
        {
          title: "مركز اتصال لشركات السياحة",
          description:
            "إدارة استفسارات الحجوزات، ودعم برامج الرحلات، والتأكيدات، والمتابعة مع العملاء لعلامات السفر.",
        },
        {
          title: "دعم حجوزات الطيران",
          description:
            "المساعدة في الحجوزات، وتغييرات المواعيد، والتواصل مع المسافرين، واستمرارية الخدمة.",
        },
        {
          title: "خدمة عملاء خارجية للشركات",
          description:
            "رعاية عملاء احترافية متعددة القنوات ومتوافقة مع معاييرك وإجراءاتك التشغيلية.",
        },
        {
          title: "فرق تشغيل مرنة عن بُعد",
          description:
            "نماذج توظيف مرنة لفترات الذروة، وخدمة ما بعد الدوام، ومراحل نمو الأعمال.",
        },
      ],
      whyTitle: "لماذا تثق الشركات في تواصل",
      whyItems: [
        {
          title: "هيكل خدمة مصمم للأعمال",
          description:
            "كل إجراء تشغيلي مبني على جودة الاستجابة، والمساءلة، والقيمة التشغيلية القابلة للقياس.",
        },
        {
          title: "تعامل متعدد اللغات مع العملاء",
          description:
            "الدعم بالعربية والإنجليزية يساعد الشركات على خدمة شرائح أوسع بوضوح وثقة.",
        },
        {
          title: "استمرارية وتوفر دائم",
          description:
            "يمكن تهيئة نماذج تغطية للعمل خارج أوقات الدوام وفترات الضغط العالي وعلى مدار الساعة.",
        },
        {
          title: "تمثيل راقٍ للعلامة التجارية",
          description:
            "فرقنا مؤهلة لتمثيل شركتك باحترافية واتساق واهتمام بالتفاصيل.",
        },
      ],
      ctaTitle: "هل تحتاج إلى شريك موثوق لمركز اتصال عن بُعد؟",
      ctaText:
        "دعنا نساعدك في تصميم نموذج دعم يناسب قطاعك وحجم الخدمة وتوقعات عملائك.",
    },
    about: {
      eyebrow: "عن تواصل",
      title: "بُنينا لنعزز تواصلك مع العملاء بانضباط وثقة.",
      intro:
        "انطلقت تواصل لحلول مراكز الاتصال من فكرة واضحة: ينبغي أن تتمكن الشركات من توسيع تواصلها مع العملاء دون التضحية بالاحترافية أو سرعة الاستجابة أو سلامة صورتها أمام السوق.",
      storyTitle: "قصتنا",
      storyText:
        "نركز على خدمات مراكز الاتصال عن بُعد للشركات التي تعتمد على تواصل دقيق وفي الوقت المناسب ويبعث على الاطمئنان. ومن دعم السفر والحجوزات إلى خدمات العملاء العامة، نساعد المؤسسات على الحفاظ على جودة الخدمة مع توسيع طاقتها التشغيلية من خلال نموذج إسناد خارجي مرن.",
      missionTitle: "رسالتنا",
      missionText:
        "تقديم خدمات مراكز اتصال خارجية احترافية للشركات بما يعزز سرعة الاستجابة واستمرارية الدعم ويقوي ثقة العملاء.",
      visionTitle: "رؤيتنا",
      visionText:
        "أن نكون شريكاً إقليمياً مفضلاً في تشغيل مراكز الاتصال الثنائية اللغة عن بُعد في القطاعات التي تؤثر فيها جودة التواصل مباشرة في ثقة العميل.",
      valuesHeading: "القيم التي توجه أسلوب عملنا",
      values: [
        {
          title: "تمثيل احترافي",
          description:
            "نتواصل بطريقة تحفظ العلامات التجارية التي نخدمها وترفع من قيمتها.",
        },
        {
          title: "اعتمادية تشغيلية",
          description:
            "الثبات، وسرعة الاستجابة، والانضباط في الإجراءات عناصر أساسية في كل شراكة تشغيلية.",
        },
        {
          title: "شراكة حقيقية مع العميل",
          description:
            "نعمل كامتداد تشغيلي لعملائنا، لا كمورد خارجي منفصل عن واقع أعمالهم.",
        },
        {
          title: "تطوير مستمر",
          description:
            "نحسن الإجراءات وضبط الجودة وجهوزية الفرق باستمرار لدعم الأداء طويل المدى.",
        },
      ],
    },
    services: {
      eyebrow: "محفظة الخدمات",
      title: "خدمات مراكز اتصال خارجية مصممة للأعمال ذات المتطلبات التشغيلية المرتفعة.",
      intro:
        "تمت هيكلة خدماتنا للشركات التي تحتاج إلى تواصل سريع، ومسارات تصعيد واضحة، وتغطية تشغيلية قابلة للتوسع حسب الطلب.",
      items: [
        {
          id: "tourism",
          title: "مركز اتصال لشركات السياحة",
          description:
            "دعم التواصل مع العملاء لوكالات السفر ومنظمي الرحلات والجهات المرتبطة بخدمات الضيافة والسياحة.",
          bullets: [
            "استفسارات الحجوزات والباقات",
            "تأكيد الحجوزات والمتابعة",
            "التواصل الداعم لرحلات العملاء",
          ],
        },
        {
          id: "flight",
          title: "دعم حجوزات الطيران",
          description:
            "مساندة مخصصة لشركات الطيران ومزودي التذاكر ومنصات الحجز ذات حجم الاستفسارات المرتفع.",
          bullets: [
            "المساعدة في الحجز والتعديلات",
            "التواصل حول تحديثات الجداول",
            "تنسيق دعم المسافرين",
          ],
        },
        {
          id: "outsourced",
          title: "مركز اتصال خارجي عام",
          description:
            "تشغيل مرن لمراكز الاتصال عن بُعد للشركات التي تحتاج إلى سعة احترافية في المكالمات الواردة والصادرة.",
          bullets: [
            "استقبال المكالمات الواردة",
            "حملات المتابعة الصادرة",
            "الدعم الموسمي أو وقت الذروة",
          ],
        },
        {
          id: "customer-support",
          title: "خدمات دعم العملاء",
          description:
            "دعم متوافق مع هوية العلامة التجارية بهدف رفع الرضا وتحسين الاحتفاظ واستمرارية الخدمة.",
          bullets: [
            "معالجة الشكاوى وتوثيق الحلول",
            "تحديثات حالة الطلب أو الخدمة",
            "التصعيد وجدولة معاودة الاتصال",
          ],
        },
        {
          id: "multilingual",
          title: "تواصل متعدد اللغات",
          description:
            "التواصل بالعربية والإنجليزية للمؤسسات التي تخدم شرائح متنوعة من العملاء.",
          bullets: [
            "خدمة العملاء باللغة العربية",
            "تواصل الأعمال باللغة الإنجليزية",
            "اتساق النصوص ونبرة التواصل",
          ],
        },
        {
          id: "24-7",
          title: "تغطية بعد الدوام وعلى مدار الساعة",
          description:
            "نماذج جاهزية تساعد الشركات على البقاء متاحة في أوقات الذروة وخارج ساعات العمل المعتادة.",
          bullets: [
            "إعداد دعم ممتد الساعات",
            "تغطية الاستفسارات العاجلة",
            "خطط استمرارية لفترات الضغط",
          ],
        },
      ],
      deliveryApproach: "منهجية التنفيذ",
      processTitle: "كيف نعمل مع العملاء",
      processSteps: [
        {
          step: "01",
          title: "تقييم تشغيلي",
          description:
            "نراجع احتياجات الخدمة، وفترات الذروة، وأولويات التواصل، ومتطلبات القطاع.",
        },
        {
          step: "02",
          title: "مواءمة الإجراءات",
          description:
            "نهيكل النصوص ومسارات التصعيد وقواعد الخدمة والتقارير بما يتوافق مع علامتك التجارية.",
        },
        {
          step: "03",
          title: "تفعيل الفريق",
          description:
            "يتم تشغيل نموذج الفرق المخصصة أو المشتركة بحسب نطاق الدعم والجدول الزمني المطلوب.",
        },
        {
          step: "04",
          title: "استمرارية الجودة",
          description:
            "نحافظ على الأداء عبر المتابعة والتحسين والتواصل التشغيلي المستمر.",
        },
      ],
    },
    why: {
      eyebrow: "لماذا نحن",
      title: "شريك لمراكز الاتصال عن بُعد يجمع بين المرونة والجودة والتحكم في التكلفة.",
      intro:
        "تختار الشركات تواصل عندما تحتاج إلى أكثر من مجرد زيادة عدد الموظفين. إنها تحتاج إلى تشغيل دعم منظم يحافظ على تجربة العميل ويحسن التغطية والكفاءة في الوقت نفسه.",
      items: [
        {
          title: "فهم لطبيعة القطاعات",
          description:
            "ندرك مستوى الدقة والسرعة المطلوبين في السياحة والحجوزات وبيئات الخدمة المباشرة.",
        },
        {
          title: "خيارات توفر 24/7",
          description:
            "يتم تصميم نماذج التغطية للحفاظ على سرعة الاستجابة خلال الساعات الممتدة وفترات الضغط.",
        },
        {
          title: "وكلاء متعددون للغات",
          description:
            "القدرة على التواصل بالعربية والإنجليزية تدعم وضوح الخدمة مع جمهور محلي ودولي.",
        },
        {
          title: "إجراءات مدعومة بالتقنية",
          description:
            "العمليات المنظمة والانضباط في المتابعة والتقارير يساعدان على الحفاظ على اتساق الخدمة.",
        },
        {
          title: "توسع فعال من حيث التكلفة",
          description:
            "الإسناد الخارجي يمنح الشركات قدرة أكبر على توسيع الدعم مع مرونة مالية أفضل.",
        },
        {
          title: "تمثيل موثوق للعلامة التجارية",
          description:
            "نوجه كل تفاعل ليعكس الاحترافية والطمأنينة والسيطرة التشغيلية.",
        },
      ],
      proofTitle: "ما الذي يستفيده العملاء",
      proofHeading: "نتائج تشغيلية تدعم النمو والاستمرارية",
      proofPoints: [
        "تقليل الضغط التشغيلي خلال فترات الذروة",
        "رفع سرعة الاستجابة دون المساس بالاحترافية",
        "دعم ثنائي اللغة يوسع سهولة الوصول للعملاء",
        "نموذج إسناد مرن يدعم توسع الأعمال",
      ],
    },
    contact: {
      eyebrow: "تواصل معنا",
      title: "ابدأ معنا حواراً حول احتياجاتك في الدعم والتشغيل.",
      intro:
        "سواء كنت بحاجة إلى فريق خارجي مخصص، أو دعم عملاء ثنائي اللغة، أو تغطية لفترات الضغط، يمكننا مساعدتك في بناء النموذج التشغيلي المناسب.",
      formTitle: "أرسل لنا استفسارك",
      formHeading: "دعنا نناقش نطاق الخدمة المناسب لأعمالك",
      formFields: {
        name: "الاسم الكامل",
        company: "اسم الشركة",
        email: "البريد الإلكتروني للأعمال",
        phone: "رقم الهاتف",
        message: "أخبرنا باحتياجاتك في الدعم",
        submit: "إرسال الاستفسار",
        success: "شكراً لك. تم استلام استفسارك وسنتواصل معك قريباً.",
      },
      directTitle: "بيانات التواصل",
      directItems: [
        { label: "الهاتف", value: "+20 XX XXX XXXX" },
        { label: "البريد الإلكتروني", value: "info@tawasul-cs.com" },
        { label: "واتساب", value: "+20 XX XXX XXXX" },
      ],
      locationTitle: "الموقع",
      locationText: "سيتم إضافة تفاصيل موقع المكتب هنا قريباً.",
    },
  },
};

export function normalizePath(path: string) {
  if (!path) return "/";
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path;
}

export function getLanguageFromPath(path: string): Language {
  return normalizePath(path).startsWith("/ar") ? "ar" : "en";
}

export function stripLanguagePrefix(path: string) {
  const normalized = normalizePath(path);

  if (normalized === "/ar") {
    return "/";
  }

  if (normalized.startsWith("/ar/")) {
    return normalized.replace("/ar", "");
  }

  return normalized || "/";
}

export function getAlternatePath(path: string) {
  const basePath = stripLanguagePrefix(path);
  const language = getLanguageFromPath(path);

  if (language === "en") {
    return basePath === "/" ? "/ar" : `/ar${basePath}`;
  }

  return basePath;
}

export function getPathPrefix(language: Language) {
  return language === "ar" ? "/ar" : "";
}

export function isArabic(language: Language) {
  return language === "ar";
}
