/*
Design reminder for this file: Aviation-informed luxury minimalism.
The 404 page should feel consistent with the rest of the site — dark navy, gold accents, bilingual support.
*/

import { Button } from "@/components/ui/button";
import { getLanguageFromPath, getPathPrefix, isArabic, siteContent } from "@/lib/siteContent";
import { cn } from "@/lib/utils";
import { ArrowRight, SearchX } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function NotFound() {
  const [location] = useLocation();
  const language = getLanguageFromPath(location);
  const content = siteContent[language];
  const rtl = isArabic(language);
  const prefix = getPathPrefix(language);

  return (
    <div
      dir={rtl ? "rtl" : "ltr"}
      className={cn(
        "flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center",
        rtl ? "font-ar-body" : "font-sans"
      )}
    >
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top,_rgba(217,175,84,0.16),_transparent_42%)]" />
        <div className="noise-overlay" />
      </div>

      <div className="inline-flex size-20 items-center justify-center rounded-3xl border border-primary/20 bg-primary/10 text-primary">
        <SearchX className="size-10" />
      </div>

      <h1 className={cn("mt-8 text-8xl text-white", rtl ? "font-ar-heading" : "font-display")}>
        404
      </h1>

      <h2 className={cn("mt-4 text-2xl text-white/90", rtl ? "font-ar-heading" : "font-semibold")}>
        {language === "ar" ? "الصفحة غير موجودة" : "Page Not Found"}
      </h2>

      <p className="mt-3 max-w-md text-base leading-7 text-white/60">
        {language === "ar"
          ? "عذراً، الصفحة التي تبحث عنها غير موجودة. ربما تم نقلها أو حذفها."
          : "Sorry, the page you are looking for doesn't exist. It may have been moved or deleted."}
      </p>

      <Link href={prefix || "/"}>
        <Button className="mt-8 h-12 rounded-full bg-primary px-6 text-[color:var(--primary-foreground)] shadow-[0_18px_45px_rgba(217,175,84,0.26)] hover:bg-primary/92">
          {content.nav.home}
          <ArrowRight className={cn("ml-2 size-4", rtl && "ml-0 mr-2 rotate-180")} />
        </Button>
      </Link>
    </div>
  );
}
