/*
Content system for the bilingual corporate site.
Copy is intentionally concise, operational, and conversion-oriented.
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
    footerIndustryLabels: string[];
    coverageLabel: string;
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
    proofTitle: string;
    proofIntro: string;
    proofItems: string[];
    overviewTitle: string;
    overviewText: string;
    serviceHighlights: Array<{ title: string; description: string }>;
    industryTitle: string;
    industryIntro: string;
    industries: string[];
    whyTitle: string;
    whyItems: AdvantageItem[];
    ctaTitle: string;
    ctaText: string;
    ctaButtonLabel: string;
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
    catalogTitle: string;
    items: ServiceItem[];
    deliveryApproach: string;
    processTitle: string;
    processIntro: string;
    processSteps: Array<{ step: string; title: string; description: string }>;
    supportModelsTitle: string;
    supportModels: string[];
  };
  why: {
    eyebrow: string;
    title: string;
    intro: string;
    items: AdvantageItem[];
    proofTitle: string;
    proofHeading: string;
    proofText: string;
    proofPoints: string[];
    ctaLabel: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    formTitle: string;
    formHeading: string;
    formIntro: string;
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
    directIntro: string;
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
        "Bilingual outsourced contact center support for travel, booking, and service-led businesses.",
    },
    brand: {
      short: "Tawasul",
      arabic: "تواصل",
      full: "Tawasul Contact Solutions",
      tagline: "Structured bilingual support for business-critical customer communication.",
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      why: "Why Tawasul",
      contact: "Contact",
    },
    shared: {
      switchLanguage: "العربية",
      primaryCta: "Request a Consultation",
      secondaryCta: "Explore Services",
      footerStatement:
        "Tawasul helps travel, booking, and service businesses build more responsive customer communication with bilingual remote support teams.",
      contactPrompt: "Tell us about your workflow, coverage needs, or support pressure points.",
      footerServiceLabels: [
        "Travel support operations",
        "Flight booking assistance",
        "Bilingual customer care",
        "Overflow and after-hours coverage",
      ],
      footerIndustryLabels: [
        "Travel agencies",
        "Booking platforms",
        "Tour and hospitality services",
        "Customer-facing service businesses",
      ],
      coverageLabel: "English and Arabic coverage",
      sectionLabels: {
        overview: "Company Overview",
        services: "Core Services",
        values: "How We Work",
        advantages: "Why Tawasul",
        contact: "Next Step",
      },
    },
    home: {
      eyebrow: "Bilingual contact center support",
      title: "Bilingual Contact Center Support Built For Travel, Booking, And Service Businesses.",
      subtitle:
        "Tawasul helps companies manage customer communication with dependable English and Arabic support, reservation assistance, overflow handling, and scalable remote service operations.",
      stats: [
        { value: "English + Arabic", label: "Core service languages" },
        { value: "Flexible coverage", label: "Daytime, extended-hours, or overflow support" },
        { value: "B2B delivery", label: "Structured for service-led businesses" },
      ],
      proofTitle: "Built for more than overflow alone",
      proofIntro: "Tawasul is designed for businesses that need steadier customer handling, clearer workflows, and service continuity when demand rises.",
      proofItems: [
        "Built for customer-facing operations where missed inquiries affect revenue and trust",
        "Aligned with your workflows, escalation paths, and service expectations",
        "Designed to reduce internal pressure without compromising communication quality",
      ],
      overviewTitle: "A support partner for high-volume customer communication",
      overviewText:
        "We support organizations that need faster response handling, steadier customer care, and more flexible communication capacity. From reservations and booking inquiries to after-hours coverage and overflow support, our teams help businesses stay reachable, organized, and service-consistent.",
      serviceHighlights: [
        {
          title: "Travel support operations",
          description:
            "Inquiry handling, confirmations, itinerary-related communication, and customer follow-up for travel businesses.",
        },
        {
          title: "Flight booking assistance",
          description:
            "Support for reservations, amendments, schedule-related communication, and passenger-facing service workflows.",
        },
        {
          title: "Outsourced customer care",
          description:
            "Structured inbound and outbound support aligned with your service rules, tone, and escalation standards.",
        },
        {
          title: "Scalable remote teams",
          description:
            "Flexible support capacity for busy periods, extended hours, growth phases, and operational overflow.",
        },
      ],
      industryTitle: "Where our model fits best",
      industryIntro:
        "We work best in service environments where inquiry speed, reservation accuracy, and customer reassurance all matter.",
      industries: [
        "Travel agencies and reservation teams",
        "Flight and ticketing operations",
        "Hospitality-linked service providers",
        "Customer-facing businesses with growing support demand",
      ],
      whyTitle: "Why companies choose Tawasul",
      whyItems: [
        {
          title: "Bilingual customer handling",
          description:
            "English and Arabic support helps you serve wider customer segments with clearer communication.",
        },
        {
          title: "Dependable response handling",
          description:
            "We help teams stay responsive during busy periods, extended hours, and operational peaks.",
        },
        {
          title: "Flexible service coverage",
          description:
            "Support models can be shaped around dedicated, shared, overflow, or after-hours requirements.",
        },
        {
          title: "Professional service presentation",
          description:
            "Customer communication is managed with consistency, care, and alignment to your brand standards.",
        },
      ],
      ctaTitle: "Need a more reliable customer support operation?",
      ctaText:
        "We help businesses build support models that improve responsiveness, protect service quality, and reduce internal pressure during peak demand.",
      ctaButtonLabel: "Discuss Your Support Model",
    },
    about: {
      eyebrow: "About Tawasul",
      title: "Built to strengthen customer communication without adding internal complexity.",
      intro:
        "Tawasul was created for businesses that need more communication capacity without losing control over service quality, customer experience, or day-to-day operating discipline.",
      storyTitle: "Who we are",
      storyText:
        "We work with travel, booking, and service-led businesses that cannot afford missed inquiries, inconsistent customer handling, or weak after-hours responsiveness. Our role is to extend internal teams with structured outsourced support that stays aligned to real workflows and customer expectations.",
      missionTitle: "Our mission",
      missionText:
        "To help businesses deliver responsive, reliable, and well-managed customer communication through structured outsourced support.",
      visionTitle: "Our vision",
      visionText:
        "To become a trusted bilingual contact center partner for service-driven businesses across travel, booking, and customer-facing sectors.",
      valuesHeading: "How we work",
      values: [
        {
          title: "Professional representation",
          description:
            "We handle customer communication in a way that supports credibility, consistency, and confidence in the businesses we represent.",
        },
        {
          title: "Operational discipline",
          description:
            "Coverage, escalation, follow-up, and reporting are managed with structure rather than ad-hoc effort.",
        },
        {
          title: "Client alignment",
          description:
            "We align our workflows, tone, and service rules with the way your business actually operates.",
        },
        {
          title: "Continuous improvement",
          description:
            "Support quality improves through active review, clearer processes, and stronger day-to-day coordination.",
        },
      ],
    },
    services: {
      eyebrow: "Outsourced support services",
      title: "Outsourced contact center services designed around real operating needs.",
      intro:
        "Our services are built for businesses that need faster response handling, structured customer support, and flexible service capacity without building a larger in-house team.",
      catalogTitle: "Service lines that improve response handling and support continuity",
      items: [
        {
          id: "travel-support",
          title: "Travel support operations",
          description:
            "Support for travel agencies, tour operators, and booking teams that need dependable inquiry handling, confirmations, and customer follow-up.",
          bullets: [
            "Reservation and package inquiries",
            "Customer follow-up and confirmations",
            "Travel-related service communication",
          ],
        },
        {
          id: "flight-booking",
          title: "Flight booking assistance",
          description:
            "Help with reservations, amendments, passenger communication, and schedule-related service interactions.",
          bullets: [
            "Booking assistance and changes",
            "Passenger updates and communication",
            "Service continuity during busy periods",
          ],
        },
        {
          id: "customer-care",
          title: "Outsourced customer care",
          description:
            "Inbound and outbound customer support aligned with your processes, service expectations, and escalation rules.",
          bullets: [
            "Inbound support handling",
            "Outbound follow-up workflows",
            "Escalation and callback coordination",
          ],
        },
        {
          id: "multilingual",
          title: "Multilingual customer communication",
          description:
            "English and Arabic support for businesses serving regional and international customers.",
          bullets: [
            "Arabic-language customer handling",
            "English-language customer communication",
            "Consistent script and tone alignment",
          ],
        },
        {
          id: "overflow-support",
          title: "Overflow and seasonal support",
          description:
            "Additional support capacity for growing businesses, peak periods, campaign volume, or operational bottlenecks.",
          bullets: [
            "Overflow inquiry handling",
            "Seasonal or campaign support",
            "Scalable response capacity",
          ],
        },
        {
          id: "extended-hours",
          title: "Extended-hours and after-hours coverage",
          description:
            "Coverage models that help businesses remain reachable outside core office hours or during high-demand windows.",
          bullets: [
            "Extended-hours support setup",
            "After-hours customer communication",
            "Continuity for urgent inquiries",
          ],
        },
      ],
      deliveryApproach: "Delivery approach",
      processTitle: "How we launch and manage support",
      processIntro:
        "Every engagement starts with service requirements, communication rules, and the coverage model that best fits your business.",
      processSteps: [
        {
          step: "01",
          title: "Assess requirements",
          description:
            "We review support scope, operating hours, inquiry types, escalation needs, and pressure points.",
        },
        {
          step: "02",
          title: "Align workflows",
          description:
            "Scripts, service rules, response handling, and escalation paths are structured around your workflow.",
        },
        {
          step: "03",
          title: "Activate the team",
          description:
            "Support is launched through a dedicated, shared, overflow, or after-hours model based on the agreed scope.",
        },
        {
          step: "04",
          title: "Monitor and improve",
          description:
            "We maintain service consistency through communication, review, and ongoing process refinement.",
        },
      ],
      supportModelsTitle: "Support models we can structure",
      supportModels: [
        "Dedicated support teams",
        "Shared service models",
        "Overflow support capacity",
        "After-hours coverage arrangements",
      ],
    },
    why: {
      eyebrow: "Why Tawasul",
      title: "A more dependable way to extend your customer support capacity.",
      intro:
        "Tawasul is built for businesses that need more than extra staffing. We provide structured remote support that improves coverage, protects customer experience, and helps teams stay responsive under pressure.",
      items: [
        {
          title: "Bilingual customer handling",
          description:
            "English and Arabic support improves accessibility and reduces friction across diverse customer groups.",
        },
        {
          title: "Flexible service coverage",
          description:
            "Coverage can be shaped around standard hours, extended hours, overflow demand, or more dedicated support needs.",
        },
        {
          title: "Travel and booking workflow awareness",
          description:
            "Our service model is well suited to reservation-heavy and customer-facing environments where accuracy matters.",
        },
        {
          title: "Structured escalation and process alignment",
          description:
            "Support works better when response rules, escalation logic, and follow-up steps are clearly managed.",
        },
        {
          title: "Cost-efficient scaling",
          description:
            "Businesses can expand customer communication capacity without carrying the full cost of in-house growth.",
        },
        {
          title: "Consistent service presentation",
          description:
            "Every interaction should feel organized, respectful, and aligned with the reputation of the business behind it.",
        },
      ],
      proofTitle: "What this means for your business",
      proofHeading: "Practical outcomes, not generic promises",
      proofText:
        "Our model helps businesses remain reachable, organized, and service-consistent when customer communication volumes increase or operating hours expand.",
      proofPoints: [
        "Faster customer response during busy periods",
        "Less pressure on internal teams",
        "More consistent English and Arabic customer handling",
        "Flexible support capacity without full in-house expansion",
      ],
      ctaLabel: "Talk to Our Team",
    },
    contact: {
      eyebrow: "Contact Tawasul",
      title: "Let’s build the right support model for your business.",
      intro:
        "Whether you need bilingual customer support, overflow coverage, or a dedicated outsourced team, we can help you define a support model that fits your workflow and service expectations.",
      formTitle: "Tell us what you need",
      formHeading: "Start the conversation with your support scope and priorities",
      formIntro:
        "Share your business type, support scope, and current challenges. Our team will review your inquiry and contact you with the most suitable next step.",
      formFields: {
        name: "Full name",
        company: "Company name",
        email: "Business email",
        phone: "Phone number",
        message: "Tell us about your support needs",
        submit: "Send Inquiry",
        success: "Thank you. Your inquiry has been received. Our team will contact you shortly.",
      },
      directTitle: "Speak with us directly",
      directIntro:
        "If you already know what you need, reach out through the channel that fits your workflow best.",
      directItems: [
        { label: "Email", value: "info@tawasul-cs.com" },
        { label: "Next step", value: "Share your support scope by email and we will guide the next step." },
        { label: "Languages", value: "English and Arabic support" },
      ],
      locationTitle: "Service coordination",
      locationText:
        "We coordinate support operations remotely and can share location and engagement details during consultation.",
    },
  },
  ar: {
    meta: {
      siteTitle: "تواصل لحلول مراكز الاتصال",
      siteDescription:
        "دعم ثنائي اللغة لمراكز الاتصال الخارجية للشركات العاملة في السفر والحجوزات والخدمات.",
    },
    brand: {
      short: "Tawasul",
      arabic: "تواصل",
      full: "Tawasul Contact Solutions",
      tagline: "دعم منظم ثنائي اللغة للمحادثات المهمة في خدمة العملاء.",
    },
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      why: "لماذا تواصل",
      contact: "تواصل معنا",
    },
    shared: {
      switchLanguage: "English",
      primaryCta: "اطلب استشارة",
      secondaryCta: "استعرض الخدمات",
      footerStatement:
        "تساعد تواصل شركات السفر والحجوزات والأعمال الخدمية على بناء تواصل أكثر سرعة وانتظاماً من خلال فرق دعم عن بُعد ثنائية اللغة.",
      contactPrompt: "أخبرنا بطبيعة سير العمل أو التغطية المطلوبة أو التحديات الحالية في الدعم.",
      footerServiceLabels: [
        "عمليات دعم السفر",
        "مساندة حجوزات الطيران",
        "خدمة عملاء ثنائية اللغة",
        "تغطية فترات الضغط وخارج الدوام",
      ],
      footerIndustryLabels: [
        "وكالات السفر",
        "منصات الحجز",
        "الخدمات السياحية والضيافة",
        "الأعمال الخدمية التي تتعامل مباشرة مع العملاء",
      ],
      coverageLabel: "تغطية بالعربية والإنجليزية",
      sectionLabels: {
        overview: "نبذة تشغيلية",
        services: "الخدمات الأساسية",
        values: "أسلوب عملنا",
        advantages: "لماذا تواصل",
        contact: "الخطوة التالية",
      },
    },
    home: {
      eyebrow: "دعم ثنائي اللغة لمراكز الاتصال",
      title: "دعم ثنائي اللغة لمراكز الاتصال مصمم لقطاعات السفر والحجوزات والأعمال الخدمية.",
      subtitle:
        "تساعد تواصل الشركات على إدارة تواصل العملاء من خلال دعم موثوق بالعربية والإنجليزية، ومساندة الحجوزات، والتعامل مع ضغط الاستفسارات، وتشغيل فرق دعم مرنة عن بُعد.",
      stats: [
        { value: "العربية + الإنجليزية", label: "لغتا الخدمة الأساسيتان" },
        { value: "تغطية مرنة", label: "دوام أساسي أو ساعات ممتدة أو دعم وقت الضغط" },
        { value: "نموذج B2B", label: "مهيأ للأعمال الخدمية" },
      ],
      proofTitle: "أكثر من مجرد دعم وقت الذروة",
      proofIntro: "تواصل مناسبة للشركات التي تحتاج إلى ثبات أكبر في التعامل مع العملاء ووضوح أكبر في الإجراءات واستمرارية في الخدمة عند ارتفاع الطلب.",
      proofItems: [
        "مصمم للعمليات التي تؤثر فيها الاستفسارات الفائتة على الإيراد والثقة",
        "متوافق مع إجراءاتك ومسارات التصعيد ومعايير الخدمة لديك",
        "يساعد على تخفيف الضغط الداخلي دون الإضرار بجودة التواصل",
      ],
      overviewTitle: "شريك دعم للتعامل مع أحجام التواصل المرتفعة مع العملاء",
      overviewText:
        "ندعم المؤسسات التي تحتاج إلى سرعة أكبر في الاستجابة، وثبات أعلى في خدمة العملاء، وسعة تشغيلية أكثر مرونة. من الاستفسارات والحجوزات إلى التغطية خارج الدوام ودعم فترات الضغط، تساعد فرقنا الشركات على البقاء متاحة ومنظمة ومتسقة في الخدمة.",
      serviceHighlights: [
        {
          title: "عمليات دعم السفر",
          description:
            "التعامل مع الاستفسارات والتأكيدات والتواصل المرتبط بخطط السفر والمتابعة مع العملاء لشركات السفر.",
        },
        {
          title: "مساندة حجوزات الطيران",
          description:
            "دعم الحجوزات والتعديلات والتواصل مع المسافرين وسير العمل المرتبط بالخدمة في هذا المجال.",
        },
        {
          title: "خدمة عملاء خارجية",
          description:
            "دعم وارد وصادر منظم ومتوافق مع قواعد الخدمة ونبرة التواصل ومسارات التصعيد الخاصة بك.",
        },
        {
          title: "فرق تشغيل مرنة عن بُعد",
          description:
            "سعة دعم مرنة لفترات الضغط والساعات الممتدة ومراحل النمو والتدفق العالي للاستفسارات.",
        },
      ],
      industryTitle: "القطاعات الأنسب لهذا النموذج",
      industryIntro:
        "نحقق أفضل قيمة في البيئات الخدمية التي تتطلب سرعة في الاستجابة ودقة في الحجوزات وطمأنة واضحة للعملاء.",
      industries: [
        "وكالات السفر وفرق الحجوزات",
        "عمليات الطيران وإصدار التذاكر",
        "الخدمات المرتبطة بالضيافة والسياحة",
        "الأعمال التي يتزايد لديها الطلب على دعم العملاء",
      ],
      whyTitle: "لماذا تختار الشركات تواصل",
      whyItems: [
        {
          title: "تعامل ثنائي اللغة مع العملاء",
          description:
            "الدعم بالعربية والإنجليزية يساعدك على خدمة شرائح أوسع من العملاء بوضوح أفضل.",
        },
        {
          title: "استجابة يمكن الاعتماد عليها",
          description:
            "نساعد الفرق على الحفاظ على سرعة الاستجابة خلال فترات الضغط والساعات الممتدة.",
        },
        {
          title: "تغطية تشغيلية مرنة",
          description:
            "يمكن تصميم نموذج الدعم حسب الحاجة إلى فريق مخصص أو مشترك أو دعم وقت الذروة أو تغطية خارج الدوام.",
        },
        {
          title: "تمثيل مهني للخدمة",
          description:
            "يُدار التواصل مع العملاء بثبات واهتمام وبما ينسجم مع معايير علامتك التجارية.",
        },
      ],
      ctaTitle: "هل تحتاج إلى تشغيل أكثر موثوقية لدعم العملاء؟",
      ctaText:
        "نساعد الشركات على بناء نموذج دعم يرفع سرعة الاستجابة ويحافظ على جودة الخدمة ويخفف الضغط على الفرق الداخلية خلال أوقات الذروة.",
      ctaButtonLabel: "ناقش معنا نموذج الدعم",
    },
    about: {
      eyebrow: "عن تواصل",
      title: "بُنينا لنعزز تواصل العملاء دون تعقيد إضافي داخل الشركة.",
      intro:
        "تأسست تواصل لخدمة الشركات التي تحتاج إلى سعة أكبر في التواصل مع العملاء من دون فقدان السيطرة على جودة الخدمة أو تجربة العميل أو الانضباط التشغيلي اليومي.",
      storyTitle: "من نحن",
      storyText:
        "نعمل مع شركات السفر والحجوزات والأعمال الخدمية التي لا تحتمل ضياع الاستفسارات أو ضعف التعامل مع العملاء أو تراجع الاستجابة خارج الدوام. دورنا هو توسيع فرقك الداخلية من خلال دعم خارجي منظم ومتوافق مع سير العمل الحقيقي وتوقعات العملاء.",
      missionTitle: "مهمتنا",
      missionText:
        "مساعدة الشركات على تقديم تواصل سريع وموثوق ومنظم مع العملاء من خلال دعم خارجي واضح البنية.",
      visionTitle: "رؤيتنا",
      visionText:
        "أن نكون شريكاً موثوقاً في تشغيل مراكز الاتصال الثنائية اللغة للشركات الخدمية في قطاعات السفر والحجوزات والقطاعات ذات التفاعل المباشر مع العملاء.",
      valuesHeading: "أسلوب عملنا",
      values: [
        {
          title: "تمثيل احترافي",
          description:
            "ندير تواصل العملاء بطريقة تدعم المصداقية والثبات والثقة في الأعمال التي نمثلها.",
        },
        {
          title: "انضباط تشغيلي",
          description:
            "التغطية والتصعيد والمتابعة والتقارير تُدار وفق نظام واضح وليس باجتهادات متفرقة.",
        },
        {
          title: "مواءمة مع العميل",
          description:
            "نكيّف الإجراءات ونبرة التواصل وقواعد الخدمة بما يتوافق مع طريقة عمل نشاطك فعلياً.",
        },
        {
          title: "تحسين مستمر",
          description:
            "جودة الدعم تتحسن عبر المراجعة الدائمة ووضوح الإجراءات وقوة التنسيق اليومي.",
        },
      ],
    },
    services: {
      eyebrow: "خدمات الدعم الخارجي",
      title: "خدمات مراكز اتصال خارجية مصممة حول احتياجات تشغيلية حقيقية.",
      intro:
        "خدماتنا موجهة للشركات التي تحتاج إلى استجابة أسرع، ودعم أكثر تنظيماً للعملاء، وسعة تشغيلية مرنة من دون توسيع الفريق الداخلي بشكل كبير.",
      catalogTitle: "خدمات مصممة لرفع سرعة الاستجابة وتحسين استمرارية الدعم",
      items: [
        {
          id: "travel-support",
          title: "عمليات دعم السفر",
          description:
            "دعم لوكالات السفر ومنظمي الرحلات وفرق الحجز التي تحتاج إلى تعامل موثوق مع الاستفسارات والتأكيدات والمتابعة.",
          bullets: [
            "استفسارات الحجوزات والبرامج",
            "التأكيدات والمتابعة مع العملاء",
            "التواصل المرتبط بخدمات السفر",
          ],
        },
        {
          id: "flight-booking",
          title: "مساندة حجوزات الطيران",
          description:
            "مساعدة في الحجوزات والتعديلات والتواصل مع المسافرين والتعامل مع التحديثات المرتبطة بالجداول والخدمة.",
          bullets: [
            "المساعدة في الحجز والتعديل",
            "تحديثات المسافرين والتواصل معهم",
            "استمرارية الخدمة في الفترات المزدحمة",
          ],
        },
        {
          id: "customer-care",
          title: "خدمة عملاء خارجية",
          description:
            "دعم وارد وصادر متوافق مع إجراءاتك التشغيلية وتوقعات الخدمة ومسارات التصعيد.",
          bullets: [
            "استقبال طلبات الدعم",
            "متابعة العملاء والإجراءات الصادرة",
            "تنسيق التصعيد وإعادة الاتصال",
          ],
        },
        {
          id: "multilingual",
          title: "تواصل متعدد اللغات",
          description:
            "دعم بالعربية والإنجليزية للشركات التي تخدم عملاء محليين وإقليميين ودوليين.",
          bullets: [
            "خدمة العملاء باللغة العربية",
            "التواصل باللغة الإنجليزية",
            "اتساق النصوص ونبرة الخدمة",
          ],
        },
        {
          id: "overflow-support",
          title: "دعم فترات الضغط والمواسم",
          description:
            "سعة إضافية للشركات النامية أو فترات الذروة أو الحملات أو الاختناقات التشغيلية.",
          bullets: [
            "التعامل مع زيادة الاستفسارات",
            "دعم موسمي أو مرتبط بالحملات",
            "رفع القدرة على الاستجابة",
          ],
        },
        {
          id: "extended-hours",
          title: "تغطية الساعات الممتدة وخارج الدوام",
          description:
            "نماذج تشغيل تساعد الشركات على البقاء متاحة خارج ساعات العمل الأساسية أو خلال فترات الطلب المرتفع.",
          bullets: [
            "إعداد دعم بساعات ممتدة",
            "التعامل مع تواصل العملاء خارج الدوام",
            "استمرارية الاستجابة للاستفسارات العاجلة",
          ],
        },
      ],
      deliveryApproach: "آلية التنفيذ",
      processTitle: "كيف نطلق الدعم ونديره",
      processIntro:
        "كل تعاون يبدأ بفهم نطاق الخدمة وقواعد التواصل ونموذج التغطية الأنسب لطبيعة عملك.",
      processSteps: [
        {
          step: "01",
          title: "تقييم الاحتياج",
          description:
            "نراجع نطاق الدعم وساعات التشغيل وأنواع الاستفسارات واحتياجات التصعيد ونقاط الضغط الحالية.",
        },
        {
          step: "02",
          title: "مواءمة الإجراءات",
          description:
            "نصمم النصوص وقواعد الخدمة وآليات الاستجابة والتصعيد بما يتوافق مع سير عملك.",
        },
        {
          step: "03",
          title: "تفعيل الفريق",
          description:
            "يبدأ التشغيل من خلال نموذج مخصص أو مشترك أو دعم وقت الضغط أو تغطية خارج الدوام وفق النطاق المتفق عليه.",
        },
        {
          step: "04",
          title: "المتابعة والتحسين",
          description:
            "نحافظ على اتساق الخدمة عبر التواصل المستمر والمراجعة وتحسين الإجراءات.",
        },
      ],
      supportModelsTitle: "نماذج الدعم التي يمكن ترتيبها",
      supportModels: [
        "فرق دعم مخصصة",
        "نماذج خدمة مشتركة",
        "سعة إضافية لأوقات الضغط",
        "ترتيبات تغطية خارج الدوام",
      ],
    },
    why: {
      eyebrow: "لماذا تواصل",
      title: "طريقة أكثر موثوقية لتوسيع قدرتك على دعم العملاء.",
      intro:
        "تواصل مناسبة للشركات التي تحتاج إلى أكثر من مجرد زيادة عدد الأفراد. نحن نوفر دعماً منظماً عن بُعد يرفع التغطية ويحافظ على تجربة العميل ويساعد الفرق على الاستجابة بثبات تحت الضغط.",
      items: [
        {
          title: "تعامل ثنائي اللغة مع العملاء",
          description:
            "الدعم بالعربية والإنجليزية يوسّع سهولة الوصول ويقلل الاحتكاك في التواصل مع شرائح مختلفة.",
        },
        {
          title: "تغطية تشغيلية مرنة",
          description:
            "يمكن تشكيل التغطية حسب ساعات العمل الأساسية أو الساعات الممتدة أو ضغط الطلب أو الحاجة إلى فريق أكثر تخصيصاً.",
        },
        {
          title: "فهم لسير عمل السفر والحجوزات",
          description:
            "النموذج مناسب لبيئات الحجز والتواصل المباشر التي تتطلب دقة وسرعة في التعامل.",
        },
        {
          title: "إدارة واضحة للتصعيد والإجراءات",
          description:
            "الدعم ينجح أكثر عندما تكون قواعد الاستجابة والتصعيد والمتابعة واضحة ومُدارة بشكل منظم.",
        },
        {
          title: "توسع فعّال من حيث التكلفة",
          description:
            "يمكن للشركات زيادة قدرتها على التواصل مع العملاء من دون تحمل كامل كلفة التوسع الداخلي.",
        },
        {
          title: "ثبات في تمثيل الخدمة",
          description:
            "يجب أن يشعر العميل بأن التواصل منظم ومحترم ومتسق مع سمعة العمل الذي يتعامل معه.",
        },
      ],
      proofTitle: "ماذا يعني ذلك لعملك",
      proofHeading: "نتائج عملية وليست وعوداً عامة",
      proofText:
        "يساعد نموذجنا الشركات على البقاء متاحة ومنظمة ومتسقة في الخدمة عندما ترتفع أحجام التواصل أو تمتد ساعات التشغيل.",
      proofPoints: [
        "استجابة أسرع للعملاء في الفترات المزدحمة",
        "ضغط أقل على الفرق الداخلية",
        "ثبات أكبر في التعامل بالعربية والإنجليزية",
        "سعة دعم مرنة دون توسع داخلي كامل",
      ],
      ctaLabel: "تحدث مع فريقنا",
    },
    contact: {
      eyebrow: "تواصل مع تواصل",
      title: "دعنا نبني نموذج الدعم المناسب لعملك.",
      intro:
        "سواء كنت تحتاج إلى دعم عملاء ثنائي اللغة أو تغطية وقت الضغط أو فريق خارجي مخصص، يمكننا مساعدتك في تحديد النموذج الأنسب لسير العمل ومستوى الخدمة المطلوب.",
      formTitle: "أخبرنا بما تحتاجه",
      formHeading: "ابدأ الحديث معنا من خلال نطاق الدعم وأولويات التشغيل",
      formIntro:
        "شاركنا نوع عملك ونطاق الدعم والتحديات الحالية. سيقوم فريقنا بمراجعة طلبك والتواصل معك بالخطوة الأنسب.",
      formFields: {
        name: "الاسم الكامل",
        company: "اسم الشركة",
        email: "البريد الإلكتروني للأعمال",
        phone: "رقم الهاتف",
        message: "أخبرنا عن احتياجاتك في الدعم",
        submit: "إرسال الطلب",
        success: "شكراً لك. تم استلام طلبك وسيقوم فريقنا بالتواصل معك قريباً.",
      },
      directTitle: "تحدث معنا مباشرة",
      directIntro:
        "إذا كانت متطلباتك واضحة بالفعل، يمكنك التواصل معنا عبر الوسيلة الأنسب لك.",
      directItems: [
        { label: "البريد الإلكتروني", value: "info@tawasul-cs.com" },
        { label: "الاستشارة", value: "اطلب استشارة من خلال نموذج التواصل" },
        { label: "اللغات", value: "الدعم بالعربية والإنجليزية" },
      ],
      locationTitle: "تنسيق الخدمة",
      locationText:
        "يتم تنسيق عمليات الدعم عن بُعد، ويمكننا مشاركة تفاصيل الموقع وآلية التعاقد خلال الاستشارة.",
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
