import { ReactNode, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Globe2, Languages, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  getAlternatePath,
  getLanguageFromPath,
  getPathPrefix,
  isArabic,
  normalizePath,
  siteContent,
  stripLanguagePrefix,
} from "@/lib/siteContent";
import { images } from "@/lib/assets";

type SiteLayoutProps = {
  children: ReactNode;
  pageKey: "home" | "about" | "services" | "why" | "contact";
};

const routeMap = {
  home: "/",
  about: "/about",
  services: "/services",
  why: "/why-us",
  contact: "/contact",
} as const;

const contactIcons = [Mail, MessageCircle, Languages] as const;

export function SiteLayout({ children, pageKey }: SiteLayoutProps) {
  const [location] = useLocation();
  const language = getLanguageFromPath(location);
  const content = siteContent[language];
  const rtl = isArabic(language);
  const prefix = getPathPrefix(language);
  const activeBasePath = stripLanguagePrefix(location);
  const languageSwitchHref = getAlternatePath(location);

  const pageTitles = {
    home: content.nav.home,
    about: content.nav.about,
    services: content.nav.services,
    why: content.nav.why,
    contact: content.nav.contact,
  };

  const pageTitle = pageTitles[pageKey];

  const navigation = [
    { key: "home", label: content.nav.home, href: `${prefix}/`.replace("//", "/") },
    { key: "about", label: content.nav.about, href: `${prefix}/about`.replace("//", "/") },
    { key: "services", label: content.nav.services, href: `${prefix}/services`.replace("//", "/") },
    { key: "why", label: content.nav.why, href: `${prefix}/why-us`.replace("//", "/") },
    { key: "contact", label: content.nav.contact, href: `${prefix}/contact`.replace("//", "/") },
  ] as const;

  useEffect(() => {
    document.documentElement.lang = language === "ar" ? "ar" : "en";
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    document.title = `${content.meta.siteTitle} | ${pageTitle}`;

    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", content.meta.siteDescription);
  }, [content.meta.siteDescription, content.meta.siteTitle, language, pageTitle, rtl]);

  return (
    <div
      dir={rtl ? "rtl" : "ltr"}
      className={cn("min-h-screen bg-background text-foreground", rtl ? "font-ar-body" : "font-sans")}
    >
      <a href="#main-content" className="skip-link">
        {language === "ar" ? "انتقل إلى المحتوى" : "Skip to content"}
      </a>

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(circle_at_top,_rgba(247,106,31,0.1),_transparent_34%),linear-gradient(180deg,rgba(244,244,242,0.78),rgba(244,244,242,0))]" />
        <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-[rgba(10,58,102,0.08)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[rgba(247,106,31,0.1)] blur-3xl" />
        <div className="noise-overlay" />
      </div>

      <header className="sticky top-0 z-50 border-b border-[rgba(209,213,216,0.9)] bg-[rgba(244,244,242,0.9)] backdrop-blur-xl">
        <div className="container py-4">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex items-start justify-between gap-4 xl:flex-1">
              <Link href={prefix || "/"} className="group min-w-0">
                <div className="flex items-center gap-4">
                  <img
                    src={images.logo}
                    alt="Tawasul Contact Solutions"
                    className="h-14 w-auto rounded-2xl border border-[rgba(209,213,216,0.9)] bg-white/92 p-2 shadow-[0_18px_40px_rgba(10,58,102,0.08)] transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="min-w-0 space-y-1">
                    <p
                      className={cn(
                        "truncate text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary",
                        rtl && "tracking-[0.08em]"
                      )}
                    >
                      {content.brand.arabic} {" / "} {content.brand.short}
                    </p>
                    <p
                      className={cn(
                        "truncate text-[1.05rem] text-[#0A3A66]",
                        rtl ? "font-ar-heading text-[1.1rem] font-bold" : "font-bold tracking-[-0.01em]"
                      )}
                    >
                      {content.brand.full}
                    </p>
                    <p className="hidden text-sm text-[#0A3A66] lg:block">{content.brand.tagline}</p>
                  </div>
                </div>
              </Link>

              <div className="hidden items-center gap-3 lg:flex xl:hidden">
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-full border-[rgba(10,58,102,0.12)] bg-white px-4 font-semibold text-[#0A3A66] shadow-[0_10px_24px_rgba(10,58,102,0.06)] hover:bg-white hover:text-[#0A3A66]"
                >
                  <Link href={languageSwitchHref}>
                    <Globe2 className="size-4" />
                    {content.shared.switchLanguage}
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-5">
              <nav
                aria-label={language === "ar" ? "التنقل الرئيسي" : "Primary navigation"}
                className="flex flex-wrap items-center justify-center gap-2 rounded-[1.6rem] border border-[rgba(209,213,216,0.9)] bg-white/84 p-2 text-sm text-[rgba(10,58,102,0.75)] shadow-[0_10px_30px_rgba(10,58,102,0.06)] xl:justify-start"
              >
                {navigation.map((item) => {
                  const isActive = normalizePath(activeBasePath) === normalizePath(routeMap[item.key]);
                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "whitespace-nowrap rounded-full px-4 py-2.5 transition duration-200 hover:bg-[rgba(247,106,31,0.08)] hover:text-[#0A3A66]",
                        isActive &&
                          "bg-primary font-semibold text-[#0A3A66] shadow-[0_12px_28px_rgba(247,106,31,0.24)] hover:bg-primary hover:text-[#0A3A66]"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:hidden xl:flex">
                <Button
                  asChild
                  variant="outline"
                  className="h-11 w-full rounded-full border-[rgba(10,58,102,0.12)] bg-white px-4 font-semibold text-[#0A3A66] shadow-[0_10px_24px_rgba(10,58,102,0.06)] hover:bg-white hover:text-[#0A3A66] sm:w-auto"
                >
                  <Link href={languageSwitchHref}>
                    <Globe2 className="size-4" />
                    {content.shared.switchLanguage}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="main-content">{children}</main>

      <footer className="border-t border-[rgba(209,213,216,0.14)] bg-[linear-gradient(180deg,rgba(10,58,102,0.98),rgba(10,58,102,1))]">
        <div className="container grid gap-10 py-14 md:grid-cols-2 xl:grid-cols-[1.15fr_0.9fr_0.9fr_1fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <img
                src={images.logo}
                alt="Tawasul logo"
                className="h-16 w-auto rounded-2xl border border-[rgba(209,213,216,0.22)] bg-white/92 p-2"
              />
              <div className="space-y-1">
                <p className={cn("section-kicker", rtl && "tracking-[0.08em]")}>
                  {content.brand.arabic}
                </p>
                <p className={cn("text-xl font-semibold text-white", rtl ? "font-ar-heading" : "font-display")}>{content.brand.short}</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/72">{content.shared.footerStatement}</p>
            <div className="hero-badge border-white/12 bg-white/[0.12] text-white/88">
              <Languages className="size-4 text-primary" />
              {content.shared.coverageLabel}
            </div>
          </div>

          <div className="space-y-4">
            <p className="section-kicker">{content.nav.services}</p>
            <div className="space-y-3 text-sm">
              {content.shared.footerServiceLabels.map((label) => (
                <p key={label} className="footer-link">
                  {label}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="section-kicker">{content.shared.sectionLabels.overview}</p>
            <div className="space-y-3 text-sm">
              {content.shared.footerIndustryLabels.map((label) => (
                <p key={label} className="footer-link">
                  {label}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="section-kicker">{content.shared.sectionLabels.contact}</p>
            <p className="text-sm leading-relaxed text-white/72">{content.shared.contactPrompt}</p>
            <div className="space-y-3">
              {content.contact.directItems.map((item, index) => {
                const Icon = contactIcons[index] ?? Mail;
                return (
                  <div key={item.label} className="flex items-start gap-3 text-sm text-white/75">
                    <Icon className="mt-1 size-4 text-primary" />
                    <div>
                      <p className="text-white/72">{item.label}</p>
                      <p className="text-white">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}
