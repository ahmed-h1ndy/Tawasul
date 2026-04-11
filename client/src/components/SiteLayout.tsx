/*
Design reminder for this file: Aviation-informed luxury minimalism.
Prioritize asymmetrical composition, premium restraint, navy-and-gold authority, and true RTL adaptation.
*/

import { ReactNode, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Globe2, Mail, PhoneCall } from "lucide-react";
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
  }, [content.meta.siteTitle, language, pageTitle, rtl]);

  return (
    <div
      dir={rtl ? "rtl" : "ltr"}
      className={cn(
        "min-h-screen bg-background text-foreground",
        rtl ? "font-ar-body" : "font-sans"
      )}
    >
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top,_rgba(217,175,84,0.22),_transparent_42%),linear-gradient(180deg,rgba(8,16,33,0.85),rgba(8,16,33,0.32))]" />
        <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-[rgba(24,78,168,0.18)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[rgba(217,175,84,0.14)] blur-3xl" />
        <div className="noise-overlay" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(6,12,24,0.82)] backdrop-blur-xl">
        <div className="container py-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <Link href={prefix || "/"} className="group min-w-0">
                <div className="flex items-center gap-4">
                  <img
                    src={images.logo}
                    alt="Tawasul Contact Solutions"
                    className="h-14 w-auto rounded-xl border border-white/10 bg-white/5 p-2 shadow-[0_18px_40px_rgba(0,0,0,0.22)] transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="min-w-0">
                    <p className={cn("truncate text-xs uppercase tracking-[0.32em] text-primary/90", rtl && "tracking-[0.18em]")}>
                      {content.brand.arabic} · {content.brand.short}
                    </p>
                    <p className={cn("truncate text-base text-white/90", rtl ? "font-ar-heading text-lg" : "font-semibold")}>
                      {content.brand.full}
                    </p>
                  </div>
                </div>
              </Link>

              <div className="flex items-center gap-2 sm:gap-3">
                <Link href={languageSwitchHref}>
                  <Button
                    variant="outline"
                    className="border-primary/40 bg-white/5 text-white hover:bg-primary/10 hover:text-white"
                  >
                    <Globe2 className="size-4" />
                    {content.shared.switchLanguage}
                  </Button>
                </Link>
                <Link href={`${prefix}/contact`.replace("//", "/")}>
                  <Button className="bg-primary text-[color:var(--primary-foreground)] shadow-[0_18px_40px_rgba(217,175,84,0.24)] transition-transform duration-300 hover:scale-[1.02] hover:bg-primary/90">
                    {content.shared.primaryCta}
                  </Button>
                </Link>
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              {navigation.map((item) => {
                const isActive = normalizePath(activeBasePath) === normalizePath(routeMap[item.key]);
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={cn(
                      "rounded-full px-4 py-2 transition duration-300 hover:bg-white/8 hover:text-white",
                      isActive && "bg-primary text-[color:var(--primary-foreground)] shadow-[0_10px_24px_rgba(217,175,84,0.2)]"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/10 bg-[rgba(5,10,20,0.88)]">
        <div className="container grid gap-10 py-12 lg:grid-cols-[1.35fr_0.9fr_0.9fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663539899263/ksMQ8n93poZFxutxDkpq92/tawasul_logo_concept_1_blue_gold_5831c655.png"
                alt="Tawasul logo"
                className="h-16 w-auto rounded-2xl border border-white/10 bg-white/5 p-2"
              />
              <div>
                <p className={cn("text-xs uppercase tracking-[0.32em] text-primary/85", rtl && "tracking-[0.16em]")}>
                  {content.brand.arabic}
                </p>
                <p className={cn("text-xl text-white", rtl ? "font-ar-heading" : "font-display")}>
                  {content.brand.short}
                </p>
              </div>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/68">
              {content.shared.footerStatement}
            </p>
          </div>

          <div className="space-y-4">
            <p className={cn("text-sm uppercase tracking-[0.28em] text-primary/80", rtl && "tracking-[0.12em]")}>
              {content.nav.services}
            </p>
            <div className="space-y-3 text-sm text-white/68">
              {content.shared.footerServiceLabels.map((label) => (
                <p key={label}>{label}</p>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className={cn("text-sm uppercase tracking-[0.28em] text-primary/80", rtl && "tracking-[0.12em]")}>
              {content.shared.sectionLabels.contact}
            </p>
            <div className="space-y-3 text-sm text-white/68">
              <p className="flex items-center gap-2"><PhoneCall className="size-4 text-primary" /> +20 XX XXX XXXX</p>
              <p className="flex items-center gap-2"><Mail className="size-4 text-primary" /> info@tawasul-cs.com</p>
              <Link href={`${prefix}/contact`.replace("//", "/")} className="inline-flex items-center gap-2 text-primary transition hover:text-primary/80">
                {content.shared.contactPrompt}
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
